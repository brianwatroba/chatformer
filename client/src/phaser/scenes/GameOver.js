import Phaser from "phaser";

export default class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");
    }

    init() {
    }

    preload() {
    }

    create() {
        console.log('game over scene')
    }

    update() { }
}
