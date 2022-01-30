import MessagePlatform from './MessagePlatform';

export class MessageController {
    GARBAGE_COLLECT_TIMER = 300; //timer in update cycles to run garbage collect

    constructor(scene, client, xDirections) {
        this.scene = scene
        this.messages = []
        this.group = this.scene.physics.add.group({
            classType: MessagePlatform,
            createCallback: (obj) => {
                obj.setUp()
            }
        });
        this.group.maxSize = 100;
        this.initClient(client)
        this.possibleXDirections = xDirections;
        this.garbageCollectTimer = 0;
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
        if (this.garbageCollectTimer++ > this.GARBAGE_COLLECT_TIMER) {
            this.garbageCollectTimer = 0;
            this.garbageCollect();   
        }
    }

    garbageCollect() {
        var children = this.group.getChildren();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var deleted = child.deleteIfDone()
            if (deleted) {
                i--;
            }
        }
    } 

    _ingestMessage(message, player) {
        const messagePlatform = new MessagePlatform(this.scene, 0, 0, message, player.x, player.y, this.possibleXDirections)
        this.group.add(messagePlatform, true)
    }
}

