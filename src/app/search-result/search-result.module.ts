import { CatalogModule } from './../catalog/catalog.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,
    CatalogModule,
    RouterModule.forChild([
      {
        path: ':query',
        component: SearchResultComponent
      }
    ]),
  ]
})
export class SearchResultModule { }
