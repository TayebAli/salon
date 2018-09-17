webpackJsonp([16],{

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutUsPageModule = /** @class */ (function () {
    function AboutUsPageModule() {
    }
    AboutUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */]),
            ],
        })
    ], AboutUsPageModule);
    return AboutUsPageModule;
}());

//# sourceMappingURL=about-us.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/about-us/about-us.html"*/'<ion-header color="primary">\n  <ion-navbar color="pnk">\n    <button ion-button menuToggle>\n      <ion-icon name="apps"></ion-icon>\n    </button>\n    <ion-title>عن التطبيق</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon class="ion-icon" color="gold" name="ios-notifications-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n  <ion-card-header>\n    <ion-card-title>\n      تطبيق كوفيرات\n    </ion-card-title>\n  </ion-card-header>\n <ion-card-content>\n   تطبيق يساعد علي حجز الكوفيرات.\n </ion-card-content>\n\n</ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\nسياسة الاستخدام\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      المحل هو المسؤل الاول والاخير عن قبول ورفض الطلبيات.\n      ونحن من جهتنا نخلي كامل المسؤلية عن اي اتفاق يتم خارج التطبيق.\n    المستخدم مطالب بتقديم كل المعلومات الازمة من اجل تقديم خدمة متميزة.\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\nسياسة الخصوصية\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\nالتطبيق يحتفظ بالبيانات التي قمت بتقديمها عند التسجيل,\n      ولا يتم استخدامها خارج اطار التطبيق , ولا يتم جمع او تتبع اي نشاط للمستخدم حفاظ علي كامل الخصوصية المكفولة لك الا التي تقم انت  بتقديمها.\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        جميع الحقوق محفوظة\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\nDeta .G    </ion-card-content>\n\n  </ion-card>\n\n  <ion-fab left bottom>\n    <!--<button ion-fab color="dark">-->\n    <button ion-fab>\n      <ion-icon name="arrow-dropup"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab>\n        <ion-icon color="facebook" name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon color="twitter" name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon color="googleplus" name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/about-us/about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ })

});
//# sourceMappingURL=16.js.map