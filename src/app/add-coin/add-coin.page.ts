import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImageViewPage } from '../image-view/image-view.page';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Coin } from '../models/coin.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { TempDataService } from '../temp-data.service';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
import { CropPage } from '../crop/crop.page';

@Component({
  selector: 'app-add-coin',
  templateUrl: './add-coin.page.html',
  styleUrls: ['./add-coin.page.scss'],
  animations: [
          // Each unique animation requires its own trigger. The first argument of the trigger function is the name
          trigger('rotatedState', [
            state('default', style({ transform: 'rotate(0)' })),
            state('rotated', style({ transform: 'rotate(360deg)' })),
            transition('rotated => default', animate('500ms ease-out')),
            transition('default => rotated', animate('500ms ease-in'))
        ])
    ]
})
export class AddCoinPage implements OnInit {
coin = {} as Coin;
  chipname;
  chipflag=0;
  option;
  year;
  deno="1 Rupee";
  state: string = 'default';
coinsCheck:any;
selectedPhoto;
selectedPhoto1;
loading;
  /*
  val={
    lower:1,
    upper:1000
  };
  */
  options;
  //imgURL="https://5.imimg.com/data5/VU/HS/MY-38483535/silver-coins-500x500.jpg";
//imgURL1="https://en.numista.com/catalogue/photos/inde/2311-original.jpg";

  imgURL;
  imgURL1;
  frontID;
  backID;
coinref= {} as Coin
    flag=false;
    
    newMetadata = {
      cacheControl: 'public,max-age=15552000'
    }

  constructor(  public viewCtrl: ModalController,
     private camera:Camera,
     private toastCtrl: ToastController,
     private loadingCtrl: LoadingController,
     private navCtrl: NavController,
     private service: TempDataService,
     private firestore: AngularFirestore ) { 

      if (!firebase.apps.length) {
        firebase.initializeApp(environment.FIREBASE_CONFIG);
     }
     this.getCoins();
      
     }

  ngOnInit() {
  }

  cameraoptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
 
  galleryoptions: CameraOptions = {
    quality: 20,
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType:this.camera.DestinationType.DATA_URL
      }



  setPhotoOption(value:number)
  {
//    console.log("option: Inside", value)

if(value==1)
{
  this.options=this.cameraoptions;
  console.log("option: Camera")
}
if(value==2)
{
  this.options=this.galleryoptions;
  console.log("option: Gallery")
}

}

  async SubmitForm(x)
  {
    x.mint = this.chipname;
    x.front ='front/'+Math.random();
    x.back ='back/'+Math.random();
    this.frontID =x.front;
    this.backID =x.back;
   if(x.year!=null){ x.year = x.year.substring(0,4);}
    this.coin=x;
    
    
    this.selectedPhoto=this.service.croppedImg;

    this.selectedPhoto1=this.service.croppedImg1;
    this.uploadFront(this.frontID);
    var task = this.uploadBack(this.backID);
   task.then(this.onSuccess1, this.onError)

   
      if(this.formValidation())
      {
        this.loading =await this.loadingCtrl.create({
          message:"Please Wait..."
        });
         this.loading.present();

        
   
    this.coinref=x;
    
    

    this.service.croppedImg=null;
        this.service.croppedImg1=null;
   
      
    }
    
    
    // console.log(this.coinsCheck);
    
    //console.log(this.coinref.frontUrl);
    // console.log(this.coinref.backUrl);
    // this.addCoin(x);
    
  }
 



  onSuccess1 = snapshot => { 
    //this.currentImage = snapshot.downloadURL;
    setTimeout(() => { 

      firebase.storage().ref().child(this.frontID).getDownloadURL()
      .then(response => {
        this.coinref.frontUrl= response;
        firebase.storage().ref().child(this.backID).getDownloadURL()
      .then(async response => {
       
          this.coinref.backUrl= response;
        
           this.addCoin(this.coinref) 
      
          
        
          
                      })
                        })
     
  
      
      .catch(error => console.log('error', error))
  

     }, 1000);

    
  };
  


  onError = error => {
    console.log("error", error);
   
  };
  
  
  




  getCameraFront()
  {
    this.camera.getPicture(this.options).then(async (imageData) => {
      this.imgURL='data:image/jpeg;base64,' + imageData;

      this.selectedPhoto  = this.dataURItoBlob('data:image/jpeg;base64,' +imageData);

      // this.loading = await this.loadingCtrl.create({
      //   message: 'Please wait...'
      // });
      // this.loading.present();

      this.cropModal(this.selectedPhoto,1).then(
        this.selectedPhoto=this.service.croppedImg
      )
       
    }, (err) => {
      console.log(' error', err);
    }); 
    
  }

  getCameraBack()
  {
   
    this.camera.getPicture(this.options).then(async (imageData) => {
      this.imgURL1='data:image/jpeg;base64,' + imageData;
    
      
      this.selectedPhoto1  = this.dataURItoBlob('data:image/jpeg;base64,' +imageData);

      // this.loading = await this.loadingCtrl.create({
      //   message: 'Please wait...'
      // });
      // this.loading.present();

      this.cropModal(this.selectedPhoto1,2).then(
        this.selectedPhoto1=this.service.croppedImg1
      )
      
      
      
    }, (err) => {
      console.log('error', err);
    });  
    
  }

  

