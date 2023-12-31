import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropPageRoutingModule } from './crop-routing.module';

import { CropPage } from './crop.page';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropPageRoutingModule,
    ImageCropperModule
  ],
  declarations: [CropPage]
})
export class CropPageModule {}
