import Phaser from "phaser";
import { createEnemyAnims } from "../../anims/EnemyAnims";
import { createPlayerAnims } from "../../anims/playerAnims";
import { debugDraw } from "../../utils/debug";
import EnemiesController from "../../enemies/EnemiesController";
import { MessageController } from "../../platforms/MessageController";

export default class ChatJumpLevel extends Phaser.Scene {
    constructor(levelId, debug = false) {
        super(levelId);
        this.levelId = levelId;
        this.debug = debug;
    }

    init(data) {
        this.client = data.client;
        this.messageController = new MessageController(this, data.client, this.levelId === "Level2" ? [-1] : [-1, 1]);
        this.enemiesController = new EnemiesController(this);
    }

    create() {
        //Create Animations
        createPlayerAnims(this.anims);
        createEnemyAnims(this.anims);

        //Create Sound Effects
        this.sound.add("jump", { loop: false });

        const map = this.make.tilemap({ key: this.levelId });
        this.map = map;

        // Process tile layers.
        const tileset = map.addTilesetImage("Terrain (16x16)", "terrain");
        const groundLayer = map.createLayer("Platforms", tileset, 0, 0);
        groundLayer.setCollisionByProperty({ collides: true });

        // Two separate loops because Start must run first to initialize the player.
        const spawnLayer = map.getObjectLayer("Spawn");
        spawnLayer.objects.forEach((object) => {
            if (object.name === "Start") {
                const {
                    x: start_x,
                    y: start_y,
                    width: start_width,
                    height: start_height,
                } = object;
                window.player = this.player = this.add.player({
                    x: start_x + start_width / 2,
                    y: start_y + start_height / 2,
                    image: "dude_idle",
                });
            }
        });
        spawnLayer.objects.forEach((object) => {
            if (object.name === "Finish") {
                let zone = this.add.rectangle(
                    object.x + object.width / 2,
                    object.y + object.height / 2,
                    object.width,
                    object.height
                );
                this.physics.world.enable(zone, 1);
                this.physics.add.collider(
                    this.player,
                    zone,
                    this.collideFinishZone,
                    null,
                    this
                );
            }
        });
        //set world bounds according to map
        this.physics.world.setBounds(0,0, map.widthInPixels, map.heightInPixels);


        // Process object layers.
        const enemyLayer = map.getObjectLayer("Enemies");
        if (enemyLayer && enemyLayer.objects) {
            this.enemiesController.init(enemyLayer, groundLayer, this.player);
        }

        // Add common game configurations.
        this.physics.add.collider(this.player, this.messageController.group, this.collideMessagePlatform);
        this.physics.add.collider(this.player, groundLayer);

        // Place the player above the tile layers.
        this.player.setDepth(10);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);

        if (this.debug) {
            debugDraw(groundLayer, this);
        }
    }

    collideMessagePlatform(player, platform) {
        if (platform.boost > 0 && platform.body.touching.up) {
            player.platformBoost(platform);
        }
    }

    collideFinishZone(player, zone) {
        this.physics.world.disable(zone);
        this.onFinishLevel();
    }

    startLevel(nextLevelId) {
        this.scene.start(nextLevelId, { client: this.client });
    }

    onFinishLevel() {
        console.log(this.levelId + " finished");
    }

    update(time, delta) {
        this.player.update();
        this.messageController.update();
    }
}
