import Phaser from 'phaser';

class MessagePlatform extends Phaser.GameObjects.Text {
    BASE_MOVE_SPEED = 50;
    MOVE_SPEED_RANGE = 200;
    direction = 1; //1 is right, -1 is left

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

export class MessagePlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);
        this.messages = []
        this.group = undefined
    }

    boot() {
        console.log('MessagePlugin boot() called')
        var eventEmitter = this.systems.events;
        eventEmitter.once('shutdown', this.shutdown, this);
        eventEmitter.once('ready', this.ready, this);
    }

    ready() {
        console.log('ready')
        this.group = this.scene.physics.add.group({
            classType: MessagePlatform,
            createCallback: (obj) => {
                obj.setUp()
            }
        });
    }

    // TODO: keep shutdown() and destroy() empty for now until we 
    // figure out if we need to persist this plugin across multiple scenes. 
    shutdown() {
        console.log('MessagePlugin shutdown() called')
    }

    destroy() {
        this.shutdown()
        this.scene = undefined
        console.log('MessagePlugin destroy() called')
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
    }

    update(playerY) {
        if (this.messages.length > 0) {
            this._ingestMessage(this.messages.shift(), playerY);
        }
        // TODO: update individual messages?
    }

    _ingestMessage(message, playerY) {
        // console.log("ingesting message:", message)
        const messagePlatform = new MessagePlatform(this.scene, 0, 0, message.message, playerY)
        this.group.add(messagePlatform, true)
    }
}

