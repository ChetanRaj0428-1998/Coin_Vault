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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title><strong style=\"text-align:center ;\">Crop Image </strong> <ion-icon style=\"margin: 5px;font-weight: 500;\" name=\"crop-sharp\"></ion-icon></ion-title>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <image-cropper *ngIf=\"imgTocrop\"\n  [imageFile]=\"imgTocrop\"\n  [maintainAspectRatio]=\"true\"\n  [aspectRatio]=\" 2 / 2\"\n  [roundCropper]=\"true\"\n  [imageQuality]=\"100\"\n  [canvasRotation]=\"canvasRotate\"\n  (imageLoaded)=\"imageLoaded()\"\n  format=\"jpeg\"\n  (imageCropped)=\"imageCropped($event)\"\n \n></image-cropper>\n<ion-grid *ngIf=\"imgTocrop\" style=\"position: fixed;\">\n  <ion-row>\n    <ion-col>\n      \n<ion-button color=\"medium\" expand=\"full\"   (click)=\"rotateRight()\">Rotate Right <img src=\"assets/RR.png\" alt=\"\" ></ion-button>\n    </ion-col>\n  \n    <ion-col>\n      <ion-button  color=\"light\" expand=\"full\"   (click)=\"rotateLeft()\">Rotate Left <img src=\"assets/LL.png\" alt=\"\" ></ion-button>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-button *ngIf=\"imgTocrop\" expand=\"full\" style=\"text-align: center;\" color=\"danger\"  (click)=\"cancel()\">Cancel</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button *ngIf=\"imgTocrop\" expand=\"full\" style=\"text-align: center;\" color=\"primary\"  (click)=\"crop()\">Crop</ion-button>\n    </ion-col>\n    \n  </ion-row>\n</ion-grid>\n\n\n</ion-content>\n";
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title style=\"text-align:center ;\">\n     <strong>\n  Update Coin Details    \n </strong> \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n<form  #f=\"ngForm\">\n\n  <ion-item>\n    <ion-label class=\"labelsize\" position=\"floating\">Name of the coin</ion-label>\n    <ion-input [(ngModel)]=\"coin.name\" name=\"coin.name\" type=\"text\" spellcheck=\"true\" clear-input=\"true\"></ion-input>\n  </ion-item>\n  <h4 style=\"margin-left:15px;\">Denomination</h4>\n  <ion-select value=\"1 Rupee\" [(ngModel)]=\"coin.deno\" name=\"coin.deno\">\n  <ion-select-option value=\"1 Paise\">1 Paise</ion-select-option>\n  <ion-select-option value=\"2 Paise\">2 Paise</ion-select-option>\n  <ion-select-option value=\"3 Paise\">3 Paise</ion-select-option>\n  <ion-select-option value=\"5 Paise\">5 Paise</ion-select-option>\n  <ion-select-option value=\"10 Paise\">10 Paise</ion-select-option>\n  <ion-select-option value=\"20 Paise\">20 Paise</ion-select-option>\n  <ion-select-option value=\"25 Paise\">25 Paise</ion-select-option>\n  <ion-select-option value=\"50 Paise\">50 Paise</ion-select-option>\n        <ion-select-option value=\"1 Rupee\">1 Rupee</ion-select-option>\n        <ion-select-option value=\"2 Rupees\">2 Rupees</ion-select-option>\n        <ion-select-option value=\"5 Rupees\">5 Rupees</ion-select-option>\n        <ion-select-option value=\"10Rupees\">10 Rupees</ion-select-option>\n     \n      </ion-select>\n  <hr>\n  <ion-item>\n    <ion-label class=\"labelsize\" position=\"fixed\">Quantity :</ion-label>\n    <ion-input [(ngModel)]=\"coin.quantity\" name=\"coin.quantity\" inputmode=\"numeric\"></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n  <h4>Year</h4>\n  </ion-item>\n  <ion-datetime   [(ngModel)]=\"coin.year\" name=\"year\"  display-format=\"YYYY\" picker-format=\"YYYY\" placeholder=\"Select Year\"></ion-datetime>\n  <hr>\n\n    <ion-item lines=\"none\"> \n      <h4>Mint</h4>\n      </ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-chip color=\"primary\" [class.chipone]=\"chipflag==1\" (click)=\"chipSelect(1, 'Dot')\">\n              <ion-icon *ngIf=\"chipflag!=1\" name=\"ellipse\"  color=\"dark\"></ion-icon>\n              <ion-icon *ngIf=\"chipflag==1\" name=\"ellipse\"  color=\"light\"></ion-icon>\n              <ion-label [class.chiplabel]=\"chipflag==1\"><strong>Noida</strong></ion-label>\n            </ion-chip>\n            <ion-chip color=\"danger\" [class.chiptwo]=\"chipflag==2\" (click)=\"chipSelect(2, 'Diamond')\">\n              <img *ngIf=\"chipflag!=2\" src=\"https://cdn-icons-png.flaticon.com/512/445/445102.png\" width=\"20px\"  height=\"25px\" style=\"margin-right:5px;\">\n              <img *ngIf=\"chipflag==2\" src=\"/assets/flat-diamond-icon-700156.png\" width=\"20px\"  height=\"20px\" style=\"margin-right:5px;\">\n              <ion-label [class.chiplabel]=\"chipflag==2\"><strong>Bombay</strong></ion-label>\n            </ion-chip>\n          </ion-col>\n   \n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-chip color=\"warning\" [class.chipthree]=\"chipflag==3\" (click)=\"chipSelect(3, 'Star')\">\n              <ion-icon *ngIf=\"chipflag!=3\" name=\"star\" color=\"dark\"></ion-icon>\n              <ion-icon *ngIf=\"chipflag==3\" name=\"star\" color=\"light\"></ion-icon>\n              <ion-label [class.chiplabel]=\"chipflag==3\"><strong>Hyderabad</strong></ion-label>\n            </ion-chip>\n            <ion-chip color=\"success\" [class.chipfour]=\"chipflag==4\" (click)=\"chipSelect(4, 'Blank')\">\n              <ion-icon *ngIf=\"chipflag!=4\"  name=\"close-circle\" color=\"dark\"></ion-icon>\n              <ion-icon *ngIf=\"chipflag==4\"  name=\"close-circle\" color=\"light\"></ion-icon>\n              <ion-label [class.chiplabel]=\"chipflag==4\"> <strong>Calcutta</strong></ion-label>\n            </ion-chip>\n          \n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  <hr>\n  <!--\n<h4 style=\"margin-left:15px;\">Price Range <br>  </h4>\n  <h4> <strong>₹</strong> {{val.lower}} <span *ngIf=\"val.upper>0\">-</span> {{val.upper}}</h4>\n  <ion-range style=\"padding-top:10px;\" [(ngModel)]=\"val\"  name=\"price\" min=\"1\" max=\"1000\" value=\"0\"   step=\"1\" pin=\"true\"  ticks=\"true\"  id=\"dual-range\" dual-knobs color=\"dark\">\n  \n  </ion-range>\n  \n  -->\n  <ion-item lines=\"none\">\n    <ion-label class=\"labelsize\" position=\"fixed\">Price ₹:</ion-label>\n    <ion-input [(ngModel)]=\"coin.price\" name=\"coin.price\" inputmode=\"numeric\"></ion-input>\n \n  </ion-item>\n   <hr>\n  <ion-radio-group >\n      \n    <h4 style=\"margin-left:15px;\">Coin Image</h4>\n  <ion-grid>\n  <ion-row>\n      <ion-col>\n                \n  <ion-label for=\"camera\" >Use <br> Camera </ion-label>\n  <ion-radio  (ionFocus)=\"setPhotoOption(1)\" name=\"camera\"  value=\"camera\" class=\"form-control\" ></ion-radio>\n  \n  </ion-col>\n  <ion-col>\n    <ion-label for=\"gallery\" >Choose <br>from Gallery</ion-label>\n    <ion-radio (ionFocus)=\"setPhotoOption(2)\"  name=\"gallery\"   value=\"gallery\" class=\"form-control\" ></ion-radio>\n   </ion-col>\n   </ion-row>\n   </ion-grid>\n   \n     \n  \n  </ion-radio-group>\n  <ion-grid>\n    <ion-row>\n      <ion-col><ion-button color=\"dark\" size=\"small\" (click)=\"getCameraFront()\"><strong>Front Side</strong></ion-button></ion-col>\n      <ion-col><ion-button color=\"light\" size=\"small\" (click)=\"getCameraBack()\"><strong>Back Side</strong></ion-button>\n      </ion-col>\n  \n      </ion-row>\n      <ion-row>\n        <ion-col>\n      <ion-button color=\"medium\" size=\"small\" (click)=\"show()\"><strong>Show Image</strong></ion-button>\n\n        </ion-col>\n      </ion-row>\n      <div *ngIf=\"selectedPhoto && selectedPhoto1 \">\n        <!--\n          <ion-button color=\"warning\" style=\"margin-left: 50px;\" (click)=\"flip()\" >\n          Flip the coin\n        </ion-button>\n        -->\n        <div [class.flip-box]=\"flag\">\n          <div class=\"flip-box-inner \">\n            <div class=\"flip-box-front \">\n                <img src=\"{{selectedPhoto}}\" height=\"200\" width=\"200\"  class=\"center\" (click)=\"presentModal(selectedPhoto)\">    \n            </div>\n            <div class=\"flip-box-back\">\n              <img src=\"{{selectedPhoto1}}\" height=\"200\" width=\"200\"  class=\"center\" (click)=\"presentModal(selectedPhoto1)\"> \n            </div>\n          </div>\n          \n        </div>\n        <ion-fab-button [@rotatedState]='state' color=\"warning\" (click)=\"flip()\">\n          <ion-icon name=\"git-compare-outline\"></ion-icon>               \n           </ion-fab-button>\n      </div>\n      \n    \n    </ion-grid>\n\n    \n \n  \n  \n  <ion-grid >\n    <ion-row >\n      <ion-col>\n      <ion-button color=\"danger\" expand=\"full\" (click)=\"dismiss()\">Cancel</ion-button>\n      </ion-col>\n      <ion-col style=\"z-index: 1;\">\n      <ion-button  color=\"success\" expand=\"full\" (click)=\"SubmitForm(coin)\">Update</ion-button>\n      </ion-col>\n    \n    </ion-row>\n    </ion-grid>\n\n</form>\n  \n</ion-content>\n";
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


      __webpack_exports__["default"] = "ion-spinner {\n  transform: scale(6);\n  left: 200px;\n  right: 200px;\n  top: 300px;\n  bottom: 200px;\n}\n\nimage-cropper {\n  height: 300px;\n}\n\nimg {\n  height: 20px;\n  width: 20px;\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JvcC9jcm9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBRUksYUFBQTtBQUFKOztBQVFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDRyxpQkFBQTtBQUxQIiwiZmlsZSI6InNyYy9hcHAvY3JvcC9jcm9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zcGlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDYpO1xuICAgIGxlZnQ6IDIwMHB4O1xuICAgIHJpZ2h0OiAyMDBweDtcbiAgICB0b3A6IDMwMHB4O1xuICAgIGJvdHRvbTogMjAwcHg7XG59XG5cbmltYWdlLWNyb3BwZXJcbntcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgXG4gIFxufVxuXG5cblxuXG5pbWd7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG5cbiJdfQ== */";
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


      var _temp_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../temp-data.service */
      "./src/app/temp-data.service.ts");

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _temp_data_service__WEBPACK_IMPORTED_MODULE_3__["TempDataService"]
        }];
      };

      CropPage.propDecorators = {
        imgTocrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        flag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      CropPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./crop.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/crop/crop.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
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


      var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit.page */
      "./src/app/edit/edit.page.ts");

      var routes = [{
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
      }];

      var EditPageRoutingModule = function EditPageRoutingModule() {
        _classCallCheck(this, EditPageRoutingModule);
      };

      EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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


      var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-routing.module */
      "./src/app/edit/edit-routing.module.ts");
      /* harmony import */


      var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit.page */
      "./src/app/edit/edit.page.ts");

      var EditPageModule = function EditPageModule() {
        _classCallCheck(this, EditPageModule);
      };

      EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
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


      __webpack_exports__["default"] = "hr {\n  border-top: 1px solid #dedede;\n}\n\nion-content {\n  background-color: white;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-radio {\n  margin-left: 10px;\n}\n\n.chipone {\n  background: #4238cc;\n}\n\n.chiptwo {\n  background: #d32929;\n}\n\n.chipthree {\n  background: #d9eb3e;\n}\n\n.chipfour {\n  background: #36a836;\n}\n\n.chiplabel {\n  color: white;\n}\n\n.center {\n  display: block;\n  margin-left: 60px;\n  margin-right: 30px;\n  border-radius: 100%;\n}\n\n.flip-box {\n  background-color: transparent;\n  width: 200px;\n  height: 200px;\n  border: 1px solid #f1f1f1;\n  perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n}\n\n/* This container is needed to position the front and back side */\n\n.flip-box-inner {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n/* Do an horizontal flip when you move the mouse over the flip box container */\n\n.flip-box .flip-box-inner {\n  transform: rotateY(180deg);\n}\n\n/* Position the front and back side */\n\n.flip-box-front, .flip-box-back {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n\n/* Style the front side (fallback if image is missing) */\n\n/* Style the back side */\n\n.flip-box-back {\n  transform: rotateY(180deg);\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n/* img {\n   border: 5px solid rgb(116, 116, 116);\n }*/\n\n.labelsize {\n  font-size: large !important;\n}\n\nion-fab-button {\n  height: 40px;\n  width: 40px;\n  margin-left: 230px;\n  margin-top: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUU7RUFHRSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBRUk7RUFDRSxhQUFBO0FBQU47O0FBSUU7RUFFRSxpQkFBQTtBQUZKOztBQU9FO0VBRUYsbUJBQUE7QUFMQTs7QUFTRTtFQUVGLG1CQUFBO0FBUEE7O0FBVUU7RUFFRixtQkFBQTtBQVJBOztBQVdFO0VBRUYsbUJBQUE7QUFUQTs7QUFjRTtFQUVGLFlBQUE7QUFaQTs7QUFpQkU7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBa0JNO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFBcUIsZ0RBQUE7QUFkN0I7O0FBa0JNLGlFQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQWZSOztBQWtCTSw4RUFBQTs7QUFDQTtFQUNFLDBCQUFBO0FBZlI7O0FBa0JNLHFDQUFBOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFBcUMsV0FBQTtFQUNyQywyQkFBQTtBQWRSOztBQWlCTSx3REFBQTs7QUFHQSx3QkFBQTs7QUFDQTtFQUVFLDBCQUFBO0FBakJSOztBQXFCTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsQlI7O0FBcUJLOztHQUFBOztBQU9DO0VBRUUsMkJBQUE7QUF2QlI7O0FBNkJBO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDRixrQkFBQTtFQUNBLGlCQUFBO0FBM0JBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZGVkZTtcbn1cblxuICBpb24tY29udGVudCB7XG4gIFxuICAgIC8vIG92ZXJ3cml0ZSBpbmxpbmUgc3R5bGVzICYgaGlkaW5nIHRoZSBzY3JvbGxiYXJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfSBcblxuICBpb24tcmFkaW9cbiAge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIFxuICB9XG5cbiAgXG4gIC5jaGlwb25lXG4gIHtcbmJhY2tncm91bmQ6IHJnYig2NiwgNTYsIDIwNCk7XG5cbiAgfVxuXG4gIC5jaGlwdHdvXG4gIHtcbmJhY2tncm91bmQ6IHJnYigyMTEsIDQxLCA0MSk7XG5cbiAgfVxuICAuY2hpcHRocmVlXG4gIHtcbmJhY2tncm91bmQ6IHJnYigyMTcsIDIzNSwgNjIpO1xuXG4gIH1cbiAgLmNoaXBmb3VyXG4gIHtcbmJhY2tncm91bmQ6IHJnYig1NCwgMTY4LCA1NCk7XG5cbiAgfVxuXG5cbiAgLmNoaXBsYWJlbFxuICB7XG5jb2xvcjogd2hpdGU7XG4gIH1cblxuXG5cbiAgLmNlbnRlciB7XG4gICBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5mbGlwLWJveCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7IC8qIFJlbW92ZSB0aGlzIGlmIHlvdSBkb24ndCB3YW50IHRoZSAzRCBlZmZlY3QgKi9cbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIFRoaXMgY29udGFpbmVyIGlzIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuICAgICAgLmZsaXAtYm94LWlubmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xuICAgICAgLmZsaXAtYm94IC5mbGlwLWJveC1pbm5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuICAgICAgLmZsaXAtYm94LWZyb250LCAuZmxpcC1ib3gtYmFjayB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIFNhZmFyaSAqL1xuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xuICAgICAgXG4gICAgICBcbiAgICAgIC8qIFN0eWxlIHRoZSBiYWNrIHNpZGUgKi9cbiAgICAgIC5mbGlwLWJveC1iYWNrIHtcbiAgICAgICBcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB9XG4gICAgICBcbiAgICBcbiAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIFxuICAgICAvKiBpbWcge1xuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTE2LCAxMTYsIDExNik7XG4gICAgICB9Ki9cblxuICAgICAgXG4gICAgICBcbiAgICAgICAgICAgIFxuICAgICAgLmxhYmVsc2l6ZVxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IGxhcmdlIWltcG9ydGFudDtcbiAgICAgIH1cblxuXG4gIFxuXG5pb24tZmFiLWJ1dHRvblxue1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xubWFyZ2luLWxlZnQ6IDIzMHB4O1xubWFyZ2luLXRvcDogLTIwcHg7XG59XG5cblxuIl19 */";
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../image-view/image-view.page */
      "./src/app/image-view/image-view.page.ts");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _temp_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../temp-data.service */
      "./src/app/temp-data.service.ts");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _crop_crop_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../crop/crop.page */
      "./src/app/crop/crop.page.ts");

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
            firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref().child(_this.coinref.front).getDownloadURL().then(function (response) {
              _this.coinref.frontUrl = response;

              _this.updateCoin(_this.coinref);
            })["catch"](function (error) {
              return console.log('error', error);
            });
          };

          this.onSuccess1 = function (snapshot) {
            //this.currentImage = snapshot.downloadURL;
            firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref().child(_this.coinref.back).getDownloadURL().then(function (response) {
              _this.coinref.backUrl = response;

              _this.updateCoin(_this.coinref);
            })["catch"](function (error) {
              return console.log('error', error);
            });
          };

          this.onError = function (error) {
            console.log("error", error);
          };

          if (!firebase__WEBPACK_IMPORTED_MODULE_9__["apps"].length) {
            firebase__WEBPACK_IMPORTED_MODULE_9__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FIREBASE_CONFIG);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
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
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
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
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
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
              var uploadTask = firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref().child(x).put(this.dataURItoBlob(this.selectedPhoto), this.newMetadata);
            }

            return uploadTask; //this.loading.dismiss();
            //uploadTask.then(this.onSuccess, this.onError);
          }
        }, {
          key: "uploadBack",
          value: function uploadBack(x) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
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
                        uploadTask = firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref().child(x).put(this.dataURItoBlob(this.selectedPhoto1), this.newMetadata);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var modal;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.viewCtrl.create({
                        component: _crop_crop_page__WEBPACK_IMPORTED_MODULE_11__["CropPage"],
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var modal;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.viewCtrl.create({
                        component: _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_4__["ImageViewPage"],
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _temp_data_service__WEBPACK_IMPORTED_MODULE_8__["TempDataService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html"))["default"],
        animations: [// Each unique animation requires its own trigger. The first argument of the trigger function is the name
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('rotatedState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'rotate(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'rotate(360deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms ease-in'))])],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
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
//# sourceMappingURL=edit-edit-module-es5.js.map