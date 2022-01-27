const createItemAnims = (anims) => {
    anims.create({
        key: "flag_idle",
        frames: anims.generateFrameNumbers("flag_idle", {start: 0, end: 9}),
        frameRate: 20,
        repeat: -1,
    })
};

export { createItemAnims };
