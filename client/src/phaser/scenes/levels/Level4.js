import ChatJumpLevel from "./ChatJumpLevel"

export default class Level4 extends ChatJumpLevel {
    constructor(debug = false) {
        super("Level4", debug)
    }
    init(client) {
        super.init(client)
    }
    create() {
        super.create()
        this.enemiesController.addFireWall(0, 0, 0, this.map.heightInPixels, this.player);
    }
    update() {
        super.update()
    }
    onFinishLevel() {
        super.onFinishLevel()
    }
}

