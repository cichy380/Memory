import utilities from './utilities';
import Card from './Card';

export default class Game {
    constructor(players, colors, icons) {
        const cardsNumber = 6;

        let _colors = utilities.shuffle(colors);
        let _icons = utilities.shuffle(icons);

        this.players = players;
        this.cards = [];

        // generating cards
        for(let i=0; i<cardsNumber; i+=1) {
            let card = new Card(_colors[i], _icons[i]);
            this.cards.push(card);
        }
    }

    getCards() {
        return this.cards;
    }
}
