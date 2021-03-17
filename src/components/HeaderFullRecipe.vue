<template>
    <header class="header">
        <router-link to="/" class="header__title">Recipes</router-link>
        <router-link to="/">
            <button class="header__main-page-btn">Back to main</button>
        </router-link>
        
    </header>
</template>


<style scoped>
    .header{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 80%;
        padding-bottom: 20px;
        border-bottom: 2px solid #eee;
    }

    @media screen and (max-width: 768) {
        .header{
            width: 70%;
        }
    }

    .header__title{
        font-size: 42px;
        font-weight: bold;
        margin: 0;
        text-decoration: none;
        color: darkslategray;
    }
    
    .header__main-page-btn{
        padding: 10px 30px;
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: bold;
        color: crimson;
        background-color: transparent;
        border: 1px solid darkslategray;
        outline: none;
    }

    .header__main-page-btn:hover{
        opacity: 0.8;
        cursor: pointer;
    }

</style>