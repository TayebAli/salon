import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {Geolocation} from "@ionic-native/geolocation";

declare let google;

@IonicPage()
@Component({
  selector: 'page-all-salon',
  templateUrl: 'all-salon.html',
})
export class AllSalonPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  museumList = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public geolocation: Geolocation,
              public http: Http) {
    this.museumList = navParams.get('museumList');
    console.log(this.museumList);
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    this.getMarkers();
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(15.6117993, 32.2194934);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);


    // let position = new google.maps.LatLng(15.6117989, 32.2194934);
    // let museumMarker = new google.maps.Marker({position: position, title: "Test"});
    // museumMarker.setMap(this.map);
    //
  }

  getMarkers() {

    for (let _i = 0; _i < this.museumList.length; _i++) {
      console.log(this.museumList[_i]);
     // if (_i > 0)
        this.addMarkersToMap(this.museumList[_i]);
    }
  }

  addMarkersToMap(museum) {
    console.log("Latitude :",museum.lat);
    let position = new google.maps.LatLng(museum.lat, museum.lng);
    let museumMarker = new google.maps.Marker({position: position, title: museum.name});
    museumMarker.setMap(this.map);
  }

}
