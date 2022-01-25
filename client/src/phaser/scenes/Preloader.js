import Phaser from "phaser";
import connectToChat from "../../api/connectToChat";

export default class Preloader extends Phaser.Scene {
    constructor() {
        super("Preloader");
    }

    client;
    streamer;

    // Pull in stream name to join from React. Hacky for now. May move to Phaser DataStore or event emitter.
    init() {
        this.streamer = document.getElementById("streamer-name").innerText;
    }

    preload() {
        this.load.spritesheet(
            "dude_idle",
            "assets/main_character/Idle (32x32).png",
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );
        this.load.spritesheet(
            "dude_run",
            "assets/main_character/Run (32x32).png",
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );

        this.load.spritesheet(
            "dude_jump",
            "assets/main_character/Jump (32x32).png",
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );
        this.load.spritesheet(
            "dude_hit",
            "assets/main_character/Hit (32x32).png",
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );
        this.load.spritesheet(
            "dude_double_jump",
            "assets/main_character/Double Jump (32x32).png",
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );

        this.load.spritesheet("bird_fly", "assets/Bird.png", {
            frameWidth: 32,
            frameHeight: 32,
        });

        this.load.spritesheet("fireball", "assets/FireBall.png", {
            frameWidth: 100,
            frameHeight: 100,
        });

        // Load Tileset
        this.load.image("terrain", "assets/Terrain (16x16).png");
        this.load.tilemapTiledJSON("Level1", "assets/Level1.json");
        this.load.tilemapTiledJSON("Level2", "assets/Level2.json");

        // Load Sound Effects
        this.load.audio("jump", ["assets/SoundEffects/jump.wav"]);
    }

    async create() {
        // Loading text on screen
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

        // Connect to chat, pass client object to first level
        this.client = await connectToChat(this.streamer);
        this.scene.start("Level1", { client: this.client });
    }
}
