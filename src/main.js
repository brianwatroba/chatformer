import Phaser from './lib/phaser.js';

import Game from './scenes/Game.js';
import StartScreen from './scenes/StartScreen.js';

export default new Phaser.Game({
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'Game',
	dom: {
		createContainer: true,
	},
	scene: [Game],
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
