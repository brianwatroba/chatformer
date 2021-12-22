import Phaser from 'phaser';
import Game from './scenes/Game.js';
import Start from './scenes/Start.js';
import Preloader from './scenes/Preloader.js';
import { PlayerPlugin } from './plugins/Player.js';
import { Level1, Level2 } from './scenes/levels'

const gameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'phaser-game',
	dom: {
		createContainer: true,
		autoCenter: true,
	},
	resolution: window.devicePixelRatio,
	plugins: {
		global: [
			{ key: 'PlayerPlugin', plugin: PlayerPlugin, start: true }
		],
	},
	scene: [Preloader, Start, Level1, Level2],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 1500,
			},
			debug: true,
		},
	},
};

export default gameConfig;
