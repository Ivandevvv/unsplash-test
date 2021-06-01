import { FavoritesService } from './../../services/favorites.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-catalog-photos',
    templateUrl: './catalog-photos.component.html',
    styleUrls: ['./catalog-photos.component.scss']
})
export class CatalogPhotosComponent implements OnInit {

    showLoader: boolean;
    @Input() outputPhoto: any[];

    constructor(
        private favoritesService: FavoritesService
    ) { }
    
    ngOnInit() {
    }

    isFavorite(id): boolean {
        return this.favoritesService.isFavorite(id);
    }
    switchFavorite(id) {
        this.favoritesService.switchFavorites(id);
    }
}
