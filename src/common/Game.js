import config from './config';
import utilities from './utilities';
import Card from './Card';

export default class Game {

    constructor(players, colors, icons) {
        this.cards = this.generateCards(colors, icons);
        this.players = [];

        for (let playerName of players) {
            this.players.push({
                name: playerName,
                points: 0,
                time: 0
            });
        }
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

    getPlayers() {
        return this.players;
    }

    getPlayer(idx) {
        return this.players[idx];
    }

    checkCards(cards) {
        return cards[0].id === cards[1].id;
    }

    getNextPlayer(playerIndex) {
        return (playerIndex < (this.players.length - 1)) ? (playerIndex + 1) : 0;
    }
}
