import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";
import {Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: any;
  password: any;
  log: any;
  erorrMsg:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public backend: UsersProvider,
              public loadingCtrl: LoadingController ,
              private storage: Storage) {
  }



  Login() {
    console.log("CLICK IT!");
    if (this.email == null || this.password == null) {
      return this.showError();
    }
    this.backend.userLogin(this.email, this.password).subscribe(log => {
      console.log(this.log = log);
      this.presentLoading();

      if (this.log.status == true) {
        localStorage.setItem("token", this.log.data.api_token);
        localStorage.setItem("userID", this.log.data.id);
        localStorage.setItem("Profile" , this.log.data);
        this.storage.set("Profile" , this.log.data);
         this.navCtrl.setRoot('HomePage' , log.data);
        //this.navCtrl.push("ProfilePage" , {"user" : this.log.data});
      } else if (this.log.status == false) {
        this.erorrMsg = this.log.error;
        this.showAlert();
      }


    });

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.erorrMsg,
      subTitle: 'You have enter invalid username or password',
      buttons: ['OK']
    });
    alert.present();
  }


  showError() {
    let alert = this.alertCtrl.create({
      title: 'waring !!',
      subTitle: 'All field are Require! ',
      buttons: ['OK']
    });
    alert.present();
  }

  Singup() {
    this.navCtrl.push('SignupPage');
  }

}
