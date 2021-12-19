import Phaser from 'phaser'

const createPlayerAnims = (anims) => {
    anims.create({
        key: 'idle',
        frames: anims.generateFrameNumbers('dude_idle', {
            start: 0,
            end: 10,
        }),
        frameRate: 20,
    });

    anims.create({
        key: 'right',
        frames: anims.generateFrameNumbers('dude_run', {
            start: 0,
            end: 11,
        }),
        frameRate: 20,
        repeat: -1,
    });

    anims.create({
        key: 'jump',
        frames: anims.generateFrameNumbers('dude_jump', {
            start: 0,
            end: 1,
        }),
        frameRate: 20,
    });

    anims.create({
        key: 'double_jump',
        frames: anims.generateFrameNumbers('dude_double_jump', {
            start: 0,
            end: 4,
        }),
        frameRate: 20,
        repeat: 0,
    });
}

export {
    createPlayerAnims
}
