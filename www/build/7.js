webpackJsonp([7],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, backend, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.backend = backend;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
    }
    LoginPage.prototype.Login = function () {
        var _this = this;
        console.log("CLICK IT!");
        if (this.email == null || this.password == null) {
            return this.showError();
        }
        this.backend.userLogin(this.email, this.password).subscribe(function (log) {
            console.log(_this.log = log);
            _this.presentLoading();
            if (_this.log.status == true) {
                localStorage.setItem("token", _this.log.data.api_token);
                localStorage.setItem("userID", _this.log.data.id);
                localStorage.setItem("Profile", _this.log.data);
                _this.storage.set("Profile", _this.log.data);
                _this.navCtrl.setRoot('HomePage', log.data);
                //this.navCtrl.push("ProfilePage" , {"user" : this.log.data});
            }
            else if (_this.log.status == false) {
                _this.erorrMsg = _this.log.error;
                _this.showAlert();
            }
        });
    };
    LoginPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: this.erorrMsg,
            subTitle: 'You have enter invalid username or password',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.showError = function () {
        var alert = this.alertCtrl.create({
            title: 'waring !!',
            subTitle: 'All field are Require! ',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.Singup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/login/login.html"*/'  <ion-header color="primary">\n    <ion-navbar color="pnk">\n      <button ion-button menuToggle>\n        <ion-icon name="apps"></ion-icon>\n      </button>\n      <ion-title text-center>تسجيل الدخول</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="../assets/imgs/login/azafr.jpg" alt="" width="268" height="188">\n\n  </ion-card>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="mail"> البريد الألكتروني:</ion-icon>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="email" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="key"> كلمة السر:</ion-icon>\n      </ion-label>\n      <ion-input type="password" [(ngModel)]="password" required></ion-input>\n    </ion-item>\n\n    <ion-card>\n      <button ion-button block>\n        <ion-icon name="contact" (click)="Login()"> دخول</ion-icon>\n      </button>\n      <button ion-button block (click)="Singup()">\n        <ion-icon name="contacts"> تسجيل</ion-icon>\n      </button>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=7.js.map