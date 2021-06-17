import Player from "./Player.js";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        Player.preload(this);
        this.load.image('tiles', 'assets/images/textures/summer.png')
        this.load.tilemapTiledJSON('map', 'assets/images/textures/map.json')


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
    }

}