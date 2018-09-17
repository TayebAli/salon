import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BookmarksProvider} from "../../providers/bookmarks/bookmarks";

@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
  providers: [BookmarksProvider]
})
export class BookmarksPage {

  salon:any =[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public bookmarks: BookmarksProvider) {
  }

  ionViewDidLoad() {
    this.bookmarks.bookMark().then(salon =>{
      this.salon = salon
    })
  }

}
