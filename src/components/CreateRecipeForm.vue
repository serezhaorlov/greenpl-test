<template>
    <div class="popup" v-on:click="closeCreateRecipeOverlay">
        <form class="form" v-on:submit.prevent="createRecipe">
            <button type="button" class="form__close" @click="closeCreateRecipe" required></button>
            <p class="form__subtitle">Enter recipe name</p>
            <input type="text" name="name" class="form__input" v-model="inputsData.name" required>
            <p class="form__subtitle">Link to recipe picture</p>
            <input type="text" name="pic" class="form__input" v-model="inputsData.pic" required>
            <p class="form__subtitle">Enter recipe</p>
            <textarea name="" id="" class="form__area" v-model="inputsData.text" placeholder="text" required></textarea>
            <p class="form__subtitle">Enter recipe ingridients</p>
            <textarea name="" id="" class="form__area" v-model="inputsData.ingridients" placeholder="ingridients" required></textarea>
            <button type="submit" class="form__submit" >Сохранить</button>
        </form>
    </div>
</template>

<script>

import { observer } from 'mobx-vue';

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
    methods: {
        createRecipe(){
            this.$emit('createRecipe', this.inputsData);
        },
        closeCreateRecipe(){
            this.inputsData = {
                name: '',
                pic: '',
                text: '',
                ingridients: '',
            };
            this.$emit('closeCreateRecipe');
        },
        closeCreateRecipeOverlay(evt){
            if (evt.target === evt.currentTarget){
                this.$emit('closeCreateRecipe');
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