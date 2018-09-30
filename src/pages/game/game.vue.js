import Vue from 'vue';

export default Vue.extend({
    mounted() {
        let $cards = document.getElementsByClassName('card');

        // [].forEach.call($cards, function ($card) {
        //     console.log($card.offsetWidth);
        //     console.log($card.offsetHeight);
        //     $card.style.height = '150px';
        // });
    },
});
