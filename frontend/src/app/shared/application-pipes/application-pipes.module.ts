import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortgridPipe } from '../pipes/sortgrid.pipe';

@NgModule({
  declarations: [
    SortgridPipe
  ],
  exports: [
    SortgridPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ApplicationPipesModule { }
