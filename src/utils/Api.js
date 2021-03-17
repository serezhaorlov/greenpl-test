export const apiObj = {
    db: 'http://localhost:3000/recipes/',
    headers: {
      "Content-Type": "application/json"
    }
}
class Api {
    constructor( { db, headers }){
        this.db = db;
        this.headers = headers;
    }

    async getRecipes(){
        const res = await fetch(this.db, {
            method: 'GET',
            headers: this.headers,
        });
        if (res.ok) {
            return res.json();
        }
        return await Promise.reject('error');
    }

    async getRecipe(id){
        console.log(id)
        const res = await fetch(`${this.db}${id}`, {
            method: 'GET',
            headers: this.headers,
        });
        if (res.ok) {
            return res.json();
        }
        return await Promise.reject('error');
    }

    async addRecipe(data){
        const {name, pic, text, ingridients} = data;

        const res = await fetch(this.db, {
            method: 'POST',
            body: JSON.stringify({name: name, pic: pic, text: text, ingridients: ingridients}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (res.ok) {
            return res.json();
        }
        return await Promise.reject("Mistakes there made");
    }

    async patchRecipe(data, id) {
        const {name, pic, text, ingridients} = data;

        const res = await fetch(`${this.db}${id}`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({name: name, pic: pic, text: text, ingridients: ingridients, id: id}),
        });
        if (res.ok) {
            return {name: name, pic: pic, text: text, ingridients: ingridients, id: id}; /* сервер работает не так как надо, возвращает всегда старые данные, в реальной работе офк тут должен быть обновленный экземпляр карточки) */
        }
        return await Promise.reject("Mistakes there made");
    }
    
    async deleteReceip(id){
        const res = await fetch(`${this.db}${id}`, {
            method: 'DELETE',
            headers: this._headers,
        });
        if (res.ok) {
            return res.json();
        }
        return await Promise.reject("Mistakes there made");
      }

}

export const api = new Api(apiObj)
