import config from './config';
import utilities from './utilities';
import Card from './Card';

export default class Game {

    constructor(players) {
        this.cards = this.generateCards(config.colors, config.icons);
        this.players = players;
    }

    generateCards(colors, icons) {
        let cards = [],
            shuffledColors = utilities.shuffle(colors),
            shuffledIcons = utilities.shuffle(icons),
            uniqueCardNumbers = config.cardNumbers / 2;

        for(let i=0; i<uniqueCardNumbers; i+=1) {
            let card = new Card(shuffledColors[i], shuffledIcons[i]);
            cards.push(card);
            cards.push(utilities.cloneObject(card)); // push of generated card copy (need pairs)
        }

        return utilities.shuffle(cards);
    }

    getCards() {
        return this.cards;
    }

    getUnflippedCards() {
        return this.cards.filter((card) => !card.isFlipped);
    }

    checkCards(cards) {
        return cards[0].id === cards[1].id;
    }
}
