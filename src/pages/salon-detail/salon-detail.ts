import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SalonModel} from "../../models/SalonModel";
import {Geolocation} from '@ionic-native/geolocation'

declare let google;


@IonicPage()
@Component({
  selector: 'page-salon-detail',
  templateUrl: 'salon-detail.html',
})
export class SalonDetailPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  museum = {} as SalonModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
    this.museum = navParams.get('museum');
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
  }


  displayGoogleMap() {
    // console.log(this.museum);

    let latLng = new google.maps.LatLng(this.museum.lat, this.museum.lng);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    this.addInfoWindow(marker, this.museum.name + "\n" + '<button id="gotosalon" style="color: #c216dc">عرض </button>');
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({

      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
    //var self = this;
    google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
      document.getElementById('gotosalon').addEventListener('click', () => {
        //alert('Clicked');
        this.goToSalon();
      });
    });
  }

  goToSalon() {
    let id = this.museum.id;
    let name = this.museum.name;
    this.navCtrl.push('SalonPage', {"pID": id, "pName": name});
  }
}
