import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewPhotoComponent } from './view-photo.component';
import { ShareButtonModule } from 'ngx-sharebuttons/button';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


@NgModule({
    declarations: [ViewPhotoComponent],
    imports: [
        CommonModule,
        ShareIconsModule,
        ShareButtonModule,
        RouterModule.forChild([
            { path: ':id', component: ViewPhotoComponent }
        ])
    ]
})
export class ViewPhotoModule { }
