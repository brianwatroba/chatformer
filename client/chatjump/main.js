import Phaser from 'phaser';
import Game from './scenes/Game.js.js.js';
import Start from './scenes/Start.js.js.js';

const ChatJump = new Phaser.Game({
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	// parent: 'Game',
	scale: {
		parent: 'Game',
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 800,
		height: 600,
	},
	dom: {
		createContainer: true,
	},
	resolution: window.devicePixelRatio,
	scene: [Start, Game],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 1500,
			},
			debug: false,
		},
	},
});

const ChatJump = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	// parent: 'Game',
	scale: {
		parent: 'Game',
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 800,
		height: 600,
	},
	dom: {
		createContainer: true,
	},
	resolution: window.devicePixelRatio,
	scene: [Start, Game],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 1500,
			},
			debug: false,
		},
	},
};

export default ChatJump;
