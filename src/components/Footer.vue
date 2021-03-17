<template>
    <footer class="footer">
        <p class="footer__text">{{new Date().getFullYear()}} Serezha Orlov</p>
    </footer>
</template>

<style scoped>
    .footer{
        display: flex;
        
        align-items: center;
        justify-content: space-around;
        width: 80%;
        margin: 80px 0 20px;
        border-top: 2px solid #eee;
    }
    
    .footer__text{
        margin: 50px 0 0 ;
        font-size: 16px;
    }
</style>
