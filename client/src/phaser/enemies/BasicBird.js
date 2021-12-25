import Phaser from 'phaser'

export default class BasicBird extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bird_fly')

        // Add to update and display list.
        scene.add.existing(this);

        this.anims.play('bird_fly')

        scene.physics.world.on(Phaser.Physics.Arcade.Events.TILE_COLLIDE, this._handleTileCollision, this)
    }

    update() {
        console.log('BasicBird update()')
    }

    init(goingRight) {
        this.right = goingRight
        this.body.onCollide = true

        this.setImmovable();
        this.body.setAllowGravity(false);
        this._flipDirection()
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
        if (obj !== this) {
            return
        }
        // flip direciton
        this.right = !this.right
        this._flipDirection()
    }
}
