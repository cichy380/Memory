import Vue from 'vue';
import config from './../../common/config';
import Game from './../../common/Game';

let game = new Game(['Marcin', 'Ania'], config.colors, config.icons);

export default Vue.extend({
    data() {
        return {
            cards: [],
            round: {},
            players: [],
            playerChange: false,
            mismatched: config.cardNumbers,
            gameOver: false,
        }
    },

    mounted() {
        this.cards = game.getCards();
        this.players = game.getPlayers();
        this.round = {
            number: 1, // start game = first round
            currenPlayer: 0, // index of player (player #1 start)
            flippedCards: [],
        };



        // [].forEach.call($cards, ($item) => {
        //     this.cards.push(new Card($item));
        // });
    },

    methods: {
        flip(cardIndex) {
            // player can see only 2 cards ..
            if (this.round.flippedCards.length < 2) {
                this.cards[cardIndex].flip();
                this.round.flippedCards.push(this.cards[cardIndex]);

                // .. if player flipped 2 cards ..
                if (this.round.flippedCards.length === 2) {
                    // .. check if they are the same ..
                    if (game.checkCards(this.round.flippedCards) === true) {
                        // .. if YES - add point ..
                        this.players[this.round.currenPlayer].points += 1;
                        console.info('Cards matched. Got one point!');

                        // .. reset info aobut flipped cards ..
                        this.round.flippedCards = [];

                        // .. mismatched cards number (update)
                        this.mismatched -= 2;

                        // if all cards matched it means game over
                        if (this.mismatched === 0) {
                            console.info('Game over!');
                            this.gameOver = true;
                        }
                    }
                    else {
                        this.playerChange = true;
                    }
                }
            }
        },

        nextPlayer() {
            this.playerChange = false;

            // hide the cards ..
            this.round.flippedCards.forEach((card) => {
                card.flip(false);
            });

            // .. player change ..
            this.round.currenPlayer = game.getNextPlayer(this.round.currenPlayer);

            // if this is Player #1 turn, it means it is new round
            if (this.round.currenPlayer === 0) {
                this.round.number += 1;
            }

            // .. reset info aobut flipped cards
            this.round.flippedCards = [];
        },
    },
});
