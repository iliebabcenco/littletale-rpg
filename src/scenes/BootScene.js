import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        this.load.image('backgroundImg', '../assets/background.png');
        this.add.image(380, 250, 'backgroundImg');
    }

    create() {

        this.scene.start('Preloader');
    }
};