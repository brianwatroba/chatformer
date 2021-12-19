import Phaser from 'phaser';
import { createEnemyAnims } from '../anims/EnemyAnims';
import { createPlayerAnims } from '../anims/PlayerAnims';
import BasicBird from '../enemies/BasicBird';
import { debugDraw } from '../utils/debug'

export default class GameTest extends Phaser.Scene {
    constructor() {
        super('GameTest');
    }

    init(data) {
        this.msgs.initClient(data.client)
    }

    preload() {
    }

    create() {
        // Load animations
        createPlayerAnims(this.anims)
        createEnemyAnims(this.anims)

        // Load Tileset
        const map = this.make.tilemap({ key: "map" });

        this.birds = this.physics.add.group({
            classType: BasicBird,
            createCallback: (obj) => {
                console.log('basic bird added')
            }
        })
        const enemyLayer = map.getObjectLayer('Enemies');
        enemyLayer.objects.forEach(obj => {
            var enemyType = ''
            var goingRight = false
            obj.properties.forEach(prop => {
                if (prop.name == 'name') {
                    enemyType = prop.value
                } else if (prop.name == 'right') {
                    goingRight = prop.value
                }
            })
            if (enemyType == 'bird') {
                const bird = this.birds.create(obj.x, obj.y)
                bird.init(goingRight)
            }
        })

        const objectLayer = map.getObjectLayer('Spawn');
        const { x: start_x, y: start_y } = objectLayer.objects[1]

        // Set up the player character
        window.player = this.player = this.add.player({
            x: start_x,
            y: start_y,
            image: 'dude_idle',
        });

        // Create the ground layer
        const tileset = map.addTilesetImage("Terrain (16x16)", "terrain");
        const groundLayer = map.createLayer('Platforms', tileset, 0, 0);
        groundLayer.setCollisionByProperty({ collides: true });

        this.physics.add.collider(this.player, groundLayer);

        this.physics.add.collider(this.birds, groundLayer);
        this.physics.add.collider(this.player, this.msgs.group)

        debugDraw(groundLayer, this)

        // Place the player above the tile layers
        this.player.setDepth(10);
        this.cameras.main.startFollow(this.player);
    }

    update(time, delta) {
        this.player.update()
        this.msgs.update(this.player.y)
    }
}
