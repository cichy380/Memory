import Vue from 'vue';

import './scss/index.scss';
// setInterval(function(){ alert("Hello"); }, 3000);
setInterval(() => {
    if (document.getElementsByClassName('card')[0].className === 'card card-theme-red ml-auto') {
        document.getElementsByClassName('card')[0].className = 'card card-theme-red ml-auto card-flipped';
    }
    else {
        document.getElementsByClassName('card')[0].className = 'card card-theme-red ml-auto';
    }
}, 2000);

new Vue({
    el: '#app',
    data: {
        message: 'test-6.'
    }
});
