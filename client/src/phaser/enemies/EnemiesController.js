// Contains physics group for each enemy type.
import BasicBird from "./BasicBird";

import { sceneEvents } from '../events/EventsCenter'

export default class EnemiesController {
    constructor(scene) {
        this.scene = scene;
    }

    init(enemiesLayer, groundLayer, player) {
        this.birds = this.scene.physics.add.group({
            classType: BasicBird,
        });
        enemiesLayer.objects.forEach((obj) => {
            var enemyType = "";
            var goingRight = false;
            obj.properties.forEach((prop) => {
                if (prop.name === "name") {
                    enemyType = prop.value;
                } else if (prop.name === "right") {
                    goingRight = prop.value;
                }
            });
            if (enemyType === "bird") {
                this.birds.create(obj.x, obj.y).init(goingRight);
            }
        });

        // Set up collisions.
        this.scene.physics.add.collider(
            this.birds,
            groundLayer
        )

        this.scene.physics.add.collider(
            player,
            this.birds,
            this.handlePlayerCollision,
            undefined, this
        )
    }

    handlePlayerCollision(player, bird) {
        sceneEvents.emit('player-hit-bird', bird)
    }
}
