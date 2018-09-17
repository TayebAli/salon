webpackJsonp([0],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, user, alertCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
    }
    SignupPage.prototype.newadd = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        console.log("CLICK IT!");
        if (this.email == null || this.password == null) {
            loader.dismiss();
            return this.showError();
        }
        this.user.userRegister(this.fullName, this.email, this.contact, this.password, this.password_confirmation).subscribe(function (log) {
            console.log(_this.log = log);
            if (_this.log.status == true) {
                localStorage.setItem("token", _this.log.data.api_token);
                localStorage.setItem("userID", _this.log.data.id);
                localStorage.setItem("Profile", _this.log.data);
                _this.storage.set("Profile", _this.log.data);
                _this.navCtrl.setRoot('ProfilePage', log.data);
                loader.dismiss();
            }
            else if (_this.log.status == false) {
                _this.ErrorMessag = _this.log.data;
                _this.error += _this.ErrorMessag.email == null ? "" : "<br />" + _this.ErrorMessag.email;
                _this.error += _this.ErrorMessag.password == null ? "" : "<br />" + _this.ErrorMessag.password;
                // this.error = this.ErrorMessag.feedback == null ? "" : "<br />" + this.ErrorMessag.feedback;
                loader.dismiss();
                _this.showAlert();
            }
        });
    };
    //
    // presentLoading() {
    //   let loader = this.loadingCtrl.create({
    //     content: "Please wait...",
    //     duration: 3000
    //   });
    //   loader.present();
    // }
    SignupPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'warning!!',
            subTitle: this.error,
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage.prototype.showError = function () {
        var alert = this.alertCtrl.create({
            title: 'waring !!',
            subTitle: 'All field are Require! ',
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar color="pnk">\n    <ion-title>تسجيل جديد</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="md-woman"> الاسم رباعي</ion-icon>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="fullName" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="mail"> البريد الألكتروني:</ion-icon>\n      </ion-label>\n      <ion-input type="email" [(ngModel)]="email" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="md-call"> رقم الهاتف</ion-icon>\n      </ion-label>\n      <ion-input type="number" [(ngModel)]="contact" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="key"> كلمة السر:</ion-icon>\n      </ion-label>\n      <ion-input type="password" [(ngModel)]="password" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="key">تاكيد كلمة السر</ion-icon>\n      </ion-label>\n      <ion-input type="password" [(ngModel)]="password_confirmation" required></ion-input>\n    </ion-item>\n\n    <ion-card>\n      <button ion-button block (click)="newadd()">\n        <ion-icon name="contacts"> تسجيل</ion-icon>\n      </button>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map