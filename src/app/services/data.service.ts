import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private url = 'https://api.unsplash.com';
    private key = '?client_id=kgv7iI8CckhSAYQHKPNQ4YBi3HuI4dUemuBkfCT6O4s';

    constructor(
        private httpClient: HttpClient
    ) { }

    getPhotos() {
        return this.httpClient.get<any[]>(`${this.url}/photos/${this.parseParams()}`);
    }
    searchResult(query) {
        return this.httpClient.get(`${this.url}/search/photos/${this.parseParams({ query })}`);
    }
    getCollections() {
        return this.httpClient.get(`${this.url}/collections/${this.key}`);
    }
    getPhotoById(id) {
        return this.httpClient.get(`${this.url}/photos/${id}/${this.key}`);
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
