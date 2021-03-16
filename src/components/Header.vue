<template>
    <header class="header">
        <router-link to="/" class="header__title">Recipes</router-link>
        <ul class=header__links>
            <li><a class="header__link" href="#" v-on:click="$emit('open-popup')">Create Recipe</a></li>
            <li><a class="header__link" href="#">My recipes</a></li>
        </ul>
    </header>
</template>

<script>


export default {
    name: 'Header',
}
</script>

<style>
    @import url("../blocks/header/header.css");
    @import url("../blocks/header/__title/header__title.css");
    @import url("../blocks/header/__links/header__links.css");
    @import url("../blocks/header/__link/header__link.css");
</style>