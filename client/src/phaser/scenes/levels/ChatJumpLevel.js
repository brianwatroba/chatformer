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
        if (this.messageController && !this.messageController.initialized) {
            this.messageController.initClient(data.client)
        }
        this.enemiesController = new EnemiesController(this)
        this.messageController = new MessageController(this)
        this.onStartLevel()
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
        this.enemiesController.init(enemyLayer)

        const spawnLayer = map.getObjectLayer('Spawn');
        const { x: start_x, y: start_y, width: start_width, height: start_height } = spawnLayer.objects[1]

        window.player = this.player = this.add.player({
            x: start_x + (start_width / 2),
            y: start_y + (start_height / 2),
            image: 'dude_idle',
        });

        this.zones = this.physics.add.staticGroup()
        spawnLayer.objects.forEach(object => {
            if (object.name == 'Finish') {
                let zone = this.add.rectangle((object.x + (object.width / 2)), (object.y + (object.height / 2)), object.width, object.height);
                this.physics.world.enable(zone, 1);
                this.physics.add.collider(this.player, zone, this.onFinishLevel.bind(this));
            }
        })

        // Add common game configurations.
        this.physics.add.collider(this.player, groundLayer);
        this.physics.add.collider(this.player, this.messageController.group)
        this.physics.add.collider(this.enemiesController.birds, groundLayer);

        // Place the player above the tile layers.
        this.player.setDepth(10);
        this.cameras.main.startFollow(this.player);

        if (this.debug) {
            debugDraw(groundLayer, this)
        }
    }

    onStartLevel() {
    }

    onFinishLevel() {
        console.log("Level finished")
    }

    update(time, delta) {
        this.player.update()
        this.messageController.update()
    }

}

