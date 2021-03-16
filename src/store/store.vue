<script>
import { api } from '../utils/Api';
import { action, observable } from "mobx";

export class Store {
    @observable recipes = [];

    @action 
    async loadRecipes() {
        const response = await fetch('http://localhost:3000/recipes/');
        const recipesFromResponse = await response.json();
        this.recipes = recipesFromResponse.reverse();
        return 
    }

    @action 
    createRecipe(data) {
        api.addRecipe(data)
			.then((r) => {
				this.recipes.unshift(r);
            })
    }

    @action
    removeRecipe(id){
			api.deleteReceip(id)
				.then(() => {
					this.recipes = this.recipes.filter(r => r.id !== id);
				})
	}
    
}
const storeRecipes = new Store();
export default storeRecipes;

</script>