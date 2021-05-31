import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeachModule } from './seach/seach.module';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from './catalog/catalog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SeachModule,
    CatalogModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
