import Phaser from "phaser";
import { createEnemyAnims } from "../../anims/EnemyAnims";
import { createPlayerAnims } from "../../anims/playerAnims";
import { createItemAnims } from "../../anims/ItemAnims";
import { debugDraw } from "../../utils/debug";
import EnemiesController from "../../enemies/EnemiesController";
import { MessageController } from "../../platforms/MessageController";
import BackgroundController from "../../background/BackgroundController";
import GameClock from "../../plugins/GameClock"

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
        this.backgroundController = new BackgroundController(this);
        this.previousRunningTime = data.runningTimeSeconds ? data.runningTimeSeconds : 0;
    }

    create() {
        //Create Animations
        createPlayerAnims(this.anims);
        createEnemyAnims(this.anims);
        createItemAnims(this.anims);

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
                var checkpoint = this.physics.add.sprite(object.x + object.width / 2,
                    object.y - object.height / 2, "flag_idle")
                checkpoint.body.width = checkpoint.body.width/2;    
                checkpoint.body.setOffset(15,0)
                checkpoint.body.setAllowGravity(false);
                checkpoint.anims.play("flag_idle")

                this.physics.add.collider(
                    this.player,
                    checkpoint,
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

        // Process Background object layers
        const parallaxLayer = map.getObjectLayer("ParallaxBackground");
        const parallaxLayer2 = map.getObjectLayer("ParallaxBackground2");
        const backgroundLayer = map.getObjectLayer("Background");
        this.backgroundController.init(backgroundLayer, parallaxLayer, parallaxLayer2);

        // Add common game configurations.
        this.physics.add.collider(this.player, this.messageController.group, this.collideMessagePlatform, null, this);
        this.physics.add.collider(this.player, groundLayer);

        // Place the player above the tile layers.
        this.player.setDepth(10);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.setZoom(1);

        if (this.debug) {
            debugDraw(groundLayer, this);
        }

        // Add clock
        this.timerEvent = this.time.addEvent({delay: 99999});
        this.gameClock = this.add.gameclock({ 
            scene: this, 
            timerEvent: this.timerEvent, 
            runningTimeSeconds: this.previousRunningTime});
    }

    collideMessagePlatform(player, platform) {
        if (platform.boost > 0 && platform.body.touching.up) {
            player.platformBoost(platform);
        }
        else if (platform.body.touching.up) {
            player.jumpCount = 0;

            //pause for a bit before letting the platforms fall
            this.time.delayedCall(300, function(plat) {
                plat.body.setAllowGravity(true);
                plat.messageDisplayName.body.setAllowGravity(true);
            }, [platform], this);
        }
    }

    collideFinishZone(player, zone) {
        this.physics.world.disable(zone);
        this.onFinishLevel();
    }

    startLevel(nextLevelId) {
        this.scene.start(nextLevelId, { 
            client: this.client, 
            runningTimeSeconds: this.timerEvent.getElapsedSeconds() + this.previousRunningTime});
    }

    onFinishLevel() {
        console.log(this.levelId + " finished");
    }

    update(time, delta) {
        this.player.update();
        this.messageController.update();
        this.gameClock.update();
    }
}
