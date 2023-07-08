(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-coin-add-coin-module~filter-filter-module~home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-coin/add-coin.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-coin/add-coin.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-title style=\"text-align: center;\">\r\n     <strong>\r\n      Add New Coin\r\n     </strong> \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content >\r\n<form  #f=\"ngForm\">\r\n\r\n  <ion-item>\r\n    <ion-label class=\"labelsize\" position=\"floating\">Name of the coin</ion-label>\r\n    <ion-input [(ngModel)]=\"coin.name\" name=\"coin.name\" type=\"text\" spellcheck=\"true\" clear-input=\"true\"></ion-input>\r\n  </ion-item>\r\n  <h4 style=\"margin-left:15px;\">Denomination</h4>\r\n  <ion-select value=\"1 Rupee\" [(ngModel)]=\"coin.deno\" name=\"coin.deno\">\r\n  <ion-select-option value=\"1 Paise\">1 Paise</ion-select-option>\r\n  <ion-select-option value=\"2 Paise\">2 Paise</ion-select-option>\r\n  <ion-select-option value=\"3 Paise\">3 Paise</ion-select-option>\r\n  <ion-select-option value=\"5 Paise\">5 Paise</ion-select-option>\r\n  <ion-select-option value=\"10 Paise\">10 Paise</ion-select-option>\r\n  <ion-select-option value=\"20 Paise\">20 Paise</ion-select-option>\r\n  <ion-select-option value=\"25 Paise\">25 Paise</ion-select-option>\r\n  <ion-select-option value=\"50 Paise\">50 Paise</ion-select-option>\r\n        <ion-select-option value=\"1 Rupee\">1 Rupee</ion-select-option>\r\n        <ion-select-option value=\"2 Rupees\">2 Rupees</ion-select-option>\r\n        <ion-select-option value=\"5 Rupees\">5 Rupees</ion-select-option>\r\n        <ion-select-option value=\"10 Rupees\">10 Rupees</ion-select-option>\r\n     \r\n      </ion-select>\r\n  <hr>\r\n  <ion-item>\r\n    <ion-label class=\"labelsize\" position=\"fixed\">Quantity :</ion-label>\r\n    <ion-input [(ngModel)]=\"coin.quantity\" name=\"coin.quantity\" inputmode=\"numeric\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n  <h4>Year</h4>\r\n  </ion-item>\r\n  <ion-datetime   [(ngModel)]=\"coin.year\" name=\"year\"  display-format=\"YYYY\" picker-format=\"YYYY\" placeholder=\"Select Year\"></ion-datetime>\r\n  <hr>\r\n\r\n    <ion-item lines=\"none\"> \r\n      <h4>Mint</h4>\r\n      </ion-item>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-chip color=\"primary\" [class.chipone]=\"chipflag==1\" (click)=\"chipSelect(1, 'Dot')\">\r\n              <ion-icon *ngIf=\"chipflag!=1\" name=\"ellipse\"  color=\"dark\"></ion-icon>\r\n              <ion-icon *ngIf=\"chipflag==1\" name=\"ellipse\"  color=\"light\"></ion-icon>\r\n              <ion-label [class.chiplabel]=\"chipflag==1\"><strong>Noida</strong></ion-label>\r\n            </ion-chip>\r\n            <ion-chip color=\"danger\" [class.chiptwo]=\"chipflag==2\" (click)=\"chipSelect(2, 'Diamond')\">\r\n              <img *ngIf=\"chipflag!=2\" src=\"https://cdn-icons-png.flaticon.com/512/445/445102.png\" width=\"20px\"  height=\"25px\" style=\"margin-right:5px;\">\r\n              <img *ngIf=\"chipflag==2\" src=\"/assets/flat-diamond-icon-700156.png\" width=\"20px\"  height=\"20px\" style=\"margin-right:5px;\">\r\n              <ion-label [class.chiplabel]=\"chipflag==2\"><strong>Bombay</strong></ion-label>\r\n            </ion-chip>\r\n          </ion-col>\r\n   \r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-chip color=\"warning\" [class.chipthree]=\"chipflag==3\" (click)=\"chipSelect(3, 'Star')\">\r\n              <ion-icon *ngIf=\"chipflag!=3\" name=\"star\" color=\"dark\"></ion-icon>\r\n              <ion-icon *ngIf=\"chipflag==3\" name=\"star\" color=\"light\"></ion-icon>\r\n              <ion-label [class.chiplabel]=\"chipflag==3\"><strong>Hyderabad</strong></ion-label>\r\n            </ion-chip>\r\n            <ion-chip color=\"success\" [class.chipfour]=\"chipflag==4\" (click)=\"chipSelect(4, 'Blank')\">\r\n              <ion-icon *ngIf=\"chipflag!=4\"  name=\"close-circle\" color=\"dark\"></ion-icon>\r\n              <ion-icon *ngIf=\"chipflag==4\"  name=\"close-circle\" color=\"light\"></ion-icon>\r\n              <ion-label [class.chiplabel]=\"chipflag==4\"> <strong>Calcutta</strong></ion-label>\r\n            </ion-chip>\r\n          \r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n  <hr>\r\n  <!--\r\n<h4 style=\"margin-left:15px;\">Price Range <br>  </h4>\r\n  <h4> <strong>₹</strong> {{val.lower}} <span *ngIf=\"val.upper>0\">-</span> {{val.upper}}</h4>\r\n  <ion-range style=\"padding-top:10px;\" [(ngModel)]=\"val\"  name=\"price\" min=\"1\" max=\"1000\" value=\"0\"   step=\"1\" pin=\"true\"  ticks=\"true\"  id=\"dual-range\" dual-knobs color=\"dark\">\r\n  \r\n  </ion-range>\r\n  \r\n  -->\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"labelsize\" position=\"fixed\">Price ₹:</ion-label>\r\n    <ion-input [(ngModel)]=\"coin.price\" name=\"coin.price\" inputmode=\"numeric\"></ion-input>\r\n \r\n  </ion-item>\r\n   <hr>\r\n  <ion-radio-group value=\"custom-checked\">\r\n      \r\n    <h4 style=\"margin-left:15px;\">Coin Image</h4>\r\n  <ion-grid>\r\n  <ion-row>\r\n      <ion-col>\r\n                \r\n  <ion-label for=\"camera\" >Use <br> Camera </ion-label>\r\n  <ion-radio  (ionFocus)=\"setPhotoOption(1)\" name=\"camera\" aria-label=\"Custom checkbox that is checked\" value=\"camera\" class=\"form-control\" ></ion-radio>\r\n  \r\n  </ion-col>\r\n  <ion-col>\r\n    <ion-label for=\"gallery\" >Choose <br>from Gallery</ion-label>\r\n    <ion-radio (ionFocus)=\"setPhotoOption(2)\"  name=\"gallery\" aria-label=\"Custom checkbox\"  value=\"gallery\" class=\"form-control\" ></ion-radio>\r\n   </ion-col>\r\n   </ion-row>\r\n   </ion-grid>\r\n   \r\n     \r\n  \r\n  </ion-radio-group>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col><ion-button color=\"dark\" size=\"small\" (click)=\"getCameraFront()\"><strong>Front Side</strong></ion-button></ion-col>\r\n      <ion-col><ion-button color=\"light\" size=\"small\" (click)=\"getCameraBack()\"><strong>Back Side</strong></ion-button>\r\n      </ion-col>\r\n  \r\n      </ion-row> \r\n      <ion-row *ngIf=\"imgURL!=null && imgURL1 !=null \">\r\n        <ion-col>\r\n      <ion-button color=\"medium\" size=\"small\" (click)=\"show()\"><strong>Show Image</strong></ion-button>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <div *ngIf=\"selectedPhoto && selectedPhoto1  \">\r\n        <!--\r\n          <ion-button color=\"warning\" style=\"margin-left: 50px;\" (click)=\"flip()\" >\r\n          Flip the coin\r\n        </ion-button>\r\n        -->\r\n        <div [class.flip-box]=\"flag\">\r\n          <div class=\"flip-box-inner \">\r\n            <div class=\"flip-box-front \">\r\n                <img src=\"{{selectedPhoto}}\" height=\"200\" width=\"200\"  class=\"center\" (click)=\"presentModal(selectedPhoto)\">    \r\n            </div>\r\n            <div class=\"flip-box-back\">\r\n              <img src=\"{{selectedPhoto1}}\" height=\"200\" width=\"200\"  class=\"center\" (click)=\"presentModal(selectedPhoto1)\"> \r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <ion-fab-button *ngIf=\"selectedPhoto && selectedPhoto1 != '' \" [@rotatedState]='state' color=\"warning\" (click)=\"flip()\">\r\n          <ion-icon name=\"git-compare-outline\"></ion-icon>               \r\n           </ion-fab-button>\r\n      </div>\r\n      \r\n    \r\n    </ion-grid>\r\n\r\n    \r\n \r\n  \r\n  \r\n  <ion-grid >\r\n    <ion-row >\r\n      <ion-col>\r\n      <ion-button color=\"danger\" expand=\"full\" (click)=\"dismiss()\">Cancel</ion-button>\r\n      </ion-col>\r\n      <ion-col style=\"z-index: 1;\">\r\n      <ion-button  color=\"success\" expand=\"full\" (click)=\"SubmitForm(coin)\">Add</ion-button>\r\n      </ion-col>\r\n    \r\n    </ion-row>\r\n    </ion-grid>\r\n\r\n</form>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/crop/crop.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crop/crop.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title><strong style=\"text-align:center ;\">Crop Image </strong> <ion-icon style=\"margin: 5px;font-weight: 500;\" name=\"crop-sharp\"></ion-icon></ion-title>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <image-cropper *ngIf=\"imgTocrop\"\r\n  [imageFile]=\"imgTocrop\"\r\n  [maintainAspectRatio]=\"true\"\r\n  [aspectRatio]=\" 2 / 2\"\r\n  [roundCropper]=\"true\"\r\n  [imageQuality]=\"100\"\r\n  [canvasRotation]=\"canvasRotate\"\r\n  (imageLoaded)=\"imageLoaded()\"\r\n  format=\"jpeg\"\r\n  (imageCropped)=\"imageCropped($event)\"\r\n \r\n></image-cropper>\r\n<ion-grid *ngIf=\"imgTocrop\" style=\"position: fixed;\">\r\n  <ion-row>\r\n    <ion-col>\r\n      \r\n<ion-button color=\"medium\" expand=\"full\"   (click)=\"rotateRight()\">Rotate Right <img src=\"assets/RR.png\" alt=\"\" ></ion-button>\r\n    </ion-col>\r\n  \r\n    <ion-col>\r\n      <ion-button  color=\"light\" expand=\"full\"   (click)=\"rotateLeft()\">Rotate Left <img src=\"assets/LL.png\" alt=\"\" ></ion-button>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button *ngIf=\"imgTocrop\" expand=\"full\" style=\"text-align: center;\" color=\"danger\"  (click)=\"cancel()\">Cancel</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button *ngIf=\"imgTocrop\" expand=\"full\" style=\"text-align: center;\" color=\"primary\"  (click)=\"crop()\">Crop</ion-button>\r\n    </ion-col>\r\n    \r\n  </ion-row>\r\n</ion-grid>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/add-coin/add-coin.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-coin/add-coin.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\n  border-top: 1px solid #dedede;\n}\n\nion-content {\n  background-color: white;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-radio {\n  margin-left: 10px;\n  border-color: white;\n}\n\n.chipone {\n  background: #4238cc;\n}\n\n.chiptwo {\n  background: #d32929;\n}\n\n.chipthree {\n  background: #d9eb3e;\n}\n\n.chipfour {\n  background: #36a836;\n}\n\n.chiplabel {\n  color: white;\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 100%;\n  max-width: 500px;\n  max-height: 500px;\n}\n\n.flip-box {\n  text-align: center;\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #f1f1f1;\n  perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n}\n\n/* This container is needed to position the front and back side */\n\n.flip-box-inner {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n/* Do an horizontal flip when you move the mouse over the flip box container */\n\n.flip-box .flip-box-inner {\n  transform: rotateY(180deg);\n}\n\n/* Position the front and back side */\n\n.flip-box-front {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n\n.flip-box-back {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n\n/* Style the front side (fallback if image is missing) */\n\n/* Style the back side */\n\n.flip-box-back {\n  transform: rotateY(180deg);\n}\n\nion-fab-button {\n  height: 40px;\n  width: 40px;\n  margin-left: 67%;\n  margin-top: -20px;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n/* img {\n   border: 5px solid rgb(116, 116, 116);\n }*/\n\n.labelsize {\n  font-size: large !important;\n}\n\nion-radio::part(container) {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #6815ec;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvaW4vYWRkLWNvaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFRTtFQUdFLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFFSTtFQUNFLGFBQUE7QUFBTjs7QUFJRTtFQUVFLGlCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFNRTtFQUVGLG1CQUFBO0FBSkE7O0FBUUU7RUFFRixtQkFBQTtBQU5BOztBQVNFO0VBRUYsbUJBQUE7QUFQQTs7QUFVRTtFQUVGLG1CQUFBO0FBUkE7O0FBYUU7RUFFRixZQUFBO0FBWEE7O0FBZ0JFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFiSjs7QUFnQk07RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQXFCLGdEQUFBO0FBWjdCOztBQWdCTSxpRUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFiUjs7QUFnQk0sOEVBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQWJSOztBQWdCTSxxQ0FBQTs7QUFDQTtFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQXFDLFdBQUE7RUFDckMsMkJBQUE7QUFiUjs7QUFnQk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUFxQyxXQUFBO0VBQ3JDLDJCQUFBO0FBWlI7O0FBZU0sd0RBQUE7O0FBR0Esd0JBQUE7O0FBQ0E7RUFFRSwwQkFBQTtBQWZSOztBQW1CTTtFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0YsZ0JBQUE7RUFDQSxpQkFBQTtBQWpCTjs7QUFzQk07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBbkJSOztBQXNCSzs7R0FBQTs7QUFPQztFQUVFLDJCQUFBO0FBeEJSOztBQWtDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQWhDRjs7QUFtQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaENGOztBQW1DQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFFQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSx3QkFBQTtBQWxDRiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jb2luL2FkZC1jb2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICBcclxuICAgIC8vIG92ZXJ3cml0ZSBpbmxpbmUgc3R5bGVzICYgaGlkaW5nIHRoZSBzY3JvbGxiYXJcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH0gXHJcblxyXG4gIGlvbi1yYWRpb1xyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5jaGlwb25lXHJcbiAge1xyXG5iYWNrZ3JvdW5kOiByZ2IoNjYsIDU2LCAyMDQpO1xyXG5cclxuICB9XHJcblxyXG4gIC5jaGlwdHdvXHJcbiAge1xyXG5iYWNrZ3JvdW5kOiByZ2IoMjExLCA0MSwgNDEpO1xyXG5cclxuICB9XHJcbiAgLmNoaXB0aHJlZVxyXG4gIHtcclxuYmFja2dyb3VuZDogcmdiKDIxNywgMjM1LCA2Mik7XHJcblxyXG4gIH1cclxuICAuY2hpcGZvdXJcclxuICB7XHJcbmJhY2tncm91bmQ6IHJnYig1NCwgMTY4LCA1NCk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5jaGlwbGFiZWxcclxuICB7XHJcbmNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbiAgXHJcbiAgICAgIC5mbGlwLWJveCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDsgLyogUmVtb3ZlIHRoaXMgaWYgeW91IGRvbid0IHdhbnQgdGhlIDNEIGVmZmVjdCAqL1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiBUaGlzIGNvbnRhaW5lciBpcyBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cclxuICAgICAgLmZsaXAtYm94LWlubmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDsvLzIwMHB4XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIERvIGFuIGhvcml6b250YWwgZmxpcCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIHRoZSBmbGlwIGJveCBjb250YWluZXIgKi9cclxuICAgICAgLmZsaXAtYm94IC5mbGlwLWJveC1pbm5lciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIFBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXHJcbiAgICAgIC5mbGlwLWJveC1mcm9udFxyXG4gICAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICovXHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmxpcC1ib3gtYmFjayB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICovXHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiBTdHlsZSB0aGUgZnJvbnQgc2lkZSAoZmFsbGJhY2sgaWYgaW1hZ2UgaXMgbWlzc2luZykgKi9cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAvKiBTdHlsZSB0aGUgYmFjayBzaWRlICovXHJcbiAgICAgIC5mbGlwLWJveC1iYWNrIHtcclxuICAgICAgIFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG5cclxuICAgICAgaW9uLWZhYi1idXR0b25cclxuICAgICAge1xyXG4gICAgICAgIGhlaWdodDogNDBweDsvLzQwcHpcclxuICAgICAgICB3aWR0aDogNDBweDsvLzQwcHhcclxuICAgICAgbWFyZ2luLWxlZnQ6IDY3JTsvLzI2MHB4XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIFxyXG4gICAgICAucmlwcGxlLXBhcmVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgIC8qIGltZyB7XHJcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDExNiwgMTE2LCAxMTYpO1xyXG4gICAgICB9Ki9cclxuXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgIC5sYWJlbHNpemVcclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2UhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5pb24tcmFkaW86OnBhcnQoY29udGFpbmVyKSB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxufVxyXG5cclxuaW9uLXJhZGlvOjpwYXJ0KG1hcmspIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbmlvbi1yYWRpby5yYWRpby1jaGVja2VkOjpwYXJ0KGNvbnRhaW5lcikge1xyXG4gIGJhY2tncm91bmQ6ICM2ODE1ZWM7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLXJhZGlvLnJhZGlvLWNoZWNrZWQ6OnBhcnQobWFyaykge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG5cclxuICBib3JkZXItd2lkdGg6IDBweCAycHggMnB4IDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuXHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/add-coin/add-coin.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-coin/add-coin.page.ts ***!
  \*******************************************/
/*! exports provided: AddCoinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCoinPage", function() { return AddCoinPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-view/image-view.page */ "./src/app/image-view/image-view.page.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _temp_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../temp-data.service */ "./src/app/temp-data.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _crop_crop_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../crop/crop.page */ "./src/app/crop/crop.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










let AddCoinPage = class AddCoinPage {
    constructor(viewCtrl, camera, toastCtrl, loadingCtrl, navCtrl, service, firestore) {
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.service = service;
        this.firestore = firestore;
        this.coin = {};
        this.chipflag = 0;
        this.deno = "1 Rupee";
        this.state = 'default';
        this.coinref = {};
        this.flag = false;
        this.newMetadata = {
            cacheControl: 'public,max-age=15552000'
        };
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
        this.onSuccess1 = snapshot => {
            //this.currentImage = snapshot.downloadURL;
            setTimeout(() => {
                firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref().child(this.frontID).getDownloadURL()
                    .then(response => {
                    this.coinref.frontUrl = response;
                    firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref().child(this.backID).getDownloadURL()
                        .then((response) => __awaiter(this, void 0, void 0, function* () {
                        this.coinref.backUrl = response;
                        this.addCoin(this.coinref);
                    }));
                })
                    .catch(error => console.log('error', error));
            }, 1000);
        };
        this.onError = error => {
            console.log("error", error);
        };
        if (!firebase__WEBPACK_IMPORTED_MODULE_7__["apps"].length) {
            firebase__WEBPACK_IMPORTED_MODULE_7__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].FIREBASE_CONFIG);
        }
        this.getCoins();
    }
    ngOnInit() {
    }
    setPhotoOption(x) {
        if (x == 1) {
            this.options = this.cameraoptions;
        }
        if (x == 2) {
            this.options = this.galleryoptions;
        }
    }
    SubmitForm(x) {
        return __awaiter(this, void 0, void 0, function* () {
            x.mint = this.chipname;
            x.front = 'front/' + Math.random();
            x.back = 'back/' + Math.random();
            this.frontID = x.front;
            this.backID = x.back;
            if (x.year != null) {
                x.year = x.year.substring(0, 4);
            }
            this.coin = x;
            this.selectedPhoto = this.service.croppedImg;
            this.selectedPhoto1 = this.service.croppedImg1;
            this.uploadFront(this.frontID);
            var task = this.uploadBack(this.backID);
            task.then(this.onSuccess1, this.onError);
            if (this.formValidation()) {
                this.loading = yield this.loadingCtrl.create({
                    message: "Please Wait..."
                });
                this.loading.present();
                this.coinref = x;
                this.service.croppedImg = null;
                this.service.croppedImg1 = null;
            }
            // console.log(this.coinsCheck);
            //console.log(this.coinref.frontUrl);
            // console.log(this.coinref.backUrl);
            // this.addCoin(x);
        });
    }
    getCameraFront() {
        this.camera.getPicture(this.options).then((imageData) => __awaiter(this, void 0, void 0, function* () {
            this.imgURL = 'data:image/jpeg;base64,' + imageData;
            this.selectedPhoto = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
            // this.loading = await this.loadingCtrl.create({
            //   message: 'Please wait...'
            // });
            // this.loading.present();
            this.cropModal(this.selectedPhoto, 1).then(this.selectedPhoto = this.service.croppedImg);
        }), (err) => {
            console.log(' error', err);
        });
    }
    getCameraBack() {
        this.camera.getPicture(this.options).then((imageData) => __awaiter(this, void 0, void 0, function* () {
            this.imgURL1 = 'data:image/jpeg;base64,' + imageData;
            this.selectedPhoto1 = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
            // this.loading = await this.loadingCtrl.create({
            //   message: 'Please wait...'
            // });
            // this.loading.present();
            this.cropModal(this.selectedPhoto1, 2).then(this.selectedPhoto1 = this.service.croppedImg1);
        }), (err) => {
            console.log('error', err);
        });
    }
    dataURItoBlob(dataURI) {
        console.log("here");
        // codej adapted from:
        //  http://stackoverflow.com/questions/33486352/
        //cant-upload-image-to-aws-s3-from-ionic-camera
        let binary = atob(dataURI.split(',')[1]);
        let array = [];
        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    }
    ;
    show() {
        this.selectedPhoto = this.service.croppedImg;
        this.selectedPhoto1 = this.service.croppedImg1;
    }
    uploadFront(x) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.selectedPhoto && this.formValidation()) {
                var uploadTask = firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref().child(x)
                    .put(this.dataURItoBlob(this.selectedPhoto), this.newMetadata);
            }
            //this.loading.dismiss();
            return uploadTask;
            //uploadTask.then(this.onSuccess, this.onError);
        });
    }
    uploadBack(x) {
        return __awaiter(this, void 0, void 0, function* () {
            //this.loading.present();
            if (this.selectedPhoto1 && this.formValidation()) {
                var uploadTask = firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref().child(x)
                    .put(this.dataURItoBlob(this.selectedPhoto1), this.newMetadata);
            }
            return uploadTask;
        });
    }
    chipSelect(x, y) {
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
    flip() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
        this.flag = !this.flag;
        console.log(this.flag);
    }
    dismiss() {
        this.service.croppedImg = null;
        this.service.croppedImg1 = null;
        this.viewCtrl.dismiss();
        this.getCoinsNoChange();
    }
    presentModal(x) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.viewCtrl.create({
                component: _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_3__["ImageViewPage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    imgurl: x
                }
            });
            return yield modal.present();
        });
    }
    cropModal(x, y) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.viewCtrl.create({
                component: _crop_crop_page__WEBPACK_IMPORTED_MODULE_9__["CropPage"],
                componentProps: {
                    'imgTocrop': x,
                    'flag': y
                }
            });
            // this.loading.dismiss();
            return yield modal.present();
        });
    }
    addCoin(coin) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.formValidation()) {
                yield this.firestore.collection("coins").add(coin);
                this.service.croppedImg = null;
                this.service.croppedImg1 = null;
                this.loading.dismiss();
                //redirect to home page
                this.dismiss();
            }
        });
    }
    formValidation() {
        let i;
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
            if (this.service.coinData[i].name == this.coin.name &&
                this.service.coinData[i].deno == this.coin.deno &&
                this.service.coinData[i].year == this.coin.year &&
                this.service.coinData[i].mint == this.coin.mint) {
                this.showToast("You already have this coin");
                return false;
            }
        }
        return true;
    }
    showToast(message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        })
            .then(toastData => toastData.present());
    }
    getCoins() {
        return __awaiter(this, void 0, void 0, function* () {
            //show loader
            let loader = yield this.loadingCtrl.create({
                message: "Please Wait..."
            });
            loader.present();
            try {
                this.firestore.collection("coins")
                    .snapshotChanges()
                    .subscribe(data => {
                    this.coinsCheck = data.map(e => {
                        return {
                            name: e.payload.doc.data()["name"],
                            year: e.payload.doc.data()["year"],
                            deno: e.payload.doc.data()["deno"],
                            mint: e.payload.doc.data()["mint"],
                        };
                    });
                });
                // dismiss loader
                loader.dismiss();
            }
            catch (e) {
                this.showToast(e);
            }
        });
    }
    getCoinsNoChange() {
        return __awaiter(this, void 0, void 0, function* () {
            //show loader
            let loader = yield this.loadingCtrl.create({
                message: "Please Wait..."
            });
            loader.present();
            try {
                this.firestore.collection("coins")
                    .snapshotChanges()
                    .subscribe(data => {
                    this.coinsCheck = data.map(e => {
                        return {
                            id: e.payload.doc.id,
                            name: e.payload.doc.data()["name"],
                            year: e.payload.doc.data()["year"],
                            deno: e.payload.doc.data()["deno"],
                            quantity: e.payload.doc.data()["quantity"],
                            mint: e.payload.doc.data()["mint"],
                            price: e.payload.doc.data()["price"],
                            front: e.payload.doc.data()["front"],
                            back: e.payload.doc.data()["back"],
                            frontUrl: e.payload.doc.data()["frontUrl"],
                            backUrl: e.payload.doc.data()["backUrl"],
                        };
                    });
                });
                // dismiss loader
                loader.dismiss();
            }
            catch (e) {
                this.showToast(e);
            }
        });
    }
};
AddCoinPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _temp_data_service__WEBPACK_IMPORTED_MODULE_6__["TempDataService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
AddCoinPage = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-coin',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-coin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-coin/add-coin.page.html")).default,
        animations: [
            // Each unique animation requires its own trigger. The first argument of the trigger function is the name
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rotatedState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(360deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-in'))
            ])
        ],
        styles: [__importDefault(__webpack_require__(/*! ./add-coin.page.scss */ "./src/app/add-coin/add-coin.page.scss")).default]
    })
], AddCoinPage);



