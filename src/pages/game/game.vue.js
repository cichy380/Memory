import config from './../../common/config';
import Vue from 'vue';
import Game from './../../common/Game';

let cards = []; // list of all Card objects

export default Vue.extend({
    data() {
        return {
            cards: []
        }
    },

    mounted() {
        let game = new Game([], config.colors, config.icons);

        this.cards = game.getCards();

        // [].forEach.call($cards, ($item) => {
        //     this.cards.push(new Card($item));
        // });
    },

    methods: {
        flip(cardIndex) {
            this.cards[cardIndex].flip();
        }
    },
});
