<template>
    <section class="recipes"> <!--  -->
        <Recipe 
            v-for="recipe of this.$store.sortedRecipes" 
            v-bind:recipe="recipe"
            v-bind:key="recipe.id"
            v-on:remove-recipe="removeRecipe"
            v-on:patch-recipe="patchRecipe"
            v-on:open-edit-recipe="openEditRecipe"
        />
    </section>
</template>

<script>
import Recipe from './Recipe.vue';
import { observer } from 'mobx-vue';

export default observer({
    name: 'Recipes',
    components: {
        Recipe,
    },
    data(){
        return {
            
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
    }
})

</script>

<style scoped>
    .recipes{
        display: grid;
        grid-template-columns: repeat(auto-fit, 432px);
        grid-template-rows: repeat(auto-fit, 1fr);
        gap: 10px;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin: 50px auto 0 0;
    }
</style>
