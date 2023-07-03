import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { TempDataService } from '../temp-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  
  @Input() title:string;
  @Input() cacheData:any;
f_deno;
f_mint;
f_price;
f_year;
  constructor(
   public viewCtrl: ModalController,
   private service: TempDataService,
   private navCtrl: NavController,
   private router: Router
  ) {
   
   
}
  ngOnInit(): void {
    this.f_deno=this.cacheData?.f_deno;
   this.f_mint=this.cacheData?.f_mint;
   this.f_price=this.cacheData?.f_price;
   this.f_year=this.cacheData?.f_year; 
    }

 async filterItem(x)
{
  this.service.incrCount();
  if(x.f_deno != null || x.f_mint != null)
  {
    this.service.styleFlag=true;
      
  }

 if(x.f_deno)
 {
this.service.chipFlag[0]=1;
 }

 if(x.f_mint)
 {
  this.service.chipFlag[1]=1;
 }

 if(x.f_price)
 {
  this.service.chipFlag[2]=1;
 }

 if(x.f_year)
 {
  this.service.chipFlag[3]=1;
 }

    this.service.filterData=x;
  this.dismiss();
  var modal = await this.viewCtrl.create({
    component: HomePage
  
  });
  this.service.storeModal(modal);
  return await modal.present();
 
  }


dismiss() {

 this.viewCtrl.dismiss();
  
}



}
