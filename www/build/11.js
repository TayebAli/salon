webpackJsonp([11],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksPageModule", function() { return BookmarksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookmarks__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookmarksPageModule = /** @class */ (function () {
    function BookmarksPageModule() {
    }
    BookmarksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bookmarks__["a" /* BookmarksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookmarks__["a" /* BookmarksPage */]),
            ],
        })
    ], BookmarksPageModule);
    return BookmarksPageModule;
}());

//# sourceMappingURL=bookmarks.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bookmarks_bookmarks__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookmarksPage = /** @class */ (function () {
    function BookmarksPage(navCtrl, navParams, bookmarks) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookmarks = bookmarks;
        this.salon = [];
    }
    BookmarksPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.bookmarks.bookMark().then(function (salon) {
            _this.salon = salon;
        });
    };
    BookmarksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bookmarks',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/bookmarks/bookmarks.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>المفضلة</ion-title>\n  </ion-navbar>\n  <ion-buttons end>\n    <button ion-button icon-only>\n      <ion-icon class="ion-icon" color="gold" name="{{bookmarkicon}}"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-header>\n\n\n<ion-content class="card-background-page">\n  <ion-card>\n    <div *ngFor="let sal of salon" class="div">\n    <ion-card-content>\n      <p>{{sal.details}}</p>\n      <p>{{sal.Address}}</p>\n      <img src="{{sal.image}}" width=3060px height=190px/>\n    </ion-card-content>\n  </div>\n\n  <ion-row>\n\n    <button ion-button icon-left block small (click)="booking()">\n      <div> عرض</div>\n    </button>\n\n  </ion-row>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/bookmarks/bookmarks.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_bookmarks_bookmarks__["a" /* BookmarksProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_bookmarks_bookmarks__["a" /* BookmarksProvider */]])
    ], BookmarksPage);
    return BookmarksPage;
}());

//# sourceMappingURL=bookmarks.js.map

/***/ })

});
//# sourceMappingURL=11.js.map