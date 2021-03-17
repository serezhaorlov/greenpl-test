<template>
    <div class="popup" v-on:click="closeEditRecipeOverlay">
        <form class="form" v-on:submit.prevent="editRecipe">
            <button type="submit" class="form__close" @click="closeEditRecipe"></button>
            <p class="form__subtitle">Edit recipe name</p>
            <input type="text" name="name" class="form__input" v-bind:value="this.$store.recipe.name" v-on:input="setName">
            <p class="form__subtitle">Edit link to recipe picture</p>
            <input type="text" name="pic" class="form__input" v-bind:value="this.$store.recipe.pic" v-on:input="setPic">
            <p class="form__subtitle">Edit recipe</p>
            <textarea name="text-" class="form__area" v-bind:value="this.$store.recipe.text" v-on:input="setText" placeholder="text"></textarea>
            <p class="form__subtitle">Edit recipe ingridients</p>
            <textarea name="ingridients"  class="form__area" v-bind:value="this.$store.recipe.ingridients" v-on:input="setIngridients" placeholder="ingridients"></textarea>
            <button type="submit" class="form__submit" >Сохранить</button>
        </form>
    </div>
</template>

<script>
import { observer } from "mobx-vue";

export default observer({
    data: function() {
        return {
                inputsData: {
                    name: '',
                    pic: '',
                    text: '',
                    ingridients: '',
                }
        }
    },
    mounted(){
        this.$store.getRecipe(this.$store.cardID);
    },
    methods: {
        setName(e){
            this.inputsData.name = e.target.value;
        },
        setPic(e){
            this.inputsData.pic = e.target.value;
        },
        setText(e){
            this.inputsData.text = e.target.value;
        },
        setIngridients(e){
            this.inputsData.ingridients = e.target.value;
        },
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
})
</script>

<style scoped>
   .popup {
    position: fixed;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    z-index: 9;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    display:flex;
    -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    align-items: center;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 400px;
        background-color: #fff;
        border-radius: 15px;
    }

    .form__close {
        padding: 15px;
        align-self: flex-end;
        margin: 5px 10px;
        background: transparent url(../assets/delete-button.svg) no-repeat center;
        border: none;
        outline: none;
    }

    .form__close:hover {
        opacity: 0.6;
        cursor: pointer;
    }
    .form__subtitle {
        margin: 0;
    }

    .form__subtitle:nth-child(1) {
        margin: 15px 0 ;
    }

    .form__input {
        margin: 15px 0 ;
        width: 75%;
    }

    .form__area {
        margin: 15px 0 ;
        width: 90%;
        height: 100%;
    }

    .form__submit {
        padding: 10px 30px;
        margin: 0 0 10px;
    }

</style>