<template>
    <form class="search">
            <input v-bind:value="$store.searchResult"  v-on:input="setSearch" type="text" class="search__text" placeholder="Type to search">
            <button type="submit" class="search__button" v-on:click="this.clearSearch">Search</button>
    </form>
</template>

<script>
import { observer } from "mobx-vue";

export default observer({
    data(){
        return {
            search: this.$store.searchResult,
        }
    },
    methods: {
        setSearch(e){
            this.$store.searchResult = e.target.value
        },
        clearSearch(){
            this.$store.searchResult=''
        }
    }
})

</script>

<style scoped>
    .search{
        display: flex;
        width: 80%;
        align-items: center;
        justify-content: center;
        padding: 30px 0 0 0;
    }

    .search__text{
        height: 30px;
        width: 30%;
        border: 1px solid black;
        border-radius: 3px;
        outline: none;
    }

    .search__button{
        margin: 0 0 0 5px;
        outline: none;
        width: 100px;
        height: 30px;
    }
</style>