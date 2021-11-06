import Phaser from '../lib/phaser.js';
import client from '../chat/twitchConfig.js';

export default class Game extends Phaser.Scene {
	constructor() {
		super('Game');
	}

	player;
	platforms;
	enemies;
	cursors;
	gameOver = false;
	scoreText;
	minPlatformIntervalSecs = 2; // at minimum one platform every x seconds.
	lastPlatformPlacedSec = 0;
	score = 0;
	stunCounter = 0;
	wordPlatforms;
	jumpCount = 0;
	randomMessages = [
		'bacon',
		'omegalul',
		'how is this working',
		'please invest in my startup',
	];
	baseXVelocity = 0;

	messageTimer = 0;
	messages = [];
	// client;

	// init(data) {
	// 	console.log(data.streamer);
	// 	const opts = {
	// 		identity: {
	// 			username: 'brothersgettingbetter',
	// 			password: 'oauth:rgazhj4lf41hjotkyramciepyss8fk',
	// 		},
	// 		channels: [data.streamer],
	// 	};

	// 	this.client = new tmi.client(opts);
	// 	this.client.connect();
	// }

	preload() {
		this.load.image('sky', 'assets/sky.png');
		this.load.image('ground', 'assets/platform.png');
		this.load.image('platform', 'assets/platform.png');
		this.load.image('star', 'assets/star.png');
		this.load.image('bomb', 'assets/bomb.png');
		this.load.image('pewdiepie', 'assets/pewdiepie.png');

		this.load.spritesheet('dude_idle', 'assets/main_character/Idle (32x32).png', {
			frameWidth: 32,
			frameHeight: 32,
		});
		this.load.spritesheet('dude_run', 'assets/main_character/Run (32x32).png', {
			frameWidth: 32,
			frameHeight: 32,
		});
		this.load.spritesheet('dude_jump', 'assets/main_character/Jump (32x32).png', {
			frameWidth: 32,
			frameHeight: 32,
		});
		this.load.spritesheet('dude_hit', 'assets/main_character/Hit (32x32).png', {
			frameWidth: 32,
			frameHeight: 32,
		});
		this.load.spritesheet('dude_double_jump', 'assets/main_character/Double Jump (32x32).png', {
			frameWidth: 32,
			frameHeight: 32,
		});


		client.connect();

		client.on('message', (target, context, msg, self) => {
			this.messages.push({ message: msg.trim(), displayName: context['display-name'] });
		});
		client.on('connected', this.onConnectedHandler);
	}

	land(a, b) {
		//BOUNCE
		if (b.body.width < 200) {
			this.player.setVelocityY(-1 * (1200 - 600 * (b.body.width / 200)));
		}

		if (this.player.y * -1 > this.score) {
			this.score = this.player.y * -1;
			this.scoreText.setText('Score: ' + Math.round(this.score));
		}
	}

