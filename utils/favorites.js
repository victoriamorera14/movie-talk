import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage"

class Favorites {
    constructor() {
        this._favorites = new Set();
        makeAutoObservable(this)
    }

    async saveFavoritesToStorage() {
        try {
            await AsyncStorage.setItem("favorites", JSON.stringify(this._favorites));
        } catch (e) {
            console.log(e.message);
        }
    }

    async loadFavoritesFromStorage() {
        const favoritesData = await AsyncStorage.getItem("favorites");
        if (favoritesData) {
            const favorites = JSON.parse(favoritesData);
            favorites.forEach(element => {
                this._favorites.add(element);
            });
        }
    }

    toggle(id) {
        if (this._favorites.has(id)) {
            this._favorites.delete(id);
        } else {
            this._favorites.add(id);
        }
        this.saveFavoritesToStorage();
    }

    isFavorite(id) {
        return this._favorites.has(id);
    }

    get favoriteList() {
        return [...this._favorites];
    }
}

export const favorites = new Favorites();