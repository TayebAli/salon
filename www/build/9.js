webpackJsonp([9],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetShoppItemPageModule", function() { return GetShoppItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_shopp_item__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GetShoppItemPageModule = /** @class */ (function () {
    function GetShoppItemPageModule() {
    }
    GetShoppItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__get_shopp_item__["a" /* GetShoppItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__get_shopp_item__["a" /* GetShoppItemPage */]),
            ],
        })
    ], GetShoppItemPageModule);
    return GetShoppItemPageModule;
}());

//# sourceMappingURL=get-shopp-item.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetShoppItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetShoppItemPage = /** @class */ (function () {
    // @ViewChild(Slides) slides: Slides;
    function GetShoppItemPage(navCtrl, navParams, imageViewerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageViewerCtrl = imageViewerCtrl;
        this.newQun = 0;
        this.newPrice = 0;
        this.isenabled = true;
        this.isenabled2 = false;
        this.opationItem = 'home';
        this.itemId = this.navParams.get("id");
        this.item = this.navParams.get("Items");
        this.price = this.navParams.get("price");
        this.qun = this.navParams.get("quantity");
    }
    GetShoppItemPage.prototype.ionViewDidLoad = function () {
    };
    GetShoppItemPage.prototype.onClick = function (imageToView) {
        var viewer = this.imageViewerCtrl.create(imageToView);
        viewer.present();
    };
    GetShoppItemPage.prototype.onClick2 = function (imageToView2) {
        var viewer = this.imageViewerCtrl.create(imageToView2);
        viewer.present();
    };
    GetShoppItemPage.prototype.homeImage = function (image) {
        var viewer = this.imageViewerCtrl.create(image);
        viewer.present();
    };
    // ionViewWillEnter() {
    //     console.log('Enter Page 3');
    // }
    // ngAfterViewInit() { 
    //     this.slides.freeMode = true;
    // }
    GetShoppItemPage.prototype.requestItem = function (qun) {
    };
    GetShoppItemPage.prototype.add = function () {
        this.isenabled2 = true;
        this.newQun = this.newQun + 1;
        this.newPrice = this.price * this.newQun;
        if (this.newQun == this.qun) {
            this.isenabled = false;
            console.log("Stop: ");
        }
    };
    GetShoppItemPage.prototype.min = function () {
        this.isenabled = true;
        this.newQun = this.newQun - 1;
        this.newPrice = this.price * this.newQun;
        if (this.newQun == 0) {
            this.isenabled2 = false;
        }
        console.log("Stop: ");
    };
    GetShoppItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-get-shopp-item',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/get-shopp-item/get-shopp-item.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>GetShoppItem</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-segment [(ngModel)]="opationItem">\n        <ion-segment-button value="home">المنتج\n            <ion-icon name="home"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="galary">الصور\n            <ion-icon name="images"></ion-icon>\n\n        </ion-segment-button>\n    </ion-segment>\n\n\n    <div [ngSwitch]="opationItem">\n        <ion-grid *ngSwitchCase="\'images\'">\n            <ion-row>\n                <div col-6 col-md-4 col-xl-3 class="image-con">\n                    <img imageViewer #imageToView (click)="onClick(imageToView)" src="assets/imgs/home/image.jpg">\n                </div>\n                <div col-6 col-md-4 col-xl-3 class="image-con">\n                    <img imageViewer #imageToView (click)="onClick(imageToView)">\n                </div>\n                <div col-6 col-md-4 col-xl-3 class="image-con" [style.background-image]="\'url(assets/imgs/home/serves.jpg)\'"><img\n                        #imageToView (click)="onClick(imageToView)" src="assets/imgs/home/serves.jpg">\n                </div>\n            </ion-row>\n        </ion-grid>\n\n\n        <div *ngSwitchCase="\'home\'">\n            <ion-card>\n                <ion-card-header>\n                    <img #imageOne class="imag" (click)="homeImage(imageOne)" hieght="50" width="50" src="{{item.image}}">\n                </ion-card-header>\n                <ion-card-content>\n                    <h2>{{item.name}}</h2>\n                    <h3>{{newQun}}*{{item.price}} ج.س</h3>\n                    <ion-badge>\n                        أجمالي {{newPrice}} ج.س</ion-badge>\n                </ion-card-content>\n\n                <div style="text-align:center;">\n                    <button ion-button small small (click)="add()" [disabled]="!isenabled">+</button>\n\n                    <button ion-button small (click)="min()" [disabled]="!isenabled2">-</button>\n                </div>\n            </ion-card>  \n                <button style="text-align:center;" ion-button large icon-right>\n                    Pay Now\n                    <ion-icon name="shop"></ion-icon>\n                </button>\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/get-shopp-item/get-shopp-item.html"*/,
        })
        //> gret Than
        //< les than
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], GetShoppItemPage);
    return GetShoppItemPage;
}());

//# sourceMappingURL=get-shopp-item.js.map

/***/ })

});
//# sourceMappingURL=9.js.map