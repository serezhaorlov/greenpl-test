<template>
    <div class="popup" v-on:click="closeEditRecipeOverlay">
        <form class="form" v-on:submit.prevent="editRecipe">
            <button type="submit" class="form__close" @click="closeEditRecipe"></button>
            <p class="form__subtitle">Edit recipe name</p>
            <input type="text" name="name" class="form__input" v-model="inputsData.name">
            <p class="form__subtitle">Edit link to recipe picture</p>
            <input type="text" name="pic" class="form__input" v-model="inputsData.pic">
            <p class="form__subtitle">Edit recipe</p>
            <textarea name="" id="" class="form__area" v-model="inputsData.text" placeholder="text"></textarea>
            <p class="form__subtitle">Edit recipe ingridients</p>
            <textarea name="" id="" class="form__area" v-model="inputsData.ingridients" placeholder="ingridients"></textarea>
            <button type="submit" class="form__submit" >Сохранить</button>
        </form>
    </div>
</template>

<script>
export default {
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
        editRecipe(){
            this.$emit('editRecipe', this.inputsData );
        },
        closeEditRecipe(){
            this.$emit('closeEditRecipe');
        },
        closeEditRecipeOverlay(evt){
            if (evt.target === evt.currentTarget){
                this.$emit('closeEditRecipe');
            }
        }
    }
}
</script>

<style>

</style>