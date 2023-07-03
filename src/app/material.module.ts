import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';

import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[ScrollingModule,MatListModule]
})
export class MaterialModule { }
