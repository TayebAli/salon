webpackJsonp([13],{

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingConfirmPageModule", function() { return BookingConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_confirm__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingConfirmPageModule = /** @class */ (function () {
    function BookingConfirmPageModule() {
    }
    BookingConfirmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__booking_confirm__["a" /* BookingConfirmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__booking_confirm__["a" /* BookingConfirmPage */]),
            ],
        })
    ], BookingConfirmPageModule);
    return BookingConfirmPageModule;
}());

//# sourceMappingURL=booking-confirm.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_backend_backend__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_booking_booking__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingConfirmPage = /** @class */ (function () {
    function BookingConfirmPage(navCtrl, navParams, backend, backbook, alertCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backend = backend;
        this.backbook = backbook;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.StaffList = [];
        this.salonID = navParams.get("salonID");
        this.sname = this.navParams.get("sname");
        this.userID = localStorage.getItem("userID");
        console.log("get id ", this.StaffID = navParams.get("StaffID"));
        console.log("get se id: ", this.ServesID = navParams.get("selectServes"));
        console.log("get Time", this.theTime = navParams.get("Time"));
        console.log("get day: ", this.theDay = navParams.get("Date"));
        this.feedback = navParams.get("feedback");
    }
    BookingConfirmPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'انتظر ...'
        });
        loading.present();
        this.backend.getServesById(this.ServesID).subscribe(function (hadmat) {
            console.log("خدمات: ", _this.hadmat = hadmat.data);
        });
        this.backend.getSalonById(this.salonID).subscribe(function (salon) {
            console.log("salonPro: ", _this.salonPro = salon.data);
        });
        this.backend.getStaffById(this.StaffID).subscribe(function (staffList) {
            console.log("Staff: ", _this.StaffList = staffList.data);
            loading.dismiss();
        });
        // this.backend.getServesById(this.selectServes).subscribe(serves => (
        //   console.log("Serves: ", this.serves = serves.data)
        // ));
    };
    BookingConfirmPage.prototype.confirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'تنبيه',
            message: 'تاكيد الطلب والمتابعة',
            buttons: [
                {
                    text: 'ألغاء',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'متابعة',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.backbook.userBook(_this.userID, _this.StaffID, _this.ServesID, _this.salonID, _this.theTime, _this.theDay, _this.feedback).subscribe(function (booking) {
                            console.log(_this.booking = booking);
                            var loading = _this.loadingCtrl.create({
                                content: 'انتظر ...'
                            });
                            loading.present();
                            if (_this.booking.status == true) {
                                _this.bookSuccess();
                                loading.dismiss();
                                _this.navCtrl.setRoot('BookBillPage');
                            }
                            else if (_this.booking.status == false || _this.booking == "") {
                                _this.ErrorMessag = _this.booking.data;
                                _this.error += _this.ErrorMessag.time == null ? "" : "<br />" + _this.ErrorMessag.time;
                                _this.error += _this.ErrorMessag.date == null ? "" : "<br />" + _this.ErrorMessag.date;
                                _this.error = _this.ErrorMessag.feedback == null ? "" : "<br />" + _this.ErrorMessag.feedback;
                                _this.error += _this.ErrorMessag.staff_id == null ? "" : "<br />" + _this.ErrorMessag.staff_id;
                                _this.error += _this.ErrorMessag.salons_id == null ? "" : "<br />" + _this.ErrorMessag.salons_id;
                                _this.error += _this.ErrorMessag.serveries_id == null ? "" : "<br />" + _this.ErrorMessag.serveries_id;
                                _this.error += _this.ErrorMessag.user_id == null ? "" : "<br />" + _this.ErrorMessag.user_id;
                                _this.BookFailed();
                                loading.dismiss();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    BookingConfirmPage.prototype.bookSuccess = function () {
        var toast = this.toastCtrl.create({
            message: 'تم الحجز بنجاح - لتفاصل راجع صفحة الطلبات',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        // let alert = this.alertCtrl.create({
        //   title: 'تم',
        //   subTitle: 'تم الحجز بنجاح - لتفاصل راجع صفحة الطلبات',
        //   buttons: ['انتهاء']
        // });
        // alert.present();
    };
    BookingConfirmPage.prototype.BookFailed = function () {
        var alert = this.alertCtrl.create({
            title: 'فشل',
            subTitle: "\n" + this.error + "\n",
            buttons: ['رجوع']
        });
        alert.present();
    };
    BookingConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-booking-confirm',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/booking-confirm/booking-confirm.html"*/'<ion-header color="primary">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="apps"></ion-icon>\n    </button>\n    <ion-title>تأكيد حجز: {{sname}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n\n    <ion-card class="card-background-page">\n      <img *ngFor="let item of salonPro" src="{{item.image}}" height="150" width="100%"/>\n      <div text-center class="card-title"> {{sname}}</div>\n      <!--<div text-center class="card-subtitle"> مع: {{this.selectStaff.substring(1, 10)}}</div>-->\n      <div *ngFor="let item of StaffList" text-center class="card-subtitle">مع: {{item.name}}</div>\n      <p text-center>راجع معلومات حجزك قبل التأكيد </p>\n\n      <ion-row>\n        <ion-col col-6>\n          <ion-icon name="calendar"></ion-icon>\n          &nbsp;<h3>{{theDay}}</h3></ion-col>\n        <ion-col col-6>\n          <ion-icon name="clock"></ion-icon>\n          &nbsp;<h3>{{theTime}}</h3></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let item of hadmat">\n        <ion-col col-6>\n          <ion-icon name="cash"></ion-icon>\n          &nbsp; {{item.price}}\n        </ion-col>\n        <ion-col col-6>\n          <ion-icon name="ios-happy"></ion-icon>\n          &nbsp; {{item.name}}\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card>\n      <ion-item>\n        <ion-label color="primary" floating>كود الخصم</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-card>\n    <button ion-button block (click)="confirm()">حجز</button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/booking-confirm/booking-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_backend_backend__["a" /* BackendProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_booking_booking__["a" /* BookingProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */]])
    ], BookingConfirmPage);
    return BookingConfirmPage;
}());

//# sourceMappingURL=booking-confirm.js.map

/***/ })

});
//# sourceMappingURL=13.js.map