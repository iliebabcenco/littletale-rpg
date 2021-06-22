import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Matter.Sprite {
  constructor(data, name = 'unnamed') {
    const {
      scene, x, y, texture, frame,
    } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.scene.add.existing(this);
    this.displayWidth = 100;
    this.displayHeight = 100;
    this.name = name;
    this.experience = 0;
    this.level = Math.round(((Math.sqrt(25 + 10 * this.experience) - 5) / 10));
    this.power = (this.level * 1.05) + 15;
    this.hp = 300 + this.level * 10;
    this.playerFollowText = this.scene.add.text(this.x - 30, this.y - 20, `HP: ${this.hp} Level: ${this.level}`, { fontSize: 12, align: 'center' });
    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    const playerCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'playerCollider' });
    const playerSensor = Bodies.circle(this.x, this.y, 24, { isSensor: true, label: 'playerSensor' });
    const compoundBody = Body.create({
      parts: [playerCollider, playerSensor],
      frictionAir: 0.25,
    });
    this.inputKeys = this.scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      attack: Phaser.Input.Keyboard.KeyCodes.SPACE,
    });
    this.setExistingBody(compoundBody);
    this.setFixedRotation();
  }

  static preload(scene) {
    scene.load.atlas('mainchar', 'assets/maincharacter/main/mainchar.png', 'assets/maincharacter/main/mainchar_atlas.json');
    scene.load.animation('mainchar_anim', 'assets/maincharacter/main/mainchar_anim.json');
  }

  get velocity() {
    return this.body.velocity;
  }

  update() {
    const speed = 2.5;
    const playerVelocity = new Phaser.Math.Vector2();
    if (this.inputKeys.left.isDown) {
      playerVelocity.x = -1;
    } else if (this.inputKeys.right.isDown) {
      playerVelocity.x = 1;
    }
    if (this.inputKeys.up.isDown) {
      playerVelocity.y = -1;
    } else if (this.inputKeys.down.isDown) {
      playerVelocity.y = 1;
    }
    playerVelocity.normalize(1);
    playerVelocity.scale(speed);
    this.setVelocity(playerVelocity.x, playerVelocity.y);

    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
      this.anims.play('mainchar_walk', true);
    } else if (this.inputKeys.attack.isDown) {
      this.anims.play('mainchar_attack', true);
      this.scene.monsters.forEach((monster) => {
        if (Math.abs(this.x - monster.x) < 40 && Math.abs(this.y - monster.y) < 40) {
          monster.stats.hp -= this.power;
          if (monster.stats.hp <= 0) {
            this.experience += monster.stats.exp;
            this.scene.timeEvents[this.scene.monsters.indexOf(monster)].remove(false);
            this.scene.timeEvents.splice(this.scene.monsters.indexOf(monster), 1);
            this.scene.monsters.splice(this.scene.monsters.indexOf(monster), 1);
            monster.followText.destroy();
            monster.destroy();
            const currentLevel = this.level;
            this.level = Math.round(((Math.sqrt(250 + 20 * this.experience) - 5) / 10));
            if (currentLevel < this.level) {
              this.power = (this.level * 1.05);
              this.hp = 300 + this.level * 10;
            }
          }
        }
      });
    } else {
      this.anims.play('mainchar_idle', true);
    }
    if (this.playerFollowText !== null && this.playerFollowText !== undefined) {
      this.playerFollowText.setPosition(this.x - 30, this.y - 20);
      this.playerFollowText.setText(`HP: ${this.hp} Level: ${this.level}`);
    }
  }
}