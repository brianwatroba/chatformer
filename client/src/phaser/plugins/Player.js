import Phaser from "phaser";

import { sceneEvents } from '../events/EventsCenter'
export class Player extends Phaser.GameObjects.Sprite {
    JUMP_VELOCITY = -630;
    HORIZONTAL_MOVE_VELOCITY = 270;
    STUN_MILLISECONDS = 1500;
    stunned = false
    health = 100

    constructor({ scene, x, y, image }) {
        super(scene, x, y, image);
        this.scene = scene
        // Attach this sprite to the loaded physics engine
        scene.physics.world.enable(this, 0);
        // Add this sprite to the scene
        scene.add.existing(this);
        this.body.collideWorldBounds = true;

        this.setScale(1.5);
        //  Player physics properties. Give the little guy a slight bounce.
        // this.body.setBounce(0.1);

        this.body.setSize(this.width * 0.75, this.height);

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

        this.stun = false;
        this.jumpCount = 0;
        this.midJump = false;

        var keyObj = this.scene.input.keyboard.addKey("up"); // Get key object
        keyObj.on("down", this.upKeyDown.bind(this));
        keyObj.on("up", this.upKeyUp.bind(this));

        // on player stun
        // set state to stun
        sceneEvents.on('player-hit-bird', this.handlePlayerHitBird, this)
        sceneEvents.on('player-hit', this.handlePlayerHit, this)
    }

    handlePlayerHitBird() {
        this.stunned = true
        this.scene.time.addEvent({
            delay: this.STUN_MILLISECONDS,
            callback: () => {
                this.stunned = false
            },
        })
        this.anims.play("hit", true);
        sceneEvents.emit('player-hit', 99)
    }

    handlePlayerHit(damage) {
        console.log('player hit with damage: ' + damage)
        if (damage <= 0) return
        this.health = Math.max(this.health - damage, 0)
        if (this.health == 0) {
            sceneEvents.emit('player-death')
        }
    }

    //boost the player when they hit a platform with boost enabled
    platformBoost(platform) {
        this.body.setVelocityY(-1 * platform.boost);
        this.jumpCount = 1;
    }

    upKeyDown() {
        if (this.body.blocked.down) {
            this.body.setVelocityY(this.JUMP_VELOCITY);
            this.anims.play("jump", true);
            this.jumpCount = 0;
            this.scene.sound.play("jump");
        } else {
            if (this.jumpCount < 2) {
                this.body.setVelocityY(this.JUMP_VELOCITY);
                this.anims.play("double_jump", true);
                this.on("animationcomplete", () => {
                    this.anims.play("jump", true);
                });
                this.scene.sound.play("jump");
            }
        }
    }

    upKeyUp() {
        if (this.jumpCount === 0) {
            this.jumpCount = 1;
        } else if (this.jumpCount === 1) {
            this.jumpCount = 2;
        }
    }

    update() {
        const { keys } = this;
        const onGround = this.body.blocked.down;

        if (this.stunned) {
            return
        }

        if (keys.left.isDown && !this.body.blocked.left) {
            this.body.setVelocityX(-1 * this.HORIZONTAL_MOVE_VELOCITY);
            this.setFlipX(true);
            if (onGround) {
                this.anims.play("right", true);
            }
        } else if (keys.right.isDown && !this.body.blocked.right) {
            this.body.setVelocityX(this.HORIZONTAL_MOVE_VELOCITY);
            this.setFlipX(false);
            if (onGround) {
                this.anims.play("right", true);
            }
        } else if (!this.body.blocked.left && !this.body.blocked.right) {
            this.body.setVelocityX(0);
            if (onGround) {
                this.anims.play("idle", true);
            }
        }
        if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
            this.anims.play('idle', true)
        }
    }
}

export class PlayerPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);
        pluginManager.registerGameObject("player", this.createPlayer);
    }

    createPlayer(params) {
        return new Player({ scene: this.scene, ...params });
    }
}
