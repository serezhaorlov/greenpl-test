<script>
import { api } from '../utils/Api';
import { action, observable } from "mobx";

export class RecipesStore {
    @observable recipes = [];
    @observable recipe = {};
    @observable cardID = null;
    @observable idFullRecipes = null;


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
            .catch((err) => {
                console.log(err);
            })
	}

    @action.bound
	editRecipe(data){
		const dataID = this.cardID;
		api.patchRecipe(data, dataID)
			.then((res) => {
                const newList = this.recipes.map(o => {
                if (o.id === res.id) {
                    return res;
                }
                    return o;
                });
                this.recipes = newList;     
            })
            .catch((err) => {
                console.log(err);
            })
	}

    @action.bound
    setId(id){
        this.cardID = id;
    }
    
    @action.bound
    getRecipe(id){
		api.getRecipe(id)
			.then((res) => {
				return this.recipe = res;
            })
            .catch((err) => {
                console.log(err);
            })
	}

}

const storeRecipes = new RecipesStore();
export default storeRecipes;

</script>