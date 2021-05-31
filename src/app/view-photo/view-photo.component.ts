import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-photo',
    templateUrl: './view-photo.component.html',
    styleUrls: ['./view-photo.component.scss']
})
export class ViewPhotoComponent implements OnInit {

    query = this.activatedRoute.snapshot.params.id;
    dataImage: any = {};

    constructor(
        private dataService: DataService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.dataService.getPhotoById(this.query).subscribe(res => {
            console.log(res);
            this.dataImage = res;
        });
    }

    getRelatedPhoto() {
        const photo = [];
        this.dataImage.related_collections?.results.forEach(el => {
            el.preview_photos.forEach(p => {
                if (photo.length < 8) {
                    photo.push(p);
                }
            });
        });
        return photo;
    }
}
