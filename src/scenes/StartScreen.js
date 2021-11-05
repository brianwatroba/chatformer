import Phaser from '../lib/phaser.js';
import Game from './Game.js';

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

export default class StartScreen extends Phaser.Scene {
	constructor() {
		super('StartScreen');
	}

	text;
	message;
	streamer;
	nameInput;

	preload() {
		this.load.html('form', 'scripts/input.html');
	}
	create() {
		this.nameInput = this.add.dom(200, 200).createFromCache('form');

		this.returnKey = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.ENTER
		);

		this.returnKey.on('down', (event) => {
			let name = this.nameInput.getChildByName('name');
			if (name.value != '') {
				this.streamer = name.value;
				name.value = '';
			}
			this.scene.start('Game', { streamer: this.streamer });
		});

		// this.text = this.add.text(300, 300, 'Welcome to my game!');
		// this.text.setColor('#000000');
		// this.text.setInteractive({ useHandCursor: true });
		// this.text.on('pointerdown', () => this.clickButton());
	}
	// clickButton() {

	// }
}
