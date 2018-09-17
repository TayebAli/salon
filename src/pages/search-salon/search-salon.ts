import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-search-salon',
  templateUrl: 'search-salon.html',
})
export class SearchSalonPage {
  museumList = [];
  filteredMuseum = [];
  isfiltered: boolean;

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.isfiltered = false;
    this.http.get('http://salonat.herokuapp.com/api/v1/salons')
      .map(res => res.json())
      .subscribe(data => {
          this.museumList = data.data;
        },
        err => console.log("error is " + err), // error
        () => console.log('read Salon data Complete ' + this.museumList) // complete
      );
  }

  searchMaps(event) {
    if (event.target.value.length > 2) {
      let filteredJson = this.museumList.filter(function (row) {
        return row.name.indexOf(event.target.value) != -1;
      });
      this.isfiltered = true;
      this.filteredMuseum = filteredJson;
    }
  }

  itemTapped(event, museum) {
    this.navCtrl.push('SalonDetailPage', {
      museum: museum
    });
  }

  allMuseumMap() {
    this.navCtrl.push('AllSalonPage', {
      museumList: this.museumList
    });
  }
}
