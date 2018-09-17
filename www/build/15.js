webpackJsonp([15],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSalonPageModule", function() { return AllSalonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_salon__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllSalonPageModule = /** @class */ (function () {
    function AllSalonPageModule() {
    }
    AllSalonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_salon__["a" /* AllSalonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_salon__["a" /* AllSalonPage */]),
            ],
        })
    ], AllSalonPageModule);
    return AllSalonPageModule;
}());

//# sourceMappingURL=all-salon.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllSalonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllSalonPage = /** @class */ (function () {
    function AllSalonPage(navCtrl, navParams, geolocation, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.http = http;
        this.museumList = [];
        this.museumList = navParams.get('museumList');
        console.log(this.museumList);
    }
    AllSalonPage.prototype.ionViewDidLoad = function () {
        this.displayGoogleMap();
        this.getMarkers();
    };
    AllSalonPage.prototype.displayGoogleMap = function () {
        var latLng = new google.maps.LatLng(15.6117993, 32.2194934);
        var mapOptions = {
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
    };
    AllSalonPage.prototype.getMarkers = function () {
        for (var _i = 0; _i < this.museumList.length; _i++) {
            console.log(this.museumList[_i]);
            // if (_i > 0)
            this.addMarkersToMap(this.museumList[_i]);
        }
    };
    AllSalonPage.prototype.addMarkersToMap = function (museum) {
        console.log("Latitude :", museum.lat);
        var position = new google.maps.LatLng(museum.lat, museum.lng);
        var museumMarker = new google.maps.Marker({ position: position, title: museum.name });
        museumMarker.setMap(this.map);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AllSalonPage.prototype, "mapContainer", void 0);
    AllSalonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-all-salon',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/all-salon/all-salon.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Salons in Sudan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/all-salon/all-salon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AllSalonPage);
    return AllSalonPage;
}());

//# sourceMappingURL=all-salon.js.map

/***/ })

});
//# sourceMappingURL=15.js.map