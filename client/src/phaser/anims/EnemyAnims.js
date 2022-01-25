const createEnemyAnims = (anims) => {
    anims.create({
        key: "bird_fly",
        frames: anims.generateFrameNumbers("bird_fly", { start: 0, end: 8 }),
        frameRate: 20,
        repeat: -1,
    });

    anims.create({
        key: "fireball",
        frames: anims.generateFrameNumbers("fireball", {start: 0, end: 29}),
        frameRate: 12,
        repeat: -1,
    })
};

export { createEnemyAnims };
