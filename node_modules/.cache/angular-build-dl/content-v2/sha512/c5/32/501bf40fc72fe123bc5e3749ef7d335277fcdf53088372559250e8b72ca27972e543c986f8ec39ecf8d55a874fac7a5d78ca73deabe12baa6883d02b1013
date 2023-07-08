(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~display-display-module~filter-filter-module~home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDisplayDisplayPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title><strong></strong></ion-title>\r\n \r\n  <ion-icon class=\"ion-activatable ripple-parent\"  name=\"close-sharp\" slot=\"end\" style=\"font-size:xx-large;margin-right: 10px; padding: 10px;\" (click)=\"dismiss()\"></ion-icon> \r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n         <div [class.flip-box]=\"flag\">\r\n      <div class=\"flip-box-inner \">\r\n        <div class=\"flip-box-front \">\r\n            <img src=\"{{CoinData.backUrl}}\"  height=\"200px\" width=\"200px\"   class=\"center\" (click)=\"presentModal(CoinData.backUrl)\">    \r\n        </div>\r\n        <div class=\"flip-box-back\">\r\n          <img src=\"{{CoinData.frontUrl}}\" height=\"200px\" width=\"200px\"   class=\"center\" (click)=\"presentModal(CoinData.frontUrl)\"> \r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    <ion-fab-button [@rotatedState]='state' color=\"dark\" (click)=\"flip()\">\r\n      <ion-icon name=\"git-compare-outline\"></ion-icon>               \r\n       </ion-fab-button>\r\n\r\n    <ion-card-content style=\"padding: 0px;\">\r\n      <ion-card-title style=\"padding:10px\">\r\n        {{CoinData.name}}\r\n        </ion-card-title>\r\n      <ion-list lines=\"full\" style=\"padding: 0px;\">\r\n      <ion-item><h2>Denomination:</h2>  <ion-badge slot=\"end\" color=\"primary\">{{CoinData.deno}}</ion-badge></ion-item>\r\n     \r\n      <ion-item><h2>Year:</h2>  <ion-badge slot=\"end\" color=\"success\">{{CoinData.year}}</ion-badge> </ion-item>\r\n      <ion-item><h2>Mint:</h2>\r\n        <ion-badge slot=\"end\" *ngIf=\"CoinData.mint=='Diamond'\" style=\"padding: 3px;\" color=\"danger\">Bombay <img  src=\"https://cdn-icons-png.flaticon.com/512/445/445102.png\" width=\"22px\"  height=\"18px\" >\r\n        </ion-badge>\r\n        <ion-badge slot=\"end\" *ngIf=\"CoinData.mint=='Star'\" style=\"padding: 3px;\" color=\"warning\">Hyderabad<ion-icon  name=\"star\" color=\"dark\"></ion-icon></ion-badge>\r\n        <ion-badge slot=\"end\" *ngIf=\"CoinData.mint=='Dot'\" style=\"padding: 3px;\" color=\"primary\"> Noida <ion-icon  name=\"ellipse\"  color=\"dark\"></ion-icon>\r\n        </ion-badge>\r\n        <ion-badge slot=\"end\" *ngIf=\"CoinData.mint=='Blank'\" style=\"padding: 3px;\" color=\"success\">Calcutta<ion-icon  name=\"close-circle-sharp\" color=\"dark\"></ion-icon>\r\n        </ion-badge>\r\n      \r\n      \r\n      </ion-item>\r\n      <ion-item><h2>Price:</h2>  <ion-badge slot=\"end\" color=\"warning\">{{CoinData.price}}</ion-badge></ion-item>\r\n      <ion-item><h2>Quantity:</h2>  <ion-badge slot=\"end\" color=\"danger\">{{CoinData.quantity}}</ion-badge></ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/display/display.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/display/display.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppDisplayDisplayPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  background-color: white;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 100%;\n  max-width: 500px;\n  max-height: 500px;\n}\n.flip-box {\n  text-align: center;\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #f1f1f1;\n  perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n}\n/* This container is needed to position the front and back side */\n.flip-box-inner {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n/* Do an horizontal flip when you move the mouse over the flip box container */\n.flip-box .flip-box-inner {\n  transform: rotateY(180deg);\n}\n/* Position the front and back side */\n.flip-box-front {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n.flip-box-back {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n/* Style the front side (fallback if image is missing) */\n/* Style the back side */\n.flip-box-back {\n  transform: rotateY(180deg);\n}\nion-fab-button {\n  height: 40px;\n  width: 40px;\n  margin-left: 67%;\n  margin-top: -20px;\n}\nh2 {\n  font-weight: bold;\n}\nion-badge {\n  font-size: 15px;\n}\nion-badge ion-icon {\n  margin-left: 3px;\n}\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS9kaXNwbGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtBQUFOO0FBTUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTU07RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQXFCLGdEQUFBO0FBRjdCO0FBTU0saUVBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFIUjtBQU1NLDhFQUFBO0FBQ0E7RUFDRSwwQkFBQTtBQUhSO0FBTU0scUNBQUE7QUFDQTtFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQXFDLFdBQUE7RUFDckMsMkJBQUE7QUFIUjtBQU1NO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFBcUMsV0FBQTtFQUNyQywyQkFBQTtBQUZSO0FBS00sd0RBQUE7QUFHQSx3QkFBQTtBQUNBO0VBRUUsMEJBQUE7QUFMUjtBQVNNO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDRixnQkFBQTtFQUNBLGlCQUFBO0FBUE47QUFZTTtFQUNJLGlCQUFBO0FBVFY7QUFZTTtFQUVJLGVBQUE7QUFWVjtBQVlVO0VBRUMsZ0JBQUE7QUFYWDtBQWdCUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFiWiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXkvZGlzcGxheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgXHJcbiAgICAvLyBvdmVyd3JpdGUgaW5saW5lIHN0eWxlcyAmIGhpZGluZyB0aGUgc2Nyb2xsYmFyXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9IFxyXG5cclxuXHJcblxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICAgICAuZmxpcC1ib3gge1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7IC8qIFJlbW92ZSB0aGlzIGlmIHlvdSBkb24ndCB3YW50IHRoZSAzRCBlZmZlY3QgKi9cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXHJcbiAgICAgIC5mbGlwLWJveC1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7Ly8yMDBweFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcclxuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiBEbyBhbiBob3Jpem9udGFsIGZsaXAgd2hlbiB5b3UgbW92ZSB0aGUgbW91c2Ugb3ZlciB0aGUgZmxpcCBib3ggY29udGFpbmVyICovXHJcbiAgICAgIC5mbGlwLWJveCAuZmxpcC1ib3gtaW5uZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xyXG4gICAgICAuZmxpcC1ib3gtZnJvbnRcclxuICAgICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZsaXAtYm94LWJhY2sge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogU3R5bGUgdGhlIGZyb250IHNpZGUgKGZhbGxiYWNrIGlmIGltYWdlIGlzIG1pc3NpbmcpICovXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xyXG4gICAgICAuZmxpcC1ib3gtYmFjayB7XHJcbiAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuXHJcbiAgICAgIGlvbi1mYWItYnV0dG9uXHJcbiAgICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7Ly80MHB6XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7Ly80MHB4XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA2NyU7Ly8yNjBweFxyXG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgXHJcblxyXG4gICAgICBoMntcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tYmFkZ2VcclxuICAgICAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4Oy8vMTVweFxyXG5cclxuICAgICAgICAgIGlvbi1pY29uXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDsgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlwcGxlLXBhcmVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/display/display.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/display/display.page.ts ***!
      \*****************************************/

    /*! exports provided: DisplayPage */

    /***/
    function srcAppDisplayDisplayPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisplayPage", function () {
        return DisplayPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../image-view/image-view.page */
      "./src/app/image-view/image-view.page.ts");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var DisplayPage = /*#__PURE__*/function () {
        function DisplayPage(modalCtrl) {
          _classCallCheck(this, DisplayPage);

          this.modalCtrl = modalCtrl;
          this.flag = false;
          this.state = 'default';

          if (!firebase__WEBPACK_IMPORTED_MODULE_4__["apps"].length) {
            firebase__WEBPACK_IMPORTED_MODULE_4__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].FIREBASE_CONFIG);
          }
        }

        _createClass(DisplayPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "presentModal",
          value: function presentModal(x) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_2__["ImageViewPage"],
                        cssClass: 'my-custom-class',
                        componentProps: {
                          imgurl: x
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "flip",
          value: function flip() {
            this.state = this.state === 'default' ? 'rotated' : 'default';
            this.flag = !this.flag;
            console.log(this.flag);
          }
        }]);

        return DisplayPage;
      }();

      DisplayPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      };

      DisplayPage.propDecorators = {
        CoinData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      DisplayPage = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-display',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./display.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.page.html"))["default"],
        animations: [// Each unique animation requires its own trigger. The first argument of the trigger function is the name
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rotatedState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          transform: 'rotate(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          transform: 'rotate(360deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in'))])],
        styles: [__importDefault(__webpack_require__(
        /*! ./display.page.scss */
        "./src/app/display/display.page.scss"))["default"]]
      })], DisplayPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~display-display-module~filter-filter-module~home-home-module-es5.js.map