import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FavoritesService {

    favoriteList: string[] = [];
    private key = 'favorites';

    constructor() {
        this.favoriteList = (localStorage.getItem(this.key) || '').split(',').filter(p => p);
    }

    getFavoritesList() {
        return localStorage.getItem(this.key);
    }
    setFavorite(value) {
        localStorage.setItem(this.key, JSON.stringify(value));
    }
    switchFavorites(id) {
        console.log(this.favoriteList);
        const inx = (this.favoriteList || []).findIndex(el => el === id);
        if (inx >= 0) {
            this.favoriteList.splice(inx, 1);
            localStorage.setItem(this.key, this.favoriteList.join(','));
        } else {
            this.favoriteList.push(id)
            localStorage.setItem(this.key, this.favoriteList.join(','))
        }
    }

    isFavorite(id): boolean {
        return Boolean((this.favoriteList || []).find(el => el === id));
    }
}
