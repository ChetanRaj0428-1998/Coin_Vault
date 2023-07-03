import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { TempDataService } from '../temp-data.service';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.page.html',
  styleUrls: ['./crop.page.scss'],
})
export class CropPage implements OnInit {
@Input() imgTocrop:string
@Input() flag:any
croppedImage;  
loading;
canvasRotate=0;
constructor(private modal: ModalController,
  private loadingCtrl: LoadingController,
  private service: TempDataService) {
  }

  async ngOnInit() {
     
    this.loading = await this.loadingCtrl.create({
      message: 'Fetching Image...'
    });
    this.loading.present();
  }
  imageCropped(event: ImageCroppedEvent)
  {
      this.croppedImage = event.base64;
  }

 async rotateRight()
  {

this.loading = await this.loadingCtrl.create({
  message: 'Rotating...'
});
this.loading.present();
this.canvasRotate++;
  }
  
  async rotateLeft()
  {
    this.loading = await this.loadingCtrl.create({
      message: 'Rotating...'
    });
    this.loading.present();
    this.canvasRotate--;
  }

  imageLoaded()
  {
    this.loading.dismiss()
  }

  crop()
  {
    
    if(this.flag==1){this.service.croppedImg=this.croppedImage;}
    if(this.flag==2){this.service.croppedImg1=this.croppedImage;}
    this.croppedImage=null;
    this.imgTocrop=null;
    this.modal.dismiss();
  }

  cancel()
  {
    this.modal.dismiss();
  }
}
