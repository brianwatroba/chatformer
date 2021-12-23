import Phaser from 'phaser';
import { createEnemyAnims } from '../../anims/EnemyAnims';
import { createPlayerAnims } from '../../anims/PlayerAnims';
import { debugDraw } from '../../utils/debug'
import EnemiesController from '../../enemies/EnemiesController';
import { MessageController } from '../../platforms/MessageController';

export default class ChatJumpLevel extends Phaser.Scene {
    constructor(levelId, debug = false) {
        super(levelId);
        this.levelId = levelId
        this.debug = debug
    }

    init(data) {
        this.client = data.client
        this.messageController = new MessageController(this, data.client)
        this.enemiesController = new EnemiesController(this)
    }

    create() {
        createPlayerAnims(this.anims)
        createEnemyAnims(this.anims)

        const map = this.make.tilemap({ key: this.levelId });

        // Process tile layers.
        const tileset = map.addTilesetImage("Terrain (16x16)", "terrain");
        const groundLayer = map.createLayer('Platforms', tileset, 0, 0);
        groundLayer.setCollisionByProperty({ collides: true });

        // Process object layers.
        const enemyLayer = map.getObjectLayer('Enemies');
        if (enemyLayer && enemyLayer.objects) {
            this.enemiesController.init(enemyLayer)
            this.physics.add.collider(this.enemiesController.birds, groundLayer);
        }

        // Two separate loops because Start must run first to initialize the player.
        const spawnLayer = map.getObjectLayer('Spawn');
        spawnLayer.objects.forEach(object => {
            if (object.name == 'Start') {
                const { x: start_x, y: start_y, width: start_width, height: start_height } = object
                window.player = this.player = this.add.player({
                    x: start_x + (start_width / 2),
                    y: start_y + (start_height / 2),
                    image: 'dude_idle',
                });
            }
        })
        spawnLayer.objects.forEach(object => {
            if (object.name == 'Finish') {
                let zone = this.add.rectangle((object.x + (object.width / 2)), (object.y + (object.height / 2)), object.width, object.height);
                this.physics.world.enable(zone, 1);
                this.physics.add.collider(this.player, zone, this.collideFinishZone, null, this);
            }
        })

        // Add common game configurations.
        this.physics.add.collider(this.player, groundLayer);
        this.physics.add.collider(this.player, this.messageController.group)

        // Place the player above the tile layers.
        this.player.setDepth(10);
        this.cameras.main.startFollow(this.player);

        if (this.debug) {
            debugDraw(groundLayer, this)
        }
    }

    collideFinishZone(player, zone) {
        this.physics.world.disable(zone);
        this.onFinishLevel()
    }

    startLevel(nextLevelId) {
        this.scene.start(nextLevelId, { client: this.client });
    }

    onFinishLevel() {
        console.log(this.levelId + " finished")
    }

    update(time, delta) {
        this.player.update()
        this.messageController.update()
    }

}

