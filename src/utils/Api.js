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

    getRecipes(){
        return fetch(this.db, {
            method: 'GET',
            headers: this.headers,
        })
        .then((res) => {
            if (res.ok) {
              return res.json()
            }
            return Promise.reject("Mistakes there made")
        });
    }

    getRecipe(id){
        return fetch(`${this.db}${id}`, {
            method: 'GET',
            headers: this.headers,
        })
        .then((res) => {
            if (res.ok) {
              return res.json()
            }
            return Promise.reject("Mistakes there made")
        });
    }

    addRecipe(data) {
        const {name, pic, text, ingridients} = data;

        return fetch(this.db, {
            method: 'POST',
            body: JSON.stringify({name: name, pic: pic, text: text, ingridients: ingridients}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            if (res.ok) {
              return res.json()
            }
            return Promise.reject("Mistakes there made")
        });
    }

    patchRecipe(data, id) {
        const {name, pic, text, ingridients} = data;

        return fetch(`${this.db}${id}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({name: name, pic: pic, text: text, ingridients: ingridients, id: id}),
        })
        .then((res) => {
            if (res.ok) {
              return res.json()
            }
            return Promise.reject("Mistakes there made")
        });
        
    }
    
    deleteReceip(id){
        return fetch(`${this.db}${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then((res) => {
            if (res.ok) {
              return res.json()
            }
            return Promise.reject("Mistakes there made")
        });
        
      }

}

export const api = new Api(apiObj)
