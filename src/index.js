import Vue from 'vue';
import VueRouter from 'vue-router';

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

Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
});

new Vue({
    el: '#app',
    router,
    data: {
        message: 'test-6.'
    }
});
