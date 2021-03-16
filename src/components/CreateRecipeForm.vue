<template>
    <div class="popup" v-on:click="closeCreateRecipeOverlay">
        <form class="form" v-on:submit.prevent="createRecipe">
            <button type="submit" class="form__close" @click="closeCreateRecipe"></button>
            <p class="form__subtitle">Enter recipe name</p>
            <input type="text" name="name" class="form__input" v-model="inputsData.name">
            <p class="form__subtitle">Link to recipe picture</p>
            <input type="text" name="pic" class="form__input" v-model="inputsData.pic">
            <p class="form__subtitle">Enter recipe</p>
            <textarea name="" id="" class="form__area" v-model="inputsData.text" placeholder="text"></textarea>
            <p class="form__subtitle">Enter recipe ingridients</p>
            <textarea name="" id="" class="form__area" v-model="inputsData.ingridients" placeholder="ingridients"></textarea>
            <button type="submit" class="form__submit" >Сохранить</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        recipes: Array,
    },
    data: function() {
        return {
            inputsData: {
                name: "",
                pic: "",
                text: "",
                ingridients: "",
            },
        }
    },
    methods: {
        createRecipe(){
            this.$emit('createRecipe', this.inputsData);
        },
        closeCreateRecipe(){
            this.$emit('closeCreateRecipe');
        },
        closeCreateRecipeOverlay(evt){
            if (evt.target === evt.currentTarget){
                this.$emit('closeCreateRecipe');
            }
        }
    } 
}

</script>

<style>
    @import url("../blocks/popup/popup.css");
    @import url("../blocks/form/form.css");
    @import url("../blocks/form/__close/form__close.css");
    @import url("../blocks/form/__subtitle/form__subtitle.css");
    @import url("../blocks/form/__input/form__input.css");
    @import url("../blocks/form/__area/form__area.css");
    @import url("../blocks/form/__submit/form__submit.css");
</style>