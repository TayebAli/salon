import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user : any;
  phone : any;
  email : any;
  name : any;
  token :any;
  user_id : any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage) {


    this.storage.get("Profile").then((val) => {
      console.log ("Stoge Value :" , val);
      this.user = val;
      if (this.user != null){
        this.phone = this.user.contact;
        this.email = this.user.email;
        this.name = this.user.name;
        this.token = this.user.token;
        this.user_id = this.user.id;
      }
      if (this.user_id == null){
        localStorage.clear();

        this.navCtrl.setRoot("LoginPage");
      }
    });



  }

  ionViewDidLoad() {

  }
  logout(){
    this.storage.clear();
    this.navCtrl.setRoot("LoginPage");

  }




}
