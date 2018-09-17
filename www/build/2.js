webpackJsonp([2],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSalonPageModule", function() { return SearchSalonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_salon__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchSalonPageModule = /** @class */ (function () {
    function SearchSalonPageModule() {
    }
    SearchSalonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_salon__["a" /* SearchSalonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_salon__["a" /* SearchSalonPage */]),
            ],
        })
    ], SearchSalonPageModule);
    return SearchSalonPageModule;
}());

//# sourceMappingURL=search-salon.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchSalonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchSalonPage = /** @class */ (function () {
    function SearchSalonPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.museumList = [];
        this.filteredMuseum = [];
        this.isfiltered = false;
        this.http.get('http://salonat.herokuapp.com/api/v1/salons')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.museumList = data.data;
        }, function (err) { return console.log("error is " + err); }, // error
        function () { return console.log('read Salon data Complete ' + _this.museumList); } // complete
        );
    }
    SearchSalonPage.prototype.searchMaps = function (event) {
        if (event.target.value.length > 2) {
            var filteredJson = this.museumList.filter(function (row) {
                return row.name.indexOf(event.target.value) != -1;
            });
            this.isfiltered = true;
            this.filteredMuseum = filteredJson;
        }
    };
    SearchSalonPage.prototype.itemTapped = function (event, museum) {
        this.navCtrl.push('SalonDetailPage', {
            museum: museum
        });
    };
    SearchSalonPage.prototype.allMuseumMap = function () {
        this.navCtrl.push('AllSalonPage', {
            museumList: this.museumList
        });
    };
    SearchSalonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-salon',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/search-salon/search-salon.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>البحث</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="allMuseumMap()">\n        <ion-icon ios="ios-pin" md="md-pin"></ion-icon>جميع الكوفيرات</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-input type="text" placeholder="بحث عن كوقير..." (input)="searchMaps($event)"></ion-input>\n\n  <ion-list *ngIf="!isfiltered">\n    <ion-item *ngFor="let museum of museumList" (click)="itemTapped($event, museum)">\n      <h2><ion-icon ios="ios-pin" md="md-pin"></ion-icon>{{museum.name}}</h2>\n      <p>العنوان: {{museum.Address}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="isfiltered">\n    <ion-item *ngFor="let museum of filteredMuseum" (click)="itemTapped($event, museum)">\n      <h2><ion-icon ios="ios-pin" md="md-pin"></ion-icon>{{museum.name}}</h2>\n      <p>العنوان: {{museum.Address}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/search-salon/search-salon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], SearchSalonPage);
    return SearchSalonPage;
}());

//# sourceMappingURL=search-salon.js.map

/***/ })

});
//# sourceMappingURL=2.js.map