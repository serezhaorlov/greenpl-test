<template>
  <div id="app" class="app">

    <HeaderFullRecipe />
    <section class="full-recipe">
        <img :src="this.$store.recipe.pic" alt="recipe-pic" class="full-recipe__pic">
        <div class="container container_v">
            <h3 class="full-recipe__title">{{this.$store.recipe.name}}</h3>
            <p class="full-recipe__text">{{this.$store.recipe.text}}</p>
            <p class="full-recipe__ing">{{this.$store.recipe.ingridients}}</p>
        </div>
    </section>
  </div>

</template>

<script>
import HeaderFullRecipe from '../components/HeaderFullRecipe.vue';
import { observer } from 'mobx-vue';


export default observer({
	name: 'FullRecipe',
	components: {
		HeaderFullRecipe,
	},
	mounted(){
		this.$store.getRecipe(this.$route.params.recipeId);
	},
    methods: {
		openCreateRecipe(){
			this.$popups.openCreateRecipe();
		},
		closeCreateRecipe(){
			this.$popups.closeCreateRecipe()
		}
	},
  
})
</script>

<style scoped>
	.full-recipe{
		display: flex;
		flex-direction: column;
		margin-top: 30px;
	}
	.full-recipe__pic{
		max-width: 500px;
		max-height: 400px;
		object-fit: cover;
	}

	.container{
		display: flex;
	}

	.container_v{
		flex-direction: column;
	}

	.full-recipe__title{
		font-size: 32px;
	}

	.full-recipe__text{
		font-size: 18px;
	}

	.full-recipe__ing{
		font-size: 18px;
	}
</style>

