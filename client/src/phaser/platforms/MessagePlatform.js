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

        this.setX(this.getXPosition(this.playerX));
        this.setY(this.playerY + 200 - 800 * Math.random())

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
        const messageDisplayName = new MessageTag(this.scene, this.message.displayName, this)
    }

    getXPosition(playerX) {
        if (this.xDirection === -1) {
            return playerX + this.scene.sys.game.canvas.width * .8;
        }
        else if (this.xDirection === 1) {
            return playerX - this.scene.sys.game.canvas.width * .8 - this.body.width
        }
    }
}