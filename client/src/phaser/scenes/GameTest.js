import Phaser from 'phaser';
import { debugDraw } from '../utils/debug'

export default class GameTest extends Phaser.Scene {
    constructor() {
        super('GameTest');
    }

    preload() {
        this.load.spritesheet(
            'dude_idle',
            'assets/main_character/Idle (32x32).png',
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );
        this.load.spritesheet('dude_run', 'assets/main_character/Run (32x32).png', {
            frameWidth: 32,
            frameHeight: 32,
        });

        this.load.spritesheet(
            'dude_jump',
            'assets/main_character/Jump (32x32).png',
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );
        this.load.spritesheet('dude_hit', 'assets/main_character/Hit (32x32).png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet(
            'dude_double_jump',
            'assets/main_character/Double Jump (32x32).png',
            {
                frameWidth: 32,
                frameHeight: 32,
            }
        );

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('dude_idle', {
                start: 0,
                end: 10,
            }),
            frameRate: 20,
        });

        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('dude_jump', {
                start: 0,
                end: 1,
            }),
            frameRate: 20,
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude_run', {
                start: 0,
                end: 11,
            }),
            frameRate: 20,
            repeat: -1,
        });

        // Load Tileset
        this.load.image("terrain", "assets/Terrain (16x16).png");
        this.load.tilemapTiledJSON("map", "assets/level1.json");
    }

    create() {
        // Load Tileset
        const map = this.make.tilemap({ key: "map" });

        const objectLayer = map.getObjectLayer('Spawn');
        console.log(objectLayer.objects)
        const { x: start_x, y: start_y } = objectLayer.objects[1]

        // Set up the player character
        window.player = this.player = this.add.player({
            x: start_x,
            y: start_y,
            image: 'dude_idle',
        });

        // Create the ground layer
        const tileset = map.addTilesetImage("Terrain (16x16)", "terrain");
        const groundLayer = map.createStaticLayer('Platforms', tileset, 0, 0);
        groundLayer.setCollisionByProperty({ collides: true });
        this.physics.add.collider(this.player, groundLayer);

        // debugDraw(groundLayer, this)

        // Place the player above the tile layers
        this.player.setDepth(10);
        this.cameras.main.startFollow(this.player);
    }

    update(time, delta) {
        if (this.gameOver) {
            return;
        }
        this.player.update()
    }
}
