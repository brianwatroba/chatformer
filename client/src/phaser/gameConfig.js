import Phaser from "phaser";
import Game from "./scenes/Game.js";
import Start from "./scenes/Start.js";
import Loading from "./scenes/Loading.js";

const gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "phaser-game",
    scale: {
        width: 800,
        height: 600,
    },
    dom: {
        createContainer: true,
    },
    resolution: window.devicePixelRatio,
    scene: [Loading, Game],
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 1500,
            },
            debug: false,
        },
    },
};

export default gameConfig;
