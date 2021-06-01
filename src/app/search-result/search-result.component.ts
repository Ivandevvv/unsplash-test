import { DataService } from './../services/data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

    showLoader: boolean;
    searchQuery = this.activatedRoute.snapshot.params.query;
    outputImages = [];
    
    @ViewChild('scrollAnchor') scrollAnchor : ElementRef;
    private page = 1;
    private ngUnsubscribe = new Subject();
    private screenHeight = document.documentElement.clientHeight;

    constructor(
        private dataService: DataService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.scrollListener();
        this.getMoreImages();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    
    private scrollListener() {
        let scrollTop: number;
        let scrollAnchor: HTMLElement;
        fromEvent(window, 'scroll').pipe(
            takeUntil(this.ngUnsubscribe)
        ).subscribe(ev => {
            scrollAnchor = this.scrollAnchor.nativeElement as HTMLElement;
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollAnchor.getBoundingClientRect().top - this.screenHeight < 0
                && !this.showLoader) {
                    this.showLoader = true;
                    this.getMoreImages();
            }
        });
    }

    private getMoreImages() {
        const query = {
            query: this.searchQuery,
            page: this.page,
        };
        this.dataService.searchResult(query).subscribe((res: any) => {
            this.outputImages = [...this.outputImages, ...res.results];
            this.page += 1;
            this.showLoader = false;
        });
    }
}
