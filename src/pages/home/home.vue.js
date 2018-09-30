import Vue from 'vue';
import Card from './../../common/Card';

export default Vue.extend({
    mounted() {
        let $card = document.getElementsByClassName('card')[0], //[0]: first card on page (only one card is on page)
            card = new Card($card);

        let timeoutId = setInterval(() => {
            if (card) {
                card.flip();
                //todo: if card was flipped on avers make change a card
            } else {
                clearTimeout(timeoutId);
            }
        }, 2000);

    },
});
