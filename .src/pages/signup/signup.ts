import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";
import {Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

  email: string;
  contact: string;
  password: string;
  password_confirmation: string;
  fullName: string;
  log: any;
  ErrorMessag: any;
  error: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private user: UsersProvider,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public storage: Storage) {
  }


  newadd() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    console.log("CLICK IT!");
    if (this.email == null || this.password == null) {
      loader.dismiss();
      return this.showError();
    }

    this.user.userRegister(this.fullName, this.email, this.contact, this.password, this.password_confirmation).subscribe(
      log => {
        console.log(this.log = log);

        if (this.log.status == true) {
          localStorage.setItem("token", this.log.data.api_token);
          localStorage.setItem("userID", this.log.data.id);
          localStorage.setItem("Profile", this.log.data);
          this.storage.set("Profile", this.log.data);
          this.navCtrl.setRoot('ProfilePage', log.data);
          loader.dismiss();

        }

        else if (this.log.status == false) {
          this.ErrorMessag = this.log.data;
          this.error += this.ErrorMessag.email == null ? "" : "<br />" + this.ErrorMessag.email;
          this.error += this.ErrorMessag.password == null ? "" : "<br />" + this.ErrorMessag.password;
          // this.error = this.ErrorMessag.feedback == null ? "" : "<br />" + this.ErrorMessag.feedback;
          loader.dismiss();

          this.showAlert();
        }

      }
    )
  }

  //
  // presentLoading() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     duration: 3000
  //   });
  //   loader.present();
  // }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'warning!!',
      subTitle: this.error,
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

}
