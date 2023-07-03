import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

filterData:any;
coinData:any;
checkCoin:any;
displayData;
croppedImg=null;
croppedImg1=null;

styleFlag=false;

chipFlag=[0,0,0,0]

fCount=0;
modalInstance=[];
i=0;
public  photosF: PhotoF[] = [];
public  photosB: PhotoB[] = [];

temp=10;
adminCheck=false;
constructor(private storage: Storage) { }


incrCount()
{
  this.fCount++
}

dcrCount()
{
  this.fCount--
}

storeModal(x)
{
this.modalInstance[this.i]=x;
this.i++;
console.log(this.modalInstance)
}

getData()
  {
    return 'hello';
  //  return this.CoinData;
  }

  
  storeFF(x, y) {

    // Add new photo to gallery
    this.photosF.unshift({
      data:  x,
      url: y
    });

    // Save all photos for later viewing
    this.storage.set('front', this.photosF);

   
  }


storeBB(x, y) {

  // Add new photo to gallery
  this.photosB.unshift({
    data:  x,
    url: y
  });

  // Save all photos for later viewing
  this.storage.set('back', this.photosB);

 
} 


  storeF(x, y) {

    // Add new photo to gallery
    this.photosF.unshift({
      data: 'data:image/jpeg;base64,' + x,
      url: y
    });

    // Save all photos for later viewing
    this.storage.set('front', this.photosF);

   
  }


storeB(x, y) {

  // Add new photo to gallery
  this.photosB.unshift({
    data: 'data:image/jpeg;base64,' + x ,
    url: y
  });

  // Save all photos for later viewing
  this.storage.set('back', this.photosB);

 
}

loadSaved() {
 
  this.storage.get('front').then((photos) => {
    this.photosF = photos || [];
  });

  this.storage.get('back').then((photos) => {
    this.photosB = photos || [];
  });
  
}

}

class PhotoF {
data: any;
url:any;
}

class PhotoB {
data: any;
url:any;
}

