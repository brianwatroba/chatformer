import Phaser from 'phaser';
import Game from './scenes/Game.js';
import Start from './scenes/Start.js';
import Preloader from './scenes/Preloader.js';
import GameTest from './scenes/GameTest.js';
import { PlayerPlugin } from './plugins/Player.js';
import { MessagePlugin } from './plugins/MessagePlugin';
import { AddEnemyPlugin } from './plugins/AddEnemyPlugin.js';

const gameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'phaser-game',
	// scale: {
	// 	width: 800,
	// 	height: 600,
	// },
	dom: {
		createContainer: true,
		autoCenter: true,
	},
	resolution: window.devicePixelRatio,
	plugins: {
		global: [
			{ key: 'PlayerPlugin', plugin: PlayerPlugin, start: true }
		],
		scene: [
			{ key: 'MessagePlugin', plugin: MessagePlugin, mapping: 'msgs' },
			{ key: 'AddEnemyPlugin', plugin: AddEnemyPlugin, mapping: 'enemies' }
		]
	},
	scene: [Preloader, Start, GameTest],
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
