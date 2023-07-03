import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImageViewPage } from '../image-view/image-view.page';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Coin } from '../models/coin.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { TempDataService } from '../temp-data.service';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
import { CropPage } from '../crop/crop.page';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
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
export class EditPage implements OnInit {

  coin = {} as Coin;
  id:any;
  chipname;
  chipflag=0;
  option;
  year;
  deno="1 Rupee";
  state: string = 'default';
  selectedPhoto;
  selectedPhoto1;
  loading;
  
 // frontID='front/'+Math.random();
  //backID='back/'+Math.random();
frontbtn=false;
backbtn=false;
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
  newMetadata = {
    cacheControl: 'public,max-age=15552000'
  }

    flag=false;
  constructor(  public viewCtrl: ModalController,
     private camera:Camera,
     private toastCtrl: ToastController,
     private loadingCtrl: LoadingController,
     private navCtrl: NavController,
     private service: TempDataService,
     private firestore: AngularFirestore,
     private actRoute : ActivatedRoute ) {
      
      if (!firebase.apps.length) {
        firebase.initializeApp(environment.FIREBASE_CONFIG);
     }
      this.id = this.actRoute.snapshot.paramMap.get("id");
      }

  ngOnInit() {
    this.viewCtrl.dismiss();
    this.getPostById(this.id);

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
    destinationType:this.camera.DestinationType.DATA_URL,
    
      }



  setPhotoOption(x)
  {
if(x==1)
{
  this.options=this.cameraoptions;
}
if(x==2)
{
  this.options=this.galleryoptions;
}
  }

  async SubmitForm(x)
  {
   
    x.mint = this.chipname;
    //x.front ='front/'+Math.random();
    //x.back ='back/'+Math.random();
    this.frontID =x.front;
    this.backID =x.back;
    x.year = x.year.substring(0,4);
    this.coinref=x;
    if(this.frontbtn==true&&this.backbtn==false)
{ 
  console.log("if1");
     var task =  this.uploadFront(x.front);
       
     this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.loading.present();
       task.then(this.onSuccess, this.onError)
       
}

  if(this.backbtn==true&&this.frontbtn==false)
{ 
  console.log("if2");
       var task1 = this.uploadBack(x.back);
      task1.then(this.onSuccess1, this.onError)
      
}    
  
if(this.frontbtn==false && this.backbtn==false)
{
  console.log("if3");
  this.loading = await this.loadingCtrl.create({
    message: 'Please wait...'
  });
  this.loading.present();
  this.updateCoin(this.coinref);
}

if(this.frontbtn==true && this.backbtn==true)
{
  console.log("if4");
  var task = this.uploadFront(x.front);
  task.then(this.onSuccess, this.onError)
  var task1 = this.uploadBack(x.back);
  task1.then(this.onSuccess1, this.onError)     
}
    this.coin=x;
      if(this.formValidation())
      {
        
    
    
    
    // console.log(this.coinsCheck);
    console.log(this.coinref);
    console.log(this.coinref.frontUrl);
     console.log(this.coinref.backUrl);
    // this.addCoin(x);
    
  }

  }

  onSuccess = snapshot => {
    //this.currentImage = snapshot.downloadURL;
    firebase.storage().ref().child(this.coinref.front).getDownloadURL()
    .then(response => {this.coinref.frontUrl= response;
                 this.updateCoin(this.coinref)    ;   })
    .catch(error => console.log('error', error))

      
  };

  onSuccess1 = snapshot => {
    //this.currentImage = snapshot.downloadURL;
    firebase.storage().ref().child(this.coinref.back).getDownloadURL()
    .then(response => {this.coinref.backUrl= response;
                 this.updateCoin(this.coinref)    ;   })
    .catch(error => console.log('error', error))

      
  };

  
  onError = error => {
    console.log("error", error);
   
  };


  getCameraFront()
  {this.frontbtn=true;
    this.selectedPhoto=null;
    this.selectedPhoto1=null;
    this.camera.getPicture(this.options).then(async (imageData) => {
      this.imgURL='data:image/jpeg;base64,' +imageData;
      this.loading = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
      this.loading.present();

      this.selectedPhoto  = this.dataURItoBlob( this.imgURL);
      this.cropModal(this.selectedPhoto,1).then(
        this.selectedPhoto=this.service.croppedImg
      )
      this.loading.dismiss();
        
    }, (err) => {
      console.log('error', err);
    }); 
    
  }

