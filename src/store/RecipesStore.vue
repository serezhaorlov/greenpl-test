<script>
import { api } from '../utils/Api';
import { action, computed, observable } from "mobx";

export class RecipesStore {
    @observable recipes = [];
    @observable recipe = {};
    @observable id = null;

    @action.bound
    loadRecipes() {
        api.getRecipes()
            .then((d) => {
                this.recipes = d.reverse();
            })
    }

    @action.bound
    createRecipe(data) {
        api.addRecipe(data)
			.then((r) => {
				this.recipes.unshift(r);
            })
    }

    @action.bound
    removeRecipe(id){
			api.deleteReceip(id)
				.then(() => {
					this.recipes = this.recipes.filter(r => r.id !== id);
				})
	}

    @action.bound
	editRecipe(data){
		const dataID = this.id;
		api.patchRecipe(data, dataID)
			.then((res) => {
				console.log(res);
			})
	}
    
    @action.bound
    getRecipe(id){
		api.getRecipe(id)
			.then((res) => {
				this.recipe = res;
            })
	}

    @computed get singleRecipe(){
        return this.recipes;
    }

}

const storeRecipes = new RecipesStore();
export default storeRecipes;

</script>