import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin"

export default {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'survival-game',

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH

    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
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