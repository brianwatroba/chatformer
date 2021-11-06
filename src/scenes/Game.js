import Phaser from '../lib/phaser.js';
import client from '../chat/twitchConfig.js';

export default class Game extends Phaser.Scene {
	constructor() {
		super('Game');
	}

	client;
	player;
	platforms;
	enemies;
	cursors;
	gameOver = false;
	scoreText;
	minPlatformIntervalSecs = 1; // at minimum one platform every x seconds.
	lastPlatformPlacedSec = 0;
	score = 0;
	stunCounter = 0;
	wordPlatforms;
	leftWall;
	rightWall;
	jumpCount = 0;
	birdTimer = 0;
	randomMessages = [
		'bacon',
		'omegalul',
		'how is this working',
		'please invest in my startup',
	];
	baseXVelocity = 0;

	messageTimer = 0;
	messages = [];

	init(data) {
		this.client = data.client;
	}

	preload() {
		this.load.image('sky', 'assets/sky.png');
		this.load.image('platform', 'assets/platform.png');
		this.load.image('star', 'assets/star.png');
		this.load.image('bomb', 'assets/bomb.png');
		this.load.image('wall', 'assets/1x100.png');
		this.load.image('ground', 'assets/ground.png');
		this.load.image('dirt', 'assets/dirt.png');
		this.load.image('cloud1', 'assets/cloud1.png');
		this.load.image('cloud2', 'assets/cloud2.png');
		this.load.image('cloud3', 'assets/cloud3.png');

		this.load.spritesheet(
			'dude_idle',
			'assets/main_character/Idle (32x32).png',
			{
				frameWidth: 32,
				frameHeight: 32,
			}
		);
		this.load.spritesheet('dude_run', 'assets/main_character/Run (32x32).png', {
			frameWidth: 32,
			frameHeight: 32,
		});
		this.load.spritesheet(
			'dude_jump',
			'assets/main_character/Jump (32x32).png',
			{
				frameWidth: 32,
				frameHeight: 32,
			}
		);
		this.load.spritesheet('dude_hit', 'assets/main_character/Hit (32x32).png', {
			frameWidth: 32,
			frameHeight: 32,
		});
		this.load.spritesheet('dude_double_jump', 'assets/main_character/Double Jump (32x32).png', {
			frameWidth: 32,
			frameHeight: 32,
		});
		this.load.spritesheet('heliplatform', 'assets/heliplatform.png', {
			frameWidth: 32,
			frameHeight: 10,
		})

		this.load.spritesheet('bird_fly', 'assets/Bird.png', {
			frameWidth: 32,
			frameHeight: 32,
		});

		this.load.spritesheet('coin', 'assets/Coin_Sparkle.png', {
			frameWidth: 32,
			frameHeight: 32,
		});
		this.load.spritesheet('collected', 'assets/main_character/Collected.png', {
			frameWidth: 32,
			frameHeight: 32,
		});

		this.load.spritesheet('chest', 'assets/chest_gold.png', {
			frameWidth: 21,
			frameHeight: 18,
		});

		client.connect();

		this.client.on('message', (target, context, msg, self) => {
			this.messages.push({
				message: msg.trim(),
				displayName: context['display-name'],
			});
		});
		// this.client.on('connected', this.onConnectedHandler);
	}

	land(a, b) {
		this.jumpCount = 0;
		//BOUNCE
		if (b.body.width < 200 && !b.isHeliPad) {
			this.player.setVelocityY(-1 * (1200 - 600 * (b.body.width / 200)));
		}

		if (this.player.y * -1 > this.score) {
			this.score = this.player.y * -1;
		}
	}
	die() {
		console.log('stun');
		if (this.player.stun == false) {
			this.player.stun = true;
			this.player.anims.play('hit', true);
		}
	}

	spaceDown() {
		if (this.player.stun) {
			return;
		}

		if (this.player.body.touching.down) {
			this.player.setVelocityY(-630);
			this.player.anims.play('jump', true);
			this.jumpCount = 0;
		} else {
			if (this.jumpCount < 2) {
				this.player.setVelocityY(-630);
				//this.player.anims.play('double_jump', true);
			}
		}
	}

