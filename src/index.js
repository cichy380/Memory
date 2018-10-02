import Vue from 'vue';
import VueRouter from 'vue-router';
import Notifications from 'vue-notification';
import velocity from 'velocity-animate';

import './scss/index.scss';

Vue.use(VueRouter);
Vue.use(Notifications, {velocity});

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
