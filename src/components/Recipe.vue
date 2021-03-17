<template>
  <div class="recipe" >
    <button type="button" class="recipe__delete" v-on:click="$emit('remove-recipe', recipe.id)"></button>
    <button type="button" class="recipe__edit" v-on:click="$emit('open-edit-recipe', recipe.id)"></button>

    <h3 class="recipe__name" >{{ recipe.name }}</h3>
    <div class="container container_v">
        <img :src="recipe.pic" class="recipe__pic" alt="recipe_pic"/>
        <article class="recipe__text">
            {{recipe.text}}
        </article>
    </div>
    <router-link :to="{ name: 'FullRecipe', params: { recipeId: recipe.id } }" class="recipe__link-more" > <!-- onClick - делал, в парамсах делал, в пропсах деалл -->
        get more info
    </router-link>

  </div>
</template>

<script>
import storeRecipes from '../store/RecipesStore';
import Vue from "vue";

Vue.prototype.$store = storeRecipes;

export default {
    name: 'Recipe',
    props: {
        recipe: {
            type: Object,
            required: true
        }
    },
    methods: {
        console(){
            console.log(this.recipe.id)
        },
        getReciped(id){
            (id)
        }
    }
}

</script>

<style scoped>
    @import url("../blocks/recipe/recipe.css");
    @import url("../blocks/recipe/__edit/recipe__edit.css");
    @import url("../blocks/recipe/__delete/recipe__delete.css");
    @import url("../blocks/recipe/__pic/recipe__pic.css");
    @import url("../blocks/recipe/__name/recipe__name.css");
    @import url("../blocks/recipe/__text/recipe__text.css");
    @import url("../blocks/recipe/__link-more/recipe__link-more.css");
    @import url("../blocks/container/container.css");
    @import url("../blocks/container/_v/container_v.css");
</style>
