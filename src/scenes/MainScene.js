import Phaser from 'phaser';
import Monster from "../Monster";
import Player from "../Player";
import Button from '../objects/Button';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
        this.monsters = []
        this.timeEvents = []
    }

    preload() {
        Player.preload(this);
        Monster.preload(this, 'bandit', '../assets/monsters/bandit.png', '../assets/monsters/bandit_atlas.json', 'bandit_anim', '../assets/monsters/bandit_anim.json')
        Monster.preload(this, 'mushroom', '../assets/monsters/mushroom.png', '../assets/monsters/mushroom_atlas.json', 'mushroom_anim', '../assets/monsters/mushroom_anim.json')
        Monster.preload(this, 'gnoll', '../assets/monsters/gnoll.png', '../assets/monsters/gnoll_atlas.json', 'gnoll_anim', '../assets/monsters/gnoll_anim.json')
        Monster.preload(this, 'golem', '../assets/monsters/golem.png', '../assets/monsters/golem_atlas.json', 'golem_anim', '../assets/monsters/golem_anim.json')

    }

    create() {

        this.model = this.sys.game.globals.model;
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('summer', 'tiles', 32, 32)
        const layer1 = map.createStaticLayer('Tile Layer 1', tileset, 0, 0)
        const layer2 = map.createStaticLayer('Tile Layer 2', tileset, 0, 0)
        layer1.setCollisionByProperty({ colides: true })
        this.matter.world.convertTilemapLayer(layer1)
        layer2.setCollisionByProperty({ colides: true })
        this.matter.world.convertTilemapLayer(layer2)

        this.menuButton = new Button(this, 100, 30, 'blueButton1', 'blueButton2', 'Restart', 'Title');

        this.musicButton = this.add.image(250, 30, 'playMusic');
        this.musicButton.setScale(0.05)
        this.musicButton.setInteractive();

        this.musicButton.on('pointerdown', () => {
            this.model.musicOn = !this.model.musicOn;
            this.updateAudio();
        });

        this.updateAudio();

        this.bandit1 = new Monster({ scene: this, x: 500, y: 65, texture: 'bandit', frame: 'bandit_idle_1' }, { hp: 2000, power: 10, exp: 200, type: "bandit" });
        this.monsters.push(this.bandit1)


        this.bandit2 = new Monster({ scene: this, x: 510, y: 75, texture: 'bandit', frame: 'bandit_idle_1' }, { hp: 2000, power: 10, exp: 200, type: "bandit" });
        this.monsters.push(this.bandit2)
        this.bandit3 = new Monster({ scene: this, x: 500, y: 85, texture: 'bandit', frame: 'bandit_idle_1' }, { hp: 2000, power: 10, exp: 200, type: "bandit" });
        this.monsters.push(this.bandit3)

        this.mushroom1 = new Monster({ scene: this, x: 300, y: 75, texture: 'mushroom', frame: 'normalmushroom_idle_1' }, { hp: 1500, power: 7, exp: 150, type: "mushroom" });
        this.mushroom2 = new Monster({ scene: this, x: 325, y: 225, texture: 'mushroom', frame: 'normalmushroom_idle_1' }, { hp: 1500, power: 7, exp: 150, type: "mushroom" });
        this.mushroom3 = new Monster({ scene: this, x: 110, y: 380, texture: 'mushroom', frame: 'normalmushroom_idle_1' }, { hp: 1500, power: 7, exp: 150, type: "mushroom" });
        this.mushroom4 = new Monster({ scene: this, x: 225, y: 300, texture: 'mushroom', frame: 'normalmushroom_idle_1' }, { hp: 1500, power: 7, exp: 150, type: "mushroom" });
        this.mushroom5 = new Monster({ scene: this, x: 40, y: 500, texture: 'mushroom', frame: 'normalmushroom_idle_1' }, { hp: 1500, power: 7, exp: 150, type: "mushroom" });
        this.mushroom6 = new Monster({ scene: this, x: 310, y: 330, texture: 'mushroom', frame: 'normalmushroom_idle_1' }, { hp: 1500, power: 7, exp: 150, type: "mushroom" });

        this.monsters.push(this.mushroom1)
        this.monsters.push(this.mushroom2)
        this.monsters.push(this.mushroom3)
        this.monsters.push(this.mushroom4)
        this.monsters.push(this.mushroom5)
        this.monsters.push(this.mushroom6)

        this.gnoll1 = new Monster({ scene: this, x: 380, y: 480, texture: 'gnoll', frame: 'gnollbrute_idle_1' }, { hp: 1750, power: 500, exp: 175, type: "gnoll" });
        this.gnoll2 = new Monster({ scene: this, x: 485, y: 400, texture: 'gnoll', frame: 'gnollbrute_idle_1' }, { hp: 1750, power: 500, exp: 175, type: "gnoll" });
        this.gnoll3 = new Monster({ scene: this, x: 550, y: 185, texture: 'gnoll', frame: 'gnollbrute_idle_1' }, { hp: 1750, power: 500, exp: 175, type: "gnoll" });
        this.gnoll4 = new Monster({ scene: this, x: 500, y: 285, texture: 'gnoll', frame: 'gnollbrute_idle_1' }, { hp: 1750, power: 500, exp: 175, type: "gnoll" });
        // console.log(this.gnoll1.stats.hp)
        this.monsters.push(this.gnoll1)
        this.monsters.push(this.gnoll2)
        this.monsters.push(this.gnoll3)
        this.monsters.push(this.gnoll4)

        this.golem1 = new Monster({ scene: this, x: 550, y: 550, texture: 'golem', frame: 'golem_idle_1' }, { hp: 15000, power: 1000, exp: 1500, type: "golem" });
        this.golem2 = new Monster({ scene: this, x: 220, y: 550, texture: 'golem', frame: 'golem_idle_1' }, { hp: 15000, power: 1000, exp: 1500, type: "golem" });
        this.monsters.push(this.golem1)
        this.monsters.push(this.golem2)

        this.player = new Player({ scene: this, x: 65, y: 290, texture: 'mainchar', frame: 'idle_1' });
        this.player.setOnCollide()
        this.monsters.forEach((monster) => {
            if (monster !== undefined)
                this.timeEvents.push(this.time.addEvent({ delay: Math.random() * (5000 - 3000) + 3000, callback: monster.changeVelocity, callbackScope: monster, loop: true }));

        })


    }

    update() {
        this.monsters.forEach(monster => {
            monster.update()
        })
        this.player.update()

    }

    updateAudio() {
        if (this.model.musicOn === false) {
            this.musicButton.setTexture('muteMusic');
            this.sys.game.globals.bgMusic.stop();
            this.model.bgMusicPlaying = false;
        } else {
            this.musicButton.setTexture('playMusic');
            if (this.model.bgMusicPlaying === false) {
                this.sys.game.globals.bgMusic.play();
                this.model.bgMusicPlaying = true;
            }
        }

    }

}