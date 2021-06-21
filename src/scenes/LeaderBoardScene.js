import Phaser from 'phaser';
import Button from '../objects/Button';
import { addScore, getScores } from '../api/scores'

export default class LeaderBoardScene extends Phaser.Scene {
    constructor() {
        super('LeaderBoard');
    }

    preload() {

    }

    create() {
        const getTopScores = async () => {
            const scores = await getScores()
            let y = 150
            scores.forEach(element => {

                this.add.text(200, y, (scores.indexOf(element) + 1) + " User: " + element[0] + " score: " + element[1] + " exp", { fontSize: 24 });
                y += 40
            });
        }
        this.text = this.add.text(250, 100, 'Leaderboard: ', { fontSize: 40 });
        getTopScores()
        this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    }
}