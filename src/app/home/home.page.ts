import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TempDataService } from '../temp-data.service';
import { ModalController, LoadingController, ToastController, AlertController, IonInfiniteScroll, NavController} from '@ionic/angular';
import { AddCoinPage } from '../add-coin/add-coin.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { DisplayPage } from '../display/display.page';
import { StatsPage } from '../stats/stats.page';
import { FilterPage } from '../filter/filter.page';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
import { IonSearchbar } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit  {
 // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild('mySearchbar') searchbar: IonSearchbar;
  
searchQuery: string = '';
CoinData: any[];
coins: any;
fdata=null;
fcoins:any;
chipFlag=[0,0,0,0];
btnFlag=1;
filterFlag=true;
shimmer=true;
styleFlag=false;
listHeight;
adminCheck;
adminColor="primary";
//frontUrl;
//backUrl;
 newMetadata = {
  cacheControl: 'public,max-age=15552000'
}
meta;
  constructor(private service: TempDataService,
     public modalCtrl: ModalController,
     private loadingCtrl: LoadingController, 
     private toastCtrl: ToastController,
     public alertController: AlertController,
     private firestore: AngularFirestore,
     private navCtrl: NavController 
    ) {
      
      if (!firebase.apps.length) {
        firebase.initializeApp(environment.FIREBASE_CONFIG);
     }
        this.adminCheck=service.adminCheck;
        if(this.adminCheck==true)
        {
          this.adminColor="danger";
        }
       this.fdata=this.service.filterData;
      this.styleFlag=this.service.styleFlag;
      this.service.styleFlag=false;
      console.log('style'+this.styleFlag)
       if(this.fdata!=null)
       {
         if(this.service.chipFlag[0]==1)
       {
          this.chipFlag[0]=this.service.chipFlag[0];
          
       }
       if(this.service.chipFlag[1]==1)
       {
        this.chipFlag[1]=this.service.chipFlag[1];
       }
       if(this.service.chipFlag[2]==1)
       {
        this.chipFlag[2]=this.service.chipFlag[2];
       }
       if(this.service.chipFlag[3]==1)
       {
        this.chipFlag[3]=this.service.chipFlag[3];
       }
      
      }
    
      setTimeout(()=>{this.shimmer=false},5000)
      
      this.getCoins();
      this.initializeItems();
      
      

  }
  ngOnInit(): void {
    
  }
  async openModal() {
    this.modalCtrl.dismiss();

    let modal = await this.modalCtrl.create({
      component: AddCoinPage
    });

    modal.present();
  }

  async openModal2() {
    this.modalCtrl.dismiss();
    let modal = await this.modalCtrl.create({
      component: StatsPage,
      componentProps:{
        'CoinStats': this.service.coinData
      },
    });

    modal.present();
  }



   initializeItems()
  {
    
//this.coins=this.CoinData;
this.coins=this.service.coinData;
 }

 initializeItems2()
 {
   
//this.coins=this.CoinData;
this.coins=this.fcoins;
}

  async getItems(ev: any) {
    this.shimmer=true
    
    setTimeout(()=>{this.shimmer=false,1500 })
            // Reset items back to all of the items
            
            
            if(!this.filterFlag)
            {
                  
              this.initializeItems2();         
            }
            else
            {
              this.initializeItems(); 
            }
                

            
  
  //console.log(this.coins)

    // set val to the value of the searchbar
    const val = ev.target.value;
    console.log(val)
    //console.log("val "+typeof(parseInt()))
    // if the value is an empty string don't filter the items

      if (val && val.trim() != '') {
        this.coins = this.coins.filter((item) => {

          //console.log("Check"+item.name.toLowerCase().indexOf(val.toLowerCase()) )
          return (item.name.toLowerCase().indexOf(val.toLowerCase())   > -1 )||(item.year.toLowerCase().indexOf(val.toLowerCase())   > -1 )||(item.deno.toLowerCase().indexOf(val.toLowerCase())   > -1 );
          
        })
         this.listHeight=this.coins.length*68
        
    }

    else
    {
      
       this.listHeight=this.coins.length*68
      this.filterItems(this.fdata)
    }

    console.log("yeees")
    console.log(this.coins)
    
    //console.log(this.listHeight)
    //console.log(this.coins.length)
   
    
  }

  async filterItems(x) {
    
    let loader = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration:2000
    });
    // Reset items back to all of the items
this.initializeItems();

console.log(this.coins)

