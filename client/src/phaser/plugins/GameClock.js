import Phaser from 'phaser';

export default class GameClock extends Phaser.GameObjects.Text {
    
    constructor({scene, timerEvent, runningTimeMS}) {
        var style = {
            fontSize: '26px',
            fill: '#000000',
        };
        super(scene, 10,10, "HELLO", style);

        this.scene = scene;
        this.timerEvent = timerEvent;
        this.prevRunningTimeMS = runningTimeMS;
        scene.add.existing(this);

        this.setScrollFactor(0,0);
        this.setDepth(1);
        console.log("ELAPSED: " + this.timerEvent.getElapsed())
        this.text = this.getTimeString(this.timerEvent.getElapsed());
    }

    update() {
        this.text = this.getTimeString(this.prevRunningTimeMS + this.timerEvent.getElapsed());
    }

    getTimeString(totalMS) {
        var milliseconds = Math.floor(totalMS % 1000);
        var millisecondsText = "" + milliseconds;
        if (milliseconds < 10) {
            millisecondsText = "00" + milliseconds;
        }
        else if (milliseconds < 100) {
            millisecondsText = "0" + milliseconds;
        }
        
        var seconds = Math.floor((totalMS / 1000) % 60);
        var secondsText = seconds < 10 ? "0" + seconds : seconds;
        var minutes = Math.floor(totalMS / 60000);
        var minutesText = minutes < 10 ? "0" + minutes : minutes;

        return minutesText + ":" + secondsText + ":" + millisecondsText;
    }

    getTotalTime() {
        return this.prevRunningTimeMS + this.timerEvent.getElapsed();
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
