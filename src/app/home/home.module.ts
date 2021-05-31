import { SeachModule } from './../seach/seach.module';
import { CatalogModule } from './../catalog/catalog.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  exports: [ HomeComponent ],
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    SeachModule,
    CatalogModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ]
})
export class HomeModule { }
