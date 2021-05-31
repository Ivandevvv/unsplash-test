import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SeachComponent } from './seach.component';



@NgModule({
  exports: [ SeachComponent ],
  declarations: [ SeachComponent ],
  imports: [
    CommonModule
  ]
})
export class SeachModule { }
