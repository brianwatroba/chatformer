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
            "assets/game/sprites/main_character/Idle (32x32).png",
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );
        this.load.spritesheet(
            "dude_run",
            "assets/game/sprites/main_character/Run (32x32).png",
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );

        this.load.spritesheet(
            "dude_jump",
            "assets/game/sprites/main_character/Jump (32x32).png",
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );
        this.load.spritesheet(
            "dude_hit",
            "assets/game/sprites/main_character/Hit (32x32).png",
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );
        this.load.spritesheet(
            "dude_double_jump",
            "assets/game/sprites/main_character/Double Jump (32x32).png",
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );

        this.load.spritesheet("bird_fly", "assets/game/sprites/enemies/Bird.png", {
            frameWidth: 32,
            frameHeight: 32,
        });

        this.load.spritesheet("fireball", "assets/game/sprites/enemies/FireBall.png", {
            frameWidth: 100,
            frameHeight: 100,
        });

        this.load.spritesheet("flag_idle", "assets/game/sprites/environment/Flag_Idle.png", {
            frameWidth: 64,
            frameHeight: 64,
        });

        // Load Tileset
        this.load.image("terrain", "assets/game/sprites/Environment/Terrain (16x16).png");
        this.load.image("spikes", "assets/game/sprites/Environment/spikes.png");
        this.load.tilemapTiledJSON("Level1", "assets/game/levels/level_1.json");
        this.load.tilemapTiledJSON("Level2", "assets/game/levels/Level2.json");


        //Load Background Images
        this.load.image("clouds1", "assets/game/sprites/environment/sky47/47_PixelSky_layer03.png")
        this.load.image("clouds2", "assets/game/sprites/environment/sky47/47_PixelSky_layer02.png")
        this.load.image("clouds3", "assets/game/sprites/environment/sky47/45_PixelSky_layer03.png")

        this.load.image("skybg1background", "assets/game/sprites/environment/sky47/47_PixelSky_layer01.png")
        this.load.image("skybg1parallax", "assets/game/sprites/environment/sky14/14_PixelSky_layer02BIG.png")

        // Load Sound Effects
        this.load.audio("jump", ["assets/game/sounds/jump.wav"]);
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
        this.scene.start("Level2", { client: this.client });
    }
}
