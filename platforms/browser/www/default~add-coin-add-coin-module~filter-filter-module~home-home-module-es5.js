(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-coin-add-coin-module~filter-filter-module~home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/add-coin/add-coin.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-coin/add-coin.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAddCoinAddCoinPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title style=\"text-align: center;\">\n     <strong>\n      Add New Coin\n     </strong> \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n<form  #f=\"ngForm\">\n\n  <ion-item>\n    <ion-label class=\"labelsize\" position=\"floating\">Name of the coin</ion-label>\n    <ion-input [(ngModel)]=\"coin.name\" name=\"coin.name\" type=\"text\" spellcheck=\"true\" clear-input=\"true\"></ion-input>\n  </ion-item>\n  <h4 style=\"margin-left:15px;\">Denomination</h4>\n  <ion-select value=\"1 Rupee\" [(ngModel)]=\"coin.deno\" name=\"coin.deno\">\n  <ion-select-option value=\"1 Paise\">1 Paise</ion-select-option>\n  <ion-select-option value=\"2 Paise\">2 Paise</ion-select-option>\n  <ion-select-option value=\"3 Paise\">3 Paise</ion-select-option>\n  <ion-select-option value=\"5 Paise\">5 Paise</ion-select-option>\n  <ion-select-option value=\"10 Paise\">10 Paise</ion-select-option>\n  <ion-select-option value=\"20 Paise\">20 Paise</ion-select-option>\n  <ion-select-option value=\"25 Paise\">25 Paise</ion-select-option>\n  <ion-select-option value=\"50 Paise\">50 Paise</ion-select-option>\n        <ion-select-option value=\"1 Rupee\">1 Rupee</ion-select-option>\n        <ion-select-option value=\"2 Rupees\">2 Rupees</ion-select-option>\n        <ion-select-option value=\"5 Rupees\">5 Rupees</ion-select-option>\n        <ion-select-option value=\"10 Rupees\">10 Rupees</ion-select-option>\n     \n      </ion-select>\n  <hr>\n  <ion-item>\n    <ion-label class=\"labelsize\" position=\"fixed\">Quantity :</ion-label>\n    <ion-input [(ngModel)]=\"coin.quantity\" name=\"coin.quantity\" inputmode=\"numeric\"></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n  <h4>Year</h4>\n  </ion-item>\n  <ion-datetime   [(ngModel)]=\"coin.year\" name=\"year\"  display-format=\"YYYY\" picker-format=\"YYYY\" placeholder=\"Select Year\"></ion-datetime>\n  <hr>\n\n    <ion-item lines=\"none\"> \n      <h4>Mint</h4>\n      </ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-chip color=\"primary\" [class.chipone]=\"chipflag==1\" (click)=\"chipSelect(1, 'Dot')\">\n              <ion-icon *ngIf=\"chipflag!=1\" name=\"ellipse\"  color=\"dark\"></ion-icon>\n              <ion-icon *ngIf=\"chipflag==1\" name=\"ellipse\"  color=\"light\"></ion-icon>\n              <ion-label [class.chiplabel]=\"chipflag==1\"><strong>Noida</strong></ion-label>\n            </ion-chip>\n            <ion-chip color=\"danger\" [class.chiptwo]=\"chipflag==2\" (click)=\"chipSelect(2, 'Diamond')\">\n              <img *ngIf=\"chipflag!=2\" src=\"https://cdn-icons-png.flaticon.com/512/445/445102.png\" width=\"20px\"  height=\"25px\" style=\"margin-right:5px;\">\n              <img *ngIf=\"chipflag==2\" src=\"/assets/flat-diamond-icon-700156.png\" width=\"20px\"  height=\"20px\" style=\"margin-right:5px;\">\n              <ion-label [class.chiplabel]=\"chipflag==2\"><strong>Bombay</strong></ion-label>\n            </ion-chip>\n          </ion-col>\n   \n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-chip color=\"warning\" [class.chipthree]=\"chipflag==3\" (click)=\"chipSelect(3, 'Star')\">\n              <ion-icon *ngIf=\"chipflag!=3\" name=\"star\" color=\"dark\"></ion-icon>\n              <ion-icon *ngIf=\"chipflag==3\" name=\"star\" color=\"light\"></ion-icon>\n              <ion-label [class.chiplabel]=\"chipflag==3\"><strong>Hyderabad</strong></ion-label>\n            </ion-chip>\n            <ion-chip color=\"success\" [class.chipfour]=\"chipflag==4\" (click)=\"chipSelect(4, 'Blank')\">\n              <ion-icon *ngIf=\"chipflag!=4\"  name=\"close-circle\" color=\"dark\"></ion-icon>\n              <ion-icon *ngIf=\"chipflag==4\"  name=\"close-circle\" color=\"light\"></ion-icon>\n              <ion-label [class.chiplabel]=\"chipflag==4\"> <strong>Calcutta</strong></ion-label>\n            </ion-chip>\n          \n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  <hr>\n  <!--\n<h4 style=\"margin-left:15px;\">Price Range <br>  </h4>\n  <h4> <strong>₹</strong> {{val.lower}} <span *ngIf=\"val.upper>0\">-</span> {{val.upper}}</h4>\n  <ion-range style=\"padding-top:10px;\" [(ngModel)]=\"val\"  name=\"price\" min=\"1\" max=\"1000\" value=\"0\"   step=\"1\" pin=\"true\"  ticks=\"true\"  id=\"dual-range\" dual-knobs color=\"dark\">\n  \n  </ion-range>\n  \n  -->\n  <ion-item lines=\"none\">\n    <ion-label class=\"labelsize\" position=\"fixed\">Price ₹:</ion-label>\n    <ion-input [(ngModel)]=\"coin.price\" name=\"coin.price\" inputmode=\"numeric\"></ion-input>\n \n  </ion-item>\n   <hr>\n  <ion-radio-group value=\"custom-checked\">\n      \n    <h4 style=\"margin-left:15px;\">Coin Image</h4>\n  <ion-grid>\n  <ion-row>\n      <ion-col>\n                \n  <ion-label for=\"camera\" >Use <br> Camera </ion-label>\n  <ion-radio  (ionFocus)=\"setPhotoOption(1)\" name=\"camera\" aria-label=\"Custom checkbox that is checked\" value=\"camera\" class=\"form-control\" ></ion-radio>\n  \n  </ion-col>\n  <ion-col>\n    <ion-label for=\"gallery\" >Choose <br>from Gallery</ion-label>\n    <ion-radio (ionFocus)=\"setPhotoOption(2)\"  name=\"gallery\" aria-label=\"Custom checkbox\"  value=\"gallery\" class=\"form-control\" ></ion-radio>\n   </ion-col>\n   </ion-row>\n   </ion-grid>\n   \n     \n  \n  </ion-radio-group>\n  <ion-grid>\n    <ion-row>\n      <ion-col><ion-button color=\"dark\" size=\"small\" (click)=\"getCameraFront()\"><strong>Front Side</strong></ion-button></ion-col>\n      <ion-col><ion-button color=\"light\" size=\"small\" (click)=\"getCameraBack()\"><strong>Back Side</strong></ion-button>\n      </ion-col>\n  \n      </ion-row> \n      <ion-row *ngIf=\"imgURL!=null && imgURL1 !=null \">\n        <ion-col>\n      <ion-button color=\"medium\" size=\"small\" (click)=\"show()\"><strong>Show Image</strong></ion-button>\n\n        </ion-col>\n      </ion-row>\n      <div *ngIf=\"selectedPhoto && selectedPhoto1  \">\n        <!--\n          <ion-button color=\"warning\" style=\"margin-left: 50px;\" (click)=\"flip()\" >\n          Flip the coin\n        </ion-button>\n        -->\n        <div [class.flip-box]=\"flag\">\n          <div class=\"flip-box-inner \">\n            <div class=\"flip-box-front \">\n                <img src=\"{{selectedPhoto}}\" height=\"200\" width=\"200\"  class=\"center\" (click)=\"presentModal(selectedPhoto)\">    \n            </div>\n            <div class=\"flip-box-back\">\n              <img src=\"{{selectedPhoto1}}\" height=\"200\" width=\"200\"  class=\"center\" (click)=\"presentModal(selectedPhoto1)\"> \n            </div>\n          </div>\n          \n        </div>\n        <ion-fab-button *ngIf=\"selectedPhoto && selectedPhoto1 != '' \" [@rotatedState]='state' color=\"warning\" (click)=\"flip()\">\n          <ion-icon name=\"git-compare-outline\"></ion-icon>               \n           </ion-fab-button>\n      </div>\n      \n    \n    </ion-grid>\n\n    \n \n  \n  \n  <ion-grid >\n    <ion-row >\n      <ion-col>\n      <ion-button color=\"danger\" expand=\"full\" (click)=\"dismiss()\">Cancel</ion-button>\n      </ion-col>\n      <ion-col style=\"z-index: 1;\">\n      <ion-button  color=\"success\" expand=\"full\" (click)=\"SubmitForm(coin)\">Add</ion-button>\n      </ion-col>\n    \n    </ion-row>\n    </ion-grid>\n\n</form>\n  \n</ion-content>\n";
      /***/
    },

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
    "./src/app/add-coin/add-coin.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/add-coin/add-coin.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAddCoinAddCoinPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "hr {\n  border-top: 1px solid #dedede;\n}\n\nion-content {\n  background-color: white;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-radio {\n  margin-left: 10px;\n  border-color: white;\n}\n\n.chipone {\n  background: #4238cc;\n}\n\n.chiptwo {\n  background: #d32929;\n}\n\n.chipthree {\n  background: #d9eb3e;\n}\n\n.chipfour {\n  background: #36a836;\n}\n\n.chiplabel {\n  color: white;\n}\n\n.center {\n  display: block;\n  margin-left: 60px;\n  margin-right: 30px;\n  border-radius: 100%;\n}\n\n.flip-box {\n  background-color: transparent;\n  width: 200px;\n  height: 200px;\n  border: 1px solid #f1f1f1;\n  perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n}\n\n/* This container is needed to position the front and back side */\n\n.flip-box-inner {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n/* Do an horizontal flip when you move the mouse over the flip box container */\n\n.flip-box .flip-box-inner {\n  transform: rotateY(180deg);\n}\n\n/* Position the front and back side */\n\n.flip-box-front, .flip-box-back {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n\n/* Style the front side (fallback if image is missing) */\n\n/* Style the back side */\n\n.flip-box-back {\n  transform: rotateY(180deg);\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n/* img {\n   border: 5px solid rgb(116, 116, 116);\n }*/\n\n.labelsize {\n  font-size: large !important;\n}\n\nion-fab-button {\n  height: 40px;\n  width: 40px;\n  margin-left: 230px;\n  margin-top: -20px;\n}\n\nion-radio::part(container) {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #6815ec;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvaW4vYWRkLWNvaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFRTtFQUdFLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFFSTtFQUNFLGFBQUE7QUFBTjs7QUFJRTtFQUVFLGlCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFNRTtFQUVGLG1CQUFBO0FBSkE7O0FBUUU7RUFFRixtQkFBQTtBQU5BOztBQVNFO0VBRUYsbUJBQUE7QUFQQTs7QUFVRTtFQUVGLG1CQUFBO0FBUkE7O0FBYUU7RUFFRixZQUFBO0FBWEE7O0FBZ0JFO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWRKOztBQWlCTTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQXFCLGdEQUFBO0FBYjdCOztBQWlCTSxpRUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFkUjs7QUFpQk0sOEVBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQWRSOztBQWlCTSxxQ0FBQTs7QUFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQXFDLFdBQUE7RUFDckMsMkJBQUE7QUFiUjs7QUFnQk0sd0RBQUE7O0FBR0Esd0JBQUE7O0FBQ0E7RUFFRSwwQkFBQTtBQWhCUjs7QUFvQk07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBakJSOztBQW9CSzs7R0FBQTs7QUFPQztFQUVFLDJCQUFBO0FBdEJSOztBQTRCQTtFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0Ysa0JBQUE7RUFDQSxpQkFBQTtBQTFCQTs7QUFnQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7QUE5QkY7O0FBaUNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTlCRjs7QUFpQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBOUJGOztBQWlDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBRUEsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsd0JBQUE7QUFoQ0YiLCJmaWxlIjoic3JjL2FwcC9hZGQtY29pbi9hZGQtY29pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XG59XG5cbiAgaW9uLWNvbnRlbnQge1xuICBcbiAgICAvLyBvdmVyd3JpdGUgaW5saW5lIHN0eWxlcyAmIGhpZGluZyB0aGUgc2Nyb2xsYmFyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0gXG5cbiAgaW9uLXJhZGlvXG4gIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgXG4gIC5jaGlwb25lXG4gIHtcbmJhY2tncm91bmQ6IHJnYig2NiwgNTYsIDIwNCk7XG5cbiAgfVxuXG4gIC5jaGlwdHdvXG4gIHtcbmJhY2tncm91bmQ6IHJnYigyMTEsIDQxLCA0MSk7XG5cbiAgfVxuICAuY2hpcHRocmVlXG4gIHtcbmJhY2tncm91bmQ6IHJnYigyMTcsIDIzNSwgNjIpO1xuXG4gIH1cbiAgLmNoaXBmb3VyXG4gIHtcbmJhY2tncm91bmQ6IHJnYig1NCwgMTY4LCA1NCk7XG5cbiAgfVxuXG5cbiAgLmNoaXBsYWJlbFxuICB7XG5jb2xvcjogd2hpdGU7XG4gIH1cblxuXG5cbiAgLmNlbnRlciB7XG4gICBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5mbGlwLWJveCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7IC8qIFJlbW92ZSB0aGlzIGlmIHlvdSBkb24ndCB3YW50IHRoZSAzRCBlZmZlY3QgKi9cbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIFRoaXMgY29udGFpbmVyIGlzIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuICAgICAgLmZsaXAtYm94LWlubmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xuICAgICAgLmZsaXAtYm94IC5mbGlwLWJveC1pbm5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuICAgICAgLmZsaXAtYm94LWZyb250LCAuZmxpcC1ib3gtYmFjayB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIFNhZmFyaSAqL1xuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xuICAgICAgXG4gICAgICBcbiAgICAgIC8qIFN0eWxlIHRoZSBiYWNrIHNpZGUgKi9cbiAgICAgIC5mbGlwLWJveC1iYWNrIHtcbiAgICAgICBcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB9XG4gICAgICBcbiAgICBcbiAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIFxuICAgICAvKiBpbWcge1xuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTE2LCAxMTYsIDExNik7XG4gICAgICB9Ki9cblxuICAgICAgXG4gICAgICBcbiAgICAgICAgICAgIFxuICAgICAgLmxhYmVsc2l6ZVxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IGxhcmdlIWltcG9ydGFudDtcbiAgICAgIH1cblxuXG4gIFxuXG5pb24tZmFiLWJ1dHRvblxue1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xubWFyZ2luLWxlZnQ6IDIzMHB4O1xubWFyZ2luLXRvcDogLTIwcHg7XG59XG5cblxuXG5cbmlvbi1yYWRpbzo6cGFydChjb250YWluZXIpIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcblxuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG59XG5cbmlvbi1yYWRpbzo6cGFydChtYXJrKSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW9uLXJhZGlvLnJhZGlvLWNoZWNrZWQ6OnBhcnQoY29udGFpbmVyKSB7XG4gIGJhY2tncm91bmQ6ICM2ODE1ZWM7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1yYWRpby5yYWRpby1jaGVja2VkOjpwYXJ0KG1hcmspIHtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAxMHB4O1xuXG4gIGJvcmRlci13aWR0aDogMHB4IDJweCAycHggMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG5cbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/add-coin/add-coin.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/add-coin/add-coin.page.ts ***!
      \*******************************************/

    /*! exports provided: AddCoinPage */

    /***/
    function srcAppAddCoinAddCoinPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCoinPage", function () {
        return AddCoinPage;
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

      var AddCoinPage = /*#__PURE__*/function () {
        function AddCoinPage(viewCtrl, camera, toastCtrl, loadingCtrl, navCtrl, service, firestore) {
          var _this = this;

          _classCallCheck(this, AddCoinPage);

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

          this.onSuccess1 = function (snapshot) {
            //this.currentImage = snapshot.downloadURL;
            setTimeout(function () {
              firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(_this.frontID).getDownloadURL().then(function (response) {
                _this.coinref.frontUrl = response;
                firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(_this.backID).getDownloadURL().then(function (response) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            this.coinref.backUrl = response;
                            this.addCoin(this.coinref);

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                });
              })["catch"](function (error) {
                return console.log('error', error);
              });
            }, 1000);
          };

          this.onError = function (error) {
            console.log("error", error);
          };

          if (!firebase__WEBPACK_IMPORTED_MODULE_8__["apps"].length) {
            firebase__WEBPACK_IMPORTED_MODULE_8__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].FIREBASE_CONFIG);
          }

          this.getCoins();
        }

        _createClass(AddCoinPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var task;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
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
                      task = this.uploadBack(this.backID);
                      task.then(this.onSuccess1, this.onError);

                      if (!this.formValidation()) {
                        _context2.next = 20;
                        break;
                      }

                      _context2.next = 15;
                      return this.loadingCtrl.create({
                        message: "Please Wait..."
                      });

                    case 15:
                      this.loading = _context2.sent;
                      this.loading.present();
                      this.coinref = x;
                      this.service.croppedImg = null;
                      this.service.croppedImg1 = null;

                    case 20:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getCameraFront",
          value: function getCameraFront() {
            var _this2 = this;

            this.camera.getPicture(this.options).then(function (imageData) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.imgURL = 'data:image/jpeg;base64,' + imageData;
                        this.selectedPhoto = this.dataURItoBlob('data:image/jpeg;base64,' + imageData); // this.loading = await this.loadingCtrl.create({
                        //   message: 'Please wait...'
                        // });
                        // this.loading.present();

                        this.cropModal(this.selectedPhoto, 1).then(this.selectedPhoto = this.service.croppedImg);

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }, function (err) {
              console.log(' error', err);
            });
          }
        }, {
          key: "getCameraBack",
          value: function getCameraBack() {
            var _this3 = this;

            this.camera.getPicture(this.options).then(function (imageData) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this.imgURL1 = 'data:image/jpeg;base64,' + imageData;
                        this.selectedPhoto1 = this.dataURItoBlob('data:image/jpeg;base64,' + imageData); // this.loading = await this.loadingCtrl.create({
                        //   message: 'Please wait...'
                        // });
                        // this.loading.present();

                        this.cropModal(this.selectedPhoto1, 2).then(this.selectedPhoto1 = this.service.croppedImg1);

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            }, function (err) {
              console.log('error', err);
            });
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            console.log("here"); // codej adapted from:
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
          key: "show",
          value: function show() {
            this.selectedPhoto = this.service.croppedImg;
            this.selectedPhoto1 = this.service.croppedImg1;
          }
        }, {
          key: "uploadFront",
          value: function uploadFront(x) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var uploadTask;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.selectedPhoto && this.formValidation()) {
                        uploadTask = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(x).put(this.dataURItoBlob(this.selectedPhoto), this.newMetadata);
                      } //this.loading.dismiss();


                      return _context5.abrupt("return", uploadTask);

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "uploadBack",
          value: function uploadBack(x) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var uploadTask;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      //this.loading.present();
                      if (this.selectedPhoto1 && this.formValidation()) {
                        uploadTask = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(x).put(this.dataURItoBlob(this.selectedPhoto1), this.newMetadata);
                      }

                      return _context6.abrupt("return", uploadTask);

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
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
          key: "dismiss",
          value: function dismiss() {
            this.service.croppedImg = null;
            this.service.croppedImg1 = null;
            this.viewCtrl.dismiss();
            this.getCoinsNoChange();
          }
        }, {
          key: "presentModal",
          value: function presentModal(x) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.viewCtrl.create({
                        component: _image_view_image_view_page__WEBPACK_IMPORTED_MODULE_4__["ImageViewPage"],
                        cssClass: 'my-custom-class',
                        componentProps: {
                          imgurl: x
                        }
                      });

                    case 2:
                      modal = _context7.sent;
                      _context7.next = 5;
                      return modal.present();

                    case 5:
                      return _context7.abrupt("return", _context7.sent);

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
          key: "addCoin",
          value: function addCoin(coin) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!this.formValidation()) {
                        _context9.next = 7;
                        break;
                      }

                      _context9.next = 3;
                      return this.firestore.collection("coins").add(coin);

                    case 3:
                      this.service.croppedImg = null;
                      this.service.croppedImg1 = null;
                      this.loading.dismiss(); //redirect to home page

                      this.dismiss();

                    case 7:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
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
              if (this.service.coinData[i].name == this.coin.name && this.service.coinData[i].deno == this.coin.deno && this.service.coinData[i].year == this.coin.year && this.service.coinData[i].mint == this.coin.mint) {
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
          key: "getCoins",
          value: function getCoins() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this4 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.loadingCtrl.create({
                        message: "Please Wait..."
                      });

                    case 2:
                      loader = _context10.sent;
                      loader.present();

                      try {
                        this.firestore.collection("coins").snapshotChanges().subscribe(function (data) {
                          _this4.coinsCheck = data.map(function (e) {
                            return {
                              name: e.payload.doc.data()["name"],
                              year: e.payload.doc.data()["year"],
                              deno: e.payload.doc.data()["deno"],
                              mint: e.payload.doc.data()["mint"]
                            };
                          });
                        }); // dismiss loader

                        loader.dismiss();
                      } catch (e) {
                        this.showToast(e);
                      }

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "getCoinsNoChange",
          value: function getCoinsNoChange() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this5 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.loadingCtrl.create({
                        message: "Please Wait..."
                      });

                    case 2:
                      loader = _context11.sent;
                      loader.present();

                      try {
                        this.firestore.collection("coins").snapshotChanges().subscribe(function (data) {
                          _this5.coinsCheck = data.map(function (e) {
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
                              backUrl: e.payload.doc.data()["backUrl"]
                            };
                          });
                        }); // dismiss loader

                        loader.dismiss();
                      } catch (e) {
                        this.showToast(e);
                      }

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return AddCoinPage;
      }();

      AddCoinPage.ctorParameters = function () {
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
          type: _temp_data_service__WEBPACK_IMPORTED_MODULE_7__["TempDataService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }];
      };

      AddCoinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-coin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-coin.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/add-coin/add-coin.page.html"))["default"],
        animations: [// Each unique animation requires its own trigger. The first argument of the trigger function is the name
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('rotatedState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'rotate(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'rotate(360deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms ease-in'))])],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-coin.page.scss */
        "./src/app/add-coin/add-coin.page.scss"))["default"]]
      })], AddCoinPage);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Fetching Image...'
                      });

                    case 2:
                      this.loading = _context12.sent;
                      this.loading.present();

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Rotating...'
                      });

                    case 2:
                      this.loading = _context13.sent;
                      this.loading.present();
                      this.canvasRotate++;

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "rotateLeft",
          value: function rotateLeft() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Rotating...'
                      });

                    case 2:
                      this.loading = _context14.sent;
                      this.loading.present();
                      this.canvasRotate--;

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
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
            var _this6 = this;

            this.storage.get('front').then(function (photos) {
              _this6.photosF = photos || [];
            });
            this.storage.get('back').then(function (photos) {
              _this6.photosB = photos || [];
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
//# sourceMappingURL=default~add-coin-add-coin-module~filter-filter-module~home-home-module-es5.js.map