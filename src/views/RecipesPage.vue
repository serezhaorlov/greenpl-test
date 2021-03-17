<template>
  <div class="app">
    <Header @open-popup="openCreateRecipe"/>
	<RecipesSearch />
    <Recipes 
		@remove-recipe="removeRecipe"
		@patch-recipe="editRecipe"
		@open-edit-recipe="openEditRecipe"
    />
	<Footer />
	<CreateRecipeForm v-if="isCreateRecipe" @closeCreateRecipe="closeCreateRecipe" @createRecipe="createRecipe"/>
	<EditRecipeForm v-if="isEditRecipe" @editRecipe="editRecipe" @closeEditRecipe="closeEditRecipe"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import RecipesSearch from '../components/RecipesSearch.vue';
import Recipes from '../components/Recipes.vue';
import Footer from '../components/Footer.vue';
import CreateRecipeForm from "../components/CreateRecipeForm.vue";
import EditRecipeForm from "../components/EditRecipeForm.vue";
import { observer } from 'mobx-vue';

export default observer({
	mounted() {
		this.loadRecipes();
	},
	name: 'RecipesPage',
	components: {
		Header,
		RecipesSearch,
		Recipes,
		Footer,
		CreateRecipeForm,
		EditRecipeForm		
	},
	data(){
		return {
			isCreateRecipe: false,
			isEditRecipe: false,
			data: null,
		}
	},
    methods: {
		openCreateRecipe(){
			this.isCreateRecipe = true;
		},
		closeCreateRecipe(){
			this.isCreateRecipe = false;
		},
		openEditRecipe(id){
			this.$store.setId(id);
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
			this.$store.editRecipe(data, this.$store.cardID)
			this.closeEditRecipe()
		},
		loadRecipes(){
			this.$store.loadRecipes();
		}
	}
  
})
</script>

<style scoped>
	.page{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
			font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
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
