<template>
  <div id="app" class="app">
	<router-view></router-view>
  </div>
</template>


<style>
  .page{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
			font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

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
