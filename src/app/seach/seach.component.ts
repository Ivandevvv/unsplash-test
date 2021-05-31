import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../services/data.service';
import { parseSearchQuery } from '../shared-functions';

@Component({
    selector: 'app-seach',
    templateUrl: './seach.component.html',
    styleUrls: ['./seach.component.scss']
})
export class SeachComponent implements OnInit {

    inputControl = '';

    constructor(
        private router: Router,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
    }

    showSearchResult() {
        console.log(this.inputControl);
        const query = parseSearchQuery(this.inputControl);
        this.router.navigate(['search', query]);
    }
}
