<template>
  <div id="app" class="app">

    <Header v-bind:recipes="this.$store.recipes" @open-popup="openCreateRecipe"/>
    <section class="full-recipe">
        <img :src="this.$store.recipe.pic" alt="" class="full-recipe__pic">
        <div class="container container_v">
            <h3 class="full-recipe__title">{{this.$store.recipe.name}}</h3>
            <p class="full-recipe__text">{{this.$store.recipe.text}}</p>
            <p class="full-recipe__ing">{{this.$store.recipe.ingridients}}</p>
        </div>
    </section>
  </div>

</template>

<script>
import Header from '../components/Header.vue';
import { api } from '../utils/Api';
import storeRecipes from '../store/RecipesStore';
import Vue from "vue";

Vue.prototype.$store = storeRecipes;

export default {
	name: 'RecipesPage',
	components: {
		Header,
	},
	data: function(){
        return {
			isCreateRecipe: false,
        }
    },
	mounted: function (){
		
	},
    methods: {
		openCreateRecipe(){
			this.isCreateRecipe = true;
		},
		closeCreateRecipe(){
			this.isCreateRecipe = false;
		},
		createRecipe(inputsData){
			api.addRecipe(inputsData)
				.then((r) => {
					this.recipes.unshift(r);
					inputsData = {};
					this.closeCreateRecipe();
				})
			},
	}
  
}
</script>

<style>
	@import url("../blocks/full-recipe/full-recipe.css");
	@import url("../blocks/full-recipe/__title/full-recipe__title.css");
	@import url("../blocks/full-recipe/__pic/full-recipe__pic.css");
	@import url("../blocks/full-recipe/__ing/full-recipe__ing.css");
	@import url("../blocks/full-recipe/__text/full-recipe__text.css");
	
</style>