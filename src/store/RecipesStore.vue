<script>
import { api } from '../utils/Api';
import { action, computed, observable } from "mobx";

export class RecipesStore {
    @observable recipes = [];
    @observable recipe = {};
    @observable recipeID = null; /*  */
    @observable searchResult = '';

    @computed get sortedRecipes() {
        return this.filteredRecipes.slice().sort((r, s) => {
            return s.id - r.id;
        })
    }

    @computed get filteredRecipes() {
        return this.recipes.filter((r) => r.name.toLowerCase().includes(this.searchResult.toLowerCase()))
    }

    @action
    loadRecipes() {
        api.getRecipes()
            .then((d) => {
                this.recipes = d
            })
            .catch((err) => {
                console.log(err);
            })
    }

    @action
    getRecipe(id){
		api.getRecipe(id)
            .then((res) => {
                this.recipe = res
            })
            .catch((err) => {
                console.log(err);
            })
	}

    @action
    createRecipe(data) {
        api.addRecipe(data)
			.then((r) => {
				this.recipes.push(r);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    @action
    removeRecipe(id){
		api.deleteReceip(id)
			.then(() => {
				this.recipes = this.recipes.filter(r => r.id !== id);
			})
            .catch((err) => {
                console.log(err);
            })
	}

    @action
	editRecipe(data){
		const dataID = this.recipeID;/*  */
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

    @computed get names(){
       return this.$store.recipes.map(el => console.log(el.name))
    }

    @action
    setId(id){
        this.recipeID = id;/*  */
    }
    
    

}

const storeRecipes = new RecipesStore();
export default storeRecipes;

</script>