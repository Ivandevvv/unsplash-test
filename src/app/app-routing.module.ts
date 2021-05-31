import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: './home/home.module#HomeModule',
	},
	{
		path: 'search',
		loadChildren: './search-result/search-result.module#SearchResultModule',
	},
	{
		path: 'photo',
		loadChildren: './view-photo/view-photo.module#ViewPhotoModule'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