/***/ }),

/***/ "./src/app/crop/crop.page.scss":
/*!*************************************!*\
  !*** ./src/app/crop/crop.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-spinner {\n  transform: scale(6);\n  left: 200px;\n  right: 200px;\n  top: 300px;\n  bottom: 200px;\n}\n\nimage-cropper {\n  height: 300px;\n}\n\nimg {\n  height: 20px;\n  width: 20px;\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JvcC9jcm9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBRUksYUFBQTtBQUFKOztBQVFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDRyxpQkFBQTtBQUxQIiwiZmlsZSI6InNyYy9hcHAvY3JvcC9jcm9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zcGlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoNik7XHJcbiAgICBsZWZ0OiAyMDBweDtcclxuICAgIHJpZ2h0OiAyMDBweDtcclxuICAgIHRvcDogMzAwcHg7XHJcbiAgICBib3R0b206IDIwMHB4O1xyXG59XHJcblxyXG5pbWFnZS1jcm9wcGVyXHJcbntcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgIFxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/crop/crop.page.ts":
/*!***********************************!*\
  !*** ./src/app/crop/crop.page.ts ***!
  \***********************************/
/*! exports provided: CropPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropPage", function() { return CropPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _temp_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temp-data.service */ "./src/app/temp-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CropPage = class CropPage {
    constructor(modal, loadingCtrl, service) {
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.canvasRotate = 0;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Fetching Image...'
            });
            this.loading.present();
        });
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    rotateRight() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Rotating...'
            });
            this.loading.present();
            this.canvasRotate++;
        });
    }
    rotateLeft() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Rotating...'
            });
            this.loading.present();
            this.canvasRotate--;
        });
    }
    imageLoaded() {
        this.loading.dismiss();
    }
    crop() {
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
    cancel() {
        this.modal.dismiss();
    }
};
CropPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _temp_data_service__WEBPACK_IMPORTED_MODULE_2__["TempDataService"] }
];
CropPage.propDecorators = {
    imgTocrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    flag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
CropPage = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-crop',
        template: __importDefault(__webpack_require__(/*! raw-loader!./crop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/crop/crop.page.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./crop.page.scss */ "./src/app/crop/crop.page.scss")).default]
    })
], CropPage);



