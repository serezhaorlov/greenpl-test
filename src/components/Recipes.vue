<template>
    <section class="recipes">
        <Recipe 
            v-for="recipe of this.$store.recipes"
            v-bind:recipe="recipe"
            v-bind:key="recipe.id"
            v-on:remove-recipe="removeRecipe"
            v-on:patch-recipe="patchRecipe"
            v-on:open-edit-recipe="openEditRecipe"
            v-on:get-recipe="getRecipe"
        />
    </section>
</template>

<script>
import Recipe from './Recipe.vue';
import { observer } from 'mobx-vue';
import storeRecipes from '../store/RecipesStore';
import Vue from "vue";

Vue.prototype.$store = storeRecipes;

export default observer({
    name: 'Recipes',
    components: {
        Recipe,
    },
    props: {
        recipes:{
            pic: String,
            name: String,
            text: String,
            ingridients: String
        }
    },

    methods: {
        removeRecipe(id){
            this.$emit('remove-recipe', id);
        },
        patchRecipe(id){
            this.$emit('patch-recipe', id);
        },
        openEditRecipe(id){
            this.$emit('open-edit-recipe', id);
        },
        getRecipe(id){
            this.$emit('get-recipe', id);
        }
        
    }
})

</script>

<style>
    @import url("../blocks/recipes/recipes.css");
</style>
