webpackJsonp([17],{

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		421,
		16
	],
	"../pages/all-salon/all-salon.module": [
		422,
		15
	],
	"../pages/book-bill/book-bill.module": [
		431,
		14
	],
	"../pages/booking-confirm/booking-confirm.module": [
		423,
		13
	],
	"../pages/booking/booking.module": [
		424,
		12
	],
	"../pages/bookmarks/bookmarks.module": [
		426,
		11
	],
	"../pages/discount/discount.module": [
		425,
		10
	],
	"../pages/get-shopp-item/get-shopp-item.module": [
		429,
		9
	],
	"../pages/home/home.module": [
		427,
		8
	],
	"../pages/login/login.module": [
		428,
		7
	],
	"../pages/news/news.module": [
		430,
		6
	],
	"../pages/profile/profile.module": [
		432,
		5
	],
	"../pages/salon-detail/salon-detail.module": [
		434,
		4
	],
	"../pages/salon/salon.module": [
		436,
		3
	],
	"../pages/search-salon/search-salon.module": [
		433,
		2
	],
	"../pages/shopping-cart/shopping-cart.module": [
		437,
		1
	],
	"../pages/signup/signup.module": [
		435,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import {HttpClient} from '@angular/common/http';




/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BackendProvider = /** @class */ (function () {
    // headers :any ;
    function BackendProvider(http, https) {
        this.http = http;
        this.https = https;
        //  local: string = "http://127.0.0.1:8000";
        // local: string = "http://salonat.herokuapp.com";
        // local: string = "http://197.251.5.100:1216";
        this.local = "http://197.251.5.100:9000";
        //
        // let headers = new Headers();
        // headers.append('Content-Type','application/json');
        // headers.append('Accept', 'application/json');
        //  this.headers = {headers: headers};
        this.salon = this.local + "/api/v1/salons";
        this.salonId = this.local + "/api/v1/salons/getById/";
        this.serve = this.local + "/api/v1/serveries";
        this.serveId = this.local + "/api/v1/serveries/getById/";
        this.staffs = this.local + "/api/v1/staff/getById/";
        this.token = this.local + "/api/v1/";
    }
    BackendProvider.prototype.getSalon = function () {
        var _this = this;
        console.log("Time Pro");
        return new Promise(function (resolve) {
            _this.https.get(_this.salon).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
        // return this.http.get(this.salon, {headers:this.headers}).map(res => res.json());
    };
    BackendProvider.prototype.getSalonById = function (id) {
        return this.http.get(this.salonId + id).map(function (res) { return res.json(); });
    };
    BackendProvider.prototype.getServes = function () {
        return this.http.get(this.serve).map(function (res) { return res.json(); });
    };
    BackendProvider.prototype.getServesById = function (id) {
        return this.http.get(this.serveId + id).map(function (res) { return res.json(); });
    };
    //The Staff Call
    BackendProvider.prototype.getStaffById = function (id) {
        return this.http.get(this.staffs + id).map(function (res) { return res.json(); });
    };
    BackendProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], BackendProvider);
    return BackendProvider;
}());

//# sourceMappingURL=backend.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsersProvider = /** @class */ (function () {
    function UsersProvider(http) {
        this.http = http;
        // local: string = "http://salonat.herokuapp.com";
        //  local: string = "http://127.0.0.1:8000";
        // local: string = "http://197.251.5.100:1216";
        this.local = "http://197.251.5.100:9000";
        this.register = this.local + "/api/v1/users/add";
        this.login = this.local + "/api/v1/users/login";
    }
    UsersProvider.prototype.userRegister = function (fullName, email, contact, password, password_confirmation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "name": fullName,
            "email": email,
            "contact": contact,
            "password": password,
            "password_confirmation": password_confirmation,
        };
        return this.http.post(this.register, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersProvider.prototype.userLogin = function (email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "email": email,
            "password": password
        };
        return this.http.post(this.login, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingProvider = /** @class */ (function () {
    // url: string = "http://192.168.0.2:8000";
    function BookingProvider(http) {
        this.http = http;
        this.id = localStorage.getItem("userID");
        // url: string = "http://192.168.56.1:82";
        // url: string = "http://192.168.8.104:8000";
        //  url: string = "http://127.0.0.1:8000";
        // url: string = "http://salonat.herokuapp.com";
        // url: string = "http://197.251.5.100:1216";
        this.url = "http://197.251.5.100:9000";
        this.booking = this.url + "/api/v1/booking/add";
        this.getBooking = this.url + "/api/v1/booking/getByUser/";
    }
    //
    BookingProvider.prototype.userBook = function (userID, staffID, serveID, salonID, time, day, feedback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        var body = {
            "time": time,
            "date": day,
            "salons_id": salonID,
            'serveries_id': serveID,
            'staff_id': staffID,
            "user_id": userID,
            "feedback": feedback,
            "status": 1
        };
        return this.http.post(this.booking, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BookingProvider.prototype.getBook = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.getBooking + localStorage.getItem("userID"), { headers: headers }).map(function (res) { return res.json(); });
    };
    BookingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BookingProvider);
    return BookingProvider;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookmarksProvider = /** @class */ (function () {
    function BookmarksProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    BookmarksProvider.prototype.bookMark = function () {
        return this.storage.get('bookmarks').then(function (bookmarks) {
            if (bookmarks == null) {
                bookmarks = [];
            }
            return bookmarks;
        });
    };
    BookmarksProvider.prototype.isBookmared = function (id) {
        return this.bookMark().then(function (salon) {
            for (var i = 0; i < salon.length; i++) {
                if (salon[i].id == id) {
                    return true;
                }
            }
            return false;
        });
    };
    BookmarksProvider.prototype.addBookmark = function (salon) {
        var _this = this;
        this.bookMark().then(function (salon) {
            salon.push(salon);
            _this.save(salon);
        });
    };
    BookmarksProvider.prototype.save = function (salon) {
        this.storage.set('bookmarks', salon);
    };
    BookmarksProvider.prototype.removeBookmared = function (salon) {
        var _this = this;
        this.bookMark().then(function (salon) {
            salon.splice(salon.findIndex(function (elm) { return elm.id == salon.id; }), 1);
            _this.save(salon);
        });
    };
    BookmarksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], BookmarksProvider);
    return BookmarksProvider;
}());

//# sourceMappingURL=bookmarks.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ShopingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ShopingProvider = /** @class */ (function () {
    function ShopingProvider(http) {
        this.http = http;
        this.url = "http://localhost:8000/api/v1/";
        this.AllItems = "shopitem";
        this.ItemById = "shopitem/getById/";
        this.ItemAdd = "shopitem/add/";
        this.AllItemsUrl = this.url + this.AllItems;
        this.ItemByIdUrl = this.url + this.ItemById;
        this.ItemAddUrl = this.url + this.ItemAdd;
    }
    ShopingProvider.prototype.getAllItemsProvider = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.AllItemsUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ShopingProvider.prototype.getItemByIdProvider = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.ItemByIdUrl + id).subscribe(function (data) {
                resolve(data);
            }, function (error1) {
                console.log(error1);
            });
        });
    };
    ShopingProvider.prototype.addNewItemProviser = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.ItemAddUrl, data).subscribe(function (data) {
                resolve(data);
            }, function (error1) {
                console.log(error1);
            });
        });
    };
    ShopingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ShopingProvider);
    return ShopingProvider;
}());

