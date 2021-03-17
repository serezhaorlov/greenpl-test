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
    <router-link :to="{ name: 'FullRecipe', params: { recipeId: recipe.id } }" class="recipe__link-more" >
        get more info
    </router-link>

  </div>
</template>

<script>

export default {
    name: 'Recipe',
    props: {
        recipe: {
            type: Object,
            required: true
        }
    },

}

</script>

<style scoped>
    .recipe {
        display: flex;
        position: relative;
        flex-direction: column;
        max-width: 432px;
        min-height: 460px;
        margin: 0;
        border: 2px solid #eee;
        border-radius: 10px;
        overflow: hidden;
        padding: 20px 0 20px 0;
    }

    .recipe__delete {
        padding: 20px;
        align-self: flex-end;
        margin: 5px 10px;
        background: transparent url(../assets/delete-button.svg) no-repeat center;
        border: none;
        outline: none;
    }


    .recipe__delete:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    .recipe__edit {
        position: absolute;
        top: 20px;
        left: 315px;
        padding: 20px;
        margin: 5px 10px;
        background: transparent url(../assets/edit-button.svg) no-repeat center;
        border: none;
        outline: none;
    }

    .recipe__edit:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    .recipe__name {
        font-size: 28px;
        margin: 0 0 20px;
    }

    .container{
        display: flex;
    }

    .container_v{
        flex-direction: column;
    }

    .recipe__pic{
        width: 100%;
        height: 240px;
        object-fit: cover;
    }

    .recipe__text{
        margin: 20px 10px 10px;
        max-width: 100%;
        word-break: break-word;
        overflow: hidden;
    }

    .recipe__link-more{
        color: crimson;
        text-decoration: none;
        align-self: center;
        width: 100px;
    }

    .recipe__link-more:hover{
        opacity: 0.6;
    }
</style>
