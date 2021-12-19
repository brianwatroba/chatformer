import Phaser from "phaser";

import connectToChat from "../../utils/connectToChat";
const BACKGROUND_COLOR = "#A8E9FF";
// const ERROR_COLOR = "#EF233C";
const SUBTEXT_COLOR = "#616161";

export default class StartScreen extends Phaser.Scene {
    constructor() {
        super("Start");
    }

    status;
    logoSubtext;
    message;
    streamer;
    nameInput;
    client;
    playButton;
    platforms;
    rect;

    preload() {
        this.load.html("form", "html/input.html");
        this.load.image("logo", "assets/mainlogo.png");
        this.load.image("ground", "assets/ground.png");
        this.load.image("dirt", "assets/ground.dirt");
    }
    create() {
        const screenCenterX =
            this.cameras.main.worldView.x + this.cameras.main.width / 2;
        // const screenCenterY =
        // 	this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.image(375, 100, "logo").setScale(0.7);
        for (let i = 0; i < 20; i++) {
            this.add.image(-300 + i * 44 * 1.5, 592, "ground").setScale(1.5);
        }
        this.rect = this.add.graphics();
        this.rect.fillRoundedRect(315, 400, 160, 55, 12);
        this.rect.fillStyle(0xff00ff, 1);

        this.cameras.main.setBackgroundColor(BACKGROUND_COLOR);
        this.nameInput = this.add.dom(235, 360).createFromCache("form");
        this.playButton = this.add.text(357, 410, "PLAY", {
            fill: "#ffffff",
            fontSize: "32px",
            fontFamily: "arial",
        });

        this.status = this.add
            .text(screenCenterX, 292, "streamer twitch handle:", {
                color: SUBTEXT_COLOR,
                fontSize: "14px",
                fontFamily: "arial",
            })
            .setOrigin(0.5);
        this.playButton.setInteractive({ useHandCursor: true });

        this.logoSubtext = this.add
            .text(screenCenterX, 168, "jump high with your Twitch chat", {
                color: SUBTEXT_COLOR,
                fontSize: "12px",
                fontFamily: "arial",
            })
            .setOrigin(0.5);

        this.returnKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.ENTER
        );

        this.returnKey.on("down", async () => await this.submit());
        this.playButton.on("pointerdown", async () => await this.submit());
    }

    async submit() {
        let name = this.nameInput.getChildByName("name");
        if (name.value !== "") {
            this.streamer = name.value;
            name.value = "";
        }
        try {
            this.status.text = "Connecting to stream...";
            this.client = await connectToChat(this.streamer);
            // console.log(this.client);

            this.scene.start("Game", { client: this.client });
        } catch (error) {
            console.log(error);
            return error;
            // this.status.setColor(ERROR_COLOR);
            // this.status.text = error.msg;
        }
    }
}
