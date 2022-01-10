import Phaser from 'phaser';
import MessageTag from './MessageTag';

export default class MessagePlatform extends Phaser.GameObjects.Text {
    BASE_MOVE_SPEED = 50;
    MOVE_SPEED_RANGE = 200;
    direction = 1; //1 is right, -1 is left
    initialized = false;

    constructor(scene, x, y, message, playerY) {
        var style = {
            fontSize: '26px',
            fill: '#FFFFFF',
        };
        super(scene, x, y, message.message, style)
        this.playerY = playerY
        this.message = message
    }

    update() {
        console.log('messageplatform update()')
    }

    setUp() {
        this.direction = Math.random() > 0.5 ? 1 : -1;

        if (this.body.width < 200) {
            this.setColor('#0000FF');
        }

        this.setX(this.direction > 0 ? -300 - this.body.width : 500);
        this.setY(this.playerY + 200 - 800 * Math.random())

        this.body.setVelocityX(
            this.direction *
            (this.BASE_MOVE_SPEED + Math.random() * this.MOVE_SPEED_RANGE)
        );
        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
        this.body.setFriction(1);
        this.body.checkCollision.down = false;

        this.setOrigin(0);

        // Attach display names to scene but don't add in physics group
        const messageDisplayName = new MessageTag(this.scene, this.message.displayName, this)
    }
}
