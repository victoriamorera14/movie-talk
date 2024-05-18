import { makeAutoObservable } from "mobx";

class Favorites {
    constructor() {
        this._favorites = new Set();
        makeAutoObservable(this)
    }

    toggle(id) {
        if (this._favorites.has(id)) {
            this._favorites.delete(id);
        } else {
            this._favorites.add(id);
        }
    }

    isFavorite(id) {
        console.log('is favorite: ', this._favorites.has(id))
        return this._favorites.has(id);
    }

    get favoriteList() {
        console.log('favoriteList: ', [...this._favorites])
        return [...this._favorites];
    }
}

export const favorites = new Favorites();