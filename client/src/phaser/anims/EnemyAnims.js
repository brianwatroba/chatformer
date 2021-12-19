import Phaser from 'phaser'

const createEnemyAnims = (anims) => {
    anims.create({
        key: 'bird_fly',
        frames: anims.generateFrameNumbers('bird_fly', { start: 0, end: 8 }),
        frameRate: 20,
        repeat: -1,
    });
}

export {
    createEnemyAnims
}
