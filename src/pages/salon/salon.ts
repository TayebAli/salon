import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides, IonicPage, LoadingController} from 'ionic-angular';
import {BackendProvider} from "../../providers/backend/backend";
import {BookmarksProvider} from "../../providers/bookmarks/bookmarks";


@IonicPage()
@Component({
  selector: 'page-salon',
  templateUrl: 'salon.html',
})


export class SalonPage {


  salonID: any;
  salon: any[] = [];
  sname: any;
  SALON: any = "about";
  rate: any;
  serveUrl: string = "http://salonat.herokuapp.com/files/";
  bookmarkicon: string = "heart-outline";
  isBookmarked: boolean = false;

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public backend: BackendProvider,
              public bookmarkPro: BookmarksProvider,
              public loadingCtrl: LoadingController,
              // public toastCtrl: ToastController,
  ) {

    // let imgUrl=[]


    this.salonID = navParams.get("pID");
    this.sname = this.navParams.get("pName");

  }

  //
  // ngAfterViewInit() {
  //
  //   setTimeout(() => {
  //   }, 3000);
  // }


  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'انتظر ...'
    });

    loading.present();
    this.backend.getSalonById(this.salonID).subscribe(salon => {
      this.salon = salon.data;
      loading.dismiss();
      // console.log("data ", this.salon = salon.data)
    });

  }

  ionViewDidLoad() {

    this.bookmarkPro.isBookmared(this.salonID).then(isBooked => {
      if (isBooked) {
        this.bookmarkicon = "heart";
        this.isBookmarked = true;
      }
    });


  }

  booking() {
    console.log("id=: ", this.salonID, "name=: ", this.sname);
    this.navCtrl.push('BookingPage',
      {
        pID: this.salonID,
        pName: this.sname,
        salonData: this.salon
      });
  }

  rating() {
    //this.rate = valu;
    alert(this.rate);
  }


  bookmark() {
    if (this.isBookmarked) {
      this.bookmarkPro.removeBookmared(this.salonID);
      this.bookmarkicon = "heart-outline";
      this.isBookmarked = false;
    }
    else {
      this.bookmarkPro.addBookmark(this.salonID);
      this.bookmarkicon = "heart";
      this.isBookmarked = true;
    }
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  ShowMap() {
    for (let maps of this.salon) {
      // console.log("MapsGo to", maps);

      this.navCtrl.push('SalonDetailPage', {'museum': maps})
    }

  }

  Serves(serves_id, servesPrice, servesName) {
    console.log("id=: ", this.salonID, "name=: ", this.sname, "Serves ID: ", serves_id);
    this.navCtrl.push(
      'BookingPage',
      {
        pID: this.salonID,
        pName: this.sname,
        sendServesID: serves_id,
        SendServesPrice: servesPrice,
        servesName: servesName
      }
    );
  }
}
