(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item>\n  <ion-label position=\"floating\">E-Mail</ion-label>\n  <ion-input type=\"email\"[(ngModel)]=\"user.email\" required></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\">Password</ion-label>\n  <ion-input type=\"password\" [(ngModel)]=\"user.password\" required></ion-input>\n</ion-item>\n<ion-button class=\"ion-padding\" expand=\"block\"  (click)=\"login(user)\">\n  Login\n</ion-button>\n<ion-button class=\"ion-padding\" color=\"light\" expand=\"block\"  routerLink=\"/register\">\n  Register\n</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _temp_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../temp-data.service */
      "./src/app/temp-data.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(service, toastCtrl, loadingCtrl, afAuth, navCtrl) {
          _classCallCheck(this, LoginPage);

          this.service = service;
          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.afAuth = afAuth;
          this.navCtrl = navCtrl;
          this.user = {};
          this.adminEmail = "admin@gmail.com";
          this.adminPwd = "123456";
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (user.email == this.adminEmail && user.password == this.adminPwd) {
                        this.service.adminCheck = true;
                        console.log("Admin", this.service.adminCheck);
                      } else {
                        this.service.adminCheck = false;
                      } //console.log(user.email);
                      //console.log(user.password);


                      if (!this.formValidation()) {
                        _context.next = 17;
                        break;
                      }

                      //show loader
                      loader = this.loadingCtrl.create({
                        message: "Please Wait..."
                      });
                      _context.next = 5;
                      return loader;

                    case 5:
                      _context.sent.present();

                      _context.prev = 6;
                      _context.next = 9;
                      return this.afAuth.signInWithEmailAndPassword(user.email, user.password).then(function (data) {
                        console.log(data); //redirect to home page

                        _this.navCtrl.navigateRoot("home");
                      });

                    case 9:
                      _context.next = 14;
                      break;

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](6);
                      this.showToast(_context.t0);

                    case 14:
                      _context.next = 16;
                      return loader;

                    case 16:
                      _context.sent.dismiss();

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[6, 11]]);
            }));
          }
        }, {
          key: "formValidation",
          value: function formValidation() {
            if (!this.user.email) {
              this.showToast("Enter Email");
              return false;
            }

            if (!this.user.password) {
              this.showToast("Enter Password");
              return false;
            }

            return true;
          }
        }, {
          key: "showToast",
          value: function showToast(message) {
            this.toastCtrl.create({
              message: message,
              duration: 3000
            }).then(function (toastData) {
              return toastData.present();
            });
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _temp_data_service__WEBPACK_IMPORTED_MODULE_4__["TempDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "./src/app/temp-data.service.ts":
    /*!**************************************!*\
      !*** ./src/app/temp-data.service.ts ***!
      \**************************************/

    /*! exports provided: TempDataService */

    /***/
    function srcAppTempDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TempDataService", function () {
        return TempDataService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var TempDataService = /*#__PURE__*/function () {
        function TempDataService(storage) {
          _classCallCheck(this, TempDataService);

          this.storage = storage;
          this.croppedImg = null;
          this.croppedImg1 = null;
          this.styleFlag = false;
          this.chipFlag = [0, 0, 0, 0];
          this.fCount = 0;
          this.modalInstance = [];
          this.i = 0;
          this.photosF = [];
          this.photosB = [];
          this.temp = 10;
          this.adminCheck = false;
        }

        _createClass(TempDataService, [{
          key: "incrCount",
          value: function incrCount() {
            this.fCount++;
          }
        }, {
          key: "dcrCount",
          value: function dcrCount() {
            this.fCount--;
          }
        }, {
          key: "storeModal",
          value: function storeModal(x) {
            this.modalInstance[this.i] = x;
            this.i++;
            console.log(this.modalInstance);
          }
        }, {
          key: "getData",
          value: function getData() {
            return 'hello'; //  return this.CoinData;
          }
        }, {
          key: "storeFF",
          value: function storeFF(x, y) {
            // Add new photo to gallery
            this.photosF.unshift({
              data: x,
              url: y
            }); // Save all photos for later viewing

            this.storage.set('front', this.photosF);
          }
        }, {
          key: "storeBB",
          value: function storeBB(x, y) {
            // Add new photo to gallery
            this.photosB.unshift({
              data: x,
              url: y
            }); // Save all photos for later viewing

            this.storage.set('back', this.photosB);
          }
        }, {
          key: "storeF",
          value: function storeF(x, y) {
            // Add new photo to gallery
            this.photosF.unshift({
              data: 'data:image/jpeg;base64,' + x,
              url: y
            }); // Save all photos for later viewing

            this.storage.set('front', this.photosF);
          }
        }, {
          key: "storeB",
          value: function storeB(x, y) {
            // Add new photo to gallery
            this.photosB.unshift({
              data: 'data:image/jpeg;base64,' + x,
              url: y
            }); // Save all photos for later viewing

            this.storage.set('back', this.photosB);
          }
        }, {
          key: "loadSaved",
          value: function loadSaved() {
            var _this2 = this;

            this.storage.get('front').then(function (photos) {
              _this2.photosF = photos || [];
            });
            this.storage.get('back').then(function (photos) {
              _this2.photosB = photos || [];
            });
          }
        }]);

        return TempDataService;
      }();

      TempDataService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      TempDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TempDataService);

      var PhotoF = function PhotoF() {
        _classCallCheck(this, PhotoF);
      };

      var PhotoB = function PhotoB() {
        _classCallCheck(this, PhotoB);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map