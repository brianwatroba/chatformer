import Phaser from 'phaser';
import MessageTag from './MessageTag';


export default class MessagePlatform extends Phaser.GameObjects.Text {
    BASE_MOVE_SPEED = 50;
    MOVE_SPEED_RANGE = 200;
    MAX_BOOST = 1000; // 0 is no bounce, 100 is +100 yVelocity
    MIN_BOOST = 500;
    BOOST_WIDTH_CUTOFF = 200; //words smaller than 200 will be blue and boosty
    direction = 1; //1 is right, -1 is left
    initialized = false;
    Y_SPAWN_BIAS = -100; // how much above the bottom of the screen to spawn words

    constructor(scene, x, y, message, playerX, playerY, possibleXDirections) {
        var style = {
            fontSize: '26px',
            fill: '#FFFFFF',
        };
        super(scene, x, y, message.message, style); // x,y is blank here?
        this.playerX = playerX;
        this.playerY = playerY;
        this.boost = 0;
        this.message = message;
        this.possibleXDirections = possibleXDirections;
    }

    update() {
        console.log('messageplatform update()')
    }

    deleteIfDone() {
        if (this.body.velocity.x == 0) {
            this.destroy();
            return true;
        }
        else if (this.xDirection === -1 && this.body.position.x + this.body.width < this.scene.getCameraLeftSide()) {
            this.destroy();
            return true;
        }
        else if (this.xDirection === 1 && this.body.position.x > this.scene.getCameraRightSide()) {
            this.destroy();
            return true;
        }
        return false;
        
    }

    setUp() {
        this.xDirection = this.possibleXDirections[Math.floor(Math.random() * this.possibleXDirections.length)]
        
        //setup boost paltforms
        if (this.body.width < this.BOOST_WIDTH_CUTOFF) {
            this.setColor('#0000FF');
            this.boost = Math.min(
                this.MAX_BOOST, 
                (this.BOOST_WIDTH_CUTOFF / Math.max(this.body.width, 1)) * this.MIN_BOOST
            );    
        }

        this.setX(this.getXStartPosition());
        this.setY(this.Y_SPAWN_BIAS + this.scene.cameras.main.scrollY + Math.random() * this.scene.sys.canvas.height )

        this.body.setVelocityX(
            this.xDirection *
            (this.BASE_MOVE_SPEED + Math.random() * this.MOVE_SPEED_RANGE)
        );
        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
        this.body.setFriction(1);
        this.body.checkCollision.down = false;

        this.setOrigin(0);

        // Attach display names to scene but don't add in physics group
        this.messageDisplayName = new MessageTag(this.scene, this.message.displayName, this)
    }

    getXStartPosition() {
        if (this.xDirection === -1) {
            return this.scene.getCameraRightSide();
        }
        else if (this.xDirection === 1) {
            return this.scene.getCameraLeftSide() - this.body.width;
        }
    }
}