  getCameraBack()
  {this.backbtn=true;
    this.selectedPhoto=null;
    this.selectedPhoto1=null;
    this.camera.getPicture(this.options).then(async (imageData) => {
      this.imgURL1='data:image/jpeg;base64,' +imageData;
      this.loading = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
      this.loading.present();
      
      this.selectedPhoto1  = this.dataURItoBlob( this.imgURL1);
      this.cropModal(this.selectedPhoto1,2).then(
        this.selectedPhoto1=this.service.croppedImg1
      )
      this.loading.dismiss();
      
    }, (err) => {
      console.log('error', err);
    });  

  }


  dataURItoBlob(dataURI) {
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


      uploadFront(x) {
        if (this.selectedPhoto && this.formValidation()) {

       var uploadTask = firebase.storage().ref().child(x)
            .put(this.dataURItoBlob(this.selectedPhoto),this.newMetadata);

      
             
        }
        return uploadTask
        //this.loading.dismiss();
        //uploadTask.then(this.onSuccess, this.onError);
      }


      async uploadBack(x) {
        this.loading = await this.loadingCtrl.create({
          message: 'Please wait...'
        });
        this.loading.present();
        if (this.selectedPhoto1 && this.formValidation() ) {

          var uploadTask =  firebase.storage().ref().child(x)
            .put(this.dataURItoBlob(this.selectedPhoto1),this.newMetadata);
    
        }
        
        
        //this.loading.dismiss();
        return uploadTask
      }


      async cropModal(x,y) {
        const modal = await this.viewCtrl.create({
          component: CropPage,
          componentProps: {
            'imgTocrop':x,
            'flag':y
          }
        });
        return await modal.present();
        
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

  show()
      {//convert to blob
        this.selectedPhoto=this.service.croppedImg;

        this.selectedPhoto1=this.service.croppedImg1;

        
      }

  
  dismiss() {

    this.service.croppedImg=null;
    this.service.croppedImg1=null;
    this.navCtrl.navigateRoot("home"); 

  }

  

  async getPostById(id:string)
  {
     //show loader
     let loader = this.loadingCtrl.create({
      message:"Please Wait..."
    });
    (await loader).present();
  
    this.firestore.doc("coins/"+id)
    .valueChanges()   
    .subscribe(data => {
      this.coin.name=data["name"];
      this.coin.year=data["year"];
      this.coin.mint=data["mint"];
      this.coin.price=data["price"];
      this.coin.quantity=data["quantity"];
      this.coin.deno=data["deno"];
      this.coin.front=data["front"];
      this.coin.back=data["back"];
      this.coin.frontUrl=data["frontUrl"];
      this.coin.backUrl=data["backUrl"];

    
      
      if(this.coin.mint == 'Dot')
      {
          this.chipflag=1;
          this.chipname="Dot";
      }
      if(this.coin.mint == 'Diamond')
      {
        this.chipflag=2; 
        this.chipname="Diamond";   
      }
      if(this.coin.mint == 'Star')
      {
        this.chipflag=3;
        this.chipname="Star";
      }
      if(this.coin.mint == 'Blank')
      {
        this.chipflag=4;
        this.chipname="Blank";
      }

        this.selectedPhoto=this.coin.frontUrl;
        this.selectedPhoto1=this.coin.backUrl;
        this.service.croppedImg=this.selectedPhoto;
        this.service.croppedImg1=this.selectedPhoto1;
    });
      
    // dismiss loader
    (await loader).dismiss();
    
  
  }
  
  async updateCoin(coin: Coin)
{ 
if(this.formValidation())
{
  
    
    await this.firestore.doc("coins/"+this.id).update(coin);
     
    this.service.croppedImg=null;
    this.service.croppedImg1=null;
    //dismiss loader
    
    this.loading.dismiss();
    //redirect to home page
    this.navCtrl.navigateRoot("home"); 
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
        this.service.coinData[i].mint==this.coin.mint&&
        this.service.coinData[i].id!=this.id)
        {
          console.log(this.service.coinData[i].id+" "+this.id)
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

}
