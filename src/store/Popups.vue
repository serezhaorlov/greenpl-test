<script>
import { action, observable } from "mobx";

export class PopupStore {
    @observable isEditRecipe = false;
    @observable isCreateRecipe = false;
/* 	@observable inputsData = {name: '', pic: '', text: '', ingridients: ''}
 */
    @action.bound
	openCreateRecipe(){
		this.isCreateRecipe = true;
	}

    @action.bound
	openEditRecipe(id){
		this.isEditRecipe = true;
		this.id = id
	}

    @action.bound
	closeCreateRecipe(){
		this.isCreateRecipe = false;
	}

    @action.bound
	closeEditRecipe(){
		this.isEditRecipe = false;
	}

}

const popups = new PopupStore();
export default popups;

</script>