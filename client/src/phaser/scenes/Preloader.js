import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader')
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

        // Load Tileset
        this.load.image("terrain", "assets/Terrain (16x16).png");
        this.load.tilemapTiledJSON("map", "assets/level1.json");
    }

    create() {
        this.scene.start('Start')
    }
}