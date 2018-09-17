import {BackendProvider} from '../../providers/backend/backend';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController} from 'ionic-angular';
import {BookingProvider} from '../../providers/booking/booking';

@IonicPage({
  name: 'my-bill'
})
@Component({
  selector: 'page-booking-confirm',
  templateUrl: 'booking-confirm.html',
})
export class BookingConfirmPage {

  salonID: any;
  sname: any;
  userID: any;

  staff: any;
  hadmat: any;
  salonPro: any;

  StaffID: number;
  ServesID: any;
  theTime: any;
  theDay: any;
  feedback: any;
  booking: any;
  StaffList = [];
  ErrorMessag: any;
  error: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public backend: BackendProvider,
              public backbook: BookingProvider,
              private alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {
    this.salonID = navParams.get("salonID");

    this.sname = this.navParams.get("sname");
    this.userID = localStorage.getItem("userID");

    console.log("get id ", this.StaffID = navParams.get("StaffID"));
    console.log("get se id: ", this.ServesID = navParams.get("selectServes"));
    console.log("get Time", this.theTime = navParams.get("Time"));
    console.log("get day: ", this.theDay = navParams.get("Date"));
    this.feedback = navParams.get("feedback");
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'انتظر ...'
    });
    loading.present();
    this.backend.getServesById(this.ServesID).subscribe(hadmat => {
      console.log("خدمات: ", this.hadmat = hadmat.data);
    });


    this.backend.getSalonById(this.salonID).subscribe(salon => {
      console.log("salonPro: ", this.salonPro = salon.data);
    });

    this.backend.getStaffById(this.StaffID).subscribe(staffList => {
      console.log("Staff: ", this.StaffList = staffList.data);
      loading.dismiss();
    });

    // this.backend.getServesById(this.selectServes).subscribe(serves => (
    //   console.log("Serves: ", this.serves = serves.data)

    // ));

  }

  confirm() {
    let alert = this.alertCtrl.create({
      title: 'تنبيه',
      message: 'تاكيد الطلب والمتابعة',
      buttons: [
        {
          text: 'ألغاء',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'متابعة',
          handler: () => {
            console.log('Buy clicked');
            this.backbook.userBook(
              this.userID,
              this.StaffID,
              this.ServesID,
              this.salonID,
              this.theTime,
              this.theDay,
              this.feedback
            ).subscribe(booking => {
              console.log(this.booking = booking);
              let loading = this.loadingCtrl.create({
                content: 'انتظر ...'
              });
              loading.present();
              if (this.booking.status == true) {
                this.bookSuccess();
                loading.dismiss();
                this.navCtrl.setRoot('BookBillPage');
              }
              else if (this.booking.status == false || this.booking == "") {


                this.ErrorMessag = this.booking.data;
                this.error += this.ErrorMessag.time == null ? "" : "<br />" + this.ErrorMessag.time;
                this.error += this.ErrorMessag.date == null ? "" : "<br />" + this.ErrorMessag.date;
                this.error = this.ErrorMessag.feedback == null ? "" : "<br />" + this.ErrorMessag.feedback;
                this.error += this.ErrorMessag.staff_id == null ? "" : "<br />" + this.ErrorMessag.staff_id;
                this.error += this.ErrorMessag.salons_id == null ? "" : "<br />" + this.ErrorMessag.salons_id;
                this.error += this.ErrorMessag.serveries_id == null ? "" : "<br />" + this.ErrorMessag.serveries_id;
                this.error += this.ErrorMessag.user_id == null ? "" : "<br />" + this.ErrorMessag.user_id;
                this.BookFailed();
                loading.dismiss();


              }
            });
          }
        }
      ]
    });
    alert.present();
  }


  bookSuccess() {
    let toast = this.toastCtrl.create({
      message: 'تم الحجز بنجاح - لتفاصل راجع صفحة الطلبات',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    // let alert = this.alertCtrl.create({
    //   title: 'تم',
    //   subTitle: 'تم الحجز بنجاح - لتفاصل راجع صفحة الطلبات',
    //   buttons: ['انتهاء']
    // });
    // alert.present();
  }


  BookFailed() {
    let alert = this.alertCtrl.create({
      title: 'فشل',
      subTitle: "\n" + this.error + "\n",
      buttons: ['رجوع']
    });
    alert.present();
  }

}

