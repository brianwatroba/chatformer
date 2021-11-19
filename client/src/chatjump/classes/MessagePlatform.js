import Phaser from 'phaser';
export default class MessagePlatform extends Phaser.GameObjects.Text {
	BASE_MOVE_SPEED = 50;
	MOVE_SPEED_RANGE = 200;
	direction = 1; //1 is right, -1 is left

	constructor(scene, text) {
		var style = {
			fontSize: '26px',
			fill: '#FFFFFF',
		};
		super(scene, 0, 0, text, style);

		this.setUp();
	}

	setUp() {
		this.direction = Math.random() > 0.5 ? 1 : -1;

		this.scene.wordPlatforms.add(this);
		if (this.body.width < 200) {
			this.setColor('#0000FF');
		}

		this.setX(this.direction > 0 ? -300 - this.body.width : 500);
		this.setY(
			Math.min(
				this.scene.player.y + 200 - 800 * Math.random(),
				Math.random() * 150 + -300
			)
		);
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
