export default class Monster extends Phaser.Physics.Matter.Sprite {
    constructor(data) {
        let { scene, x, y, texture, frame } = data;
        super(scene.matter.world, x, y, texture, frame)
        this.scene.add.existing(this)
        const { Body, Bodies } = Phaser.Physics.Matter.Matter
        let monsterCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'monsterCollider' })
        let monsterSensor = Bodies.circle(this.x, this.y, 24, { isSensor: true, label: 'monsterSensor' })
        const compoundBody = Body.create({
            parts: [monsterCollider, monsterSensor],
            frictionAir: 0.25,
        })
        this.setExistingBody(compoundBody)
        this.setFixedRotation()
    }

    static preload(scene, name, image, atlas_json, anim_name, anim_json) {
        scene.load.atlas(name, image, atlas_json)
        scene.load.animation(anim_name, anim_json)
    }



    get velocity() {
        return this.body.velocity;
    }

    update() {
        const speed = 0.5;
        let monsterVelocity = new Phaser.Math.Vector2();

        monsterVelocity.normalize(1)
        monsterVelocity.scale(speed);
        this.setVelocity(monsterVelocity.x, monsterVelocity.y)
        if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
            this.anims.play(this.texture.key + '_walk', true)
        } else {
            this.anims.play(this.texture.key + '_idle', true)
        }
    }
}