export default class Monster extends Phaser.Physics.Matter.Sprite {
  constructor(data, stats) {
    const {
      scene, x, y, texture, frame,
    } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.scene.add.existing(this);
    this.stats = stats;
    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    const monsterCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'monsterCollider' });
    const monsterSensor = Bodies.circle(this.x, this.y, 24, { isSensor: true, label: 'monsterSensor' });
    this.followText = this.scene.add.text(this.x - 30, this.y - 20, `HP: ${this.stats.hp}`, { fontSize: 12, align: 'center' });
    const compoundBody = Body.create({
      parts: [monsterCollider, monsterSensor],
      frictionAir: 0.25,
    });
    this.setExistingBody(compoundBody);
    this.setFixedRotation();
  }

  static preload(scene, name, image, atlas_json, anim_name, anim_json) {
    scene.load.atlas(name, image, atlas_json);
    scene.load.animation(anim_name, anim_json);
  }

  get velocity() {
    return this.body.velocity;
  }

  update() {
    if (this.followText != null && this.followText != undefined) {
      this.followText.setPosition(this.x - 20, this.y - 20);
      this.followText.setText(`HP: ${this.stats.hp}`);
    }

    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
      this.anims.play(`${this.texture.key}_walk`, true);
    } else {
      this.anims.play(`${this.texture.key}_idle`, true);
    }

    const { player } = this.scene;

    if (Math.abs(this.x - player.x) < 85 && Math.abs(this.y - player.y) < 85) {
      if (this.x > player.x + 15 && this.y > player.y + 20) {
        this.changeVelocity(-1, -1);
      } else if (this.x < player.x + 15 && this.y > player.y) {
        this.changeVelocity(1, -1);
      } else if (this.x < player.x + 15 && this.y < player.y) {
        this.changeVelocity(1, 1);
      } else if (this.x > player.x + 15 && this.y < player.y) {
        this.changeVelocity(-1, 1);
      }
    }
    if (Math.abs(this.x - player.x) < 25 && Math.abs(this.y - player.y) < 25) {
      player.hp -= this.stats.power;
    }
  }

  changeVelocity(x = Math.random() < 0.5 ? -4 : 4, y = Math.random() < 0.5 ? -4 : 4) {
    const speed = 1;
    const monsterVelocity = new Phaser.Math.Vector2();
    monsterVelocity.x = x;
    monsterVelocity.y = y;
    monsterVelocity.normalize(1);
    monsterVelocity.scale(speed);
    this.setVelocity(monsterVelocity.x, monsterVelocity.y);
  }
}