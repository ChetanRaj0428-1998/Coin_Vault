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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"text-align:center ;\"><strong>Stats</strong></ion-title>\n \n  <ion-icon class=\"ion-activatable ripple-parent\"  name=\"close-sharp\" slot=\"end\" style=\"font-size:xx-large;margin-right: 10px; padding: 10px;\" (click)=\"dismiss()\"></ion-icon> \n  \n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n<ion-list lines=\"full\" style=\"padding: 0px;\">\n  <ion-item>\n    <p><strong>Total Number Different of coins:</strong></p>\n    <ion-badge color=\"success\" slot=\"end\">{{totalDiffCoins}}</ion-badge>  \n  </ion-item>\n<ion-item>\n  <p><strong>Total Number of coins:</strong></p>\n  <ion-badge slot=\"end\">{{totalCoins}}</ion-badge>  \n</ion-item>\n\n<ion-item>\n  <p><strong>Total price of all coins:</strong></p>\n  <ion-badge color=\"danger\" slot=\"end\">{{totalPrice}}</ion-badge>  \n</ion-item>\n\n<ion-item lines=\"none\">\n  <p><strong>Mint Colection:</strong></p>\n</ion-item>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n\n\n      <ion-badge mode=\"ios\" color=\"primary\">\n        <ion-icon  name=\"ellipse\"  color=\"dark\"></ion-icon>\n\n        {{Mints[0]}}</ion-badge>\n    </ion-col>\n\n    <ion-col>\n      <ion-badge mode=\"ios\" color=\"danger\">\n        <img  src=\"https://cdn-icons-png.flaticon.com/512/445/445102.png\" width=\"21px\"  height=\"23px\" >\n        {{Mints[1]}} </ion-badge>\n    </ion-col>\n    \n    <ion-col>\n      <ion-badge mode=\"ios\" color=\"warning\">\n        <ion-icon  name=\"star\" color=\"dark\"></ion-icon>\n\n        {{Mints[2]}}</ion-badge>\n\n    </ion-col>\n    \n    <ion-col>\n      \n      <ion-badge mode=\"ios\" color=\"success\">\n        <ion-icon  name=\"close-circle-sharp\" color=\"dark\"></ion-icon>\n        {{Mints[3]}}</ion-badge>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<hr>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"Select Coin\" [(ngModel)]=\"deno\" name=\"deno\">\n          <ion-select-option value=\"1 Paise\">1 Paise</ion-select-option>\n          <ion-select-option value=\"2 Paise\">2 Paise</ion-select-option>\n          <ion-select-option value=\"3 Paise\">3 Paise</ion-select-option>\n          <ion-select-option value=\"5 Paise\">5 Paise</ion-select-option>\n          <ion-select-option value=\"10 Paise\">10 Paise</ion-select-option>\n          <ion-select-option value=\"20 Paise\">20 Paise</ion-select-option>\n          <ion-select-option value=\"25 Paise\">25 Paise</ion-select-option>\n          <ion-select-option value=\"50 Paise\">50 Paise</ion-select-option>\n                <ion-select-option value=\"1 Rupee\">1 Rupee</ion-select-option>\n                <ion-select-option value=\"2 Rupees\">2 Rupees</ion-select-option>\n                <ion-select-option value=\"5 Rupees\">5 Rupees</ion-select-option>\n                <ion-select-option value=\"10 Rupees\">10 Rupees</ion-select-option>\n             \n              </ion-select>\n         \n      </ion-col>\n      \n      <ion-col size=\"4\">\n        <ion-button (click)=\"RupeeTypeProcess(deno)\">Check</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-item><p><strong>Coins:</strong> </p>\n    <ion-badge style=\"margin-top: 4px;\" slot=\"end\" color=\"warning\">{{RupeeCoins}}</ion-badge>\n    </ion-item>\n\n</ion-list>\n</ion-content>\n";
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _stats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stats.page */
      "./src/app/stats/stats.page.ts");

      var routes = [{
        path: '',
        component: _stats_page__WEBPACK_IMPORTED_MODULE_3__["StatsPage"]
      }];

      var StatsPageRoutingModule = function StatsPageRoutingModule() {
        _classCallCheck(this, StatsPageRoutingModule);
      };

      StatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _stats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./stats-routing.module */
      "./src/app/stats/stats-routing.module.ts");
      /* harmony import */


      var _stats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./stats.page */
      "./src/app/stats/stats.page.ts");

      var StatsPageModule = function StatsPageModule() {
        _classCallCheck(this, StatsPageModule);
      };

      StatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stats_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatsPageRoutingModule"]],
        declarations: [_stats_page__WEBPACK_IMPORTED_MODULE_6__["StatsPage"]]
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


      __webpack_exports__["default"] = "ion-badge {\n  font-size: 20px;\n}\n\nion-icon {\n  margin-top: 4px;\n  font-size: x-large;\n}\n\nimg {\n  margin-top: 4px;\n}\n\nhr {\n  border-top: 1px solid #dedede;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHMvc3RhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVUsZUFBQTtBQUFWOztBQUlRO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FBRlY7O0FBS1E7RUFDRSxlQUFBO0FBRlY7O0FBTVE7RUFDRSw2QkFBQTtBQUhWOztBQU1RO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUhWIiwiZmlsZSI6InNyYy9hcHAvc3RhdHMvc3RhdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlXG4gICAgICB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvblxuICAgICAgICB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGhyIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfSJdfQ== */";
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      StatsPage.propDecorators = {
        CoinStats: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      StatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stats',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./stats.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./stats.page.scss */
        "./src/app/stats/stats.page.scss"))["default"]]
      })], StatsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=stats-stats-module-es5.js.map