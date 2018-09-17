import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {BookingProvider} from "../../providers/booking/booking";
import {BackendProvider} from "../../providers/backend/backend";
import {UsersProvider} from "../../providers/users/users";


@IonicPage()
@Component({
    selector: 'page-book-bill',
    templateUrl: 'book-bill.html',
})
export class BookBillPage {

    bills: any;
    salons: any;
    users: any;
    // url: any = "http://salonat.herokuapp.com/files/";
    url: any = "http://197.251.5.100:9000/files/";

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public book: BookingProvider,
                public salon: BackendProvider,
                public user: UsersProvider,
                public toastCtrl: ToastController) {
        if (localStorage.getItem("userID") == null) {
            this.presentToast();
            this.navCtrl.setRoot('HomePage')
        }
        else {
            console.log('login^_^');
        }
    }

    presentToast() {
        const toast = this.toastCtrl.create({
            message: 'User Login !',
            duration: 2000
        });
        toast.present();
    }

    ionViewDidLoad() {

        this.book.getBook().subscribe(book => (
                this.bills = book.data
            )
        );


    }

}
