import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    outputPhoto;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.getAllPhoto();
    }

    private getAllPhoto() {
        this.dataService.getPhotos()
            .subscribe(res => {
                this.outputPhoto = res;
        });
    }
}