  dataURItoBlob(dataURI) {
    console.log("here");
    // codej adapted from:
    //  http://stackoverflow.com/questions/33486352/
    //cant-upload-image-to-aws-s3-from-ionic-camera
        let binary = atob(dataURI.split(',')[1]);
        let array = [];
        for (let i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
      };


      show()
      {//convert to blob
        this.selectedPhoto=this.service.croppedImg;

        this.selectedPhoto1=this.service.croppedImg1;

        
      }


      async    uploadFront(x) {
        
        if (this.selectedPhoto && this.formValidation()) {

       var uploadTask = firebase.storage().ref().child(x)
            .put(this.dataURItoBlob(this.selectedPhoto), this.newMetadata);

      
             
        }
        //this.loading.dismiss();
        return uploadTask

        //uploadTask.then(this.onSuccess, this.onError);
      }



    async  uploadBack(x) {
     
      //this.loading.present();
        
        if (this.selectedPhoto1 && this.formValidation()) {

          var uploadTask =  firebase.storage().ref().child(x)
            .put(this.dataURItoBlob(this.selectedPhoto1), this.newMetadata);
    
        }
        
        
        
        return uploadTask
      }



  chipSelect(x,y)
  {
if(x==1)
{
this.chipflag=1;
this.chipname=y;
}

if(x==2)
{
this.chipflag=2;
this.chipname=y;
}
if(x==3)
{
this.chipflag=3;
this.chipname=y;
}
if(x==4)
{
this.chipflag=4;
this.chipname=y;
}

  }

  flip()
  {
   
    this.state = (this.state === 'default' ? 'rotated' : 'default');
    this.flag=!this.flag;
    console.log(this.flag);
  }

  
  dismiss() {
    
    this.service.croppedImg=null;
    this.service.croppedImg1=null;
    this.viewCtrl.dismiss();
    this.getCoinsNoChange();
  }

  async presentModal(x) {
    const modal = await this.viewCtrl.create({
      component: ImageViewPage,
      cssClass: 'my-custom-class',
      componentProps: {
        imgurl:x
      }
    });
    return await modal.present();
  }

  async cropModal(x,y) {
    const modal = await this.viewCtrl.create({
      component: CropPage,
      componentProps: {
        'imgTocrop':x,
        'flag':y
      }
    });
    // this.loading.dismiss();
    return await modal.present();
    
  }

  async addCoin(coin: Coin)
  {
    
    if(this.formValidation())
    {
  
  await this.firestore.collection("coins").add(coin); 
  this.service.croppedImg=null;
  this.service.croppedImg1=null;
    this.loading.dismiss();
  
    //redirect to home page
    this.dismiss();
    }
  }

  formValidation()
{
  
  let i;
  if(!this.coin.name)
  {
    this.showToast("Enter Coin name");
    return false;
  }

  if(!this.coin.deno)
  {
    this.showToast("Select Denomination");
    return false;
  }

  if(!this.coin.quantity)
  {
    this.showToast("Enter Quantity");
    return false;
  }

  if(!this.coin.year)
  {
    this.showToast("Enter Year");
    return false;
  }

  if(!this.coin.mint)
  {
    this.showToast("Choose Mint");
    return false;
  }

  if(!this.coin.price)
  {
    this.showToast("Enter Price");
    return false;
  }

  if(!this.selectedPhoto)
  {
    this.showToast("Upload front coin image");
    return false;
  }

  if(!this.selectedPhoto1)
  {
    this.showToast("Upload back coin image");
    return false;
  }
  

  
  for(i=0;i<this.service.coinData.length;i++)
  {
      if(this.service.coinData[i].name==this.coin.name&&
        this.service.coinData[i].deno==this.coin.deno&&
        this.service.coinData[i].year==this.coin.year&&
        this.service.coinData[i].mint==this.coin.mint)
        {
          this.showToast("You already have this coin");
      return false; 
        }
  }
  

return true;
}

showToast(message:string)
{
this.toastCtrl.create({
  message:message,
  duration:3000,
  position:'top'
})
.then(toastData => toastData.present())
}

async getCoins()
{
   //show loader
   let loader =await this.loadingCtrl.create({
    message:"Please Wait..."
  });
   loader.present();

   try{
    this.firestore.collection("coins")
    .snapshotChanges()
    .subscribe(data => {
      this.coinsCheck = data.map(e =>{
        return {
          name: e.payload.doc.data()["name"],
          year: e.payload.doc.data()["year"],
          deno: e.payload.doc.data()["deno"],
          mint: e.payload.doc.data()["mint"],
        };
        
      });
        
    });
    
    // dismiss loader
     loader.dismiss();

  }catch(e)
  {
    this.showToast(e);  
  }
  

  
}

async getCoinsNoChange()
{
   //show loader
   let loader =await this.loadingCtrl.create({
    message:"Please Wait..."
  });
   loader.present();

   try{
    this.firestore.collection("coins")
    .snapshotChanges()
    .subscribe(data => {
      this.coinsCheck = data.map(e =>{
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"],
          year: e.payload.doc.data()["year"],
          deno: e.payload.doc.data()["deno"],
          quantity: e.payload.doc.data()["quantity"],
          mint: e.payload.doc.data()["mint"],
          price: e.payload.doc.data()["price"],
          front: e.payload.doc.data()["front"],
          back: e.payload.doc.data()["back"],
          frontUrl: e.payload.doc.data()["frontUrl"],
          backUrl: e.payload.doc.data()["backUrl"],
        };
        
      });

    });
    
    // dismiss loader
     loader.dismiss();

  }catch(e)
  {
    this.showToast(e);  
  }
  
}



}
