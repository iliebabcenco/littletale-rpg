import Phaser from 'phaser';
import config from './config/config';
import MainScene from './scenes/MainScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import OptionsScene from './scenes/OptionsScene';
import CreditsScene from './scenes/CreditsScene';
import Model from './Classes/Model';
import { setGame } from './api/scores'

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Main', MainScene);
    this.scene.start('Boot');
    const model = new Model();
    this.globals = { model, bgMusic: null };
  }

}

// setGame()

window.game = new Game();
