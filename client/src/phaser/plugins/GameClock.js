import Phaser from 'phaser';

export default class GameClock extends Phaser.GameObjects.Text {
    
    constructor({scene, timerEvent, runningTimeSeconds}) {
        var style = {
            fontSize: '26px',
            fill: '#000000',
        };
        super(scene, 10,10, "HELLO", style);

        this.scene = scene;
        this.timerEvent = timerEvent;
        this.prevRunningTimeSeconds = runningTimeSeconds;
        scene.add.existing(this);

        this.setScrollFactor(0,0);
        this.setDepth(1);

        this.text = this.getTimeString(this.timerEvent.getElapsedSeconds());
    }

    update() {
        this.text = this.getTimeString(this.prevRunningTimeSeconds + this.timerEvent.getElapsedSeconds());
    }

    getTimeString(totalSeconds) {
        var seconds = Math.floor(totalSeconds % 60);
        var secondsText = seconds < 10 ? "0" + seconds : seconds;
        var minutes = Math.floor(totalSeconds / 60);
        var minutesText = minutes < 10 ? "0" + minutes : minutes;

        return minutesText + ":" + secondsText;
    }
}

export class GameClockPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);
        pluginManager.registerGameObject("gameclock", this.createGameClock);
    }

    createGameClock(params) {
        return new GameClock({ scene: this.scene, ...params });
    }
}
