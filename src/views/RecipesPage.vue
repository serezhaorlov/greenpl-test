<template>
  <div class="app">
    <Header @open-popup="openCreateRecipe"/>
    <Recipes 
		@remove-recipe="removeRecipe"
		@patch-recipe="editRecipe"
		@open-edit-recipe="openEditRecipe"
    />
	<Footer />
	<CreateRecipeForm v-if="this.$popups.isCreateRecipe" @closeCreateRecipe="closeCreateRecipe" @createRecipe="createRecipe"/>
	<EditRecipeForm v-if="this.$popups.isEditRecipe" @editRecipe="editRecipe" @closeEditRecipe="closeEditRecipe"/>
  </div>
</template>

<script>
/* осталось разобраться с inputData */
import Header from '../components/Header.vue';
import Recipes from '../components/Recipes.vue';
import Footer from '../components/Footer.vue';
import CreateRecipeForm from "../components/CreateRecipeForm.vue";
import EditRecipeForm from "../components/EditRecipeForm.vue";
import { observer } from 'mobx-vue';
import storeRecipes from '../store/RecipesStore';
import popups from '../store/Popups';
import Vue from "vue";

Vue.prototype.$popups = popups;
Vue.prototype.$store = storeRecipes;

export default observer({
	mounted() {
		this.loadRecipes();
	},
	name: 'RecipesPage',
	components: {
		Header,
		Recipes,
		Footer,
		CreateRecipeForm,
		EditRecipeForm		
	},
    methods: {
		openCreateRecipe(){
			this.$popups.openCreateRecipe();
		},
		closeCreateRecipe(){
			this.$popups.closeCreateRecipe()
		},
		openEditRecipe(id){
			this.$store.setId(id);
			this.$popups.openEditRecipe()
		},
		closeEditRecipe(){
			this.$popups.closeEditRecipe()
		},
		createRecipe(data){
			this.$store.createRecipe(data)
			console.log(this.$popups.isCreateRecipe);
			this.$popups.closeCreateRecipe()
		},
		removeRecipe(id){
			this.$store.removeRecipe(id)
		},
		editRecipe(data){
			this.$store.editRecipe(data, this.$store.cardID)
			this.$popups.closeEditRecipe()
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
