import Phaser from 'phaser';
import blueButton1Img from '../../assets/ui/blue_button02.png';
import blueButton2Img from '../../assets/ui/blue_button03.png';
import { setName } from '../util/PlayerNameUtil'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('blueButton1', blueButton1Img);
    this.load.image('blueButton2', blueButton2Img);
    this.load.html('input', '../assets/form/username_input.html');
    this.load.image('backgroundImg', '../assets/1.jpg');

  }

  create() {
    this.add.image(380, 250, 'backgroundImg');
    this.nameInput = this.add.dom(400, 300).createFromCache('input').setOrigin(0.5);

    this.message = this.add
      .text(400, 250, 'Enter username and press ENTER', {
        color: '#FFFFFF',
        fontSize: 30,
        fontStyle: 'bold',
      })
      .setOrigin(0.5);

    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER,
    );
    this.enter.on('down', () => {
      const name = this.nameInput.getChildByName('username').value;
      setName(name);
      this.scene.start('Preloader');
    });
  }


}