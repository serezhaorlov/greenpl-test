<script>
import { action, observable } from "mobx";

export default class PopupStore {
    @observable isEditRecipe = false;
    @observable isCreateRecipe = false;

    @action
	openCreateRecipe(){
		this.isCreateRecipe = true;
	}

    @action
	closeCreateRecipe(){
		this.isCreateRecipe = false;
	}

    @action
	openEditRecipe(id){
		this.isEditRecipe = true;
		this.id = id
	}

    @action
	closeEditRecipe(){
		this.isEditRecipe = false;
	}

}

</script>