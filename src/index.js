import Vue from 'vue';
import VueRouter from 'vue-router';

import './scss/index.scss';

Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
});

new Vue({
    el: '#app',
    router,
    data: {
        message: 'test-6.'
    }
});
