import Vue from 'vue';
import config from './../../common/config';
import utilities from './../../common/utilities';
import Card from './../../common/Card';

const flipDelay = 2400; // milliseconds

export default Vue.extend({
    data() {
        return {
            card: '111',
        }
    },

    mounted() {
        let $card = document.getElementsByClassName('card')[0]; //[0]: first card on page (only one card is on page)

        let timeoutId = setInterval(() => {
            if ($card) {
                let randomColor = utilities.shuffle(config.colors)[0],
                    randomIcon = utilities.shuffle(config.icons)[0];

                this.card = new Card(randomColor, randomIcon);
                this.card.flip();

                setTimeout(() => {
                    this.card.flip(false);
                }, flipDelay);
            }
            else {
                clearTimeout(timeoutId);
            }
        }, (flipDelay*2));
    },
});
