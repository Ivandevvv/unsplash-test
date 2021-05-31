import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(
        private httpClient: HttpClient
    ) { }
    
    testGet() {
        const url = 'https://api.unsplash.com/photos/random/?client_id=kgv7iI8CckhSAYQHKPNQ4YBi3HuI4dUemuBkfCT6O4s';
        return this.httpClient.get(`${url}`);
    }
}
