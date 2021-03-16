import Vue from 'vue';
import Router from 'vue-router';
import RecipesPage from '../views/RecipesPage.vue';
import FullRecipe from '../components/FullRecipe.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'RecipesPage',
            component: RecipesPage,
        },
        {
            path: '/recipe',
            name: 'FullRecipe',
            component: FullRecipe,
            props: true
        }
    ]
})

export default router;