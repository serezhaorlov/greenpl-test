import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import storeRecipes from './store/RecipesStore';

Vue.config.productionTip = false
Vue.prototype.$store = storeRecipes;

new Vue({
  render: h => h(App),
  router,
  storeRecipes
}).$mount('#app')
