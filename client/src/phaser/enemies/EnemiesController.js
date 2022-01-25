// Contains physics group for each enemy type.
import BasicBird from "./BasicBird";
import FireBall from "./FireBall";

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

    addFireWall(x, y, width, height) {
        this.firewalls = this.scene.physics.add.group({
            classType: FireBall,
        });

        var pieceSpacing = 60;
        var numPieces = Math.floor(height/pieceSpacing);
        for (var i = 0; i < 1; i++) {
            for (var j = 0; j < numPieces; j++) {
                this.firewalls.create(
                    x + i * 22 + Math.random() * 5,
                    y + j*pieceSpacing + Math.random() * 5
                ).init(numPieces - j);

            }    
        }
    }
}
