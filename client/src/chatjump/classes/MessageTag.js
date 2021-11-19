import Phaser from 'phaser';
export default class MessageTag extends Phaser.GameObjects.Text {
	messagePlatform;

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
		this.messagePlatform = messagePlatform;

		this.setUp();
	}

	setUp() {
		this.scene.passThroughObjects.add(this);
		console.log(this.messagePlatform);
		this.body.setVelocityX(this.messagePlatform.body.velocity.x);
		this.body.setAllowGravity(false);
		this.body.setImmovable(true);
		this.setOrigin(0);
	}
}
