import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin"

export default {
    width: 700,
    height: 600,
    backgroundImg: '../../assets/background.png',
    type: Phaser.AUTO,
    parent: 'survival-game',
    scale: {
        zoom: 2,
    },
    physics: {
        default: 'matter',
        matter: {
            debug: false,
            gravity: { y: 0 },
        }
    },
    plugins: {
        scene: [
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }
}