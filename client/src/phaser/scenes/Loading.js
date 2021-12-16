import Phaser, { Scene } from "phaser";

import connectToChat from "../../utils/connectToChat";

export default class Loading extends Phaser.Scene {
    constructor() {
        super("Loading");
    }

    logoSubtext;
    message;
    streamer;
    nameInput;
    client;
    playButton;
    platforms;
    rect;

    init() {
        this.streamer = document.getElementById("streamer-name").innerText;
    }

    preload() {}

    async create() {
        const screenCenterX =
            this.cameras.main.worldView.x + this.cameras.main.width / 2;

        this.logoSubtext = this.add
            .text(screenCenterX, 275, "CONNECTING...", {
                color: "#fff",
                fontSize: "48px",
                fontFamily: "ubuntu",
            })
            .setOrigin(0.5);
        this.client = await connectToChat(this.streamer);
        this.scene.start("Game", { client: this.client });
    }
}
