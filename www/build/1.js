webpackJsonp([1],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPageModule", function() { return ShoppingCartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShoppingCartPageModule = /** @class */ (function () {
    function ShoppingCartPageModule() {
    }
    ShoppingCartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shopping_cart__["a" /* ShoppingCartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shopping_cart__["a" /* ShoppingCartPage */]),
            ],
        })
    ], ShoppingCartPageModule);
    return ShoppingCartPageModule;
}());

//# sourceMappingURL=shopping-cart.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shoping_shoping__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// @IonicPage({name:'shopping-cart'})
var ShoppingCartPage = /** @class */ (function () {
    function ShoppingCartPage(navCtrl, navParams, shopPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopPro = shopPro;
        this.Type = "All";
    }
    ShoppingCartPage.prototype.ionViewDidLoad = function () {
        this.getAllItems();
    };
    ShoppingCartPage.prototype.getItemId = function (id, item, price, quantity) {
        // console.log('id: ',id, "\n item=: ",item)
        this.navCtrl.push('GetShoppItemPage', { "id": id, "Items": item, "price": price, "quantity": quantity });
    };
    ShoppingCartPage.prototype.getAllItems = function () {
        var _this = this;
        this.shopPro.getAllItemsProvider().then(function (data) {
            _this.data = data;
            // console.log("data before: ", this.data);
            _this.data = _this.data.data;
            // console.log("data after: ", this.data);
        }).catch(function (err) {
            console.error(err);
        });
    };
    ShoppingCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shopping-cart',template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/pages/shopping-cart/shopping-cart.html"*/'<ion-header color="primary">\n    <ion-navbar color="pnk">\n        <button ion-button menuToggle>\n            <ion-icon name="apps"></ion-icon>\n        </button>\n        <ion-title>المتجر</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n                <ion-icon class="ion-icon" color="gold" name="ios-notifications-outline"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<!--<ion-content class="list-avatar-page">-->\n<ion-content padding>\n\n\n\n    <ion-segment [(ngModel)]="Type" color="twitter">\n        <ion-segment-button value="All">\n            <p>الكل</p>\n        </ion-segment-button>\n        <ion-segment-button value="sob">\n            <p>صابون</p>\n        </ion-segment-button>\n        <ion-segment-button value="cream">\n            <p>كريم</p>\n        </ion-segment-button>\n        <ion-segment-button value="oil">\n            <p>زيت</p>\n        </ion-segment-button>\n    </ion-segment>\n\n    <ion-list *ngFor="let item of data">\n        <div [ngSwitch]="Type">\n            <div *ngSwitchCase="\'All\'">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <img [src]="item.image" height="120" width="100">\n                        </ion-col>\n                        <ion-col>\n                            <ion-note>{{item.name}}</ion-note>\n                            <ion-badge>ج.س: {{item.price}}</ion-badge>\n                            <ion-badge>المتوفر: {{item.quantity}}</ion-badge>\n                            <button color="twitter" ion-button small round (click)="getItemId(item.id, item, item.price, item.quantity)"><ion-icon name="cash">\n                                شراء\n                            </ion-icon></button>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n                <hr>\n            </div>\n\n        </div>\n        <div [ngSwitch]="Type">\n            <div *ngSwitchCase="\'sob\'">\n                <ion-grid *ngIf="item.Type == 3">\n                    <ion-row>\n                        <ion-col>\n                            <img [src]="item.image" height="60" width="100">\n                        </ion-col>\n                        <ion-col>\n                            <ion-note>{{item.name}}</ion-note>\n                            <ion-badge>ج.س: {{item.price}}</ion-badge>\n                            <ion-badge>المتوفر: {{item.quantity}}</ion-badge>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <hr>\n            </div>\n\n        </div>\n        <div [ngSwitch]="Type">\n            <div *ngSwitchCase="\'cream\'">\n                <ion-grid *ngIf="item.Type == 1">\n                    <ion-row>\n                        <ion-col>\n                            <img [src]="item.image" height="60" width="100">\n                        </ion-col>\n                        <ion-col>\n                            <ion-note>{{item.name}}</ion-note>\n                            <ion-badge>ج.س: {{item.price}}</ion-badge>\n                            <ion-badge>المتوفر: {{item.quantity}}</ion-badge>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <hr>\n            </div>\n\n        </div>\n        <div [ngSwitch]="Type">\n            <div *ngSwitchCase="\'oil\'">\n                <ion-grid *ngIf="item.Type == 2">\n                    <ion-row>\n                        <ion-col>\n                            <img [src]="item.image" height="60" width="100">\n                        </ion-col>\n                        <ion-col>\n                            <ion-note>{{item.name}}</ion-note>\n                            <ion-badge>ج.س: {{item.price}}</ion-badge>\n                            <ion-badge>المتوفر: {{item.quantity}}</ion-badge>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <hr>\n            </div>\n\n        </div>\n    </ion-list>\n</ion-content>\n<!--<ion-row *ngFor="let item of data ">-->\n<!--<ion-item (click)="openPage(item)">-->\n<!--<ion-avatar item-left>-->\n<!--<img [src]="item.image">-->\n<!--</ion-avatar>-->\n<!--{{  item.name }}-->\n<!--<ion-icon item-right name="remove-circle" (click)="decrement(item)"></ion-icon>-->\n<!--<p item-right>-->\n<!--{{ item.price}}-->\n<!--</p>-->\n<!--<ion-icon item-right name="add-circle" (click)="increment(item)"></ion-icon>-->\n<!--</ion-item>-->\n\n<!--</ion-row>-->\n\n\n<!--<ion-row *ngFor="let item of data">-->\n<!--<ion-item (click)="openPage(item)">-->\n<!--<ion-avatar item-left>-->\n<!--<img [src]="item.image">-->\n<!--</ion-avatar>-->\n<!--{{item.name}}-->\n<!--</ion-item>-->\n<!--</ion-row>-->\n\n<!--<ion-list>-->\n<!--<ion-item *ngFor="let item of data ">-->\n<!--<ion-avatar item-start>-->\n<!--<img src={{item.image}}/>-->\n<!--</ion-avatar>-->\n<!--<button ion-item (click)="openPage(item)">-->\n<!--{{item.name}}-->\n<!--</button>-->\n<!--<ion-note item-end>{{item.price}}</ion-note>-->\n<!--</ion-item>-->\n<!--</ion-list>-->\n\n<!--<ion-list #dataList>-->\n<!--<ion-item-group>-->\n<!--<ion-item-sliding *ngFor="let item of data" #slidingItem>-->\n<!--<ion-item (click)="openPage(item)">-->\n<!--<ion-avatar item-left>-->\n<!--<img [src]="item.image">-->\n<!--</ion-avatar>-->\n<!--{{item.name}}-->\n<!--<ion-item-options>-->\n<!--<button ion-button color="danger" (click)="delete(slidingItem, item)">-->\n<!--Delete-->\n<!--</button>-->\n<!--</ion-item-options>-->\n<!--</ion-item>-->\n<!--</ion-item-sliding>-->\n<!--</ion-item-group>-->\n<!--</ion-list>-->\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/pages/shopping-cart/shopping-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shoping_shoping__["a" /* ShopingProvider */]])
    ], ShoppingCartPage);
    return ShoppingCartPage;
}());

//# sourceMappingURL=shopping-cart.js.map

/***/ })

});
//# sourceMappingURL=1.js.map