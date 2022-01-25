import Phaser from 'phaser'

export default class FireBall extends Phaser.Physics.Arcade.Sprite {
    
    constructor(scene, x, y) {
        super(scene, x, y, 'fireball')

        // Add to update and display list.
        scene.add.existing(this);

        //scene.physics.world.on(Phaser.Physics.Arcade.Events.TILE_COLLIDE, this._handleTileCollision, this)
    }

    update() {
        
    }

    inchRight(d, firstRun) {
        var delay = firstRun ? d : 2000;
        
        this.scene.tweens.add( {
            targets: this,
            x: "+=70",
            duration: 1500,
            yoyo: false, 
            ease: 'Power2',
            delay: delay,
            onComplete: function() {
                this.inchRight(delay, false);
            },
            onCompleteScope: this
        })
    }

    init(index) {
        
        this.body.setAllowGravity(false);
        this.setImmovable();
        this.setScale(2.5);
        
        this.body.setSize(25,10, true)
        this.setOrigin(.5, .5);
        this.body.setOffset(this.body.offset.x-8, this.body.offset.y + 5)
        
        this.inchRight(index * 200, true);
        
        this.scene.tweens.add( {
            y: "+=" + Math.floor(10 + Math.random() * 20),
            targets: this,
            duration: 700, 
            yoyo: true, 
            repeat: -1,
            ease: 'EaseOutIn', delay: Math.random() * 200
        });

        this.anims.play({key: 'fireball', startFrame: index * 2 % 29} );
        
    }

    _handleTileCollision(obj, tile) {
        
    }
}
