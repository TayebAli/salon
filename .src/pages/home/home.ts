import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
import { BackendProvider } from "../../providers/backend/backend";

// import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  discount: any;
  // salon: Observable<any>;
  salon: any;
  name: any;
  user: any;

  SalonName: string = "...";
  Salonid: string = "1";
  SalonLogo: string = "/assets/imgs/home/logo.png";
  SalonImage: string = "/assets/imgs/home/image.jpg";

  constructor(public navCtrl: NavController,
    public backends: BackendProvider,
    public loadingCtrl: LoadingController) {
  }


  ionViewDidEnter() {
    this.getsalons();
  }

  salonID(id, name) {

    let loading = this.loadingCtrl.create({
      content: 'انتظر ...'
    }); 

    loading.present();
    this.navCtrl.push('SalonPage', { pID: id, pName: name });
    loading.dismiss();
  }

  getsalons() {
    let loading = this.loadingCtrl.create({
      content: 'انتظر ...'
    });

    loading.present();
    // console.log("Time home");
    // loading.present();

    this.backends.getSalon().then(data => {
      this.salon = data;
      this.salon = this.salon.data;

      loading.dismiss();

      // console.log("salons:", this.salon);
    }
    );
  }


  Bill() {
    this.navCtrl.push('BookBillPage');
  }

  ShoppingCart() {
    this.navCtrl.push('shopping-cart')
  }

  SearchPage() {
    this.navCtrl.push('SearchSalonPage');
  }

  News() {
    this.navCtrl.push('news');
  }
}
