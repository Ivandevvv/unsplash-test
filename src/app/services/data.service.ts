import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private url = '//api.unsplash.com';
    private key = '?client_id=kgv7iI8CckhSAYQHKPNQ4YBi3HuI4dUemuBkfCT6O4s';

    constructor(
        private httpClient: HttpClient
    ) {
        ['get', 'post'].forEach(method => {
            const api = this.url
            const old = this.httpClient[method];
            this.httpClient[method] = function(url, ...args) {
                return old.call(this, `${api}${url}`, ...args)
            }
        });
    }

    getPhotos() {
        return this.httpClient.get<any[]>(`/photos/${this.parseParams()}`);
    }
    searchResult(query) {
        return this.httpClient.get(`/search/photos/${this.parseParams(query)}`);
    }
    getCollections() {
        return this.httpClient.get(`/collections/${this.key}`);
    }
    getPhotoById(id) {
        return this.httpClient.get(`/photos/${id}/${this.key}`);
    }

    private parseParams(query = {}): string {
        const defParams = {
            key: this.key,
            orientation: 'landscape',
            per_page: 28,
            ...query,
        };
        let result = '';
        for (const key in defParams) {
            if (key === 'key') {
                result += defParams[key];
            } else {
                result += `&${key}=${defParams[key]}`;
            }
        }
        return result;
    }
}
