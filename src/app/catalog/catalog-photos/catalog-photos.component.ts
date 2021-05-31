import { DataService } from './../../services/data.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-catalog-photos',
    templateUrl: './catalog-photos.component.html',
    styleUrls: ['./catalog-photos.component.scss']
})
export class CatalogPhotosComponent {

    @Input() outputPhoto: any[];

    constructor() { }
}
