import Phaser from "phaser";

import connectToChat from "../../api/connectToChat";

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
        console.log(document.getElementById("streamer-name").innerText);
        this.streamer = document.getElementById("streamer-name").innerText;
    }

    preload() {}

    async create() {
        const screenCenterX =
            this.cameras.main.worldView.x + this.cameras.main.width / 2;

        const screenCenterY =
            this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.logoSubtext = this.add
            .text(screenCenterX, screenCenterY, "CONNECTING...", {
                color: "#fff",
                fontSize: "48px",
                fontFamily: "ubuntu",
                textShadow:
                    "1px 0px 0px #333, -1px 0px 0px #333, 0px 1px 0px #333, 0px -1px 0px #333",
            })
            .setOrigin(0.5);
        this.client = await connectToChat(this.streamer);
        this.scene.start("Game", { client: this.client });
    }
}
