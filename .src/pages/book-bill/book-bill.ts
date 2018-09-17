import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
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
  url: any = "http://salonat.herokuapp.com/files/";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public book: BookingProvider,
              public salon: BackendProvider,
              public user: UsersProvider) {
  }

  ionViewDidLoad() {

    this.book.getBook().subscribe(book => (
        this.bills = book.data
      )
    );


  }

}
