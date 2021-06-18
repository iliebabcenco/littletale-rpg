import Phaser from 'phaser';
import config from './config/config';
import MainScene from "./scenes/MainScene";
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import OptionsScene from './scenes/OptionsScene';
import CreditsScene from './scenes/CreditsScene';
import GameScene from './scenes/GameScene';
import Model from './Classes/Model';


class Game extends Phaser.Game {
    constructor() {
        console.log('Game constructor loaded')
        super(config);
        this.scene.add('Boot', BootScene);
        this.scene.add('Preloader', PreloaderScene);
        console.log('Boot and Preloader Scenes loaded')
        this.scene.add('Title', TitleScene);
        console.log('Title scene loaded')
        this.scene.add('Options', OptionsScene);
        console.log('Options scene loaded')
        this.scene.add('Credits', CreditsScene);
        console.log('Credits scene loaded')
        this.scene.add('Main', MainScene);
        console.log('Main scene loaded')
        this.scene.add('Game', GameScene);
        console.log('Game scene loaded')
        this.scene.start('Boot');

        const model = new Model();
        this.globals = { model, bgMusic: null };
    }
}

window.game = new Game();


// new Phaser.Game(config);