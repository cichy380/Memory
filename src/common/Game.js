import Card from './Card';

export default class Game {
    constructor(players, colors, icons) {
        const cardsNumber = 6;

        let _colors = this.shuffle(colors);
        let _icons = this.shuffle(icons);

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

    /**
     * Shuffles array in place
     * @param {Array} a items An array containing the items
     * @source https://stackoverflow.com/a/6274381/1842159
     */
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
}
