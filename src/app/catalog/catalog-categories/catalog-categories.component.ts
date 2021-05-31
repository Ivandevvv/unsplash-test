import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-catalog-categories',
    templateUrl: './catalog-categories.component.html',
    styleUrls: ['./catalog-categories.component.scss']
})
export class CatalogCategoriesComponent implements OnInit {

    categoryList: any[];

    constructor(
        private dataService: DataService,
    ) { }

    ngOnInit(): void {
        this.dataService.getCollections().subscribe((res: any[]) => {
            console.log(res);
            this.categoryList = res;
        })
    }

}
