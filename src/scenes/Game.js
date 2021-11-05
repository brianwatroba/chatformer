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
	score = 0;
	wordPlatforms;
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
		this.load.image('star', 'assets/star.png');
		this.load.image('bomb', 'assets/bomb.png');
		this.load.image('pewdiepie', 'assets/pewdiepie.png');
		this.load.spritesheet('dude', 'assets/dude.png', {
			frameWidth: 32,
			frameHeight: 48,
		});
		client.connect();

		client.on('message', (target, context, msg, self) => {
			this.messages.push(msg.trim());
		});
		client.on('connected', this.onConnectedHandler);
	}

	land() {
		if (this.player.y * -1 > this.score) {
			this.score = this.player.y * -1;
			this.scoreText.setText('Score: ' + Math.round(this.score));
		}
	}

	die() {
		console.log('die');
	}
	create() {
		//  A simple background for our game
		for (var i = 0; i < 100; i++) {
			this.add.image(100, 600 - 300 * i, 'sky');
		}

		//  The platforms group contains the ground and the 2 ledges we can jump on
		this.platforms = this.physics.add.staticGroup();
		this.enemies = this.physics.add.staticGroup();

		this.wordPlatforms = this.physics.add.group();

		//  Here we create the ground.
		//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
		this.platforms.create(0, 0, 'ground').setScale(3).refreshBody();

		var test = this.enemies
			.create(200, -1000, 'pewdiepie')
			.setScale(0.25)
			.refreshBody();
		test.setBounce(10);

		// The player and its settings
		this.player = this.physics.add.sprite(100, -450, 'dude');

		//  Player physics properties. Give the little guy a slight bounce.
		this.player.setBounce(0.1);
		this.player.setCollideWorldBounds(false);

		//this.player.body.checkCollision.up = false;
		//this.player.body.checkCollision.left = false;
		//this.player.body.checkCollision.right = false;

		//  Our player animations, turning, walking left and walking right.
		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1,
		});

		this.anims.create({
			key: 'turn',
			frames: [{ key: 'dude', frame: 4 }],
			frameRate: 20,
		});

		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1,
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
	}

	update() {
		if (this.gameOver) {
			return;
		}

		if (this.cursors.left.isDown) {
			this.player.setVelocityX(-160);

			this.player.anims.play('left', true);
		} else if (this.cursors.right.isDown) {
			this.player.setVelocityX(160);

			this.player.anims.play('right', true);
		} else {
			this.player.setVelocityX(this.baseXVelocity);
			this.player.anims.play('turn');
		}

		if (this.cursors.up.isDown && this.player.body.touching.down) {
			this.player.setVelocityY(-630);
		}

		//ADD MESSAGE

		if (this.messages.length > 0) {
			console.log(this.messages.length);
			this.ingestMessage(this, this.messages.shift());
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
			.text(xPos, yPos, message, {
				fontSize: '32px',
				fill: Math.random() < 0.05 ? '#FF0000' : '#FFFFFF',
			})
			.setOrigin(0.5);

		this.wordPlatforms.add(test_word);
		test_word.body.setAllowGravity(false);
		test_word.body.setImmovable(true);
		test_word.body.setFriction(1);
		test_word.body.setVelocityX(move_speed);
		test_word.body.checkCollision.down = false;
	}

	onConnectedHandler(addr, port) {
		console.log(`* Connected to ${addr}:${port}`);
	}
}
