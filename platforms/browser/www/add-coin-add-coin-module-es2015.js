(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-coin-add-coin-module"],{

/***/ "./src/app/add-coin/add-coin-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-coin/add-coin-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddCoinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCoinPageRoutingModule", function() { return AddCoinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_coin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-coin.page */ "./src/app/add-coin/add-coin.page.ts");




const routes = [
    {
        path: '',
        component: _add_coin_page__WEBPACK_IMPORTED_MODULE_3__["AddCoinPage"]
    }
];
let AddCoinPageRoutingModule = class AddCoinPageRoutingModule {
};
AddCoinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCoinPageRoutingModule);



/***/ }),

/***/ "./src/app/add-coin/add-coin.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-coin/add-coin.module.ts ***!
  \*********************************************/
/*! exports provided: AddCoinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCoinPageModule", function() { return AddCoinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_coin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-coin-routing.module */ "./src/app/add-coin/add-coin-routing.module.ts");
/* harmony import */ var _add_coin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-coin.page */ "./src/app/add-coin/add-coin.page.ts");







let AddCoinPageModule = class AddCoinPageModule {
};
AddCoinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_coin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCoinPageRoutingModule"]
        ],
        declarations: [_add_coin_page__WEBPACK_IMPORTED_MODULE_6__["AddCoinPage"]]
    })
], AddCoinPageModule);



/***/ })

}]);
//# sourceMappingURL=add-coin-add-coin-module-es2015.js.map