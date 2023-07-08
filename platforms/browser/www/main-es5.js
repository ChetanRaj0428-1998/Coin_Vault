(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"showSplash\" class=\"splash\">\r\n  <div class=\"sk-circle\">\r\n    <div class=\"sk-circle1 sk-child\"></div>\r\n    <div class=\"sk-circle2 sk-child\"></div>\r\n    <div class=\"sk-circle3 sk-child\"></div>\r\n    <div class=\"sk-circle4 sk-child\"></div>\r\n    <div class=\"sk-circle5 sk-child\"></div>\r\n    <div class=\"sk-circle6 sk-child\"></div>\r\n    <div class=\"sk-circle7 sk-child\"></div>\r\n    <div class=\"sk-circle8 sk-child\"></div>\r\n    <div class=\"sk-circle9 sk-child\"></div>\r\n    <div class=\"sk-circle10 sk-child\"></div>\r\n    <div class=\"sk-circle11 sk-child\"></div>\r\n    <div class=\"sk-circle12 sk-child\"></div>\r\n  </div>\r\n</div>\r\n<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("default~add-coin-add-coin-module~display-display-module~edit-edit-module~filter-filter-module~fireba~835f5079"), __webpack_require__.e("default~add-coin-add-coin-module~display-display-module~edit-edit-module~filter-filter-module~home-h~d2239a42"), __webpack_require__.e("default~add-coin-add-coin-module~filter-filter-module~home-home-module"), __webpack_require__.e("default~display-display-module~filter-filter-module~home-home-module"), __webpack_require__.e("default~filter-filter-module~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'add-coin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | add-coin-add-coin-module */
          [__webpack_require__.e("default~add-coin-add-coin-module~display-display-module~edit-edit-module~filter-filter-module~fireba~835f5079"), __webpack_require__.e("default~add-coin-add-coin-module~display-display-module~edit-edit-module~filter-filter-module~home-h~d2239a42"), __webpack_require__.e("default~add-coin-add-coin-module~filter-filter-module~home-home-module"), __webpack_require__.e("add-coin-add-coin-module")]).then(__webpack_require__.bind(null,
          /*! ./add-coin/add-coin.module */
          "./src/app/add-coin/add-coin.module.ts")).then(function (m) {
            return m.AddCoinPageModule;
          });
        }
      }, {
        path: 'image-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | image-view-image-view-module */
          "image-view-image-view-module").then(__webpack_require__.bind(null,
          /*! ./image-view/image-view.module */
          "./src/app/image-view/image-view.module.ts")).then(function (m) {
            return m.ImageViewPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | register-register-module */
          "register-register-module").then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "./src/app/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'edit/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | edit-edit-module */
          [__webpack_require__.e("default~add-coin-add-coin-module~display-display-module~edit-edit-module~filter-filter-module~fireba~835f5079"), __webpack_require__.e("default~add-coin-add-coin-module~display-display-module~edit-edit-module~filter-filter-module~home-h~d2239a42"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./edit/edit.module */
          "./src/app/edit/edit.module.ts")).then(function (m) {
            return m.EditPageModule;
          });
        }
      }, {
        path: 'display',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | display-display-module */
          [__webpack_require__.e("default~add-coin-add-coin-module~display-display-module~edit-edit-module~filter-filter-module~fireba~835f5079"), __webpack_require__.e("default~add-coin-add-coin-module~display-display-module~edit-edit-module~filter-filter-module~home-h~d2239a42"), __webpack_require__.e("default~display-display-module~filter-filter-module~home-home-module"), __webpack_require__.e("display-display-module")]).then(__webpack_require__.bind(null,
          /*! ./display/display.module */
          "./src/app/display/display.module.ts")).then(function (m) {
            return m.DisplayPageModule;
          });
        }
      }, {
        path: 'stats',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | stats-stats-module */
          "stats-stats-module").then(__webpack_require__.bind(null,
          /*! ./stats/stats.module */
          "./src/app/stats/stats.module.ts")).then(function (m) {
            return m.StatsPageModule;
          });
        }
      }, {
        path: 'filter',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | filter-filter-module */
          [__webpack_require__.e("default~add-coin-add-coin-module~display-display-module~edit-edit-module~filter-filter-module~fireba~835f5079"), __webpack_require__.e("default~add-coin-add-coin-module~display-display-module~edit-edit-module~filter-filter-module~home-h~d2239a42"), __webpack_require__.e("default~add-coin-add-coin-module~filter-filter-module~home-home-module"), __webpack_require__.e("default~display-display-module~filter-filter-module~home-home-module"), __webpack_require__.e("default~filter-filter-module~home-home-module"), __webpack_require__.e("filter-filter-module")]).then(__webpack_require__.bind(null,
          /*! ./filter/filter.module */
          "./src/app/filter/filter.module.ts")).then(function (m) {
            return m.FilterPageModule;
          });
        }
      }, {
        path: 'crop',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | crop-crop-module */
          "crop-crop-module").then(__webpack_require__.bind(null,
          /*! ./crop/crop.module */
          "./src/app/crop/crop.module.ts")).then(function (m) {
            return m.CropPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".splash {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  background: #3e9dcb;\n}\n\n.sk-circle {\n  margin: 80% auto;\n  width: 60px;\n  height: 60px;\n  position: relative;\n}\n\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-circle .sk-child:before {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #f0e5e5;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n\n.sk-circle .sk-circle2 {\n  transform: rotate(30deg);\n}\n\n.sk-circle .sk-circle3 {\n  transform: rotate(60deg);\n}\n\n.sk-circle .sk-circle4 {\n  transform: rotate(90deg);\n}\n\n.sk-circle .sk-circle5 {\n  transform: rotate(120deg);\n}\n\n.sk-circle .sk-circle6 {\n  transform: rotate(150deg);\n}\n\n.sk-circle .sk-circle7 {\n  transform: rotate(180deg);\n}\n\n.sk-circle .sk-circle8 {\n  transform: rotate(210deg);\n}\n\n.sk-circle .sk-circle9 {\n  transform: rotate(240deg);\n}\n\n.sk-circle .sk-circle10 {\n  transform: rotate(270deg);\n}\n\n.sk-circle .sk-circle11 {\n  transform: rotate(300deg);\n}\n\n.sk-circle .sk-circle12 {\n  transform: rotate(330deg);\n}\n\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQURKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7RUFDUSw4REFBQTtBQUFaOztBQUVFO0VBR1Usd0JBQUE7QUFDWjs7QUFBRTtFQUdVLHdCQUFBO0FBR1o7O0FBRkU7RUFHVSx3QkFBQTtBQUtaOztBQUpFO0VBR1UseUJBQUE7QUFPWjs7QUFORTtFQUdVLHlCQUFBO0FBU1o7O0FBUkU7RUFHVSx5QkFBQTtBQVdaOztBQVZFO0VBR1UseUJBQUE7QUFhWjs7QUFaRTtFQUdVLHlCQUFBO0FBZVo7O0FBZEU7RUFHVSx5QkFBQTtBQWlCWjs7QUFoQkU7RUFHVSx5QkFBQTtBQW1CWjs7QUFsQkU7RUFHVSx5QkFBQTtBQXFCWjs7QUFwQkU7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FBdUJaOztBQXRCRTtFQUNFLDRCQUFBO0VBQ1Esb0JBQUE7QUF5Qlo7O0FBeEJFO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQTJCWjs7QUExQkU7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FBNkJaOztBQTVCRTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUErQlo7O0FBOUJFO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQWlDWjs7QUFoQ0U7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FBbUNaOztBQWxDRTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUFxQ1o7O0FBcENFO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQXVDWjs7QUF0Q0U7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FBeUNaOztBQXhDRTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUEyQ1o7O0FBekNFO0VBQ0U7SUFFVSxtQkFBQTtFQTRDWjtFQTNDSTtJQUVRLG1CQUFBO0VBNkNaO0FBQ0Y7O0FBMUNFO0VBQ0U7SUFFVSxtQkFBQTtFQTRDWjtFQTNDSTtJQUVRLG1CQUFBO0VBNkNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BsYXNoXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzNlOWRjYjtcclxufVxyXG5cclxuXHJcblxyXG4uc2stY2lyY2xlIHtcclxuICAgIG1hcmdpbjogODAlIGF1dG87XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAuc2stY2lyY2xlIC5zay1jaGlsZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjI5LCAyMjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gIH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGUyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTMge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGU1IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTYge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGU4IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTAge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTEge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMzpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGU0OmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGU1OmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGU2OmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGU3OmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGU4OmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGU5OmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7IH1cclxuICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMDpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzOyB9XHJcbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTE6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yczsgfVxyXG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7IH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY2lyY2xlQm91bmNlRGVsYXkge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfSA0MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XHJcbiAgICAwJSwgODAlLCAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9IDQwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var ionic_image_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ionic-image-loader */
      "./node_modules/ionic-image-loader/__ivy_ngcc__/fesm2015/ionic-image-loader.js");

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

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, imgLoadConf) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.imgLoadConf = imgLoadConf;
          this.showSplash = true;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();

              setTimeout(function () {
                _this.showSplash = false;
              }, 3000);

              _this.angular.module('ionicApp', ['ionic']).config(function ($ionicConfigProvider) {
                if (this.platform.isAndroid()) $ionicConfigProvider.scrolling.jsScrolling(false);
              });
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
        }, {
          type: ionic_image_loader__WEBPACK_IMPORTED_MODULE_4__["ImageLoaderConfigService"]
        }];
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/ionic-webview/ngx */
      "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].FIREBASE_CONFIG), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_17__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
        }, _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_16__["WebView"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: true,
        FIREBASE_CONFIG: {
          apiKey: "AIzaSyAxU119_W2q3fOVQGozl3B5EaitieO9_rc",
          authDomain: "coin-db-e4180.firebaseapp.com",
          databaseURL: "https://coin-db-e4180.firebaseio.com",
          projectId: "coin-db-e4180",
          storageBucket: "coin-db-e4180.appspot.com",
          messagingSenderId: "582292568795",
          appId: "1:582292568795:web:9f8ba4c072cdcbe0b62afe",
          measurementId: "G-60FX6SMCXE"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\benny\OneDrive\Desktop\Mobile\Coin-Vault\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map