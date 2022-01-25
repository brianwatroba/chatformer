import ChatJumpLevel from "./ChatJumpLevel"

export default class Level2 extends ChatJumpLevel {
    constructor(debug = false) {
        super("Level2", debug)
    }
    init(client) {
        super.init(client)
    }
    create() {
        super.create()
        this.enemiesController.addFireWall(-100, 0, this.map.heightInPixels);
    }
    update() {
        super.update()
    }
    onFinishLevel() {
        super.onFinishLevel()
    }
}

