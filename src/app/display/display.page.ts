import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewPage } from '../image-view/image-view.page';
import {trigger, state, style, animate, transition} from '@angular/animations';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
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
export class DisplayPage implements OnInit {
@Input() CoinData:any;
flag=false;
state: string = 'default';
  constructor(private modalCtrl: ModalController) { 
    
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.FIREBASE_CONFIG);
   }

  
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async presentModal(x) {
    const modal = await this.modalCtrl.create({
      component: ImageViewPage,
      cssClass: 'my-custom-class',
      componentProps: {
        imgurl:x
      }
    });
    return await modal.present();
  }

  flip()
  {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
    this.flag=!this.flag;
    console.log(this.flag);
  }

}
