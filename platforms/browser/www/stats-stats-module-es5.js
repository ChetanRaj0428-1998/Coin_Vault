(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stats-stats-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppStatsStatsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title style=\"text-align:center ;\"><strong>Stats</strong></ion-title>\r\n \r\n  <ion-icon class=\"ion-activatable ripple-parent\"  name=\"close-sharp\" slot=\"end\" style=\"font-size:xx-large;margin-right: 10px; padding: 10px;\" (click)=\"dismiss()\"></ion-icon> \r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n<ion-list lines=\"full\" style=\"padding: 0px;\">\r\n  <ion-item>\r\n    <p><strong>Total Number Different of coins:</strong></p>\r\n    <ion-badge color=\"success\" slot=\"end\">{{totalDiffCoins}}</ion-badge>  \r\n  </ion-item>\r\n<ion-item>\r\n  <p><strong>Total Number of coins:</strong></p>\r\n  <ion-badge slot=\"end\">{{totalCoins}}</ion-badge>  \r\n</ion-item>\r\n\r\n<ion-item>\r\n  <p><strong>Total price of all coins:</strong></p>\r\n  <ion-badge color=\"danger\" slot=\"end\">{{totalPrice}}</ion-badge>  \r\n</ion-item>\r\n\r\n<ion-item lines=\"none\">\r\n  <p><strong>Mint Colection:</strong></p>\r\n</ion-item>\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n\r\n\r\n      <ion-badge mode=\"ios\" color=\"primary\">\r\n        <ion-icon  name=\"ellipse\"  color=\"dark\"></ion-icon>\r\n\r\n        {{Mints[0]}}</ion-badge>\r\n    </ion-col>\r\n\r\n    <ion-col>\r\n      <ion-badge mode=\"ios\" color=\"danger\">\r\n        <img  src=\"https://cdn-icons-png.flaticon.com/512/445/445102.png\" width=\"21px\"  height=\"23px\" >\r\n        {{Mints[1]}} </ion-badge>\r\n    </ion-col>\r\n    \r\n    <ion-col>\r\n      <ion-badge mode=\"ios\" color=\"warning\">\r\n        <ion-icon  name=\"star\" color=\"dark\"></ion-icon>\r\n\r\n        {{Mints[2]}}</ion-badge>\r\n\r\n    </ion-col>\r\n    \r\n    <ion-col>\r\n      \r\n      <ion-badge mode=\"ios\" color=\"success\">\r\n        <ion-icon  name=\"close-circle-sharp\" color=\"dark\"></ion-icon>\r\n        {{Mints[3]}}</ion-badge>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n<hr>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Select Coin\" [(ngModel)]=\"deno\" name=\"deno\">\r\n          <ion-select-option value=\"1 Paise\">1 Paise</ion-select-option>\r\n          <ion-select-option value=\"2 Paise\">2 Paise</ion-select-option>\r\n          <ion-select-option value=\"3 Paise\">3 Paise</ion-select-option>\r\n          <ion-select-option value=\"5 Paise\">5 Paise</ion-select-option>\r\n          <ion-select-option value=\"10 Paise\">10 Paise</ion-select-option>\r\n          <ion-select-option value=\"20 Paise\">20 Paise</ion-select-option>\r\n          <ion-select-option value=\"25 Paise\">25 Paise</ion-select-option>\r\n          <ion-select-option value=\"50 Paise\">50 Paise</ion-select-option>\r\n                <ion-select-option value=\"1 Rupee\">1 Rupee</ion-select-option>\r\n                <ion-select-option value=\"2 Rupees\">2 Rupees</ion-select-option>\r\n                <ion-select-option value=\"5 Rupees\">5 Rupees</ion-select-option>\r\n                <ion-select-option value=\"10 Rupees\">10 Rupees</ion-select-option>\r\n             \r\n              </ion-select>\r\n         \r\n      </ion-col>\r\n      \r\n      <ion-col size=\"4\">\r\n        <ion-button (click)=\"RupeeTypeProcess(deno)\">Check</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-item><p><strong>Coins:</strong> </p>\r\n    <ion-badge style=\"margin-top: 4px;\" slot=\"end\" color=\"warning\">{{RupeeCoins}}</ion-badge>\r\n    </ion-item>\r\n\r\n</ion-list>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/stats/stats-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/stats/stats-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: StatsPageRoutingModule */

    /***/
    function srcAppStatsStatsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatsPageRoutingModule", function () {
        return StatsPageRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _stats_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stats.page */
      "./src/app/stats/stats.page.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        component: _stats_page__WEBPACK_IMPORTED_MODULE_2__["StatsPage"]
      }];

      var StatsPageRoutingModule = function StatsPageRoutingModule() {
        _classCallCheck(this, StatsPageRoutingModule);
      };

      StatsPageRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], StatsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/stats/stats.module.ts":
    /*!***************************************!*\
      !*** ./src/app/stats/stats.module.ts ***!
      \***************************************/

    /*! exports provided: StatsPageModule */

    /***/
    function srcAppStatsStatsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatsPageModule", function () {
        return StatsPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _stats_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./stats-routing.module */
      "./src/app/stats/stats-routing.module.ts");
      /* harmony import */


      var _stats_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./stats.page */
      "./src/app/stats/stats.page.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var StatsPageModule = function StatsPageModule() {
        _classCallCheck(this, StatsPageModule);
      };

      StatsPageModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _stats_routing_module__WEBPACK_IMPORTED_MODULE_4__["StatsPageRoutingModule"]],
        declarations: [_stats_page__WEBPACK_IMPORTED_MODULE_5__["StatsPage"]]
      })], StatsPageModule);
      /***/
    },

    /***/
    "./src/app/stats/stats.page.scss":
    /*!***************************************!*\
      !*** ./src/app/stats/stats.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppStatsStatsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-badge {\n  font-size: 20px;\n}\n\nion-icon {\n  margin-top: 4px;\n  font-size: x-large;\n}\n\nimg {\n  margin-top: 4px;\n}\n\nhr {\n  border-top: 1px solid #dedede;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHMvc3RhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVUsZUFBQTtBQUFWOztBQUlRO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FBRlY7O0FBS1E7RUFDRSxlQUFBO0FBRlY7O0FBTVE7RUFDRSw2QkFBQTtBQUhWOztBQU1RO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUhWIiwiZmlsZSI6InNyYy9hcHAvc3RhdHMvc3RhdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlXHJcbiAgICAgIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaXBwbGUtcGFyZW50IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/stats/stats.page.ts":
    /*!*************************************!*\
      !*** ./src/app/stats/stats.page.ts ***!
      \*************************************/

    /*! exports provided: StatsPage */

    /***/
    function srcAppStatsStatsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatsPage", function () {
        return StatsPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var StatsPage = /*#__PURE__*/function () {
        function StatsPage(modalCtrl) {
          _classCallCheck(this, StatsPage);

          this.modalCtrl = modalCtrl;
          this.totalDiffCoins = 0;
          this.totalCoins = 0;
          this.totalPrice = 0;
          this.RupeeCoins = 0;
        }

        _createClass(StatsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.totalDiffCoins = this.CoinStats.length;
            this.totalCoins = this.totalCoinsProcess();
            this.totalPrice = this.totalPriceProcess();
            this.MintTypeProcess();
            console.log(this.Mints[0]);
          }
        }, {
          key: "totalCoinsProcess",
          value: function totalCoinsProcess() {
            var i,
                sum = 0,
                temp;

            for (i = 0; i < this.CoinStats.length; i++) {
              temp = Number(this.CoinStats[i].quantity);
              sum = sum + temp;
            }

            return sum;
          }
        }, {
          key: "totalPriceProcess",
          value: function totalPriceProcess() {
            var i,
                price = 0,
                totalPrice = 0,
                temp1,
                temp2;

            for (i = 0; i < this.CoinStats.length; i++) {
              temp1 = Number(this.CoinStats[i].quantity);
              temp2 = Number(this.CoinStats[i].price);
              price = temp1 * temp2;
              totalPrice = totalPrice + price;
            }

            return totalPrice;
          }
        }, {
          key: "MintTypeProcess",
          value: function MintTypeProcess() {
            var i = 0;
            var temp = [0, 0, 0, 0];

            while (i < this.CoinStats.length) {
              if (this.CoinStats[i].mint == 'Dot') {
                temp[0]++;
              }

              if (this.CoinStats[i].mint == 'Diamond') {
                temp[1]++;
              }

              if (this.CoinStats[i].mint == 'Star') {
                temp[2]++;
              }

              if (this.CoinStats[i].mint == 'Blank') {
                temp[3]++;
              }

              i++;
            }

            this.Mints = temp;
          }
        }, {
          key: "RupeeTypeProcess",
          value: function RupeeTypeProcess(x) {
            var i = 0;
            var temp = 0;

            for (i = 0; i < this.CoinStats.length; i++) {
              if (x == this.CoinStats[i].deno) {
                temp++;
              }
            }

            this.RupeeCoins = temp;
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }]);

        return StatsPage;
      }();

      StatsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      };

      StatsPage.propDecorators = {
        CoinStats: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      StatsPage = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-stats',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./stats.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.page.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./stats.page.scss */
        "./src/app/stats/stats.page.scss"))["default"]]
      })], StatsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=stats-stats-module-es5.js.map