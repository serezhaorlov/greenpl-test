import Vue from 'vue';
import Router from 'vue-router';
import RecipesPage from '../views/RecipesPage.vue';
import FullRecipe from '../views/FullRecipe.vue';

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
            path: '/recipes/:recipeId',
            name: 'FullRecipe',
            component: FullRecipe,
            props: true
        }
    ]
})

export default router;