//# sourceMappingURL=shoping.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_backend_backend__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_users_users__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_booking_booking__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_bookmarks_bookmarks__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_shoping_shoping__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_img_viewer__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import {GoogleMaps} from "@ionic-native/google-maps";



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'about', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-salon/all-salon.module#AllSalonPageModule', name: 'AllSalonPage', segment: 'all-salon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking-confirm/booking-confirm.module#BookingConfirmPageModule', name: 'my-bill', segment: 'booking-confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking/booking.module#BookingPageModule', name: 'BookingPage', segment: 'booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discount/discount.module#DiscountPageModule', name: 'DiscountPage', segment: 'discount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookmarks/bookmarks.module#BookmarksPageModule', name: 'BookmarksPage', segment: 'bookmarks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/get-shopp-item/get-shopp-item.module#GetShoppItemPageModule', name: 'GetShoppItemPage', segment: 'get-shopp-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'news', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/book-bill/book-bill.module#BookBillPageModule', name: 'BookBillPage', segment: 'book-bill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-salon/search-salon.module#SearchSalonPageModule', name: 'SearchSalonPage', segment: 'search-salon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/salon-detail/salon-detail.module#SalonDetailPageModule', name: 'SalonDetailPage', segment: 'salon-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/salon/salon.module#SalonPageModule', name: 'SalonPage', segment: 'salon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping-cart/shopping-cart.module#ShoppingCartPageModule', name: 'ShoppingCartPage', segment: 'shopping-cart', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_backend_backend__["a" /* BackendProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_users_users__["a" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_booking_booking__["a" /* BookingProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_bookmarks_bookmarks__["a" /* BookmarksProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_15__providers_shoping_shoping__["a" /* ShopingProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        // used for an example of ngFor and navigation
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'الرئيسية', component: 'HomePage', icon: "home" },
            { title: 'الأعضاء', component: 'ProfilePage', icon: "person" },
            { title: 'المفضلة', component: 'BookmarksPage', icon: "heart" },
            { title: 'عن التطبيق', component: 'about', icon: "mail" },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.rootPage = 'ShoppingCartPage';
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/sadad-pc/project/salon/src/app/app.html"*/'<ion-menu type="push" side="rigth" [content]="content" >\n  <ion-header type="push"  side="rigth">\n    <ion-toolbar type="push" side="rigth" color="pnk">\n      <ion-title >SaLoNaT</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content type="push" side="rigth" class="content">\n    <ion-list class="content">\n      <button class="content" menuClose icon-right ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" color="pnk"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/sadad-pc/project/salon/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[257]);
//# sourceMappingURL=main.js.map