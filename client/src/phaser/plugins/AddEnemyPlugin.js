import BasicBird from '../enemies/BasicBird';
import Phaser from 'phaser';

export class AddEnemyPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);
        this.group = undefined
    }

    boot() {
        var eventEmitter = this.systems.events;
        eventEmitter.once('shutdown', this.shutdown, this);
    }

    // TODO: keep shutdown() and destroy() empty for now until we 
    // figure out if we need to persist this plugin across multiple scenes. 
    shutdown() {
        console.log('AddEnemyPlugin shutdown() called')
    }

    destroy() {
        this.shutdown()
        this.scene = undefined
        console.log('AddEnemyPlugin destroy() called')
    }

    initializeLayer(layer) {
        this.group = this.scene.physics.add.group({
            classType: BasicBird,
        })
        layer.objects.forEach(obj => {
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
                const bird = this.group.create(obj.x, obj.y)
                bird.init(goingRight)
            }
        })
    }
}