	die() {
		console.log("stun");
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
			this.player.setVelocityY(-430);
			this.player.anims.play('jump', true);
			this.jumpCount = 0;
		}
		else {
			if (this.jumpCount < 2) {
				this.player.setVelocityY(-430);
				//this.player.anims.play('double_jump', true);
			}
		}
	}

	spaceUp() {
		if (this.jumpCount == 0) {
			this.jumpCount = 1;
		}
		else if (this.jumpCount == 1) {
			this.jumpCount = 2;
		}
	}

	create() {
		//  A simple background for our game
		for (var i = 0; i < 100; i++) {
			this.add.image(100, 600 - 300 * i, 'sky');
		}

		//  The platforms group contains the ground and the 2 ledges we can jump on
		this.platforms = this.physics.add.staticGroup();
		this.enemies = this.physics.add.group();

		this.wordPlatforms = this.physics.add.group();
		this.passThroughObjects = this.physics.add.group();

		//  Here we create the ground.
		//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
		this.platforms.create(0, 0, 'ground').setScale(3).refreshBody();

		var pewdiepie = this.enemies.create(200, -400, 'pewdiepie').setScale(.25).refreshBody();
		this.tweens.add({
			targets: [pewdiepie, pewdiepie.body],
			x: 50,
			duration: 1000,
			ease: 'Sine.easeInOut',
			repeat: -1,
			yoyo: true
		});
		pewdiepie.setImmovable();
		pewdiepie.body.setAllowGravity(false);
		pewdiepie.setFriction(1, 1)

		// The player and its settings
		this.player = this.physics.add.sprite(100, -450, 'dude_idle');
		this.player.setScale(1);
		this.player.stun = false;

		//  Player physics properties. Give the little guy a slight bounce.
		this.player.setBounce(0.1);
		this.player.setCollideWorldBounds(false);

		//this.player.body.checkCollision.up = false;
		//this.player.body.checkCollision.left = false;
		//this.player.body.checkCollision.right = false;

		//  Our player animations, turning, walking left and walking right.

		this.anims.create({
			key: 'idle',
			frames: this.anims.generateFrameNumbers('dude_idle', { start: 0, end: 11 }),
			frameRate: 20,
		});

		this.anims.create({
			key: 'jump',
			frames: this.anims.generateFrameNumbers('dude_jump', { start: 0, end: 1 }),
			frameRate: 20,
		});

		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('dude_run', { start: 0, end: 11 }),
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
			frames: this.anims.generateFrameNumbers('dude_double_jump', { start: 0, end: 5 }),
			frameRate: 20,
			repeat: 2,
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
		this.physics.add.collider(this.player, this.enemies, this.die.bind(this));
		this.physics.add.collider(
			this.player,
			this.wordPlatforms,
			this.land.bind(this)
		);
		this.cameras.main.startFollow(this.player, true, 0, 1, 0, 100);
		this.cameras.main.setZoom(1);


		var keyObj = this.input.keyboard.addKey('up');  // Get key object
		keyObj.on('down', this.spaceDown.bind(this));
		keyObj.on('up', this.spaceUp.bind(this));
	}

	placeBasicPlatform() {
		if (Math.random() > 0.5) {
			var xPos = this.player.x + 500;
			var move_speed = -50 - 400 * Math.random();
		}
		else {
			var xPos = this.player.x - 500
			var move_speed = 50 + 400 * Math.random();
		}
		var yPos = this.player.y + 200 - 800 * Math.random();

		var platform = this.physics.add.sprite(xPos, yPos, 'platform');
		this.wordPlatforms.add(platform);
		platform.body.setAllowGravity(false);
		platform.body.setImmovable(true);
		platform.body.setFriction(1);
		platform.body.setVelocityX(move_speed);
		platform.body.checkCollision.down = false;
	}

	update(time, delta) {
		if (this.gameOver) {
			return;
		}

		if (this.player.stun == false) {
			// TURN LEFT
			if (this.cursors.left.isDown) {
				this.player.setVelocityX(-300);
				this.player.setFlipX(true);

				if (this.player.body.touching.down) {

					this.player.anims.play('right', true);
				}

				// TURN RIGHT
			} else if (this.cursors.right.isDown) {
				this.player.setVelocityX(300);
				this.player.setFlipX(false);

				if (this.player.body.touching.down) {
					this.player.anims.play('right', true);
				}

			} else { /// IDLE
				this.player.setVelocityX(0);

				if (this.player.body.touching.down) {
					this.player.anims.play('idle', true);
				}

			}
		}
		else {

			this.stunCounter++;
			if (this.stunCounter > 100) {
				this.stunCounter = 0;
				this.player.stun = false;
			}
		}


		//ADD MESSAGE

		if (this.messages.length > 0) {
			console.log(this.messages.length);
			this.ingestMessage(this, this.messages.shift());
			this.lastPlatformPlacedSec = time;
		} else if (time - this.lastPlatformPlacedSec >= (this.minPlatformIntervalSecs * 1000.0)) {
			console.log("place platform minimum. Last one placed: " + (time - this.lastPlatformPlacedSec));
			this.lastPlatformPlacedSec = time;
			this.placeBasicPlatform.bind(this)();
		}
	}

	ingestMessage(phaser, message) {
		if (Math.random() > 0.5) {
			var xPos = this.player.x + 500;
			var move_speed = -50 - 400 * Math.random();
		} else {
			var xPos = this.player.x - 500;
			var move_speed = 50 + 400 * Math.random();
		}

		var yPos = this.player.y + 200 - 800 * Math.random();

		var test_word = phaser.add
			.text(xPos, yPos, message.message, {
				fontSize: '22px',
				fill: Math.random() < .05 ? '#FF0000' : '#FFFFFF',
			})
			.setOrigin(0.5);

		var displayX = test_word.x - test_word.displayWidth / 2;
		var displayY = (test_word.y + test_word.displayHeight / 2) + 5;
		var displayName = phaser.add
			.text(displayX, displayY, message.displayName, {
				fontSize: '14px',
				fill: '#000000'
			})

		this.wordPlatforms.add(test_word);
		if (test_word.body.width < 200) {
			test_word.setColor("#0000FF")
		}
		test_word.body.setAllowGravity(false);
		test_word.body.setImmovable(true);
		test_word.body.setVelocityX(move_speed);
		test_word.body.setFriction(1);
		test_word.body.checkCollision.down = false;

		// this.wordPlatforms.add(displayName);
		this.passThroughObjects.add(displayName);
		displayName.body.setAllowGravity(false);
		displayName.body.setImmovable(true);
		displayName.body.setVelocityX(move_speed);
	}

	onConnectedHandler(addr, port) {
		console.log(`* Connected to ${addr}:${port}`);
	}
}
