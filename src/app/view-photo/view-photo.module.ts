import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewPhotoComponent } from './view-photo.component';

@NgModule({
    declarations: [ViewPhotoComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: ':id', component: ViewPhotoComponent }
        ])
    ]
})
export class ViewPhotoModule { }
