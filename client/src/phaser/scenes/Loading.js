import Phaser from "phaser";

import connectToChat from "../../utils/connectToChat";

export default class Loading extends Phaser.Scene {
    constructor() {
        super("Loading");
    }

    logoSubtext;
    message;
    streamer = "kitboga";
    nameInput;
    client;
    playButton;
    platforms;
    rect;

    preload() {}

    async create() {
        console.log(Phaser.Game);
        const screenCenterX =
            this.cameras.main.worldView.x + this.cameras.main.width / 2;

        this.add.image(375, 100, "logo").setScale(0.7);

        this.logoSubtext = this.add
            .text(screenCenterX, 168, "LOADING", {
                color: "#333",
                fontSize: "12px",
                fontFamily: "arial",
            })
            .setOrigin(0.5);
        this.client = await connectToChat(this.streamer);
        this.scene.start("Game", { client: this.client });
    }
}
