webpackJsonp([12],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageModule", function() { return BookingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingPageModule = /** @class */ (function () {
    function BookingPageModule() {
    }
    BookingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__booking__["a" /* BookingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__booking__["a" /* BookingPage */]),
            ],
        })
    ], BookingPageModule);
    return BookingPageModule;
}());

//# sourceMappingURL=booking.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
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



var BookingPage = /** @class */ (function () {
    function BookingPage(navCtrl, navParams, backend, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backend = backend;
        this.loadingCtrl = loadingCtrl;
        console.log(this.salonID = navParams.get("pID"));
        this.sname = this.navParams.get("pName");
        this.userID = localStorage.getItem("userID");
        if (this.userID != null) {
            console.log("Pass");
        }
        if (this.userID == null) {
            console.log("Failed");
            this.navCtrl.setRoot("LoginPage");
        }
        this.SendServesPrice = navParams.get("SendServesPrice");
        this.sendServesID = navParams.get("sendServesID");
        this.servesName = navParams.get("servesName");
        console.log(this.bookingSalon = navParams.get("salonData"));
        var d = new Date();
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        var a = d.getDate();
        if (m < 10) {
            this.min = y + "-0" + m + "-" + a;
            if (a < 10) {
                this.min = y + "-0" + m + "-0" + a;
            }
        }
        else {
            this.min = y + "-" + m + "-" + a;
            if (a < 10) {
                this.min = y + "-" + m + "-0" + a;
            }
        }
        if (m > 10 && a > 10) {
            this.min = y + "-" + m + "-" + a;
        }
        console.log(this.min);
    }
    BookingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'انتظر ...'
        });
        loading.present();
        this.backend.getStaffById(this.salonID).subscribe(function (staffs) {
            _this.staff = staffs.data;
        });
        this.backend.getServes().subscribe(function (serves) {
            _this.serves = serves.data;
        });
        loading.dismiss();
    };
    //Sart
    BookingPage.prototype.sendBill = function () {
        var loading = this.loadingCtrl.create({
            content: 'انتظر ...'
        });
        loading.present();
        console.log('Buy clicked ');
        // this.selectStaff.toString();
        // this.StaffID = this.selectStaff[0];
        console.log("user ID: ", this.userID);
        console.log("Staff ID: ", this.StaffID);
        if (this.selectServes != null) {
            console.log("selectServes ID: ", this.selectServes);
        }
        else {
            this.selectServes = this.sendServesID;
        }
        console.log("salonID ID: ", this.salonID);
        console.log("theDay : ", this.theDay);
        console.log("theTime: ", this.theTime);
        // console.log("user ID: ",this.userID)
        this.navCtrl.push('my-bill', {
            userID: this.userID,
            StaffID: this.StaffID,
            selectServes: this.selectServes,
            salonID: this.salonID,
            Time: this.theTime,
            Date: this.theDay,
            feedback: this.feedback,
            sname: this.sname
        });
        loading.dismiss();
    };
    BookingPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    BookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-booking',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/booking/booking.html"*/'<ion-header color="primary">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="apps"></ion-icon>\n    </button>\n    <ion-title>حجز: {{sname}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="cdd" padding>\n  <!--<ion-list>-->\n  <ion-card>\n    <ion-item style="margin-right: 1%">\n      <ion-label>الحجز مع: </ion-label>\n      <ion-select [(ngModel)]="StaffID" required>\n        <!--<div *ngFor="let stf of staff">-->\n        <ion-option style="margin-right: 1%" *ngFor="let stf of staff" [value]="stf.id">{{stf.name}}\n        </ion-option>\n        <!--</div>-->\n      </ion-select>\n    </ion-item>\n  </ion-card>\n  <!--</ion-list>-->\n\n\n  <!--server Card-->\n\n  <div *ngIf="sendServesID;else other_content">\n    <ion-card>\n      <ion-card-header>\n        نوع الخدمة: {{servesName}}\n      </ion-card-header>\n      <ion-card-content>\n        <h4>${{SendServesPrice}} ج.س</h4>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ng-template #other_content>\n    <ion-card>\n      <ion-list>\n        <ion-item>\n          <ion-label>نوع الخدمة</ion-label>\n          <!--<ion-select multiple="true" [(ngModel)]="selectServes" required>-->\n          <ion-select [(ngModel)]="selectServes" required>\n            <div *ngFor="let serve of serves">\n              <ion-option style="padding-right: 12px" [value]="serve.id">{{serve.name}} , ${{serve.price}}ج.س\n                <!--<ion-option style="padding-right: 12px" [value]="serve.id">{{serve.name}} , ${{serve.price}}ج.س-->\n              </ion-option>\n            </div>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </ng-template>\n  <!--end Serve Card-->\n\n  <!--Time Card-->\n  <ion-card>\n    <ion-item>\n      <ion-label text>اختيار الزمن</ion-label>\n\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="theTime" required></ion-datetime>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-label text>اختيار اليوم</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY " [(ngModel)]="theDay" min="{{min}}" required></ion-datetime>\n    </ion-item>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-item>\n      <ion-label floating>معلومات اضافية (اختياري).</ion-label>\n      <ion-input type="text" [(ngModel)]="feedback" maxlength="191" minlength="5"></ion-input>\n    </ion-item>\n  </ion-card>\n\n  <!--End Time Card-->\n  <br>\n  <div style="text-align: center;">\n    <button ion-button color="pnk3" (click)="sendBill()">حجز</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/booking/booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__["a" /* BackendProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
    ], BookingPage);
    return BookingPage;
}());

//# sourceMappingURL=booking.js.map

/***/ })

});
//# sourceMappingURL=12.js.map