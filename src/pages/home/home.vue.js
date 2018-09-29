import Vue from 'vue';

export default Vue.extend({
    mounted() {
        let timeoutId = setInterval(() => {
            let $card = document.getElementsByClassName('card')[0];

            if ($card) {
                $card.click();
            } else {
                clearTimeout(timeoutId);
            }
        }, 2000);
    },

    methods: {
        flip(event) {
            let $card = event.target,
                $cardFlipper = $card.getElementsByClassName('card-flipper')[0];

            $cardFlipper.classList.toggle('card-flipper-flipped');

            //todo: if card was flipped on avers make change a card
        }
    },
});