	spaceUp() {
		if (this.jumpCount == 0) {
			this.jumpCount = 1;
		} else if (this.jumpCount == 1) {
			this.jumpCount = 2;
		}
	}

	create() {
		//  A simple background for our game

		this.add.image(100, 0, 'sky').setScale(30)

		var clouds = [];
		for (var i = 0; i < 100; i++) {
			clouds.push(this.add.image(-600 + Math.random() * 400, -700 * i, 'cloud' + Math.floor(1 + Math.random() * 3)).setScale(.5));

		}
		var tween = this.tweens.add({
			targets: clouds,
			x: 700,
			duration: 50000,
			ease: 'Linear',
			loop: -1
		});

		//  The platforms group contains the ground and the 2 ledges we can jump on
		this.platforms = this.physics.add.staticGroup();
		this.leftWall = this.physics.add.staticGroup();
		this.leftWall.allowGravity = false;
		this.rightWall = this.physics.add.staticGroup();
		this.rightWall.allowGravity = false;
		this.enemies = this.physics.add.group();
		this.boxes = this.physics.add.group();
		this.items = this.physics.add.group();
		this.wordPlatforms = this.physics.add.group();
		this.passThroughObjects = this.physics.add.group();

		//  Here we create the ground.
		//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
		//this.platforms.create(0, 0, 'ground').setScale(3).refreshBody();

		for (var i = 0; i < 15; i++) {
			this.platforms.create(-300 + i * 44 * 1.5, 0, 'ground').setScale(1.5).refreshBody();
			this.platforms.create(-300 + i * 44 * 1.5, 32, 'dirt').setScale(1.5).refreshBody();
		}
		for (var i = 0; i < 15; i++) {
			for (var j = 0; j < 5; j++) {
				this.platforms.create(-300 + i * 44 * 1.5, 32 + j * 19 * 1.5, 'dirt').setScale(1.5).refreshBody();
			}
		}


		// The player and its settings
		this.player = this.physics.add.sprite(100, -100, 'dude_idle');
		this.player.setScale(1.5);
		this.player.stun = false;

		//  Player physics properties. Give the little guy a slight bounce.
		this.player.setBounce(0.1);
		this.player.setCollideWorldBounds(false);

		//  Our player animations, turning, walking left and walking right.

		this.anims.create({
			key: 'idle',
			frames: this.anims.generateFrameNumbers('dude_idle', { start: 0, end: 10 }),
			frameRate: 20,
		});

		this.anims.create({
			key: 'jump',
			frames: this.anims.generateFrameNumbers('dude_jump', {
				start: 0,
				end: 1,
			}),
			frameRate: 20,
		});

		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('dude_run', {
				start: 0,
				end: 11,
			}),
			frameRate: 20,
			repeat: -1,
		});

		this.anims.create({
			key: 'hit',
			frames: this.anims.generateFrameNumbers('dude_hit', { start: 0, end: 6 }),
			frameRate: 20,
			repeat: -1,
		});
		this.anims.create({
			key: 'double_jump',
			frames: this.anims.generateFrameNumbers('dude_double_jump', {
				start: 0,
				end: 5,
			}),
			frameRate: 20,
			repeat: 2,
		});
		this.anims.create({
			key: 'heliplatform_spin',
			frames: this.anims.generateFrameNumbers('heliplatform', { start: 0, end: 3 }),
			frameRate: 20,
			repeat: -1,
		});

		this.anims.create({
			key: 'bird_fly',
			frames: this.anims.generateFrameNumbers('bird_fly', { start: 0, end: 8 }),
			frameRate: 20,
			repeat: -1,
		});

		this.anims.create({
			key: 'coin_sparkle',
			frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 5 }),
			frameRate: 20,
			repeat: -1,
		});

		this.anims.create({
			key: 'collect',
			frames: this.anims.generateFrameNumbers('collected', { start: 0, end: 5 }),
			frameRate: 20,
			repeat: -1,
		});

		var bird = this.enemies.create(400, -200, 'bird_fly').setScale(1).refreshBody();
		bird.setImmovable();
		bird.body.setAllowGravity(false);
		bird.setVelocityX(-30);
		bird.play('bird_fly', true);

		var coin = this.enemies.create(400, -400, 'coin').setScale(1.2);
		coin.setImmovable();
		coin.body.setAllowGravity(false)
		coin.play('coin_sparkle', true);

		this.anims.create({
			key: 'chest_open',
			frames: this.anims.generateFrameNumbers('chest', { start: 0, end: 1 }),
			frameRate: 20,
			repeat: 0,
		});

		//  Input Events
		this.cursors = this.input.keyboard.createCursorKeys();

		//  The score
		this.scoreText = this.add.text(16, 16, 'score: 0', {
			fontSize: '32px',
			fill: '#000',
		});
		this.scoreText.setScrollFactor(0);

		//  Collide the player and the stars with the platforms
		this.physics.add.collider(this.player, this.platforms);
		this.physics.add.collider(this.player, this.leftWall, () => {
			this.player.x = -275;
		});
		this.physics.add.collider(this.player, this.rightWall, () => {
			this.player.x = 475;
		});
		this.physics.add.collider(this.player, this.enemies, this.die.bind(this));
		this.physics.add.collider(
			this.player,
			this.wordPlatforms,
			this.land.bind(this)
		);
		this.physics.add.overlap(
			this.player,
			this.boxes,
			this.getBox
		)
		this.physics.add.collider(this.items, this.wordPlatforms);
		this.physics.add.collider(this.items, this.rightWall);
		this.physics.add.collider(this.items, this.leftWall);
		this.physics.add.collider(this.items, this.platforms);
		this.physics.add.overlap(
			this.player,
			this.items,
			this.getItem
		)

		this.cameras.main.startFollow(this.player, true, 0, 1, 0, 100);
		this.cameras.main.setZoom(1);

		var keyObj = this.input.keyboard.addKey('up'); // Get key object
		keyObj.on('down', this.spaceDown.bind(this));
		keyObj.on('up', this.spaceUp.bind(this));
	}

	placeBasicPlatform() {
		if (Math.random() > 0.5) {
			var xPos = this.player.x + 500
			var move_speed = -50 - 400 * Math.random();
		}
		else {
			var xPos = this.player.x - 500;
			var move_speed = 50 + 400 * Math.random();
		}
		var yPos = this.player.y + 200 - 800 * Math.random();

		var platforms = [];
		var num_platforms = Math.round(8 * Math.random()) + 1;
		for (let i = 0; i < num_platforms; i++) {
			var platform = this.physics.add.sprite(xPos + i * 32, yPos, 'heliplatform').play("heliplatform_spin", true);
			platforms.push(platform);
			this.wordPlatforms.add(platform);
			platform.body.setAllowGravity(false);
			platform.body.setImmovable(true);
			platform.body.setFriction(1);
			platform.body.setVelocityX(move_speed);
			platform.body.checkCollision.down = false;
			platform.isHeliPad = true;
		}
	}

	update(time, delta) {
		if (this.gameOver) {
			return;
		}

		if (this.player.stun == false) {
			// TURN LEFT
			if (this.cursors.left.isDown) {
				this.player.setVelocityX(-270);
				this.player.setFlipX(true);

				if (this.player.body.touching.down) {
					this.player.anims.play('right', true);
				}

				// TURN RIGHT
			} else if (this.cursors.right.isDown) {
				this.player.setVelocityX(270);
				this.player.setFlipX(false);

				if (this.player.body.touching.down) {
					this.player.anims.play('right', true);
				}
			} else {
				/// IDLE
				this.player.setVelocityX(0);

				if (this.player.body.touching.down) {
					this.player.anims.play('idle', true);
				}
			}
		} else {
			this.stunCounter++;
			if (this.stunCounter > 100) {
				this.stunCounter = 0;
				this.player.stun = false;
			}
		}

		this.leftWall.clear(true, true);
		this.rightWall.clear(true, true);
		this.leftWall
			.create(-300, this.player.y, 'wall')
			.setScale(10)
			.refreshBody();
		this.rightWall
			.create(500, this.player.y, 'wall')
			.setScale(10)
			.refreshBody();

		//ADD MESSAGE

		if (this.messages.length > 0) {
			this.ingestMessage(this, this.messages.shift());
			this.lastPlatformPlacedSec = time;
		} else if (
			time - this.lastPlatformPlacedSec >=
			this.minPlatformIntervalSecs * 1000.0
		) {
			this.lastPlatformPlacedSec = time;
			this.placeBasicPlatform.bind(this)();
		}
		this.scoreText.setText('Height: ' + Math.round((this.player.y * -1 - 50) / 10) + "m");

		if (this.birdTimer++ % 1000 == 0) {
			this.spawnBird()
		}
	}

	spawnBird() {
		var bird = this.enemies.create(400, this.player.y - 500, 'bird_fly').setScale(1).refreshBody();
		bird.setImmovable();
		bird.body.setAllowGravity(false);
		bird.setVelocityX(-30);
		bird.play('bird_fly', true);
	}

	ingestMessage(phaser, message) {
		if (Math.random() > 0.5) {
			//var xPos = this.player.x + 500;
			var move_speed = -50 - 200 * Math.random();
		} else {
			//var xPos = this.player.x - 500;
			var move_speed = 50 + 200 * Math.random();
		}

		var yPos = this.player.y + 200 - 800 * Math.random();

		var test_word = phaser.add
			.text(0, yPos, message.message, {
				fontSize: '26px',
				fill: '#FFFFFF',
			})
			.setOrigin(0);

		this.wordPlatforms.add(test_word);
		if (test_word.body.width < 200) {
			test_word.setColor('#0000FF');
		}

		test_word.setX(move_speed > 0 ? (-300 - test_word.body.width) : 500)

		test_word.body.setAllowGravity(false);
		test_word.body.setImmovable(true);
		test_word.body.setVelocityX(move_speed);
		test_word.body.setFriction(1);
		test_word.body.checkCollision.down = false;

		var displayName = phaser.add
			.text(test_word.x, test_word.y + 5 + test_word.height, message.displayName, {
				fontSize: '14px',
				fill: '#000000'
			}).setOrigin(0)

		// this.wordPlatforms.add(displayName);
		this.passThroughObjects.add(displayName);
		displayName.body.setAllowGravity(false);
		displayName.body.setImmovable(true);
		displayName.body.setVelocityX(move_speed);

		// Maybe spawn chest on top of the text.
		this.maybeSpawnChest(test_word)
	}

	/** Random chance to initialize loot on top of the `word`. */
	maybeSpawnChest(word) {
		if (Math.random() >= .1) {
			return;
		}
		var topOfWordY = word.y - word.displayHeight / 2
		var middleOfWordX = word.x + word.displayWidth / 2
		var chest = this.boxes.create(middleOfWordX, topOfWordY, 'chest', /*frame=*/0)
		chest.setScale(1.8)
		chest.on('animationcomplete', () => {
			this.createCoins(chest)
		});
		chest.body.setVelocityX(word.body.velocity.x);
		chest.body.setAllowGravity(false);
		chest.body.setImmovable(true);
	}

	getBox(player, chest) {
		chest.body.checkCollision.none = true;
		chest.play('chest_open', true);
	}

	createCoins(chest) {
		// number between 5 to 10
		var numCoins = Math.floor(Math.random() * 5) + 5;
		var xSpread = 100.0
		var yBase = 1500
		var yBuffer = 100.0
		for (var i = 0; i < numCoins; i++) {
			var velocityX = (Math.random() * 100) + 50
			var velocityX = Phaser.Math.FloatBetween(-xSpread, xSpread)
			var velocityY = -1 * Phaser.Math.FloatBetween(yBase - yBuffer, yBase + yBuffer)
			var item = this.items.create(chest.x, chest.y, 'star')
			item.setBounce(0.5)
			item.setVelocityX(velocityX)
			item.setVelocityY(velocityY)
			item.body.checkCollision.none = true
			setTimeout(
				function (item) {
					return function () {
						item.body.checkCollision.none = false
					}
				}(item),
				200)
		}
	}

	getItem(player, item) {
		console.log('got item')
		item.disableBody(true, true)
	}

	// onConnectedHandler(addr, port) {
	// 	console.log(`* Connected to ${addr}:${port}`);
	// }
}
