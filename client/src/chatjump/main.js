import Phaser from 'phaser';
import Game from './scenes/Game.js';
import Start from './scenes/Start.js';

const ChatJump = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'Game',
	scale: {
		parent: 'Game',
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
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
