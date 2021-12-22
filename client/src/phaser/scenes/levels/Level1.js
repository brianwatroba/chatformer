import ChatJumpLevel from "./ChatJumpLevel"

export default class Level1 extends ChatJumpLevel {
    constructor(debug = false) {
        super("Level1", debug)
    }
    init(data) {
        super.init(data)
    }
    create() {
        super.create()
    }
    update() {
        super.update()
    }
    onStartLevel() {
        console.log('Level1 started')
    }
    onFinishLevel() {
        this.scene.start('Level2');
    }
}
