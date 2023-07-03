import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.page.html',
  styleUrls: ['./image-view.page.scss'],
})
export class ImageViewPage implements OnInit {

  @Input() imgurl: string;

  sliderOpt = {
    zoom: {
      maxRatio: 5,
    },
    simulateTouch:false,
    shortSwipes:false,
    longSwipes:false,
    // allowTouchMove:false
    preventInteractionOnTransition:true,
    allowSlidePrev:false,
    allowSlideNext:false

  };

  constructor(private modalCtrl: ModalController) {

  
   }

  ngOnInit() {
  }



  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
