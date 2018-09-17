import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {BackendProvider} from "../../providers/backend/backend";

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  min: any;

  salonID: any;
  sname: any;
  userID: any;

  staff: any;
  serves: any;

  StaffID: number;
  selectServes: any;

  theTime: any;
  theDay: any;
  feedback: any;
  booking: any;
  // StaffList :[];
  // ServesList:[];
  sendServesID: number;
  SendServesPrice: number;
  servesName: string;

  bookingSalon:any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public backend: BackendProvider,
              public loadingCtrl: LoadingController) {
    console.log(this.salonID = navParams.get("pID"));
    this.sname = this.navParams.get("pName");

    this.userID = localStorage.getItem("userID");
    if (this.userID != null) {
      console.log("Pass");
    }
    if (this.userID == null) {
      console.log("Failed");
      this.navCtrl.setRoot("LoginPage");
    }

    this.SendServesPrice = navParams.get("SendServesPrice");
    this.sendServesID = navParams.get("sendServesID");
    this.servesName = navParams.get("servesName");
     console.log(this.bookingSalon = navParams.get("salonData"));

    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let a = d.getDate();


    if (m < 10) {
      this.min = y + "-0" + m + "-" + a;
      if (a < 10) {
        this.min = y + "-0" + m + "-0" + a;
      }
    } else {
      this.min = y + "-" + m + "-" + a;
      if (a < 10) {
        this.min = y + "-" + m + "-0" + a;
      }
    }
    if (m > 10 && a > 10) {
      this.min = y + "-" + m + "-" + a;
    }

    console.log(this.min);

  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'انتظر ...'
    });

    loading.present();
    this.backend.getStaffById(this.salonID).subscribe(staffs => {
      this.staff = staffs.data;
    });

    this.backend.getServes().subscribe(serves => {
      this.serves = serves.data;
    });

    loading.dismiss();
  }

  //Sart
  sendBill() {
    let loading = this.loadingCtrl.create({
      content: 'انتظر ...'
    });

    loading.present();

    console.log('Buy clicked ');
    // this.selectStaff.toString();
    // this.StaffID = this.selectStaff[0];
    console.log("user ID: ", this.userID);
    console.log("Staff ID: ", this.StaffID);
    if (this.selectServes != null) {
      console.log("selectServes ID: ", this.selectServes);

    }
    else {
      this.selectServes = this.sendServesID;
    }
    console.log("salonID ID: ", this.salonID);
    console.log("theDay : ", this.theDay);
    console.log("theTime: ", this.theTime);
    // console.log("user ID: ",this.userID)
    this.navCtrl.push('my-bill', {
      userID: this.userID,
      StaffID: this.StaffID,
      selectServes: this.selectServes,
      salonID: this.salonID,
      Time: this.theTime,
      Date: this.theDay,
      feedback: this.feedback,
      sname: this.sname
    });
    loading.dismiss();

  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }


}
