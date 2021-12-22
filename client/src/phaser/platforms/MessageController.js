import Phaser from 'phaser';

class MessagePlatform extends Phaser.GameObjects.Text {
    BASE_MOVE_SPEED = 50;
    MOVE_SPEED_RANGE = 200;
    direction = 1; //1 is right, -1 is left
    initialized = false;

    constructor(scene, x, y, text, playerY) {
        var style = {
            fontSize: '26px',
            fill: '#FFFFFF',
        };
        super(scene, x, y, text, style); // x,y is blank here?
        this.playerY = playerY
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
    }
}

export class MessageController {
    constructor(scene) {
        this.scene = scene
        this.messages = []
        this.group = this.scene.physics.add.group({
            classType: MessagePlatform,
            createCallback: (obj) => {
                obj.setUp()
            }
        });
        this.initialized = false
    }

    // TODO: client is currently initialized in Start scene and passed via SceneManager.
    // Move over initialization to this plugin.
    initClient(client) {
        this.client = client
        this.client.on('message', (target, context, msg) => {
            this.messages.push({
                message: msg.trim(),
                displayName: context['display-name'],
            })
        })
        this.initialized = true
    }

    update() {
        const { player } = this.scene
        if (!player) {
            return;
        }
        if (this.messages.length > 0) {
            this._ingestMessage(this.messages.shift(), player);
        }
    }

    _ingestMessage(message, player) {
        const messagePlatform = new MessagePlatform(this.scene, 0, 0, message.message, player.y)
        this.group.add(messagePlatform, true)
    }
}

