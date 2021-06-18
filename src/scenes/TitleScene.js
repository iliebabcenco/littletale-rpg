
import Phaser from 'phaser';
import Button from '../objects/Button';
import config from '../config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.add.image(380, 250, 'backgroundImg');
  }

  create() {
    // Title
    this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 7,
      'Little Tale RPG', { fontSize: '64px', fill: '#fff' });
    this.titleText.setOrigin(0.5);

    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'MainScene');

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

};