// set val to the value of the searchbar
if(x!=undefined)
{

this.filterFlag=false
let val = x.f_deno;
let val2 = x.f_mint;


if(x.f_price=="Price HL")
{
this.coins.sort(compare);
function compare( a, b ) {
let x = Number(a.price)
let y = Number(b.price)
  if ( x < y ){
    return 1;
  }
  if ( x> y ){
    return -1;
  }
  return 0;
}

}

if(x.f_price=="Price LH")
{
  this.coins.sort(compare2);
  function compare2( a, b ) {
    let x = Number(a.price)
    let y = Number(b.price)
      if ( x < y ){
        return -1;
      }
      if ( x> y ){
        return 1;
      }
      return 0;
    }

  
}

if(x.f_year=="Year HL")
{
  this.coins.sort(compare3);
  function compare3( a, b ) {
    if ( a.year < b.year ){
      return 1;
    }
    if ( a.year > b.year ){
      return -1;
    }
    return 0;
  }

}

if(x.f_year=="Year LH")
{
  this.coins.sort(compare4);
  
  function compare4( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
  }
  

  }




//console.log("val "+typeof(parseInt()))
// if the value is an empty string don't filter the items

if (val != null && val2 !=null ) {
this.coins = this.coins.filter((item) => {
  
  return (item.deno.toLowerCase().indexOf(val.toLowerCase())   > -1 )&&(item.mint.toLowerCase().indexOf(val2.toLowerCase())   > -1 );
  
})
this.fcoins=this.coins
this.listHeight=this.coins.length*68
}

if (val != null && val2 ==null ) {
  this.coins = this.coins.filter((item) => {
    
    return (item.deno.toLowerCase().indexOf(val.toLowerCase())   > -1 );
    
  })
  this.fcoins=this.coins
  this.listHeight=this.coins.length*68
  }

  if (val == null && val2 !=null ) {
    this.coins = this.coins.filter((item) => {
      
      return (item.mint.toLowerCase().indexOf(val2.toLowerCase())   > -1 );
      
    })
    this.fcoins=this.coins
    this.listHeight=this.coins.length*68
    }
else
{
  return  null
}
}
  }
  

  ionViewWillEnter()
{
this.getCoins();
}

async getCoins()
{
    this.shimmer=true; 
   //show loader
  //  let loader =await this.loadingCtrl.create({
  //   message:"Please Wait..."
  // });
  //  loader.present();

   try{
    this.firestore.collection("coins")
    .snapshotChanges()
    .subscribe(data => {
      this.coins = data.map(e =>{
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
    // for(var i=0; i< this.coins.length; i++)
    // {
    //   var frontRef = firebase.storage().ref().child(this.coins[i].front);
    //   frontRef.updateMetadata(this.newMetadata).then(function(metadata) {
    //     // Updated metadata for 'images/forest.jpg' is returned in the Promise
    //   }).catch(function(error) {
    //     // Uh-oh, an error occurred!
    //   });
    //   var backRef = firebase.storage().ref().child(this.coins[i].back);
    //   backRef.updateMetadata(this.newMetadata).then(function(metadata) {
    //     // Updated metadata for 'images/forest.jpg' is returned in the Promise
    //   }).catch(function(error) {
    //     // Uh-oh, an error occurred!
    //   });
    // }
  
    // for(var i=0; i < this.coins.length; i++)
    // {
    //   this.service.storeFF(this.coins[i].frontUrl,this.coins[i].front)
    //   this.service.storeBB(this.coins[i].backUrl,this.coins[i].back)
    // }
    
    // for(var i=0;i<this.coins.length;i++)
    // {
    //     if(this.coins[i].front == this.service.photosF[i].url)
    //     {
    //       this.coins[i].frontUrl=this.service.photosF[i].data
    //     }
    //      if(this.coins[i].back == this.service.photosB[i].url)
    //      {
    //       this.coins[i].backUrl=this.service.photosB[i].data
    //      }

    // }

this.listHeight=this.coins.length*68    
this.CoinData=this.coins;
this.service.coinData=this.CoinData;
this.filterFlag=!this.filterFlag;
console.log("Filterflag"+this.filterFlag)
setTimeout(()=>{this.shimmer=false},2000)
if(this.filterFlag==true)
{
  this.filterItems(this.fdata)
 
}

    });

    
    // dismiss loader
    // loader.dismiss();
  }catch(e)
  {
    this.showToast(e);  
  }

  
}

store(x)
    {
      console.log("Meta")
      console.log(x)
    }

async delete(id:string, x, y)
  {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Coin',
      message: 'Are you sure you want delete this coin?',
      animated:true,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: async () => {
            //show loader
 let loader = this.loadingCtrl.create({
  message:"Please Wait..."
});
(await loader).present();

this.searchbar.value=null;

firebase.storage().ref().child(x).delete()
.then(response =>  console.log(response))
.catch(error => console.log('error', error))

firebase.storage().ref().child(y).delete()
.then(response =>   console.log(response))
.catch(error => console.log('error', error))

await this.firestore.doc("coins/"+ id).delete();



// dismiss loader
(await loader).dismiss();
for(var i=0;i<3;i++)
{
  this.chipFlag[i]=0;
}
this.modalCtrl.dismiss();


this.getCoinsNoChange()
          }
        }
      ]
    });
  
    await alert.present();


    
   }

