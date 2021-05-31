import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

    searchQuery = this.activatedRoute.snapshot.params.query;
    outputImages: any[];

    constructor(
        private dataService: DataService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.dataService.searchResult(this.searchQuery).subscribe((res: any) => {
            console.log('SearchResultComponent', res);
            this.outputImages = res.results;
        });
    }
}
