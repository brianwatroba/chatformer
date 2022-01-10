import Phaser from 'phaser';

export default class MessageTag extends Phaser.GameObjects.Text {
    constructor(scene, text, messagePlatform) {
        var style = {
            fontSize: '14px',
            fill: '#000000',
        };
        super(
            scene,
            messagePlatform.x,
            messagePlatform.y + 5 + messagePlatform.body.height,
            text,
            style
        );

        // Add a physics body
        this.scene.physics.add.existing(this)
        this.addToDisplayList()

        this.body.setVelocityX(messagePlatform.body.velocity.x);
        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
        this.setOrigin(0);
    }
}
