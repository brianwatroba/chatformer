import Phaser from 'phaser'

export default class BasicBird extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bird_fly')
        scene.add.existing(this);
        // this.right = false

        this.anims.play('bird_fly')

        scene.physics.world.on(Phaser.Physics.Arcade.Events.TILE_COLLIDE, this._handleTileCollision, this)
    }

    init(goingRight) {
        this.right = goingRight
        this.body.onCollide = true

        this.setImmovable();
        this.body.setAllowGravity(false);
        this._flipDirection()
    }

    destroy(fromScene) {
        super.destroy(fromScene)
    }

    _flipDirection() {
        if (this.right) {
            this.setFlipX(true);
            this.setVelocityX(100);
        } else {
            this.setFlipX(false);
            this.setVelocityX(-100);
        }
    }

    _handleTileCollision(obj, tile) {
        console.log('bird collided')
        if (obj !== this) {
            return
        }
        // flip direciton
        this.right = !this.right
        this._flipDirection()
    }
}
