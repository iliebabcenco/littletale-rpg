import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
  }

  create() {
    this.add.image(400, 300, 'logo');
  }
}
