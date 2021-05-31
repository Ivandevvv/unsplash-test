import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { ViewPhotoModule } from './view-photo/view-photo.module';
import { SearchResultModule } from './search-result/search-result.module';

@NgModule({
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    imports: [
        HomeModule,
        BrowserModule,
        ViewPhotoModule,
        HttpClientModule,
        AppRoutingModule,
        SearchResultModule,
    ],
})
export class AppModule { }
