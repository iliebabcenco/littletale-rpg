import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    preload() {
        this.load.image('backgroundImg', '../assets/background.png');
        this.add.image(380, 250, 'backgroundImg');
    }

    create() {
        this.scene.start('Preloader');
    }
}