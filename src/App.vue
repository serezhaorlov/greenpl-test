<template>
  <div id="app" class="app">
	<router-view></router-view>
  </div>
</template>


<style>
  @import url("./blocks/page/page.css");

  .app {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 475px;
    max-width: 1440px;
  }
</style>
