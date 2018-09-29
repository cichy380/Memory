import home from './pages/home/home.vue';
import scores from './pages/scores/scores.vue';
import rules from './pages/rules/rules.vue';

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/scores',
        component: scores
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
