webpackJsonp([14],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookBillPageModule", function() { return BookBillPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_bill__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookBillPageModule = /** @class */ (function () {
    function BookBillPageModule() {
    }
    BookBillPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__book_bill__["a" /* BookBillPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__book_bill__["a" /* BookBillPage */]),
            ],
        })
    ], BookBillPageModule);
    return BookBillPageModule;
}());

//# sourceMappingURL=book-bill.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_booking_booking__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_backend_backend__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_users__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookBillPage = /** @class */ (function () {
    function BookBillPage(navCtrl, navParams, book, salon, user, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.book = book;
        this.salon = salon;
        this.user = user;
        this.toastCtrl = toastCtrl;
        // url: any = "http://salonat.herokuapp.com/files/";
        this.url = "http://197.251.5.100:9000/files/";
        if (localStorage.getItem("userID") == null) {
            this.presentToast();
            this.navCtrl.setRoot('HomePage');
        }
        else {
            console.log('login^_^');
        }
    }
    BookBillPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User Login !',
            duration: 2000
        });
        toast.present();
    };
    BookBillPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.book.getBook().subscribe(function (book) { return (_this.bills = book.data); });
    };
    BookBillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-book-bill',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/book-bill/book-bill.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="apps"></ion-icon>\n    </button>\n    <ion-title>الطلبات السابقة</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let info of bills">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{url}}{{info.staff.image}}">\n      </ion-avatar>\n      <h2>{{info.staff.name}}</h2>\n      <p>{{info.salons.name}}</p>\n      <p>#{{info.id}}</p>\n    </ion-item>\n\n    <span color="red2"><hr color="red2"></span>\n\n    <ion-card class="last">\n      <P>.</P>\n      <h3>نوع الخدمة: {{info.serveries.name}}</h3>\n      <h3>السعر: {{info.serveries.price}} ج.س</h3>\n      <p>تاريخ: {{info.date}}</p>\n      <p>زمن: {{info.time}}</p>\n      <!--=>{info.status}} VALUE: {{item.description}}-->\n      <ion-card-title text-center>حالة الطلب</ion-card-title>\n      <div *ngIf="info.status == 1">\n        <div style="text-align: center;">\n          <ion-badge>تحت المراجعة</ion-badge>\n        </div>\n      </div>\n      <div *ngIf="info.status == 2">\n        <div style="text-align: center;">\n          <ion-badge color="secondary">مقبول</ion-badge>\n        </div>\n      </div>\n      <div *ngIf="info.status == 3">\n        <div style="text-align: center;">\n          <ion-badge color="red2">مرفوض</ion-badge>\n        </div>\n      </div>\n      <div *ngIf="info.status == 4">\n        <div style="text-align: center;">\n          <p>حالة الطلب</p>\n          <ion-badge color="red2">منتهي</ion-badge>\n        </div>\n      </div>\n    </ion-card>\n  </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/book-bill/book-bill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_booking_booking__["a" /* BookingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_backend_backend__["a" /* BackendProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_users_users__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], BookBillPage);
    return BookBillPage;
}());

//# sourceMappingURL=book-bill.js.map

/***/ })

});
//# sourceMappingURL=14.js.map