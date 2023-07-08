(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/crop/crop.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crop/crop.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCropCropPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title><strong style=\"text-align:center ;\">Crop Image </strong> <ion-icon style=\"margin: 5px;font-weight: 500;\" name=\"crop-sharp\"></ion-icon></ion-title>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <image-cropper *ngIf=\"imgTocrop\"\r\n  [imageFile]=\"imgTocrop\"\r\n  [maintainAspectRatio]=\"true\"\r\n  [aspectRatio]=\" 2 / 2\"\r\n  [roundCropper]=\"true\"\r\n  [imageQuality]=\"100\"\r\n  [canvasRotation]=\"canvasRotate\"\r\n  (imageLoaded)=\"imageLoaded()\"\r\n  format=\"jpeg\"\r\n  (imageCropped)=\"imageCropped($event)\"\r\n \r\n></image-cropper>\r\n<ion-grid *ngIf=\"imgTocrop\" style=\"position: fixed;\">\r\n  <ion-row>\r\n    <ion-col>\r\n      \r\n<ion-button color=\"medium\" expand=\"full\"   (click)=\"rotateRight()\">Rotate Right <img src=\"assets/RR.png\" alt=\"\" ></ion-button>\r\n    </ion-col>\r\n  \r\n    <ion-col>\r\n      <ion-button  color=\"light\" expand=\"full\"   (click)=\"rotateLeft()\">Rotate Left <img src=\"assets/LL.png\" alt=\"\" ></ion-button>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button *ngIf=\"imgTocrop\" expand=\"full\" style=\"text-align: center;\" color=\"danger\"  (click)=\"cancel()\">Cancel</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button *ngIf=\"imgTocrop\" expand=\"full\" style=\"text-align: center;\" color=\"primary\"  (click)=\"crop()\">Crop</ion-button>\r\n    </ion-col>\r\n    \r\n  </ion-row>\r\n</ion-grid>\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEditEditPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-title style=\"text-align:center ;\">\r\n     <strong>\r\n  Update Coin Details    \r\n </strong> \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content >\r\n<form  #f=\"ngForm\">\r\n\r\n  <ion-item>\r\n    <ion-label class=\"labelsize\" position=\"floating\">Name of the coin</ion-label>\r\n    <ion-input [(ngModel)]=\"coin.name\" name=\"coin.name\" type=\"text\" spellcheck=\"true\" clear-input=\"true\"></ion-input>\r\n  </ion-item>\r\n  <h4 style=\"margin-left:15px;\">Denomination</h4>\r\n  <ion-select value=\"1 Rupee\" [(ngModel)]=\"coin.deno\" name=\"coin.deno\">\r\n  <ion-select-option value=\"1 Paise\">1 Paise</ion-select-option>\r\n  <ion-select-option value=\"2 Paise\">2 Paise</ion-select-option>\r\n  <ion-select-option value=\"3 Paise\">3 Paise</ion-select-option>\r\n  <ion-select-option value=\"5 Paise\">5 Paise</ion-select-option>\r\n  <ion-select-option value=\"10 Paise\">10 Paise</ion-select-option>\r\n  <ion-select-option value=\"20 Paise\">20 Paise</ion-select-option>\r\n  <ion-select-option value=\"25 Paise\">25 Paise</ion-select-option>\r\n  <ion-select-option value=\"50 Paise\">50 Paise</ion-select-option>\r\n        <ion-select-option value=\"1 Rupee\">1 Rupee</ion-select-option>\r\n        <ion-select-option value=\"2 Rupees\">2 Rupees</ion-select-option>\r\n        <ion-select-option value=\"5 Rupees\">5 Rupees</ion-select-option>\r\n        <ion-select-option value=\"10Rupees\">10 Rupees</ion-select-option>\r\n     \r\n      </ion-select>\r\n  <hr>\r\n  <ion-item>\r\n    <ion-label class=\"labelsize\" position=\"fixed\">Quantity :</ion-label>\r\n    <ion-input [(ngModel)]=\"coin.quantity\" name=\"coin.quantity\" inputmode=\"numeric\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n  <h4>Year</h4>\r\n  </ion-item>\r\n  <ion-datetime   [(ngModel)]=\"coin.year\" name=\"year\"  display-format=\"YYYY\" picker-format=\"YYYY\" placeholder=\"Select Year\"></ion-datetime>\r\n  <hr>\r\n\r\n    <ion-item lines=\"none\"> \r\n      <h4>Mint</h4>\r\n      </ion-item>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-chip color=\"primary\" [class.chipone]=\"chipflag==1\" (click)=\"chipSelect(1, 'Dot')\">\r\n              <ion-icon *ngIf=\"chipflag!=1\" name=\"ellipse\"  color=\"dark\"></ion-icon>\r\n              <ion-icon *ngIf=\"chipflag==1\" name=\"ellipse\"  color=\"light\"></ion-icon>\r\n              <ion-label [class.chiplabel]=\"chipflag==1\"><strong>Noida</strong></ion-label>\r\n            </ion-chip>\r\n            <ion-chip color=\"danger\" [class.chiptwo]=\"chipflag==2\" (click)=\"chipSelect(2, 'Diamond')\">\r\n              <img *ngIf=\"chipflag!=2\" src=\"https://cdn-icons-png.flaticon.com/512/445/445102.png\" width=\"20px\"  height=\"25px\" style=\"margin-right:5px;\">\r\n              <img *ngIf=\"chipflag==2\" src=\"/assets/flat-diamond-icon-700156.png\" width=\"20px\"  height=\"20px\" style=\"margin-right:5px;\">\r\n              <ion-label [class.chiplabel]=\"chipflag==2\"><strong>Bombay</strong></ion-label>\r\n            </ion-chip>\r\n          </ion-col>\r\n   \r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-chip color=\"warning\" [class.chipthree]=\"chipflag==3\" (click)=\"chipSelect(3, 'Star')\">\r\n              <ion-icon *ngIf=\"chipflag!=3\" name=\"star\" color=\"dark\"></ion-icon>\r\n              <ion-icon *ngIf=\"chipflag==3\" name=\"star\" color=\"light\"></ion-icon>\r\n              <ion-label [class.chiplabel]=\"chipflag==3\"><strong>Hyderabad</strong></ion-label>\r\n            </ion-chip>\r\n            <ion-chip color=\"success\" [class.chipfour]=\"chipflag==4\" (click)=\"chipSelect(4, 'Blank')\">\r\n              <ion-icon *ngIf=\"chipflag!=4\"  name=\"close-circle\" color=\"dark\"></ion-icon>\r\n              <ion-icon *ngIf=\"chipflag==4\"  name=\"close-circle\" color=\"light\"></ion-icon>\r\n              <ion-label [class.chiplabel]=\"chipflag==4\"> <strong>Calcutta</strong></ion-label>\r\n            </ion-chip>\r\n          \r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n  <hr>\r\n  <!--\r\n<h4 style=\"margin-left:15px;\">Price Range <br>  </h4>\r\n  <h4> <strong>₹</strong> {{val.lower}} <span *ngIf=\"val.upper>0\">-</span> {{val.upper}}</h4>\r\n  <ion-range style=\"padding-top:10px;\" [(ngModel)]=\"val\"  name=\"price\" min=\"1\" max=\"1000\" value=\"0\"   step=\"1\" pin=\"true\"  ticks=\"true\"  id=\"dual-range\" dual-knobs color=\"dark\">\r\n  \r\n  </ion-range>\r\n  \r\n  -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"labelsize\" position=\"fixed\">Price ₹:</ion-label>\r\n    <ion-input [(ngModel)]=\"coin.price\" name=\"coin.price\" inputmode=\"numeric\"></ion-input>\r\n \r\n  </ion-item>\r\n   <hr>\r\n  <ion-radio-group >\r\n      \r\n    <h4 style=\"margin-left:15px;\">Coin Image</h4>\r\n  <ion-grid>\r\n  <ion-row>\r\n      <ion-col>\r\n                \r\n  <ion-label for=\"camera\" >Use <br> Camera </ion-label>\r\n  <ion-radio  (ionFocus)=\"setPhotoOption(1)\" name=\"camera\"  value=\"camera\" class=\"form-control\" ></ion-radio>\r\n  \r\n  </ion-col>\r\n  <ion-col>\r\n    <ion-label for=\"gallery\" >Choose <br>from Gallery</ion-label>\r\n    <ion-radio (ionFocus)=\"setPhotoOption(2)\"  name=\"gallery\"   value=\"gallery\" class=\"form-control\" ></ion-radio>\r\n   </ion-col>\r\n   </ion-row>\r\n   </ion-grid>\r\n   \r\n     \r\n  \r\n  </ion-radio-group>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col><ion-button color=\"dark\" size=\"small\" (click)=\"getCameraFront()\"><strong>Front Side</strong></ion-button></ion-col>\r\n      <ion-col><ion-button color=\"light\" size=\"small\" (click)=\"getCameraBack()\"><strong>Back Side</strong></ion-button>\r\n      </ion-col>\r\n  \r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n      <ion-button color=\"medium\" size=\"small\" (click)=\"show()\"><strong>Show Image</strong></ion-button>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <div *ngIf=\"selectedPhoto && selectedPhoto1 \">\r\n        <!--\r\n          <ion-button color=\"warning\" style=\"margin-left: 50px;\" (click)=\"flip()\" >\r\n          Flip the coin\r\n        </ion-button>\r\n        -->\r\n        <div [class.flip-box]=\"flag\">\r\n          <div class=\"flip-box-inner \">\r\n            <div class=\"flip-box-front \">\r\n                <img src=\"{{selectedPhoto}}\" height=\"200\" width=\"200\"  class=\"center\" (click)=\"presentModal(selectedPhoto)\">    \r\n            </div>\r\n            <div class=\"flip-box-back\">\r\n              <img src=\"{{selectedPhoto1}}\" height=\"200\" width=\"200\"  class=\"center\" (click)=\"presentModal(selectedPhoto1)\"> \r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <ion-fab-button [@rotatedState]='state' color=\"warning\" (click)=\"flip()\">\r\n          <ion-icon name=\"git-compare-outline\"></ion-icon>               \r\n           </ion-fab-button>\r\n      </div>\r\n      \r\n    \r\n    </ion-grid>\r\n\r\n    \r\n \r\n  \r\n  \r\n  <ion-grid >\r\n    <ion-row >\r\n      <ion-col>\r\n      <ion-button color=\"danger\" expand=\"full\" (click)=\"dismiss()\">Cancel</ion-button>\r\n      </ion-col>\r\n      <ion-col style=\"z-index: 1;\">\r\n      <ion-button  color=\"success\" expand=\"full\" (click)=\"SubmitForm(coin)\">Update</ion-button>\r\n      </ion-col>\r\n    \r\n    </ion-row>\r\n    </ion-grid>\r\n\r\n</form>\r\n  \r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/crop/crop.page.scss":
    /*!*************************************!*\
      !*** ./src/app/crop/crop.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppCropCropPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-spinner {\n  transform: scale(6);\n  left: 200px;\n  right: 200px;\n  top: 300px;\n  bottom: 200px;\n}\n\nimage-cropper {\n  height: 300px;\n}\n\nimg {\n  height: 20px;\n  width: 20px;\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JvcC9jcm9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBRUksYUFBQTtBQUFKOztBQVFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDRyxpQkFBQTtBQUxQIiwiZmlsZSI6InNyYy9hcHAvY3JvcC9jcm9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zcGlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoNik7XHJcbiAgICBsZWZ0OiAyMDBweDtcclxuICAgIHJpZ2h0OiAyMDBweDtcclxuICAgIHRvcDogMzAwcHg7XHJcbiAgICBib3R0b206IDIwMHB4O1xyXG59XHJcblxyXG5pbWFnZS1jcm9wcGVyXHJcbntcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIFxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/crop/crop.page.ts":
    /*!***********************************!*\
      !*** ./src/app/crop/crop.page.ts ***!
      \***********************************/

    /*! exports provided: CropPage */

    /***/
    function srcAppCropCropPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropPage", function () {
        return CropPage;
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


      var _temp_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../temp-data.service */
      "./src/app/temp-data.service.ts");

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

      var CropPage = /*#__PURE__*/function () {
        function CropPage(modal, loadingCtrl, service) {
          _classCallCheck(this, CropPage);

          this.modal = modal;
          this.loadingCtrl = loadingCtrl;
          this.service = service;
          this.canvasRotate = 0;
        }

        _createClass(CropPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Fetching Image...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      this.loading.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "imageCropped",
          value: function imageCropped(event) {
            this.croppedImage = event.base64;
          }
        }, {
          key: "rotateRight",
          value: function rotateRight() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Rotating...'
                      });

                    case 2:
                      this.loading = _context2.sent;
                      this.loading.present();
                      this.canvasRotate++;

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "rotateLeft",
          value: function rotateLeft() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Rotating...'
                      });

                    case 2:
                      this.loading = _context3.sent;
                      this.loading.present();
                      this.canvasRotate--;

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "imageLoaded",
          value: function imageLoaded() {
            this.loading.dismiss();
          }
        }, {
          key: "crop",
          value: function crop() {
            if (this.flag == 1) {
              this.service.croppedImg = this.croppedImage;
            }

            if (this.flag == 2) {
              this.service.croppedImg1 = this.croppedImage;
            }

            this.croppedImage = null;
            this.imgTocrop = null;
            this.modal.dismiss();
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.modal.dismiss();
          }
        }]);

        return CropPage;
      }();

      CropPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }, {
          type: _temp_data_service__WEBPACK_IMPORTED_MODULE_2__["TempDataService"]
        }];
      };

      CropPage.propDecorators = {
        imgTocrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        flag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      CropPage = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-crop',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./crop.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/crop/crop.page.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./crop.page.scss */
        "./src/app/crop/crop.page.scss"))["default"]]
      })], CropPage);
      /***/
    },

    /***/
    "./src/app/edit/edit-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/edit/edit-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: EditPageRoutingModule */

    /***/
    function srcAppEditEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function () {
        return EditPageRoutingModule;
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


      var _edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit.page */
      "./src/app/edit/edit.page.ts");

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
        component: _edit_page__WEBPACK_IMPORTED_MODULE_2__["EditPage"]
      }];

      var EditPageRoutingModule = function EditPageRoutingModule() {
        _classCallCheck(this, EditPageRoutingModule);
      };

      EditPageRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], EditPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/edit/edit.module.ts":
    /*!*************************************!*\
      !*** ./src/app/edit/edit.module.ts ***!
      \*************************************/

    /*! exports provided: EditPageModule */

    /***/
    function srcAppEditEditModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPageModule", function () {
        return EditPageModule;
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


      var _edit_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-routing.module */
      "./src/app/edit/edit-routing.module.ts");
      /* harmony import */


      var _edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit.page */
      "./src/app/edit/edit.page.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var EditPageModule = function EditPageModule() {
        _classCallCheck(this, EditPageModule);
      };

      EditPageModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _edit_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditPageRoutingModule"]],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_5__["EditPage"]]
      })], EditPageModule);
      /***/
    },

    /***/
    "./src/app/edit/edit.page.scss":
    /*!*************************************!*\
      !*** ./src/app/edit/edit.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppEditEditPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "hr {\n  border-top: 1px solid #dedede;\n}\n\nion-content {\n  background-color: white;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-radio {\n  margin-left: 10px;\n  border-color: white;\n}\n\n.chipone {\n  background: #4238cc;\n}\n\n.chiptwo {\n  background: #d32929;\n}\n\n.chipthree {\n  background: #d9eb3e;\n}\n\n.chipfour {\n  background: #36a836;\n}\n\n.chiplabel {\n  color: white;\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 100%;\n  max-width: 500px;\n  max-height: 500px;\n}\n\n.flip-box {\n  text-align: center;\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #f1f1f1;\n  perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n}\n\n/* This container is needed to position the front and back side */\n\n.flip-box-inner {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n/* Do an horizontal flip when you move the mouse over the flip box container */\n\n.flip-box .flip-box-inner {\n  transform: rotateY(180deg);\n}\n\n/* Position the front and back side */\n\n.flip-box-front {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n\n.flip-box-back {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n\n/* Style the front side (fallback if image is missing) */\n\n/* Style the back side */\n\n.flip-box-back {\n  transform: rotateY(180deg);\n}\n\nion-fab-button {\n  height: 40px;\n  width: 40px;\n  margin-left: 67%;\n  margin-top: -20px;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n/* img {\n   border: 5px solid rgb(116, 116, 116);\n }*/\n\n.labelsize {\n  font-size: large !important;\n}\n\nion-radio::part(container) {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #6815ec;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUU7RUFHRSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBRUk7RUFDRSxhQUFBO0FBQU47O0FBSUU7RUFFRSxpQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBT0U7RUFFRixtQkFBQTtBQUxBOztBQVNFO0VBRUYsbUJBQUE7QUFQQTs7QUFVRTtFQUVGLG1CQUFBO0FBUkE7O0FBV0U7RUFFRixtQkFBQTtBQVRBOztBQWNFO0VBRUYsWUFBQTtBQVpBOztBQWlCRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBZEo7O0FBaUJNO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUFxQixnREFBQTtBQWI3Qjs7QUFpQk0saUVBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FBZFI7O0FBaUJNLDhFQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUFkUjs7QUFpQk0scUNBQUE7O0FBQ0E7RUFFRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUFxQyxXQUFBO0VBQ3JDLDJCQUFBO0FBZFI7O0FBaUJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFBcUMsV0FBQTtFQUNyQywyQkFBQTtBQWJSOztBQWdCTSx3REFBQTs7QUFHQSx3QkFBQTs7QUFDQTtFQUVFLDBCQUFBO0FBaEJSOztBQW9CTTtFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0YsZ0JBQUE7RUFDQSxpQkFBQTtBQWxCTjs7QUF1Qk07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBcEJSOztBQXVCSzs7R0FBQTs7QUFPQztFQUVFLDJCQUFBO0FBekJSOztBQStCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQTdCUjs7QUFnQ007RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBN0JSOztBQWdDTTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUE3QlI7O0FBZ0NNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFFQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSx3QkFBQTtBQS9CUiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG5cclxuICBpb24tY29udGVudCB7XHJcbiAgXHJcbiAgICAvLyBvdmVyd3JpdGUgaW5saW5lIHN0eWxlcyAmIGhpZGluZyB0aGUgc2Nyb2xsYmFyXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9IFxyXG5cclxuICBpb24tcmFkaW9cclxuICB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNoaXBvbmVcclxuICB7XHJcbmJhY2tncm91bmQ6IHJnYig2NiwgNTYsIDIwNCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLmNoaXB0d29cclxuICB7XHJcbmJhY2tncm91bmQ6IHJnYigyMTEsIDQxLCA0MSk7XHJcblxyXG4gIH1cclxuICAuY2hpcHRocmVlXHJcbiAge1xyXG5iYWNrZ3JvdW5kOiByZ2IoMjE3LCAyMzUsIDYyKTtcclxuXHJcbiAgfVxyXG4gIC5jaGlwZm91clxyXG4gIHtcclxuYmFja2dyb3VuZDogcmdiKDU0LCAxNjgsIDU0KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLmNoaXBsYWJlbFxyXG4gIHtcclxuY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuICBcclxuICAgICAgLmZsaXAtYm94IHtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4OyAvKiBSZW1vdmUgdGhpcyBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgM0QgZWZmZWN0ICovXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIFRoaXMgY29udGFpbmVyIGlzIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xyXG4gICAgICAuZmxpcC1ib3gtaW5uZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4Oy8vMjAwcHhcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xyXG4gICAgICAuZmxpcC1ib3ggLmZsaXAtYm94LWlubmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogUG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cclxuICAgICAgLmZsaXAtYm94LWZyb250XHJcbiAgICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBTYWZhcmkgKi9cclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mbGlwLWJveC1iYWNrIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBTYWZhcmkgKi9cclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC8qIFN0eWxlIHRoZSBiYWNrIHNpZGUgKi9cclxuICAgICAgLmZsaXAtYm94LWJhY2sge1xyXG4gICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcblxyXG4gICAgICBpb24tZmFiLWJ1dHRvblxyXG4gICAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4Oy8vNDBwelxyXG4gICAgICAgIHdpZHRoOiA0MHB4Oy8vNDBweFxyXG4gICAgICBtYXJnaW4tbGVmdDogNjclOy8vMjYwcHhcclxuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgIC5yaXBwbGUtcGFyZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgLyogaW1nIHtcclxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTE2LCAxMTYsIDExNik7XHJcbiAgICAgIH0qL1xyXG5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgLmxhYmVsc2l6ZVxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZSFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIFxyXG5cclxuICAgICAgaW9uLXJhZGlvOjpwYXJ0KGNvbnRhaW5lcikge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1yYWRpbzo6cGFydChtYXJrKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tcmFkaW8ucmFkaW8tY2hlY2tlZDo6cGFydChjb250YWluZXIpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNjgxNWVjO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1yYWRpby5yYWRpby1jaGVja2VkOjpwYXJ0KG1hcmspIHtcclxuICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgXHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMnB4IDJweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICAgIFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgfVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/edit/edit.page.ts":
    /*!***********************************!*\
      !*** ./src/app/edit/edit.page.ts ***!
      \***********************************/

    /*! exports provided: EditPage */

    /***/
    function srcAppEditEditPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPage", function () {
        return EditPage;
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../image-view/image-view.page */
      "./src/app/image-view/image-view.page.ts");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _temp_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../temp-data.service */
      "./src/app/temp-data.service.ts");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _crop_crop_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../crop/crop.page */
      "./src/app/crop/crop.page.ts");

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

      var EditPage = /*#__PURE__*/function () {
        function EditPage(viewCtrl, camera, toastCtrl, loadingCtrl, navCtrl, service, firestore, actRoute) {
          var _this = this;

          _classCallCheck(this, EditPage);

          this.viewCtrl = viewCtrl;
          this.camera = camera;
          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.navCtrl = navCtrl;
          this.service = service;
          this.firestore = firestore;
          this.actRoute = actRoute;
          this.coin = {};
          this.chipflag = 0;
          this.deno = "1 Rupee";
          this.state = 'default'; // frontID='front/'+Math.random();
          //backID='back/'+Math.random();

          this.frontbtn = false;
          this.backbtn = false;
          this.coinref = {};
          this.newMetadata = {
            cacheControl: 'public,max-age=15552000'
          };
          this.flag = false;
          this.cameraoptions = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.galleryoptions = {
            quality: 20,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL
          };

          this.onSuccess = function (snapshot) {
            //this.currentImage = snapshot.downloadURL;
            firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(_this.coinref.front).getDownloadURL().then(function (response) {
              _this.coinref.frontUrl = response;

              _this.updateCoin(_this.coinref);
            })["catch"](function (error) {
              return console.log('error', error);
            });
          };

          this.onSuccess1 = function (snapshot) {
            //this.currentImage = snapshot.downloadURL;
            firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(_this.coinref.back).getDownloadURL().then(function (response) {
              _this.coinref.backUrl = response;

              _this.updateCoin(_this.coinref);
            })["catch"](function (error) {
              return console.log('error', error);
            });
          };

          this.onError = function (error) {
            console.log("error", error);
          };

          if (!firebase__WEBPACK_IMPORTED_MODULE_8__["apps"].length) {
            firebase__WEBPACK_IMPORTED_MODULE_8__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].FIREBASE_CONFIG);
          }

          this.id = this.actRoute.snapshot.paramMap.get("id");
        }

        _createClass(EditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.viewCtrl.dismiss();
            this.getPostById(this.id);
          }
        }, {
          key: "setPhotoOption",
          value: function setPhotoOption(x) {
            if (x == 1) {
              this.options = this.cameraoptions;
            }

            if (x == 2) {
              this.options = this.galleryoptions;
            }
          }
        }, {
          key: "SubmitForm",
          value: function SubmitForm(x) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var task, task1;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      x.mint = this.chipname; //x.front ='front/'+Math.random();
                      //x.back ='back/'+Math.random();

                      this.frontID = x.front;
                      this.backID = x.back;
                      x.year = x.year.substring(0, 4);
                      this.coinref = x;

                      if (!(this.frontbtn == true && this.backbtn == false)) {
                        _context4.next = 13;
                        break;
                      }

                      console.log("if1");
                      task = this.uploadFront(x.front);
                      _context4.next = 10;
                      return this.loadingCtrl.create({
                        message: 'Please wait...'
                      });

                    case 10:
                      this.loading = _context4.sent;
                      this.loading.present();
                      task.then(this.onSuccess, this.onError);

                    case 13:
                      if (this.backbtn == true && this.frontbtn == false) {
                        console.log("if2");
                        task1 = this.uploadBack(x.back);
                        task1.then(this.onSuccess1, this.onError);
                      }

                      if (!(this.frontbtn == false && this.backbtn == false)) {
                        _context4.next = 21;
                        break;
                      }

                      console.log("if3");
                      _context4.next = 18;
                      return this.loadingCtrl.create({
                        message: 'Please wait...'
                      });

                    case 18:
                      this.loading = _context4.sent;
                      this.loading.present();
                      this.updateCoin(this.coinref);

                    case 21:
                      if (this.frontbtn == true && this.backbtn == true) {
                        console.log("if4");
                        task = this.uploadFront(x.front);
                        task.then(this.onSuccess, this.onError);
                        task1 = this.uploadBack(x.back);
                        task1.then(this.onSuccess1, this.onError);
                      }

                      this.coin = x;

                      if (this.formValidation()) {
                        // console.log(this.coinsCheck);
                        console.log(this.coinref);
                        console.log(this.coinref.frontUrl);
                        console.log(this.coinref.backUrl); // this.addCoin(x);
                      }

                    case 24:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getCameraFront",
          value: function getCameraFront() {
            var _this2 = this;

            this.frontbtn = true;
            this.selectedPhoto = null;
            this.selectedPhoto1 = null;
            this.camera.getPicture(this.options).then(function (imageData) {
              return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        this.imgURL = 'data:image/jpeg;base64,' + imageData;
                        _context5.next = 3;
                        return this.loadingCtrl.create({
                          message: 'Please wait...'
                        });

                      case 3:
                        this.loading = _context5.sent;
                        this.loading.present();
                        this.selectedPhoto = this.dataURItoBlob(this.imgURL);
                        this.cropModal(this.selectedPhoto, 1).then(this.selectedPhoto = this.service.croppedImg);
                        this.loading.dismiss();

                      case 8:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            }, function (err) {
              console.log('error', err);
            });
          }
        }, {
          key: "getCameraBack",
          value: function getCameraBack() {
            var _this3 = this;

            this.backbtn = true;
            this.selectedPhoto = null;
            this.selectedPhoto1 = null;
            this.camera.getPicture(this.options).then(function (imageData) {
              return __awaiter(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        this.imgURL1 = 'data:image/jpeg;base64,' + imageData;
                        _context6.next = 3;
                        return this.loadingCtrl.create({
                          message: 'Please wait...'
                        });

                      case 3:
                        this.loading = _context6.sent;
                        this.loading.present();
                        this.selectedPhoto1 = this.dataURItoBlob(this.imgURL1);
                        this.cropModal(this.selectedPhoto1, 2).then(this.selectedPhoto1 = this.service.croppedImg1);
                        this.loading.dismiss();

                      case 8:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            }, function (err) {
              console.log('error', err);
            });
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            // codej adapted from:
            //  http://stackoverflow.com/questions/33486352/
            //cant-upload-image-to-aws-s3-from-ionic-camera
            var binary = atob(dataURI.split(',')[1]);
            var array = [];

            for (var i = 0; i < binary.length; i++) {
              array.push(binary.charCodeAt(i));
            }

            return new Blob([new Uint8Array(array)], {
              type: 'image/jpeg'
            });
          }
        }, {
          key: "uploadFront",
          value: function uploadFront(x) {
            if (this.selectedPhoto && this.formValidation()) {
              var uploadTask = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(x).put(this.dataURItoBlob(this.selectedPhoto), this.newMetadata);
            }

            return uploadTask; //this.loading.dismiss();
            //uploadTask.then(this.onSuccess, this.onError);
          }
        }, {
          key: "uploadBack",
          value: function uploadBack(x) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var uploadTask;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context7.sent;
                      this.loading.present();

                      if (this.selectedPhoto1 && this.formValidation()) {
                        uploadTask = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(x).put(this.dataURItoBlob(this.selectedPhoto1), this.newMetadata);
                      } //this.loading.dismiss();


                      return _context7.abrupt("return", uploadTask);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "cropModal",
          value: function cropModal(x, y) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var modal;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.viewCtrl.create({
                        component: _crop_crop_page__WEBPACK_IMPORTED_MODULE_10__["CropPage"],
                        componentProps: {
                          'imgTocrop': x,
                          'flag': y
                        }
                      });

                    case 2:
                      modal = _context8.sent;
                      _context8.next = 5;
                      return modal.present();

                    case 5:
                      return _context8.abrupt("return", _context8.sent);

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "chipSelect",
          value: function chipSelect(x, y) {
            if (x == 1) {
              this.chipflag = 1;
              this.chipname = y;
            }

            if (x == 2) {
              this.chipflag = 2;
              this.chipname = y;
            }

            if (x == 3) {
              this.chipflag = 3;
              this.chipname = y;
            }

            if (x == 4) {
              this.chipflag = 4;
              this.chipname = y;
            }
          }
        }, {
          key: "flip",
          value: function flip() {
            this.state = this.state === 'default' ? 'rotated' : 'default';
            this.flag = !this.flag;
            console.log(this.flag);
          }
        }, {
          key: "show",
          value: function show() {
            this.selectedPhoto = this.service.croppedImg;
            this.selectedPhoto1 = this.service.croppedImg1;
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.service.croppedImg = null;
            this.service.croppedImg1 = null;
            this.navCtrl.navigateRoot("home");
          }
        }, {
          key: "getPostById",
          value: function getPostById(id) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this4 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      //show loader
                      loader = this.loadingCtrl.create({
                        message: "Please Wait..."
                      });
                      _context9.next = 3;
                      return loader;

                    case 3:
                      _context9.sent.present();

                      this.firestore.doc("coins/" + id).valueChanges().subscribe(function (data) {
                        _this4.coin.name = data["name"];
                        _this4.coin.year = data["year"];
                        _this4.coin.mint = data["mint"];
                        _this4.coin.price = data["price"];
                        _this4.coin.quantity = data["quantity"];
                        _this4.coin.deno = data["deno"];
                        _this4.coin.front = data["front"];
                        _this4.coin.back = data["back"];
                        _this4.coin.frontUrl = data["frontUrl"];
                        _this4.coin.backUrl = data["backUrl"];

                        if (_this4.coin.mint == 'Dot') {
                          _this4.chipflag = 1;
                          _this4.chipname = "Dot";
                        }

                        if (_this4.coin.mint == 'Diamond') {
                          _this4.chipflag = 2;
                          _this4.chipname = "Diamond";
                        }

                        if (_this4.coin.mint == 'Star') {
                          _this4.chipflag = 3;
                          _this4.chipname = "Star";
                        }

                        if (_this4.coin.mint == 'Blank') {
                          _this4.chipflag = 4;
                          _this4.chipname = "Blank";
                        }

                        _this4.selectedPhoto = _this4.coin.frontUrl;
                        _this4.selectedPhoto1 = _this4.coin.backUrl;
                        _this4.service.croppedImg = _this4.selectedPhoto;
                        _this4.service.croppedImg1 = _this4.selectedPhoto1;
                      }); // dismiss loader

                      _context9.next = 7;
                      return loader;

                    case 7:
                      _context9.sent.dismiss();

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "updateCoin",
          value: function updateCoin(coin) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!this.formValidation()) {
                        _context10.next = 7;
                        break;
                      }

                      _context10.next = 3;
                      return this.firestore.doc("coins/" + this.id).update(coin);

                    case 3:
                      this.service.croppedImg = null;
                      this.service.croppedImg1 = null; //dismiss loader

                      this.loading.dismiss(); //redirect to home page

                      this.navCtrl.navigateRoot("home");

                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "formValidation",
          value: function formValidation() {
            var i;

            if (!this.coin.name) {
              this.showToast("Enter Coin name");
              return false;
            }

            if (!this.coin.deno) {
              this.showToast("Select Denomination");
              return false;
            }

            if (!this.coin.quantity) {
              this.showToast("Enter Quantity");
              return false;
            }

            if (!this.coin.year) {
              this.showToast("Enter Year");
              return false;
            }

            if (!this.coin.mint) {
              this.showToast("Choose Mint");
              return false;
            }

            if (!this.coin.price) {
              this.showToast("Enter Price");
              return false;
            }

            if (!this.selectedPhoto) {
              this.showToast("Upload front coin image");
              return false;
            }

            if (!this.selectedPhoto1) {
              this.showToast("Upload back coin image");
              return false;
            }

            for (i = 0; i < this.service.coinData.length; i++) {
              if (this.service.coinData[i].name == this.coin.name && this.service.coinData[i].deno == this.coin.deno && this.service.coinData[i].year == this.coin.year && this.service.coinData[i].mint == this.coin.mint && this.service.coinData[i].id != this.id) {
                console.log(this.service.coinData[i].id + " " + this.id);
                this.showToast("You already have this coin");
                return false;
              }
            }

            return true;
          }
        }, {
          key: "showToast",
          value: function showToast(message) {
            this.toastCtrl.create({
              message: message,
              duration: 3000,
              position: 'top'
            }).then(function (toastData) {
              return toastData.present();
            });
          }
        }, {
          key: "presentModal",
          value: function presentModal(x) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var modal;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.viewCtrl.create({
                        component: _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_3__["ImageViewPage"],
                        cssClass: 'my-custom-class',
                        componentProps: {
                          imgurl: x
                        }
                      });

                    case 2:
                      modal = _context11.sent;
                      _context11.next = 5;
                      return modal.present();

                    case 5:
                      return _context11.abrupt("return", _context11.sent);

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return EditPage;
      }();

      EditPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }, {
          type: _temp_data_service__WEBPACK_IMPORTED_MODULE_7__["TempDataService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      };

      EditPage = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./edit.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html"))["default"],
        animations: [// Each unique animation requires its own trigger. The first argument of the trigger function is the name
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rotatedState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          transform: 'rotate(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          transform: 'rotate(360deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-in'))])],
        styles: [__importDefault(__webpack_require__(
        /*! ./edit.page.scss */
        "./src/app/edit/edit.page.scss"))["default"]]
      })], EditPage);
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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
            var _this5 = this;

            this.storage.get('front').then(function (photos) {
              _this5.photosF = photos || [];
            });
            this.storage.get('back').then(function (photos) {
              _this5.photosB = photos || [];
            });
          }
        }]);

        return TempDataService;
      }();

      TempDataService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]
        }];
      };

      TempDataService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
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
//# sourceMappingURL=edit-edit-module-es5.js.map