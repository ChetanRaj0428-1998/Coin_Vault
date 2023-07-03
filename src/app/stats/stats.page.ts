import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
@Input() CoinStats: any;
totalDiffCoins=0;
totalCoins=0;
totalPrice=0;
RupeeCoins=0;
Mints;
deno;
  constructor(private modalCtrl: ModalController) {
    
   }

  ngOnInit() {
  this.totalDiffCoins = this.CoinStats.length;
  this.totalCoins=this.totalCoinsProcess();
  this.totalPrice=this.totalPriceProcess();
  this.MintTypeProcess();
  console.log(this.Mints[0])
  
  }

totalCoinsProcess()
{
  
  let i,sum=0,temp;
  for( i=0;i< this.CoinStats.length;i++)
  {
    temp=Number(this.CoinStats[i].quantity);
sum=sum+ temp;
  }

  return sum;
}

totalPriceProcess()
{
  let i,price=0,totalPrice=0,temp1,temp2;
  for( i=0;i< this.CoinStats.length;i++)
  {
    temp1=Number(this.CoinStats[i].quantity);
    temp2=Number(this.CoinStats[i].price);

    price=temp1 * temp2

    totalPrice= totalPrice + price
  }
  return totalPrice;
}

MintTypeProcess()
{let i=0;
let temp=[0,0,0,0];
while(i<this.CoinStats.length)
{
  if(this.CoinStats[i].mint=='Dot')
  {
temp[0]++
  }
  if(this.CoinStats[i].mint=='Diamond')
  {
temp[1]++
  }
  if(this.CoinStats[i].mint=='Star')
  {
temp[2]++
  }
  if(this.CoinStats[i].mint=='Blank')
  {
temp[3]++
  }
  i++;
}
this.Mints = temp;
}

RupeeTypeProcess(x)
{
let i=0;
let temp=0;
for(i=0;i<this.CoinStats.length;i++)
{
  if(x==this.CoinStats[i].deno)
  {
temp++
  }
}
this.RupeeCoins=temp;
}

dismiss() {
  this.modalCtrl.dismiss();
}

}