/***/ }),

/***/ "./src/app/temp-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/temp-data.service.ts ***!
  \**************************************/
/*! exports provided: TempDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempDataService", function() { return TempDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let TempDataService = class TempDataService {
    constructor(storage) {
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
    incrCount() {
        this.fCount++;
    }
    dcrCount() {
        this.fCount--;
    }
    storeModal(x) {
        this.modalInstance[this.i] = x;
        this.i++;
        console.log(this.modalInstance);
    }
    getData() {
        return 'hello';
        //  return this.CoinData;
    }
    storeFF(x, y) {
        // Add new photo to gallery
        this.photosF.unshift({
            data: x,
            url: y
        });
        // Save all photos for later viewing
        this.storage.set('front', this.photosF);
    }
    storeBB(x, y) {
        // Add new photo to gallery
        this.photosB.unshift({
            data: x,
            url: y
        });
        // Save all photos for later viewing
        this.storage.set('back', this.photosB);
    }
    storeF(x, y) {
        // Add new photo to gallery
        this.photosF.unshift({
            data: 'data:image/jpeg;base64,' + x,
            url: y
        });
        // Save all photos for later viewing
        this.storage.set('front', this.photosF);
    }
    storeB(x, y) {
        // Add new photo to gallery
        this.photosB.unshift({
            data: 'data:image/jpeg;base64,' + x,
            url: y
        });
        // Save all photos for later viewing
        this.storage.set('back', this.photosB);
    }
    loadSaved() {
        this.storage.get('front').then((photos) => {
            this.photosF = photos || [];
        });
        this.storage.get('back').then((photos) => {
            this.photosB = photos || [];
        });
    }
};
TempDataService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] }
];
TempDataService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], TempDataService);

class PhotoF {
}
class PhotoB {
}


/***/ })

}]);
//# sourceMappingURL=default~add-coin-add-coin-module~filter-filter-module~home-home-module-es2015.js.map