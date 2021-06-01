import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-view-photo',
    templateUrl: './view-photo.component.html',
    styleUrls: ['./view-photo.component.scss']
})
export class ViewPhotoComponent implements OnInit {

    query = this.activatedRoute.snapshot.params.id;
    dataImage: any = {};
    shareBtn = [
        {
            type: 'vk',
            title: 'test-vk',
            description: 'description-vk'
        },
        {
            type: 'facebook',
            title: 'title-facebook',
            description: 'description-facebook'
        },
        {
            type: 'telegram',
            title: 'title-telegram',
            description: 'telegram-description'
        },
        {
            type: 'twitter',
            title: 'title-twitter',
            description: 'twitter-description'
        }
    ];

    private ngUnsubscribe = new Subject();

    constructor(
        private dataService: DataService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.pipe(
            switchMap(params => this.dataService.getPhotoById(params.id)),
            takeUntil(this.ngUnsubscribe),
        ).subscribe(res => {
            console.log(res);
            this.dataImage = res;
        });
    }

    getRelatedPhoto() {
        const photo = [];
        this.dataImage.related_collections?.results.forEach(el => {
            el.preview_photos.forEach(p => {
                if (photo.length < 8 && p.id !== this.dataImage.id) {
                    photo.push(p);
                }
            });
        });
        return photo;
    }
}
