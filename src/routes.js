import home from './pages/home/home.vue';
import rules from './pages/rules/rules.vue';

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/rules',
        component: rules
    },
    // {
    //     path: '*',
    //     component: NotFound // todo
    // }
];

export default routes;
