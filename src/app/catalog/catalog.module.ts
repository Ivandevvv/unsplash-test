import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogCategoriesComponent } from './catalog-categories/catalog-categories.component';
import { CatalogPhotosComponent } from './catalog-photos/catalog-photos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  exports: [
    CatalogPhotosComponent,
    CatalogCategoriesComponent,
  ],
  declarations: [
    CatalogPhotosComponent,
    CatalogCategoriesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CatalogModule { }
