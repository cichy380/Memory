import Vue from 'vue';
import config from './../../common/config';
import Game from './../../common/Game';
import GamePlayer from './../../common/GamePlayer';
import GamePlayersList from './../../common/GamePlayersList';

let gamePlayersList = new GamePlayersList([new GamePlayer('Ania'), new GamePlayer('Marcin')]);
let game = new Game(gamePlayersList.players);

export default Vue.extend({
    data() {
        return {
            cards: game.getCards(),
            justCheckedCards: [],
            players: gamePlayersList.players,
            activePlayer: gamePlayersList.players[0], // player #1 start
            playerChanging: false,
            gameOver: false,
        }
    },

    methods: {
        flip(cardIndex) {
            // player can see only 2 cards ..
            // if clicked flipped card, do nothing
            if (this.cards[cardIndex].isFlipped || this.justCheckedCards.length >= 2) {
                return;
            }

            this.cards[cardIndex].flip();
            this.justCheckedCards.push(this.cards[cardIndex]);

            // .. if player flipped 2 cards ..
            if (this.justCheckedCards.length === 2) {
                // .. check if they are the same ..
                if (game.checkCards(this.justCheckedCards) === true) {
                    // .. if YES - add point ..
                    this.activePlayer.points += 1;

                    // .. reset info aobut flipped cards ..
                    this.justCheckedCards = [];

                    // if all cards matched it means game over
                    if (game.getUnflippedCards().length === 0) {
                        this.gameOver = true;

                        this.$notify({
                            title: 'The cards match',
                            text: 'You get 1 point.',
                            duration: config.notificationDuration,
                        });

                        this.$notify({
                            title: 'The game is over',
                            text: 'All the cards have been matched.',
                            type: 'success',
                            duration: (config.notificationDuration * 2),
                        });
                    }
                    else {
                        this.$notify({
                            title: 'The cards match',
                            text: 'You get 1 point and another turn. Flip next 2 cards.',
                            type: 'success',
                            duration: config.notificationDuration,
                        });
                    }
                }
                else {
                    let nextPlayer = gamePlayersList.getNextPlayer(this.activePlayer);
                    this.$notify({
                        title: 'The cards do not match',
                        text: `You lose your turn. Now it is ${nextPlayer.name}'s turn.`,
                        duration: config.notificationDuration,
                    });

                    this.playerChanging = true;

                    setTimeout(this.nextPlayer, config.notificationDuration);
                }
            }
        },

        nextPlayer() {
            this.playerChanging = false;

            // hide the cards ..
            this.justCheckedCards.forEach((card) => {
                card.flip(false);
            });

            // .. player change ..
            this.activePlayer = gamePlayersList.getNextPlayer(this.activePlayer);

            // .. reset info about flipped cards
            this.justCheckedCards = [];
        },
    },
});
