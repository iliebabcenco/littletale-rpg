import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    preload() {
        this.load.image('backgroundImg', '../assets/1.jpg');
        this.add.image(380, 250, 'backgroundImg');
    }

    create() {
        this.scene.start('Preloader');
    }
}