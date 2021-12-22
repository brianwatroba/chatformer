// Contains physics group for each enemy type.
import BasicBird from './BasicBird';

export default class EnemiesController {
    constructor(scene) {
        this.scene = scene
    }

    init(enemiesLayer) {
        this.birds = this.scene.physics.add.group({
            classType: BasicBird,
        })
        enemiesLayer.objects.forEach(obj => {
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
                this.birds.create(obj.x, obj.y).init(goingRight)
            }
        })
    }
}