import Phaser from './lib/phaser.js';

import Game from './scenes/Game.js';
import Start from './scenes/Start.js';

export default new Phaser.Game({
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'Game',
	scale: {
		parent: 'Game',
		autoCenter: Phaser.Scale.CENTER_BOTH,
		mode: Phaser.Scale.FIT,
		width: 800,
		height: 600,
	},
	dom: {
		createContainer: true,
	},
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
