webpackJsonp([3],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonPageModule", function() { return SalonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__salon__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SalonPageModule = /** @class */ (function () {
    function SalonPageModule() {
    }
    SalonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__salon__["a" /* SalonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__salon__["a" /* SalonPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], SalonPageModule);
    return SalonPageModule;
}());

//# sourceMappingURL=salon.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bookmarks_bookmarks__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalonPage = /** @class */ (function () {
    function SalonPage(navCtrl, navParams, backend, bookmarkPro, loadingCtrl) {
        // let imgUrl=[]
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backend = backend;
        this.bookmarkPro = bookmarkPro;
        this.loadingCtrl = loadingCtrl;
        this.salon = [];
        this.SALON = "about";
        this.serveUrl = "http://salonat.herokuapp.com/files/";
        this.bookmarkicon = "heart-outline";
        this.isBookmarked = false;
        this.salonID = navParams.get("pID");
        this.sname = this.navParams.get("pName");
    }
    //
    // ngAfterViewInit() {
    //
    //   setTimeout(() => {
    //   }, 3000);
    // }
    SalonPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'انتظر ...'
        });
        loading.present();
        this.backend.getSalonById(this.salonID).subscribe(function (salon) {
            _this.salon = salon.data;
            loading.dismiss();
            // console.log("data ", this.salon = salon.data)
        });
    };
    SalonPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.bookmarkPro.isBookmared(this.salonID).then(function (isBooked) {
            if (isBooked) {
                _this.bookmarkicon = "heart";
                _this.isBookmarked = true;
            }
        });
    };
    SalonPage.prototype.booking = function () {
        console.log("id=: ", this.salonID, "name=: ", this.sname);
        this.navCtrl.push('BookingPage', {
            pID: this.salonID,
            pName: this.sname,
            salonData: this.salon
        });
    };
    SalonPage.prototype.rating = function () {
        //this.rate = valu;
        alert(this.rate);
    };
    SalonPage.prototype.bookmark = function () {
        if (this.isBookmarked) {
            this.bookmarkPro.removeBookmared(this.salonID);
            this.bookmarkicon = "heart-outline";
            this.isBookmarked = false;
        }
        else {
            this.bookmarkPro.addBookmark(this.salonID);
            this.bookmarkicon = "heart";
            this.isBookmarked = true;
        }
    };
    SalonPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    SalonPage.prototype.ShowMap = function () {
        for (var _i = 0, _a = this.salon; _i < _a.length; _i++) {
            var maps = _a[_i];
            // console.log("MapsGo to", maps);
            this.navCtrl.push('SalonDetailPage', { 'museum': maps });
        }
    };
    SalonPage.prototype.Serves = function (serves_id, servesPrice, servesName) {
        console.log("id=: ", this.salonID, "name=: ", this.sname, "Serves ID: ", serves_id);
        this.navCtrl.push('BookingPage', {
            pID: this.salonID,
            pName: this.sname,
            sendServesID: serves_id,
            SendServesPrice: servesPrice,
            servesName: servesName
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Slides */])
    ], SalonPage.prototype, "slides", void 0);
    SalonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-salon',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/salon/salon.html"*/'<ion-header color="primary">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="apps"></ion-icon>\n    </button>\n    <ion-title>{{sname}}</ion-title>\n  </ion-navbar>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="bookmark()">\n      <ion-icon class="ion-icon" color="gold" name="{{bookmarkicon}}"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="SALON">\n      <ion-segment-button value="staff">\n        <h3>\n          <ion-icon name="ios-people"></ion-icon>\n        </h3>\n      </ion-segment-button>\n\n      <ion-segment-button value="Serves">\n        <h3>\n          <ion-icon name="bowtie"></ion-icon>\n        </h3>\n      </ion-segment-button>\n\n      <!--<ion-segment-button value="mapF">-->\n      <ion-segment-button value="mapF" (click)="ShowMap()">\n        <h3>\n          <ion-icon name="ios-map"></ion-icon>\n        </h3>\n      </ion-segment-button>\n\n      <ion-segment-button value="about">\n        <h3>\n          <ion-icon name="md-information-circle"></ion-icon>\n        </h3>\n      </ion-segment-button>\n      <ion-segment-button value="images">\n        <h3>\n          <ion-icon ios="logo-instagram" md="logo-instagram"></ion-icon>\n          <!--<ion-icon ios="ios-images"></ion-icon>-->\n        </h3>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="SALON">\n    <ion-card class="ion-card" *ngSwitchCase="\'about\'">\n      <div *ngFor="let sal of salon" class="div">\n        <ion-card-content>\n          <p>{{sal.details}}</p>\n          <p>{{sal.Address}}</p>\n          <img src="{{sal.image}}" width=3060px height=190px/>\n        </ion-card-content>\n      </div>\n\n      <ion-row>\n        <span style="\n       margin-right: 17%;\n   ">\n          <rating class="rating" [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"\n            starIconName="star" nullable="false" (ngModelChange)="rating()">\n          </rating>\n        </span>\n        <br>\n        <button ion-button icon-left block small (click)="booking()">\n          <div> حجز</div>\n        </button>\n\n      </ion-row>\n\n    </ion-card>\n\n    <ion-card *ngSwitchCase="\'Serves\'">\n      <p style="background-color: #222; color: white">الخدمات</p>\n\n      <ion-list>\n        <ion-item *ngFor="let Serv of salon[0].serveries">\n          <ion-thumbnail item-left>\n            <img src="../../assets/imgs/home/serves.jpg">\n          </ion-thumbnail>\n          <h2>الخدمة: {{Serv.name}}</h2>\n          <p>السعر: {{Serv.price}} ج.س</p>\n          <button color="pnk3" ion-button clear item-right (click)="Serves(Serv.id, Serv.price, Serv.name)">طلب</button>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n\n\n    <ion-card class="ion-card2" *ngSwitchCase="\'staff\'">\n      <p style="background-color: #222; color: white">فريق العمل</p>\n      <div *ngFor="let stf of salon[0].staff">\n        <ion-item class="ion-item">\n          <ion-avatar item-start>\n            <img src="{{serveUrl}}{{stf.image}}">\n          </ion-avatar>\n          <h1>\n            <P class="p">{{stf.name}} </P>\n          </h1>\n        </ion-item>\n\n      </div>\n    </ion-card>\n\n\n\n    <div *ngSwitchCase="\'images\'">\n      <ion-card>\n        <ion-card-header>\n          الصور\n        </ion-card-header>\n        <ion-card-content>\n          <div pager *ngFor="let slide of salon">\n\n            <img src="{{slide.photo}}" class="slide-image" />\n\n            <img src="{{slide.photo_two}}" class="slide-image" />\n\n            <img src="{{slide.photo_three}}" class="slide-image" />\n          </div>\n\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/salon/salon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__["a" /* BackendProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_bookmarks_bookmarks__["a" /* BookmarksProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
    ], SalonPage);
    return SalonPage;
}());

//# sourceMappingURL=salon.js.map

/***/ })

});
//# sourceMappingURL=3.js.map