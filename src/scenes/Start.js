import Phaser from '../lib/phaser.js';

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

export default class StartScreen extends Phaser.Scene {
	constructor() {
		super('Start');
	}

	status;
	message;
	streamer;
	nameInput;
	client;
	playButton;

	preload() {
		this.load.html('form', 'scripts/input.html');
	}
	create() {
		this.nameInput = this.add.dom(230, 250).createFromCache('form');
		this.playButton = this.add.text(350, 400, 'PLAY', {
			fill: '#DB79BA',
			fontSize: '32px',
		});
		this.status = this.add.text(300, 100, 'Enter streamer!');
		this.playButton.setInteractive({ useHandCursor: true });

		this.returnKey = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.ENTER
		);

		this.returnKey.on('down', () => this.submit());
		this.playButton.on('pointerdown', () => this.submit());

		this.status.setColor('#ffffff');
	}

	async connectToChat(streamerHandle) {
		let connectionError = false;
		const opts = {
			identity: {
				username: 'brothersgettingbetter',
				password: 'oauth:wo33qiqp0eymux36hvpg1xo4659bu2',
			},

			logger: {
				info: () => {
					return;
				},
				warn: (warn) => console.log(warn),
				error: (err) => (connectionError = true),
			},
		};

		this.client = new tmi.client(opts);

		try {
			this.status.text = 'Loading';
			await this.client.connect();
			const res = await this.client.join(streamerHandle);
			if (res) {
				this.status.text = `Joining ${streamerHandle}'s stream`;
				this.scene.start('Game', { client: this.client });
			}
		} catch (error) {
			console.log(error);
			this.status.text = `That streamer isn't live. Try again`;
		}
	}

	submit() {
		let name = this.nameInput.getChildByName('name');
		if (name.value != '') {
			this.streamer = name.value;
			name.value = '';
		}
		this.connectToChat(this.streamer);
	}
}
