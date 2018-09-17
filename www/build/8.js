webpackJsonp([8],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {Observable} from "rxjs/Observable";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, backends, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.backends = backends;
        this.loadingCtrl = loadingCtrl;
        this.SalonName = "...";
        this.Salonid = "1";
        this.SalonLogo = "../../assets/imgs/home/logo.png";
        this.SalonImage = "../../assets/imgs/home/image.jpg";
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.getsalons();
    };
    HomePage.prototype.salonID = function (id, name) {
        var loading = this.loadingCtrl.create({
            content: 'انتظر ...'
        });
        loading.present();
        this.navCtrl.push('SalonPage', { pID: id, pName: name });
        loading.dismiss();
    };
    HomePage.prototype.getsalons = function () {
        // let loading = this.loadingCtrl.create({
        //   content: 'انتظر ...'
        // });
        var _this = this;
        // loading.present();
        // console.log("Time home");
        // loading.present();
        this.backends.getSalon().then(function (data) {
            _this.salon = data;
            _this.salon = _this.salon.data;
            // for (let salonData of this.salon) {
            //   this.SalonName = salonData.name;
            //   this.Salonid = salonData.id;
            //   this.SalonImage = salonData.image;
            //   this.SalonLogo = salonData.logo;
            //   console.log(salonData);
            // }
            // loading.dismiss();
            // console.log("salons:", this.salon);
        });
    };
    HomePage.prototype.Bill = function () {
        this.navCtrl.push('BookBillPage');
    };
    HomePage.prototype.ShoppingCart = function () {
        this.navCtrl.push('ShoppingCartPage');
    };
    HomePage.prototype.SearchPage = function () {
        this.navCtrl.push('SearchSalonPage');
    };
    HomePage.prototype.News = function () {
        this.navCtrl.push('news');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="pnk">\n    <button ion-button menuToggle>\n      <ion-icon name="apps"></ion-icon>\n    </button>\n    <ion-title text-center>الرئيسية</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="SearchPage()">\n        <ion-icon class="ion-icon" color="gold" name="md-search"></ion-icon>\n      </button>\n\n        <div>\n          <button id="notification-button" ion-button clear>\n            <ion-icon name="notifications">\n              <ion-badge id="notifications-badge" color="danger">5</ion-badge>\n            </ion-icon>\n          </button>\n        </div>\n      <!--</button>-->\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <div padding>\n    <ion-segment>\n      <ion-segment-button value="news" (click)="News()">\n        <ion-icon name="chatbubbles"></ion-icon>\n      </ion-segment-button>\n\n      <ion-segment-button value="bill" (click)="Bill()">\n        <ion-icon name="ios-card"></ion-icon>\n      </ion-segment-button>\n\n      <ion-segment-button value="Cart" (click)="ShoppingCart()">\n        <ion-icon name="ios-cart"></ion-icon>\n      </ion-segment-button>\n\n\n    </ion-segment>\n  </div>\n\n\n\n\n  <div *ngIf="salon == null">\n  <ion-card>\n    <img src="../assets/imgs/home/image.jpg" height="130" width="100%"/>\n    <div class="card-title">\n    <label>... ...\n       <ion-icon color="pnk3" style="font-size: x-large" name="heart"></ion-icon>\n      </label>\n    </div>\n    <div class="salon-icon">\n      <img src="../assets/imgs/home/logo.png" height="50" width="50">\n    </div>\n  </ion-card>\n  <ion-card>\n    <img src="../assets/imgs/home/image.jpg" height="130" width="100%"/>\n    <div class="card-title">\n    <label>... ...\n       <ion-icon color="pnk3" style="font-size: x-large" name="heart"></ion-icon>\n      </label>\n    </div>\n    <div class="salon-icon">\n      <img src="../assets/imgs/home/logo.png" height="50" width="50">\n    </div>\n  </ion-card>\n  <ion-card>\n    <img src="../assets/imgs/home/image.jpg" height="130" width="100%"/>\n    <div class="card-title">\n    <label>... ...\n       <ion-icon color="pnk3" style="font-size: x-large" name="heart"></ion-icon>\n      </label>\n    </div>\n    <div class="salon-icon">\n      <img src="../assets/imgs/home/logo.png" height="50" width="50">\n    </div>\n  </ion-card>\n</div>\n\n  <ion-card *ngFor="let salon of salon" (click)="salonID(salon.id, salon.name)">\n      <img src="{{salon.image}}" height="130" width="100%"/>\n      <div class="card-title">\n      <label>{{salon.name}}\n         <ion-icon style="font-size: x-large" color="pnk" name="heart"></ion-icon> \n        </label>\n      </div>\n      <div class="salon-icon">\n        <img src="{{salon.logo}}" height="50" width="50">\n      </div>\n    </ion-card>\n  <ion-fab left bottom>\n    <!--<button ion-fab color="dark">-->\n    <button ion-fab color="pnk3">\n      <ion-icon color="ww" name="arrow-dropup"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab>\n        <ion-icon color="facebook" name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon color="twitter" name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon color="googleplus" name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <!--<span class="fa fa-facebook">fa</span>-->\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__["a" /* BackendProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=8.js.map