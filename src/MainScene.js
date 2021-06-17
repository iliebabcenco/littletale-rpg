import Monster from "./Monster";
import Player from "./Player";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        Player.preload(this);
        Monster.preload(this, 'bandit', '../assets/monsters/bandit.png', '../assets/monsters/bandit_atlas.json', 'bandit_anim', '../assets/monsters/bandit_anim.json')
        this.load.image('tiles', '../assets/textures/summer.png')
        this.load.tilemapTiledJSON('map', '../assets/textures/map.json')
    }

    create() {
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('summer', 'tiles', 32, 32)
        const layer1 = map.createStaticLayer('Tile Layer 1', tileset, 0, 0)
        const layer2 = map.createStaticLayer('Tile Layer 2', tileset, 0, 0)
        layer1.setCollisionByProperty({ colides: true })
        this.matter.world.convertTilemapLayer(layer1)
        layer2.setCollisionByProperty({ colides: true })
        this.matter.world.convertTilemapLayer(layer2)

        this.bandit1 = new Monster({ scene: this, x: 500, y: 65, texture: 'bandit', frame: 'bandit_idle_1' });
        this.bandit2 = new Monster({ scene: this, x: 510, y: 75, texture: 'bandit', frame: 'bandit_idle_1' });
        this.bandit3 = new Monster({ scene: this, x: 500, y: 85, texture: 'bandit', frame: 'bandit_idle_1' });

        this.player = new Player({ scene: this, x: 65, y: 290, texture: 'mainchar', frame: 'herald_idle_1' });

        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
    }

    update() {
        this.player.update()
        this.bandit1.update()
        this.bandit2.update()
        this.bandit3.update()
    }

}