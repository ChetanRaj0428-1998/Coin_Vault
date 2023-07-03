import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { TempDataService } from '../temp-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user = {} as User;  
adminEmail="admin@gmail.com";
adminPwd="123456";
  constructor(
    private service: TempDataService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController ) { }

  ngOnInit() {
  }

async login(user: User)
{
  if(user.email==this.adminEmail && user.password==this.adminPwd)
  {
    this.service.adminCheck=true;
    console.log("Admin",this.service.adminCheck);
  }
  else
  {
    this.service.adminCheck=false;
  }
  //console.log(user.email);
  //console.log(user.password);

if(this.formValidation())
{
  //show loader
  let loader = this.loadingCtrl.create({
    message:"Please Wait..."
  });
  (await loader).present();

  try{
    await this.afAuth.signInWithEmailAndPassword(user.email,user.password).then(
      data => {console.log(data);
      
      //redirect to home page
       this.navCtrl.navigateRoot("home"); 
      });
  }catch(e){
    this.showToast(e);
  }

  //dismiss loader  
  (await loader).dismiss();
}

}

formValidation()
{
  if(!this.user.email)
  {
    this.showToast("Enter Email");
    return false;
  }

  if(!this.user.password)
  {
    this.showToast("Enter Password");
    return false;
  }
return true;
}

showToast(message:string)
{
this.toastCtrl.create({
  message:message,
  duration:3000
})
.then(toastData => toastData.present())
}

}
