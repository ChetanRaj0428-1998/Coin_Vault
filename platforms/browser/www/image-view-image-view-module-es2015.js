(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-view-image-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-view/image-view.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-view/image-view.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <ion-item lines=\"none\" class=\"close-fake\" text-center (click)=\"dismiss()\" > \r\n\r\n   \r\n  <ion-button color=\"danger\" slot=\"end\" (click)=\"dismiss()\" >\r\n    <strong>Close</strong> \r\n  </ion-button>\r\n    \r\n</ion-item>\r\n\r\n<ion-slides  [options]=\"sliderOpt\" zoom  style=\"border-radius: 100%;\">\r\n  <ion-slide lines=\"none\" style=\"border-radius: 100%;\">\r\n    <div class=\"swiper-zoom-container\" style=\"border-radius: 100%;\">\r\n      <img src=\"{{imgurl}}\" alt=\"No Image\" height=\"320px\" width=\"320px\" style=\"height: 100%;width: 400px;border-radius: 100%;\">\r\n    </div>\r\n  </ion-slide>\r\n</ion-slides>\r\n\r\n<ion-content fullscreen (click)=\"dismiss()\">\r\n\r\n \r\n\r\n\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/image-view/image-view-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/image-view/image-view-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ImageViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewPageRoutingModule", function() { return ImageViewPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _image_view_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-view.page */ "./src/app/image-view/image-view.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [
    {
        path: '',
        component: _image_view_page__WEBPACK_IMPORTED_MODULE_2__["ImageViewPage"]
    }
];
let ImageViewPageRoutingModule = class ImageViewPageRoutingModule {
};
ImageViewPageRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
    })
], ImageViewPageRoutingModule);



/***/ }),

/***/ "./src/app/image-view/image-view.module.ts":
/*!*************************************************!*\
  !*** ./src/app/image-view/image-view.module.ts ***!
  \*************************************************/
/*! exports provided: ImageViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewPageModule", function() { return ImageViewPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _image_view_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-view-routing.module */ "./src/app/image-view/image-view-routing.module.ts");
/* harmony import */ var _image_view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-view.page */ "./src/app/image-view/image-view.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ImageViewPageModule = class ImageViewPageModule {
};
ImageViewPageModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _image_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["ImageViewPageRoutingModule"]
        ],
        declarations: [_image_view_page__WEBPACK_IMPORTED_MODULE_5__["ImageViewPage"]]
    })
], ImageViewPageModule);



/***/ }),

/***/ "./src/app/image-view/image-view.page.scss":
/*!*************************************************!*\
  !*** ./src/app/image-view/image-view.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close-fake {\n  --background:transparent ;\n  margin-top: 70px;\n}\n.close-fake ion-icon {\n  font-size: 2rem;\n}\nion-content {\n  --background:transparent;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n}\nimg {\n  border-radius: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2Utdmlldy9pbWFnZS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHlCQUFBO0VBS0EsZ0JBQUE7QUFKUjtBQUFRO0VBRUksZUFBQTtBQUNaO0FBSUE7RUFFQSx3QkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFGQTtBQUtBO0VBQ0ksOEJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLXZpZXcvaW1hZ2Utdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2UtZmFrZVxyXG57XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50IDtcclxuICAgICAgICBpb24taWNvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG5pb24tY29udGVudFxyXG57XHJcbi0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxucG9zaXRpb246IHN0aWNreTtcclxubGVmdDogMHB4O1xyXG50b3A6IDBweDtcclxuei1pbmRleDogLTE7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCUhaW1wb3J0YW50O1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/image-view/image-view.page.ts":
/*!***********************************************!*\
  !*** ./src/app/image-view/image-view.page.ts ***!
  \***********************************************/
/*! exports provided: ImageViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewPage", function() { return ImageViewPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ImageViewPage = class ImageViewPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.sliderOpt = {
            zoom: {
                maxRatio: 5,
            },
            simulateTouch: false,
            shortSwipes: false,
            longSwipes: false,
            // allowTouchMove:false
            preventInteractionOnTransition: true,
            allowSlidePrev: false,
            allowSlideNext: false
        };
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
ImageViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }
];
ImageViewPage.propDecorators = {
    imgurl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
ImageViewPage = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-image-view',
        template: __importDefault(__webpack_require__(/*! raw-loader!./image-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-view/image-view.page.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./image-view.page.scss */ "./src/app/image-view/image-view.page.scss")).default]
    })
], ImageViewPage);



/***/ })

}]);
//# sourceMappingURL=image-view-image-view-module-es2015.js.map