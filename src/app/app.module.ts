import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';

import {AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent], 
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    WebView
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
