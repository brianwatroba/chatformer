import Phaser from 'phaser';

export class Player extends Phaser.GameObjects.Sprite {
    constructor({ scene, x, y, image }) {
        super(scene, x, y, image);

        // Attach this sprite to the loaded physics engine
        scene.physics.world.enable(this, 0);
        // Add this sprite to the scene
        scene.add.existing(this);

        // Track the arrow keys & WASD
        const { LEFT, RIGHT, UP, W, A, D } = Phaser.Input.Keyboard.KeyCodes;
        this.keys = scene.input.keyboard.addKeys({
            left: LEFT,
            right: RIGHT,
            up: UP,
            w: W,
            a: A,
            d: D,
        });
    }

    update() {
        const { keys } = this;
        const onGround = this.body.blocked.down;

        if (keys.left.isDown) {
            this.body.setVelocityX(-270);
            this.setFlipX(true);
        }
        else if (keys.right.isDown) {
            this.body.setVelocityX(270);
            this.setFlipX(false);
        }
        else {
            this.body.setVelocityX(0)
        }

        if (onGround && (keys.up.isDown)) {
            this.body.setVelocityY(-500);
        }
    }
}

export class PlayerPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);

        //  Register our new Game Object type
        pluginManager.registerGameObject('player', this.createPlayer);
    }

    createPlayer(params) {
        return new Player({ scene: this.scene, ...params });
    }
}