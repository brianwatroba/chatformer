import ChatJumpLevel from "./ChatJumpLevel"

export default class Level2 extends ChatJumpLevel {
    constructor(debug = false) {
        super("Level2", debug)
    }
    init(client) {
        console.log('Level2 init')
        console.log(client)
        console.log(this.msgs)
        super.init(client)
    }
    create() {
        super.create()
    }
    update() {
        super.update()
    }
    onStartLevel() {
        console.log('Level2 started')
    }
    onFinishLevel() {
    }
}