showToast(message:string)
  {
  this.toastCtrl.create({
    message:message,
    duration:3000
  })
  .then(toastData => toastData.present())
  }

  async  coinDisplay(x)
  {
    
    //this.modalCtrl.dismiss();
    let modal = await this.modalCtrl.create({
      component: DisplayPage,
      componentProps:{
        'CoinData': x,
      },
        animated:true
      
    });

    modal.present();
    
  }

  async presentModal() {

    

    //this.modalCtrl.dismiss();
    var modal = await this.modalCtrl.create({
      component: FilterPage,
      componentProps:
      {
        'title':"Filters",
        'cacheData':this.fdata
      }
    
    });

    return await modal.present();
   
  }

 closeChip(x)
 {
   this.shimmer=true;
   console.log(this.service.fCount)

if(x==0)
{

  this.chipFlag[x]=0
  this.service.chipFlag[x]=0;      
  this.filterFlag=false;
  this.fdata.f_deno=undefined;
  setTimeout(()=>{this.shimmer=false},2000)
  this.getCoins();

}

if(x==1)
{
  
  this.chipFlag[x]=0
  this.service.chipFlag[x]=0;
  this.filterFlag=false;
  this.fdata.f_mint=undefined;
  setTimeout(()=>{this.shimmer=false},2000)
  this.getCoins();
  
}



if(x==2)
{

  this.chipFlag[x]=0;
  this.service.chipFlag[x]=0;
  this.filterFlag=false;
  this.fdata.f_price=undefined;
  setTimeout(()=>{this.shimmer=false},2000)
  this.getCoins();
 }

if(x==3)
{
  
  this.chipFlag[x]=0;
  this.service.chipFlag[x]=0;
  this.filterFlag=false;
  this.fdata.f_year=undefined;
  setTimeout(()=>{this.shimmer=false},2000)
  this.getCoins();
 
}

  if(this.chipFlag[0]==0&&this.chipFlag[1]==0&&this.chipFlag[2]==0&&this.chipFlag[3]==0)
{
  this.coins=this.service.coinData
 this.fcoins=this.coins
 this.searchbar.value=null;
 this.listHeight=this.coins.length
this.filterFlag=true
      //this.modalCtrl.dismiss();

 for(var i=0;i<this.service.modalInstance.length;i++)
 {
   this.service.modalInstance[i].dismiss();
   
 }
 
this.service.modalInstance=[];


 console.log("Checking logs")
console.log(this.filterFlag)
console.log(this.coins)
console.log(this.fcoins)
console.log(this.CoinData)
console.log(this.service.coinData)
}


 }

 doRefresh(event) {

 let i;
 this.shimmer=true;
 this.filterFlag=true
 this.coins=this.service.coinData
 this.fcoins=this.coins
// console.log("Checking logs")
// console.log(this.filterFlag)
// console.log(this.coins)
// console.log(this.fcoins)
// console.log(this.CoinData)
// console.log(this.service.coinData)
  console.log('Begin async operation');
  console.log('Async operation has ended');
  this.searchbar.value=null
  setTimeout(() => {
  

    this.getCoinsNoChange();
    event.target.complete();
  }, 2000);

  this.fdata.f_deno=undefined;
  this.fdata.f_mint=undefined;
  this.fdata.f_year=undefined;
  this.fdata.f_price=undefined;
  for(i=0;i<3;i++)
  {
    this.chipFlag[i]=0;
  }
  setTimeout(()=>{
    for( i=0;i<this.service.modalInstance.length;i++)
    {
     this.service.modalInstance[i].dismiss();
     
    }
    setTimeout(()=>{this.shimmer=false;},3000)

  },2000)

this.service.modalInstance=[];
}

async getCoinsNoChange()
{
  
  
   //show loader
  //  let loader =await this.loadingCtrl.create({
  //   message:"Please Wait..."
  // });
  //  loader.present();

   try{
    this.firestore.collection("coins")
    .snapshotChanges()
    .subscribe(data => {
      this.coins = data.map(e =>{
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
    //  loader.dismiss();

  }catch(e)
  {
    this.showToast(e);  
  }
  setTimeout(()=>{this.shimmer=false;},2000)
      
  this.listHeight=this.coins.length*68
}



clear()
{
  this.searchbar.value=null;
}

logout()
{
  this.navCtrl.navigateRoot("login"); 

}



 
}

