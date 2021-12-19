import Phaser from 'phaser';

export class Player extends Phaser.GameObjects.Sprite {
    constructor({ scene, x, y, image }) {
        super(scene, x, y, image);

        // Attach this sprite to the loaded physics engine
        scene.physics.world.enable(this, 0);
        // Add this sprite to the scene
        scene.add.existing(this);

        this.setScale(1.5);
        //  Player physics properties. Give the little guy a slight bounce.
        // this.body.setBounce(0.1);

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

        this.stun = false
        this.jumpCount = 0
        this.midJump = false

        var keyObj = this.scene.input.keyboard.addKey('up'); // Get key object
        keyObj.on('down', this.spaceDown.bind(this));
        keyObj.on('up', this.spaceUp.bind(this));
    }

    spaceDown() {
        if (this.body.blocked.down) {
            this.body.setVelocityY(-630);
            this.anims.play('jump', true);
            this.jumpCount = 0;
        } else {
            if (this.jumpCount < 2) {
                this.body.setVelocityY(-630);
                this.anims.play('double_jump', true);
                this.on('animationcomplete', () => {
                    this.anims.play('jump', true);
                });
            }
        }
    }

    spaceUp() {
        if (this.jumpCount == 0) {
            this.jumpCount = 1;
        } else if (this.jumpCount == 1) {
            this.jumpCount = 2;
        }
    }


    update() {
        const { keys } = this;
        const onGround = this.body.blocked.down;

        if (keys.left.isDown) {
            this.body.setVelocityX(-270);
            this.setFlipX(true);
            if (onGround) {
                this.anims.play('right', true);
            }
        }
        else if (keys.right.isDown) {
            this.body.setVelocityX(270);
            this.setFlipX(false);
            if (onGround) {
                this.anims.play('right', true);
            }
        }
        else {
            this.body.setVelocityX(0)
            if (onGround) {
                this.anims.play('idle', true)
            }
        }
    }
}

export class PlayerPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);
        pluginManager.registerGameObject('player', this.createPlayer);
    }

    createPlayer(params) {
        return new Player({ scene: this.scene, ...params });
    }
}