import Home from './components/Home/home.vue';
import Rules from './components/Rules/rules.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/rules',
        component: Rules
    },
    // {
    //     path: '*',
    //     component: NotFound // todo
    // }
];

export default routes;
