import config from './config';
import util from './utilities';

export default class GamePlayer {
    constructor(name) {
        this.id = this.generateId();
        this.name = name;
        this.color = util.getRandomItemFromArray(config.colors);
        // this.color = config.colors[0];
        this.points = 0;
    }

    generateId() {
        return 'pid' + Math.random().toString(36).substr(2, 9);
    }
}
