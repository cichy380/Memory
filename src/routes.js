import home from './pages/home/home.vue';
import game from './pages/game/game.vue';
import scores from './pages/scores/scores.vue';
import rules from './pages/rules/rules.vue';

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/game',
        component: game
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
