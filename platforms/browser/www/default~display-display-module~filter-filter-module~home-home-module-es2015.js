(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~display-display-module~filter-filter-module~home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title><strong></strong></ion-title>\n \n  <ion-icon class=\"ion-activatable ripple-parent\"  name=\"close-sharp\" slot=\"end\" style=\"font-size:xx-large;margin-right: 10px; padding: 10px;\" (click)=\"dismiss()\"></ion-icon> \n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n         <div [class.flip-box]=\"flag\">\n      <div class=\"flip-box-inner \">\n        <div class=\"flip-box-front \">\n            <img src=\"{{CoinData.backUrl}}\"  height=\"200px\" width=\"200px\"   class=\"center\" (click)=\"presentModal(CoinData.backUrl)\">    \n        </div>\n        <div class=\"flip-box-back\">\n          <img src=\"{{CoinData.frontUrl}}\" height=\"200px\" width=\"200px\"   class=\"center\" (click)=\"presentModal(CoinData.frontUrl)\"> \n        </div>\n      </div>\n      \n    </div>\n    <ion-fab-button [@rotatedState]='state' color=\"dark\" (click)=\"flip()\">\n      <ion-icon name=\"git-compare-outline\"></ion-icon>               \n       </ion-fab-button>\n\n    <ion-card-content style=\"padding: 0px;\">\n      <ion-card-title style=\"padding:10px\">\n        {{CoinData.name}}\n        </ion-card-title>\n      <ion-list lines=\"full\" style=\"padding: 0px;\">\n      <ion-item><h2>Denomination:</h2>  <ion-badge slot=\"end\" color=\"primary\">{{CoinData.deno}}</ion-badge></ion-item>\n     \n      <ion-item><h2>Year:</h2>  <ion-badge slot=\"end\" color=\"success\">{{CoinData.year}}</ion-badge> </ion-item>\n      <ion-item><h2>Mint:</h2>\n        <ion-badge slot=\"end\" *ngIf=\"CoinData.mint=='Diamond'\" style=\"padding: 3px;\" color=\"danger\">Bombay <img  src=\"https://cdn-icons-png.flaticon.com/512/445/445102.png\" width=\"22px\"  height=\"18px\" >\n        </ion-badge>\n        <ion-badge slot=\"end\" *ngIf=\"CoinData.mint=='Star'\" style=\"padding: 3px;\" color=\"warning\">Hyderabad<ion-icon  name=\"star\" color=\"dark\"></ion-icon></ion-badge>\n        <ion-badge slot=\"end\" *ngIf=\"CoinData.mint=='Dot'\" style=\"padding: 3px;\" color=\"primary\"> Noida <ion-icon  name=\"ellipse\"  color=\"dark\"></ion-icon>\n        </ion-badge>\n        <ion-badge slot=\"end\" *ngIf=\"CoinData.mint=='Blank'\" style=\"padding: 3px;\" color=\"success\">Calcutta<ion-icon  name=\"close-circle-sharp\" color=\"dark\"></ion-icon>\n        </ion-badge>\n      \n      \n      </ion-item>\n      <ion-item><h2>Price:</h2>  <ion-badge slot=\"end\" color=\"warning\">{{CoinData.price}}</ion-badge></ion-item>\n      <ion-item><h2>Quantity:</h2>  <ion-badge slot=\"end\" color=\"danger\">{{CoinData.quantity}}</ion-badge></ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/display/display.page.scss":
/*!*******************************************!*\
  !*** ./src/app/display/display.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-color: white;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n.center {\n  display: block;\n  margin-left: 25%;\n  margin-right: 30px;\n  border-radius: 100%;\n  max-width: 500px;\n  max-height: 500px;\n}\n.flip-box {\n  text-align: center;\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #f1f1f1;\n  perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n}\n/* This container is needed to position the front and back side */\n.flip-box-inner {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n/* Do an horizontal flip when you move the mouse over the flip box container */\n.flip-box .flip-box-inner {\n  transform: rotateY(180deg);\n}\n/* Position the front and back side */\n.flip-box-front {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n.flip-box-back {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n/* Style the front side (fallback if image is missing) */\n/* Style the back side */\n.flip-box-back {\n  transform: rotateY(180deg);\n}\nion-fab-button {\n  height: 40px;\n  width: 40px;\n  margin-left: 67%;\n  margin-top: -20px;\n}\nh2 {\n  font-weight: bold;\n}\nion-badge {\n  font-size: 15px;\n}\nion-badge ion-icon {\n  margin-left: 3px;\n}\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS9kaXNwbGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtBQUFOO0FBS0E7RUFFSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTU07RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQXFCLGdEQUFBO0FBRjdCO0FBTU0saUVBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFIUjtBQU1NLDhFQUFBO0FBQ0E7RUFDRSwwQkFBQTtBQUhSO0FBTU0scUNBQUE7QUFDQTtFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQXFDLFdBQUE7RUFDckMsMkJBQUE7QUFIUjtBQU1NO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFBcUMsV0FBQTtFQUNyQywyQkFBQTtBQUZSO0FBS00sd0RBQUE7QUFHQSx3QkFBQTtBQUNBO0VBRUUsMEJBQUE7QUFMUjtBQVNNO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDRixnQkFBQTtFQUNBLGlCQUFBO0FBUE47QUFZTTtFQUNJLGlCQUFBO0FBVFY7QUFZTTtFQUVJLGVBQUE7QUFWVjtBQVlVO0VBRUMsZ0JBQUE7QUFYWDtBQWdCUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFiWiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXkvZGlzcGxheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIFxuICAgIC8vIG92ZXJ3cml0ZSBpbmxpbmUgc3R5bGVzICYgaGlkaW5nIHRoZSBzY3JvbGxiYXJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfSBcblxuXG4uY2VudGVyIHtcbiAgIFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7Ly82MHB4XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5mbGlwLWJveCB7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDsgLyogUmVtb3ZlIHRoaXMgaWYgeW91IGRvbid0IHdhbnQgdGhlIDNEIGVmZmVjdCAqL1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXG4gICAgICAuZmxpcC1ib3gtaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4Oy8vMjAwcHhcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xuICAgICAgLmZsaXAtYm94IC5mbGlwLWJveC1pbm5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuICAgICAgLmZsaXAtYm94LWZyb250XG4gICAgICB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIFNhZmFyaSAqL1xuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5mbGlwLWJveC1iYWNrIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICovXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogU3R5bGUgdGhlIGZyb250IHNpZGUgKGZhbGxiYWNrIGlmIGltYWdlIGlzIG1pc3NpbmcpICovXG4gICAgICBcbiAgICAgIFxuICAgICAgLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xuICAgICAgLmZsaXAtYm94LWJhY2sge1xuICAgICAgIFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICBpb24tZmFiLWJ1dHRvblxuICAgICAge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7Ly80MHB6XG4gICAgICAgIHdpZHRoOiA0MHB4Oy8vNDBweFxuICAgICAgbWFyZ2luLWxlZnQ6IDY3JTsvLzI2MHB4XG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcblxuICAgICAgfVxuICAgICAgXG5cbiAgICAgIGgye1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tYmFkZ2VcbiAgICAgIHtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7Ly8xNXB4XG5cbiAgICAgICAgICBpb24taWNvblxuICAgICAgICAgIHtcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDsgIFxuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/display/display.page.ts":
/*!*****************************************!*\
  !*** ./src/app/display/display.page.ts ***!
  \*****************************************/
/*! exports provided: DisplayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPage", function() { return DisplayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-view/image-view.page */ "./src/app/image-view/image-view.page.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







let DisplayPage = class DisplayPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.flag = false;
        this.state = 'default';
        if (!firebase__WEBPACK_IMPORTED_MODULE_5__["apps"].length) {
            firebase__WEBPACK_IMPORTED_MODULE_5__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].FIREBASE_CONFIG);
        }
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    presentModal(x) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_3__["ImageViewPage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    imgurl: x
                }
            });
            return yield modal.present();
        });
    }
    flip() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
        this.flag = !this.flag;
        console.log(this.flag);
    }
};
DisplayPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
DisplayPage.propDecorators = {
    CoinData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
DisplayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./display.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.page.html")).default,
        animations: [
            // Each unique animation requires its own trigger. The first argument of the trigger function is the name
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rotatedState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(360deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-in'))
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./display.page.scss */ "./src/app/display/display.page.scss")).default]
    })
], DisplayPage);



/***/ })

}]);
//# sourceMappingURL=default~display-display-module~filter-filter-module~home-home-module-es2015.js.map