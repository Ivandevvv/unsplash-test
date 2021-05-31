import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeachComponent } from './seach.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [
    SeachComponent
  ],
  declarations: [
    SeachComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ]
})
export class SeachModule { }
