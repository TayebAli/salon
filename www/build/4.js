webpackJsonp([4],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonDetailPageModule", function() { return SalonDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__salon_detail__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SalonDetailPageModule = /** @class */ (function () {
    function SalonDetailPageModule() {
    }
    SalonDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__salon_detail__["a" /* SalonDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__salon_detail__["a" /* SalonDetailPage */]),
            ],
        })
    ], SalonDetailPageModule);
    return SalonDetailPageModule;
}());

//# sourceMappingURL=salon-detail.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalonDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalonDetailPage = /** @class */ (function () {
    function SalonDetailPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.museum = {};
        this.museum = navParams.get('museum');
    }
    SalonDetailPage.prototype.ionViewDidLoad = function () {
        this.displayGoogleMap();
    };
    SalonDetailPage.prototype.displayGoogleMap = function () {
        // console.log(this.museum);
        var latLng = new google.maps.LatLng(this.museum.lat, this.museum.lng);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.addInfoWindow(marker, this.museum.name + "\n" + '<button id="gotosalon" style="color: #c216dc">عرض </button>');
    };
    SalonDetailPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
        //var self = this;
        google.maps.event.addListenerOnce(infoWindow, 'domready', function () {
            document.getElementById('gotosalon').addEventListener('click', function () {
                //alert('Clicked');
                _this.goToSalon();
            });
        });
    };
    SalonDetailPage.prototype.goToSalon = function () {
        var id = this.museum.id;
        var name = this.museum.name;
        this.navCtrl.push('SalonPage', { "pID": id, "pName": name });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SalonDetailPage.prototype, "mapContainer", void 0);
    SalonDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-salon-detail',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/salon-detail/salon-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> {{museum.Address}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card padding>\n    <h3>الاسم: {{museum.name}}</h3>\n    <p>العنوان : {{museum.Address}}</p>\n    <button ion-button (click)="goToSalon()" block>عرض</button>\n\n    <div #map id="map"></div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/salon-detail/salon-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SalonDetailPage);
    return SalonDetailPage;
}());

//# sourceMappingURL=salon-detail.js.map

/***/ })

});
//# sourceMappingURL=4.js.map