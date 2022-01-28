import Phaser from "phaser";
import Game from "./scenes/Game.js";
import Preloader from "./scenes/Preloader.js";
import { PlayerPlugin } from "./plugins/Player.js";
import {GameClockPlugin } from "./plugins/GameClock.js";
import { Level1, Level2 } from "./scenes/levels";
import GameOver from "./scenes/GameOver.js";

const gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "phaser-game",
    backgroundColor: "#4f96d4",
    dom: {
        createContainer: true,
        autoCenter: true,
    },
    resolution: window.devicePixelRatio,
    plugins: {
        global: [
            { key: "PlayerPlugin", plugin: PlayerPlugin, start: true },
            { key: "GameClockPlugin", plugin: GameClockPlugin, start: true }],
        
    },
    scene: [Preloader, Game, Level1, Level2, GameOver],
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 1500,
            },
            debug: true,
        },
    },
};

export default gameConfig;
