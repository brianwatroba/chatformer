import MessagePlatform from './MessagePlatform';

export class MessageController {
    constructor(scene, client, xDirections) {
        this.scene = scene
        this.messages = []
        this.group = this.scene.physics.add.group({
            classType: MessagePlatform,
            createCallback: (obj) => {
                obj.setUp()
            }
        });
        this.initClient(client)
        this.possibleXDirections = xDirections;
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
        const messagePlatform = new MessagePlatform(this.scene, 0, 0, message, player.y, this.possibleXDirections)
        this.group.add(messagePlatform, true)
    }
}

