import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ImageLoaderConfigService } from 'ionic-image-loader';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash=true;
  angular: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private imgLoadConf: ImageLoaderConfigService
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
     
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      setTimeout(()=>{this.showSplash=false},3000)
     
      this.angular.module('ionicApp', ['ionic']).config(function($ionicConfigProvider)   {
        if (this.platform.isAndroid())
           $ionicConfigProvider.scrolling.jsScrolling(false);
         })
      
    });
  }

  
}
