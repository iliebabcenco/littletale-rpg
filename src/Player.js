export default class Player extends Phaser.Physics.Matter.Sprite {
    constructor(data) {
        let { scene, x, y, texture, frame } = data;
        super(scene.matter.world, x, y, texture, frame)
        this.scene.add.existing(this)
        this.displayWidth = 100
        this.displayHeight = 100

        this.hp = 300
        this.experience = 0
        this.level = Math.round(((Math.sqrt(250 + 20 * this.experience) - 5) / 10)) //mushroom = 10 exp
        this.power = (this.level * 25) - 10

        const { Body, Bodies } = Phaser.Physics.Matter.Matter
        let playerCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'playerCollider' })
        let playerSensor = Bodies.circle(this.x, this.y, 24, { isSensor: true, label: 'playerSensor' })
        const compoundBody = Body.create({
            parts: [playerCollider, playerSensor],
            frictionAir: 0.25,
        })
        this.inputKeys = this.scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            attack: Phaser.Input.Keyboard.KeyCodes.SPACE
        })
        this.setExistingBody(compoundBody)
        this.setFixedRotation()

    }

    create() {
        this.scene.text = this.scene.add.text(300, 100, 'Lvl: ' + this.level, { fontSize: 40 });
    }
    static preload(scene) {
        // scene.load.atlas('mainchar', '../assets/maincharacter/main/mainchar.png', '../assets/maincharacter/main/mainchar_atlas.json')
        // scene.load.animation('mainchar_anim', '../assets/maincharacter/mainchar_anim.json')

        scene.load.atlas('mainchar', '../assets/maincharacter/main/mainchar.png', '../assets/maincharacter/main/mainchar_atlas.json')
        scene.load.animation('mainchar_anim', '../assets/maincharacter/main/mainchar_anim.json')
    }

    get velocity() {
        return this.body.velocity;
    }

    update() {
        const speed = 2.5;
        if (this.scene.text != null) {
            this.scene.text.destroy()
        }
        let playerVelocity = new Phaser.Math.Vector2();
        if (this.inputKeys.left.isDown) {
            playerVelocity.x = -1
        } else if (this.inputKeys.right.isDown) {
            playerVelocity.x = 1
        }
        if (this.inputKeys.up.isDown) {
            playerVelocity.y = -1
        } else if (this.inputKeys.down.isDown) {
            playerVelocity.y = 1
        }
        playerVelocity.normalize(1)
        playerVelocity.scale(speed);
        this.setVelocity(playerVelocity.x, playerVelocity.y)

        if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
            this.anims.play('mainchar_walk', true)
            this.scene.text = this.scene.add.text(this.x - 20, this.y - 30, 'Lvl: ' + this.level, { fontSize: 12 });
        } else if (this.inputKeys.attack.isDown) {
            this.anims.play('mainchar_attack', true)
        }
        else {
            this.scene.text = this.scene.add.text(this.x - 20, this.y - 30, 'Lvl: ' + this.level, { fontSize: 12 });
            this.anims.play('mainchar_idle', true)
        }


    }
}