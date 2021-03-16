<template>
  <div class="app">
    <Header @open-popup="openCreateRecipe"/> <!-- this.$store.recipes - массив из store пустой изначально, а должен быть полным -->
    <Recipes 
		v-bind:recipes="this.$store.recipes"
		@remove-recipe="removeRecipe"
		@patch-recipe="editRecipe"
		@open-edit-recipe="openEditRecipe"
		@get-recipe="getRecipe"
    />
	<CreateRecipeForm v-if="isCreateRecipe" @closeCreateRecipe="closeCreateRecipe" @createRecipe="this.$store.createRecipe"/>
	<EditRecipeForm v-if="isEditRecipe" @editRecipe="editRecipe" @closeEditRecipe="closeEditRecipe"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Recipes from '../components/Recipes.vue';
import CreateRecipeForm from "../components/CreateRecipeForm.vue";
import EditRecipeForm from "../components/EditRecipeForm.vue";
import { observer } from 'mobx-vue';
import storeRecipes from '../store/RecipesStore';
import Vue from "vue";

Vue.prototype.$store = storeRecipes;

export default observer({
	mounted() {
		this.loadRecipes(); /* здесь вызывается async функция для наполнения массива перед рендером */
	},
	name: 'RecipesPage',
	components: {
		Header,
		Recipes,
		CreateRecipeForm,
		EditRecipeForm
	},
	data () {
        return {
			isCreateRecipe: false,
			isEditRecipe: false,
			id: null
        }
    },
    methods: {
		openCreateRecipe(){
			this.isCreateRecipe = true;
			console.log(this.$store.recipes)
		},
		closeCreateRecipe(){
			this.isCreateRecipe = false;
		},
		openEditRecipe(){
			this.isEditRecipe = true;
		},
		closeEditRecipe(){
			this.isEditRecipe = false;
		},
		createRecipe(data){
			this.$store.createRecipe(data)
			this.closeCreateRecipe()
		},
		removeRecipe(id){
			this.$store.removeRecipe(id)
		},
		editRecipe(data){
			this.$store.removeRecipe(data, this.id)
		},
		getRecipe(id){
			this.$store.id = id
			this.$store.getRecipe(this.$store.id)
		},
		loadRecipes: function(){
			this.$store.loadRecipes();
		}
	}
  
})
</script>

<style>
  @import url("../blocks/page/page.css");

  .app {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 475px;
    max-width: 1440px;
  }
</style>
