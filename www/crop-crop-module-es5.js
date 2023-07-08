(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crop-crop-module"], {
    /***/
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js ***!
      \***********************************************************************************/

    /*! exports provided: ImageCropperComponent, ImageCropperModule, base64ToFile */

    /***/
    function node_modulesNgxImageCropper__ivy_ngcc__Fesm2015NgxImageCropperJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function () {
        return ImageCropperComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function () {
        return ImageCropperModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "base64ToFile", function () {
        return base64ToFile;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Black 2x1 JPEG, with the following meta information set:
      // - EXIF Orientation: 6 (Rotated 90° CCW)
      // Source: https://github.com/blueimp/JavaScript-Load-Image

      /** @type {?} */


      var _c0 = ["wrapper"];
      var _c1 = ["sourceImage"];

      function ImageCropperComponent_img_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.imageLoadedInView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.startMove($event, ctx_r7.moveTypes.Resize, "topleft");
          })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.startMove($event, ctx_r9.moveTypes.Resize, "topleft");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.startMove($event, ctx_r10.moveTypes.Resize, "topright");
          })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.startMove($event, ctx_r11.moveTypes.Resize, "topright");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.startMove($event, ctx_r12.moveTypes.Resize, "bottomright");
          })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.startMove($event, ctx_r13.moveTypes.Resize, "bottomright");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.startMove($event, ctx_r14.moveTypes.Resize, "bottomleft");
          })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.startMove($event, ctx_r15.moveTypes.Resize, "bottomleft");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.startMove($event, ctx_r16.moveTypes.Resize, "top");
          })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.startMove($event, ctx_r17.moveTypes.Resize, "top");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.startMove($event, ctx_r18.moveTypes.Resize, "right");
          })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.startMove($event, ctx_r19.moveTypes.Resize, "right");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.startMove($event, ctx_r20.moveTypes.Resize, "bottom");
          })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.startMove($event, ctx_r21.moveTypes.Resize, "bottom");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.startMove($event, ctx_r22.moveTypes.Resize, "left");
          })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.startMove($event, ctx_r23.moveTypes.Resize, "left");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ImageCropperComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.keyboardAccess($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.startMove($event, ctx_r26.moveTypes.Move);
          })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.startMove($event, ctx_r27.moveTypes.Move);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.cropper.y1, "px")("left", ctx_r2.cropper.x1, "px")("width", ctx_r2.cropper.x2 - ctx_r2.cropper.x1, "px")("height", ctx_r2.cropper.y2 - ctx_r2.cropper.y1, "px")("margin-left", ctx_r2.alignImage === "center" ? ctx_r2.marginLeft : null)("visibility", ctx_r2.imageVisible ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rounded", ctx_r2.roundCropper);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.hideResizeSquares);
        }
      }

      var testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' + 'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' + 'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' + 'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' + 'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' + 'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
      /**
       * @return {?}
       */

      function supportsAutomaticRotation() {
        return new Promise(
        /**
        * @param {?} resolve
        * @return {?}
        */
        function (resolve) {
          /** @type {?} */
          var img = new Image();

          img.onload =
          /**
          * @return {?}
          */
          function () {
            // Check if browser supports automatic image orientation:

            /** @type {?} */
            var supported = img.width === 1 && img.height === 2;
            resolve(supported);
          };

          img.src = testAutoOrientationImageURL;
        });
      }
      /**
       * @param {?} exifRotationOrBase64Image
       * @return {?}
       */


      function getTransformationsFromExifData(exifRotationOrBase64Image) {
        if (typeof exifRotationOrBase64Image === 'string') {
          exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
        }

        switch (exifRotationOrBase64Image) {
          case 2:
            return {
              rotate: 0,
              flip: true
            };

          case 3:
            return {
              rotate: 2,
              flip: false
            };

          case 4:
            return {
              rotate: 2,
              flip: true
            };

          case 5:
            return {
              rotate: 1,
              flip: true
            };

          case 6:
            return {
              rotate: 1,
              flip: false
            };

          case 7:
            return {
              rotate: 3,
              flip: true
            };

          case 8:
            return {
              rotate: 3,
              flip: false
            };

          default:
            return {
              rotate: 0,
              flip: false
            };
        }
      }
      /**
       * @param {?} imageBase64
       * @return {?}
       */


      function getExifRotation(imageBase64) {
        /** @type {?} */
        var view = new DataView(base64ToArrayBuffer(imageBase64));

        if (view.getUint16(0, false) != 0xFFD8) {
          return -2;
        }
        /** @type {?} */


        var length = view.byteLength;
        /** @type {?} */

        var offset = 2;

        while (offset < length) {
          if (view.getUint16(offset + 2, false) <= 8) return -1;
          /** @type {?} */

          var marker = view.getUint16(offset, false);
          offset += 2;

          if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
              return -1;
            }
            /** @type {?} */


            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            /** @type {?} */

            var tags = view.getUint16(offset, little);
            offset += 2;

            for (var i = 0; i < tags; i++) {
              if (view.getUint16(offset + i * 12, little) == 0x0112) {
                return view.getUint16(offset + i * 12 + 8, little);
              }
            }
          } else if ((marker & 0xFF00) != 0xFF00) {
            break;
          } else {
            offset += view.getUint16(offset, false);
          }
        }

        return -1;
      }
      /**
       * @param {?} imageBase64
       * @return {?}
       */


      function base64ToArrayBuffer(imageBase64) {
        imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        /** @type {?} */

        var binaryString = atob(imageBase64);
        /** @type {?} */

        var len = binaryString.length;
        /** @type {?} */

        var bytes = new Uint8Array(len);

        for (var i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        return bytes.buffer;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /*
       * Hermite resize - fast image resize/resample using Hermite filter.
       * https://github.com/viliusle/Hermite-resize
       */

      /**
       * @param {?} canvas
       * @param {?} width
       * @param {?} height
       * @return {?}
       */


      function resizeCanvas(canvas, width, height) {
        /** @type {?} */
        var width_source = canvas.width;
        /** @type {?} */

        var height_source = canvas.height;
        width = Math.round(width);
        height = Math.round(height);
        /** @type {?} */

        var ratio_w = width_source / width;
        /** @type {?} */

        var ratio_h = height_source / height;
        /** @type {?} */

        var ratio_w_half = Math.ceil(ratio_w / 2);
        /** @type {?} */

        var ratio_h_half = Math.ceil(ratio_h / 2);
        /** @type {?} */

        var ctx = canvas.getContext('2d');

        if (ctx) {
          /** @type {?} */
          var img = ctx.getImageData(0, 0, width_source, height_source);
          /** @type {?} */

          var img2 = ctx.createImageData(width, height);
          /** @type {?} */

          var data = img.data;
          /** @type {?} */

          var data2 = img2.data;

          for (var j = 0; j < height; j++) {
            for (var i = 0; i < width; i++) {
              /** @type {?} */
              var x2 = (i + j * width) * 4;
              /** @type {?} */

              var center_y = j * ratio_h;
              /** @type {?} */

              var weight = 0;
              /** @type {?} */

              var weights = 0;
              /** @type {?} */

              var weights_alpha = 0;
              /** @type {?} */

              var gx_r = 0;
              /** @type {?} */

              var gx_g = 0;
              /** @type {?} */

              var gx_b = 0;
              /** @type {?} */

              var gx_a = 0;
              /** @type {?} */

              var xx_start = Math.floor(i * ratio_w);
              /** @type {?} */

              var yy_start = Math.floor(j * ratio_h);
              /** @type {?} */

              var xx_stop = Math.ceil((i + 1) * ratio_w);
              /** @type {?} */

              var yy_stop = Math.ceil((j + 1) * ratio_h);
              xx_stop = Math.min(xx_stop, width_source);
              yy_stop = Math.min(yy_stop, height_source);

              for (var yy = yy_start; yy < yy_stop; yy++) {
                /** @type {?} */
                var dy = Math.abs(center_y - yy) / ratio_h_half;
                /** @type {?} */

                var center_x = i * ratio_w;
                /** @type {?} */

                var w0 = dy * dy;

                for (var xx = xx_start; xx < xx_stop; xx++) {
                  /** @type {?} */
                  var dx = Math.abs(center_x - xx) / ratio_w_half;
                  /** @type {?} */

                  var w = Math.sqrt(w0 + dx * dx);

                  if (w >= 1) {
                    //pixel too far
                    continue;
                  } //hermite filter


                  weight = 2 * w * w * w - 3 * w * w + 1;
                  /** @type {?} */

                  var pos_x = 4 * (xx + yy * width_source); //alpha

                  gx_a += weight * data[pos_x + 3];
                  weights_alpha += weight; //colors

                  if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
                  gx_r += weight * data[pos_x];
                  gx_g += weight * data[pos_x + 1];
                  gx_b += weight * data[pos_x + 2];
                  weights += weight;
                }
              }

              data2[x2] = gx_r / weights;
              data2[x2 + 1] = gx_g / weights;
              data2[x2 + 2] = gx_b / weights;
              data2[x2 + 3] = gx_a / weights_alpha;
            }
          }

          canvas.width = width;
          canvas.height = height; //draw

          ctx.putImageData(img2, 0, 0);
        }
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function MoveStart() {}

      if (false) {}
      /** @enum {string} */


      var MoveTypes = {
        Move: 'move',
        Resize: 'resize',
        Pinch: 'pinch'
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var ImageCropperComponent = /*#__PURE__*/function () {
        /**
         * @param {?} sanitizer
         * @param {?} cd
         */
        function ImageCropperComponent(sanitizer, cd) {
          _classCallCheck(this, ImageCropperComponent);

          this.sanitizer = sanitizer;
          this.cd = cd;
          this.Hammer = typeof window !== 'undefined' ?
          /** @type {?} */

          /** @type {?} */
          window.Hammer : null;
          this.setImageMaxSizeRetries = 0;
          this.cropperScaledMinWidth = 20;
          this.cropperScaledMinHeight = 20;
          this.exifTransform = {
            rotate: 0,
            flip: false
          };
          this.autoRotateSupported = supportsAutomaticRotation();
          this.stepSize = 3;
          this.marginLeft = '0px';
          this.imageVisible = false;
          this.moveTypes = MoveTypes;
          this.format = 'png';
          this.maintainAspectRatio = true;
          this.transform = {};
          this.aspectRatio = 1;
          this.resizeToWidth = 0;
          this.resizeToHeight = 0;
          this.cropperMinWidth = 0;
          this.cropperMinHeight = 0;
          this.cropperStaticWidth = 0;
          this.cropperStaticHeight = 0;
          this.canvasRotation = 0;
          this.initialStepSize = 3;
          this.roundCropper = false;
          this.onlyScaleDown = false;
          this.imageQuality = 92;
          this.autoCrop = true;
          this.containWithinAspectRatio = false;
          this.hideResizeSquares = false;
          this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
          };
          this.alignImage = 'center';
          this.disabled = false;
          this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.initCropper();
        }
        /**
         * @param {?} changes
         * @return {?}
         */


        _createClass(ImageCropperComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.cropperStaticHeight && this.cropperStaticWidth) {
              this.hideResizeSquares = true;
              this.cropperMinWidth = this.cropperStaticWidth;
              this.cropperMinHeight = this.cropperStaticHeight;
              this.maintainAspectRatio = false;
            }

            this.onChangesInputImage(changes);

            if (this.originalImage && this.originalImage.complete && this.exifTransform && (changes.containWithinAspectRatio || changes.canvasRotation)) {
              this.transformOriginalImage();
            }

            if (changes.cropper) {
              this.setMaxSize();
              this.setCropperScaledMinSize();
              this.checkCropperPosition(false);
              this.doAutoCrop();
              this.cd.markForCheck();
            }

            if (changes.aspectRatio && this.imageVisible) {
              this.resetCropperPosition();
            }

            if (changes.transform) {
              this.transform = this.transform || {};
              this.setCssTransform();
              this.doAutoCrop();
            }
          }
          /**
           * @private
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "onChangesInputImage",
          value: function onChangesInputImage(changes) {
            if (changes.imageChangedEvent || changes.imageURL || changes.imageBase64 || changes.imageFile) {
              this.initCropper();
            }

            if (changes.imageChangedEvent && this.isValidImageChangedEvent()) {
              this.loadImageFile(this.imageChangedEvent.target.files[0]);
            }

            if (changes.imageURL && this.imageURL) {
              this.loadImageFromURL(this.imageURL);
            }

            if (changes.imageBase64 && this.imageBase64) {
              this.loadBase64Image(this.imageBase64);
            }

            if (changes.imageFile && this.imageFile) {
              this.loadImageFile(this.imageFile);
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "isValidImageChangedEvent",
          value: function isValidImageChangedEvent() {
            return this.imageChangedEvent && this.imageChangedEvent.target && this.imageChangedEvent.target.files && this.imageChangedEvent.target.files.length > 0;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "setCssTransform",
          value: function setCssTransform() {
            this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' + 'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' + 'rotate(' + (this.transform.rotate || 0) + 'deg)');
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.stepSize = this.initialStepSize;
            this.activatePinchGesture();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "initCropper",
          value: function initCropper() {
            this.imageVisible = false;
            this.transformedImage = null;
            this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
            this.moveStart = {
              active: false,
              type: null,
              position: null,
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 0,
              clientX: 0,
              clientY: 0
            };
            this.maxSize = {
              width: 0,
              height: 0
            };
            this.originalSize = {
              width: 0,
              height: 0
            };
            this.transformedSize = {
              width: 0,
              height: 0
            };
            this.cropper.x1 = -100;
            this.cropper.y1 = -100;
            this.cropper.x2 = 10000;
            this.cropper.y2 = 10000;
          }
          /**
           * @private
           * @param {?} imageBase64
           * @param {?} imageType
           * @return {?}
           */

        }, {
          key: "loadImage",
          value: function loadImage(imageBase64, imageType) {
            if (this.isValidImageType(imageType)) {
              this.loadBase64Image(imageBase64);
            } else {
              this.loadImageFailed.emit();
            }
          }
          /**
           * @private
           * @param {?} file
           * @return {?}
           */

        }, {
          key: "loadImageFile",
          value: function loadImageFile(file) {
            var _this = this;

            /** @type {?} */
            var fileReader = new FileReader();

            fileReader.onload =
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this.loadImage(event.target.result, file.type);
            };

            fileReader.readAsDataURL(file);
          }
          /**
           * @private
           * @param {?} type
           * @return {?}
           */

        }, {
          key: "isValidImageType",
          value: function isValidImageType(type) {
            return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(type);
          }
          /**
           * @private
           * @param {?} imageBase64
           * @return {?}
           */

        }, {
          key: "loadBase64Image",
          value: function loadBase64Image(imageBase64) {
            var _this2 = this;

            this.autoRotateSupported.then(
            /**
            * @param {?} supported
            * @return {?}
            */
            function (supported) {
              return _this2.checkExifAndLoadBase64Image(imageBase64, supported);
            }).then(
            /**
            * @return {?}
            */
            function () {
              return _this2.transformOriginalImage();
            })["catch"](
            /**
            * @param {?} error
            * @return {?}
            */
            function (error) {
              _this2.loadImageFailed.emit();

              _this2.originalImage = null;
              _this2.originalBase64 = null;
              console.error(error);
            });
          }
          /**
           * @private
           * @param {?} imageBase64
           * @param {?} autoRotateSupported
           * @return {?}
           */

        }, {
          key: "checkExifAndLoadBase64Image",
          value: function checkExifAndLoadBase64Image(imageBase64, autoRotateSupported) {
            var _this3 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              _this3.originalImage = new Image();

              _this3.originalImage.onload =
              /**
              * @return {?}
              */
              function () {
                _this3.originalBase64 = imageBase64;
                _this3.exifTransform = getTransformationsFromExifData(autoRotateSupported ? -1 : imageBase64);
                _this3.originalSize.width = _this3.originalImage.naturalWidth;
                _this3.originalSize.height = _this3.originalImage.naturalHeight;
                resolve();
              };

              _this3.originalImage.onerror = reject;
              _this3.originalImage.src = imageBase64;
            });
          }
          /**
           * @private
           * @param {?} url
           * @return {?}
           */

        }, {
          key: "loadImageFromURL",
          value: function loadImageFromURL(url) {
            var _this4 = this;

            /** @type {?} */
            var img = new Image();

            img.onerror =
            /**
            * @return {?}
            */
            function () {
              return _this4.loadImageFailed.emit();
            };

            img.onload =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var canvas = document.createElement('canvas');
              /** @type {?} */

              var context = canvas.getContext('2d');
              canvas.width = img.width;
              canvas.height = img.height;
              context.drawImage(img, 0, 0);

              _this4.loadBase64Image(canvas.toDataURL());
            };

            img.crossOrigin = 'anonymous';
            img.src = url;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "transformOriginalImage",
          value: function transformOriginalImage() {
            if (!this.originalImage || !this.originalImage.complete || !this.exifTransform) {
              return Promise.reject(new Error('No image loaded'));
            }
            /** @type {?} */


            var transformedBase64 = this.transformImageBase64();
            return this.setTransformedImage(transformedBase64);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "transformImageBase64",
          value: function transformImageBase64() {
            /** @type {?} */
            var canvasRotation = this.canvasRotation + this.exifTransform.rotate;

            if (canvasRotation === 0 && !this.exifTransform.flip && !this.containWithinAspectRatio) {
              return this.originalBase64;
            }
            /** @type {?} */


            var transformedSize = this.getTransformedSize();
            /** @type {?} */

            var canvas = document.createElement('canvas');
            canvas.width = transformedSize.width;
            canvas.height = transformedSize.height;
            /** @type {?} */

            var ctx = canvas.getContext('2d');
            ctx.setTransform(this.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
            ctx.rotate(Math.PI * (canvasRotation / 2));
            ctx.drawImage(this.originalImage, -this.originalSize.width / 2, -this.originalSize.height / 2);
            return canvas.toDataURL();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getTransformedSize",
          value: function getTransformedSize() {
            /** @type {?} */
            var canvasRotation = this.canvasRotation + this.exifTransform.rotate;

            if (this.containWithinAspectRatio) {
              if (canvasRotation % 2) {
                /** @type {?} */
                var minWidthToContain = this.originalSize.width * this.aspectRatio;
                /** @type {?} */

                var minHeightToContain = this.originalSize.height / this.aspectRatio;
                return {
                  width: Math.max(this.originalSize.height, minWidthToContain),
                  height: Math.max(this.originalSize.width, minHeightToContain)
                };
              } else {
                /** @type {?} */
                var _minWidthToContain = this.originalSize.height * this.aspectRatio;
                /** @type {?} */


                var _minHeightToContain = this.originalSize.width / this.aspectRatio;

                return {
                  width: Math.max(this.originalSize.width, _minWidthToContain),
                  height: Math.max(this.originalSize.height, _minHeightToContain)
                };
              }
            }

            if (canvasRotation % 2) {
              return {
                height: this.originalSize.width,
                width: this.originalSize.height
              };
            }

            return {
              width: this.originalSize.width,
              height: this.originalSize.height
            };
          }
          /**
           * @private
           * @param {?} transformedBase64
           * @return {?}
           */

        }, {
          key: "setTransformedImage",
          value: function setTransformedImage(transformedBase64) {
            var _this5 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              _this5.transformedBase64 = transformedBase64;
              _this5.safeImgDataUrl = _this5.sanitizer.bypassSecurityTrustResourceUrl(transformedBase64);
              _this5.transformedImage = new Image();

              _this5.transformedImage.onload =
              /**
              * @return {?}
              */
              function () {
                _this5.transformedSize.width = _this5.transformedImage.naturalWidth;
                _this5.transformedSize.height = _this5.transformedImage.naturalHeight;

                _this5.cd.markForCheck();

                resolve();
              };

              _this5.transformedImage.src = _this5.transformedBase64;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "imageLoadedInView",
          value: function imageLoadedInView() {
            var _this6 = this;

            if (this.transformedImage != null) {
              this.imageLoaded.emit();
              this.setImageMaxSizeRetries = 0;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this6.checkImageMaxSizeRecursively();
              });
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "checkImageMaxSizeRecursively",
          value: function checkImageMaxSizeRecursively() {
            var _this7 = this;

            if (this.setImageMaxSizeRetries > 40) {
              this.loadImageFailed.emit();
            } else if (this.sourceImageLoaded()) {
              this.setMaxSize();
              this.setCropperScaledMinSize();
              this.resetCropperPosition();
              this.cropperReady.emit(Object.assign({}, this.maxSize));
              this.cd.markForCheck();
            } else {
              this.setImageMaxSizeRetries++;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this7.checkImageMaxSizeRecursively();
              }, 50);
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "sourceImageLoaded",
          value: function sourceImageLoaded() {
            return this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onResize",
          value: function onResize() {
            this.resizeCropperPosition();
            this.setMaxSize();
            this.setCropperScaledMinSize();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "activatePinchGesture",
          value: function activatePinchGesture() {
            if (this.Hammer) {
              /** @type {?} */
              var hammer = new this.Hammer(this.wrapper.nativeElement);
              hammer.get('pinch').set({
                enable: true
              });
              hammer.on('pinchmove', this.onPinch.bind(this));
              hammer.on('pinchend', this.pinchStop.bind(this));
              hammer.on('pinchstart', this.startPinch.bind(this));
            } else if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
              console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "resizeCropperPosition",
          value: function resizeCropperPosition() {
            /** @type {?} */
            var sourceImageElement = this.sourceImage.nativeElement;

            if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
              this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
              this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
              this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
              this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "resetCropperPosition",
          value: function resetCropperPosition() {
            /** @type {?} */
            var sourceImageElement = this.sourceImage.nativeElement;

            if (this.cropperStaticHeight && this.cropperStaticWidth) {
              this.cropper.x1 = 0;
              this.cropper.x2 = sourceImageElement.offsetWidth > this.cropperStaticWidth ? this.cropperStaticWidth : sourceImageElement.offsetWidth;
              this.cropper.y1 = 0;
              this.cropper.y2 = sourceImageElement.offsetHeight > this.cropperStaticHeight ? this.cropperStaticHeight : sourceImageElement.offsetHeight;
            } else {
              if (!this.maintainAspectRatio) {
                this.cropper.x1 = 0;
                this.cropper.x2 = sourceImageElement.offsetWidth;
                this.cropper.y1 = 0;
                this.cropper.y2 = sourceImageElement.offsetHeight;
              } else if (sourceImageElement.offsetWidth / this.aspectRatio < sourceImageElement.offsetHeight) {
                this.cropper.x1 = 0;
                this.cropper.x2 = sourceImageElement.offsetWidth;
                /** @type {?} */

                var cropperHeight = sourceImageElement.offsetWidth / this.aspectRatio;
                this.cropper.y1 = (sourceImageElement.offsetHeight - cropperHeight) / 2;
                this.cropper.y2 = this.cropper.y1 + cropperHeight;
              } else {
                this.cropper.y1 = 0;
                this.cropper.y2 = sourceImageElement.offsetHeight;
                /** @type {?} */

                var cropperWidth = sourceImageElement.offsetHeight * this.aspectRatio;
                this.cropper.x1 = (sourceImageElement.offsetWidth - cropperWidth) / 2;
                this.cropper.x2 = this.cropper.x1 + cropperWidth;
              }
            }

            this.doAutoCrop();
            this.imageVisible = true;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "keyboardAccess",
          value: function keyboardAccess(event) {
            this.changeKeyboardStepSize(event);
            this.keyboardMoveCropper(event);
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "changeKeyboardStepSize",
          value: function changeKeyboardStepSize(event) {
            if (event.key >= '1' && event.key <= '9') {
              this.stepSize = +event.key;
              return;
            }
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "keyboardMoveCropper",
          value: function keyboardMoveCropper(event) {
            /** @type {?} */
            var keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

            if (!keyboardWhiteList.includes(event.key)) {
              return;
            }
            /** @type {?} */


            var moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
            /** @type {?} */

            var position = event.altKey ? this.getInvertedPositionForKey(event.key) : this.getPositionForKey(event.key);
            /** @type {?} */

            var moveEvent = this.getEventForKey(event.key, this.stepSize);
            event.preventDefault();
            event.stopPropagation();
            this.startMove({
              clientX: 0,
              clientY: 0
            }, moveType, position);
            this.moveImg(moveEvent);
            this.moveStop();
          }
          /**
           * @private
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "getPositionForKey",
          value: function getPositionForKey(key) {
            switch (key) {
              case 'ArrowUp':
                return 'top';

              case 'ArrowRight':
                return 'right';

              case 'ArrowDown':
                return 'bottom';

              case 'ArrowLeft':
              default:
                return 'left';
            }
          }
          /**
           * @private
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "getInvertedPositionForKey",
          value: function getInvertedPositionForKey(key) {
            switch (key) {
              case 'ArrowUp':
                return 'bottom';

              case 'ArrowRight':
                return 'left';

              case 'ArrowDown':
                return 'top';

              case 'ArrowLeft':
              default:
                return 'right';
            }
          }
          /**
           * @private
           * @param {?} key
           * @param {?} stepSize
           * @return {?}
           */

        }, {
          key: "getEventForKey",
          value: function getEventForKey(key, stepSize) {
            switch (key) {
              case 'ArrowUp':
                return {
                  clientX: 0,
                  clientY: stepSize * -1
                };

              case 'ArrowRight':
                return {
                  clientX: stepSize,
                  clientY: 0
                };

              case 'ArrowDown':
                return {
                  clientX: 0,
                  clientY: stepSize
                };

              case 'ArrowLeft':
              default:
                return {
                  clientX: stepSize * -1,
                  clientY: 0
                };
            }
          }
          /**
           * @param {?} event
           * @param {?} moveType
           * @param {?=} position
           * @return {?}
           */

        }, {
          key: "startMove",
          value: function startMove(event, moveType) {
            var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (this.moveStart && this.moveStart.active && this.moveStart.type === MoveTypes.Pinch) {
              return;
            }

            if (event.preventDefault) {
              event.preventDefault();
            }

            this.moveStart = Object.assign({
              active: true,
              type: moveType,
              position: position,
              clientX: this.getClientX(event),
              clientY: this.getClientY(event)
            }, this.cropper);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "startPinch",
          value: function startPinch(event) {
            if (!this.safeImgDataUrl) {
              return;
            }

            if (event.preventDefault) {
              event.preventDefault();
            }

            this.moveStart = Object.assign({
              active: true,
              type: MoveTypes.Pinch,
              position: 'center',
              clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
              clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2
            }, this.cropper);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "moveImg",
          value: function moveImg(event) {
            if (this.moveStart.active) {
              if (event.stopPropagation) {
                event.stopPropagation();
              }

              if (event.preventDefault) {
                event.preventDefault();
              }

              if (this.moveStart.type === MoveTypes.Move) {
                this.move(event);
                this.checkCropperPosition(true);
              } else if (this.moveStart.type === MoveTypes.Resize) {
                if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
                  this.resize(event);
                }

                this.checkCropperPosition(false);
              }

              this.cd.detectChanges();
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onPinch",
          value: function onPinch(event) {
            if (this.moveStart.active) {
              if (event.stopPropagation) {
                event.stopPropagation();
              }

              if (event.preventDefault) {
                event.preventDefault();
              }

              if (this.moveStart.type === MoveTypes.Pinch) {
                this.resize(event);
                this.checkCropperPosition(false);
              }

              this.cd.detectChanges();
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "setMaxSize",
          value: function setMaxSize() {
            if (this.sourceImage) {
              /** @type {?} */
              var sourceImageElement = this.sourceImage.nativeElement;
              this.maxSize.width = sourceImageElement.offsetWidth;
              this.maxSize.height = sourceImageElement.offsetHeight;
              this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "setCropperScaledMinSize",
          value: function setCropperScaledMinSize() {
            if (this.transformedImage) {
              this.setCropperScaledMinWidth();
              this.setCropperScaledMinHeight();
            } else {
              this.cropperScaledMinWidth = 20;
              this.cropperScaledMinHeight = 20;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "setCropperScaledMinWidth",
          value: function setCropperScaledMinWidth() {
            this.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.transformedImage.width * this.maxSize.width) : 20;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "setCropperScaledMinHeight",
          value: function setCropperScaledMinHeight() {
            if (this.maintainAspectRatio) {
              this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.aspectRatio);
            } else if (this.cropperMinHeight > 0) {
              this.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.transformedImage.height * this.maxSize.height);
            } else {
              this.cropperScaledMinHeight = 20;
            }
          }
          /**
           * @private
           * @param {?=} maintainSize
           * @return {?}
           */

        }, {
          key: "checkCropperPosition",
          value: function checkCropperPosition() {
            var maintainSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.cropper.x1 < 0) {
              this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
              this.cropper.x1 = 0;
            }

            if (this.cropper.y1 < 0) {
              this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
              this.cropper.y1 = 0;
            }

            if (this.cropper.x2 > this.maxSize.width) {
              this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
              this.cropper.x2 = this.maxSize.width;
            }

            if (this.cropper.y2 > this.maxSize.height) {
              this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
              this.cropper.y2 = this.maxSize.height;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "moveStop",
          value: function moveStop() {
            if (this.moveStart.active) {
              this.moveStart.active = false;
              this.doAutoCrop();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "pinchStop",
          value: function pinchStop() {
            if (this.moveStart.active) {
              this.moveStart.active = false;
              this.doAutoCrop();
            }
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "move",
          value: function move(event) {
            /** @type {?} */
            var diffX = this.getClientX(event) - this.moveStart.clientX;
            /** @type {?} */

            var diffY = this.getClientY(event) - this.moveStart.clientY;
            this.cropper.x1 = this.moveStart.x1 + diffX;
            this.cropper.y1 = this.moveStart.y1 + diffY;
            this.cropper.x2 = this.moveStart.x2 + diffX;
            this.cropper.y2 = this.moveStart.y2 + diffY;
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "resize",
          value: function resize(event) {
            /** @type {?} */
            var diffX = this.getClientX(event) - this.moveStart.clientX;
            /** @type {?} */

            var diffY = this.getClientY(event) - this.moveStart.clientY;

            switch (this.moveStart.position) {
              case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                break;

              case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;

              case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;

              case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;

              case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                break;

              case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;

              case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;

              case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;

              case 'center':
                /** @type {?} */
                var scale = event.scale;
                /** @type {?} */

                var newWidth = Math.abs(this.moveStart.x2 - this.moveStart.x1) * scale;
                /** @type {?} */

                var newHeight = Math.abs(this.moveStart.y2 - this.moveStart.y1) * scale;
                /** @type {?} */

                var x1 = this.cropper.x1;
                /** @type {?} */

                var y1 = this.cropper.y1;
                this.cropper.x1 = Math.min(this.moveStart.clientX - newWidth / 2, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.clientY - newHeight / 2, this.cropper.y2 - this.cropperScaledMinHeight);
                this.cropper.x2 = Math.max(this.moveStart.clientX + newWidth / 2, x1 + this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.clientY + newHeight / 2, y1 + this.cropperScaledMinHeight);
                break;
            }

            if (this.maintainAspectRatio) {
              this.checkAspectRatio();
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "checkAspectRatio",
          value: function checkAspectRatio() {
            /** @type {?} */
            var overflowX = 0;
            /** @type {?} */

            var overflowY = 0;

            switch (this.moveStart.position) {
              case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x1 += overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'right':
              case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'left':
              case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x1 += overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'center':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                /** @type {?} */

                var overflowX1 = Math.max(0 - this.cropper.x1, 0);
                /** @type {?} */

                var overflowX2 = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                /** @type {?} */

                var overflowY1 = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                /** @type {?} */

                var overflowY2 = Math.max(0 - this.cropper.y1, 0);

                if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
                  this.cropper.x1 += overflowY1 * this.aspectRatio > overflowX1 ? overflowY1 * this.aspectRatio : overflowX1;
                  this.cropper.x2 -= overflowY2 * this.aspectRatio > overflowX2 ? overflowY2 * this.aspectRatio : overflowX2;
                  this.cropper.y1 += overflowY2 * this.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / this.aspectRatio;
                  this.cropper.y2 -= overflowY1 * this.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / this.aspectRatio;
                }

                break;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "doAutoCrop",
          value: function doAutoCrop() {
            if (this.autoCrop) {
              this.crop();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "crop",
          value: function crop() {
            if (this.sourceImage && this.sourceImage.nativeElement && this.transformedImage != null) {
              this.startCropImage.emit();
              /** @type {?} */

              var imagePosition = this.getImagePosition();
              /** @type {?} */

              var width = imagePosition.x2 - imagePosition.x1;
              /** @type {?} */

              var height = imagePosition.y2 - imagePosition.y1;
              /** @type {?} */

              var cropCanvas =
              /** @type {?} */
              document.createElement('canvas');
              cropCanvas.width = width;
              cropCanvas.height = height;
              /** @type {?} */

              var ctx = cropCanvas.getContext('2d');

              if (ctx) {
                if (this.backgroundColor != null) {
                  ctx.fillStyle = this.backgroundColor;
                  ctx.fillRect(0, 0, width, height);
                }
                /** @type {?} */


                var scaleX = (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1);
                /** @type {?} */

                var scaleY = (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1);
                ctx.setTransform(scaleX, 0, 0, scaleY, this.transformedSize.width / 2, this.transformedSize.height / 2);
                ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
                ctx.rotate((this.transform.rotate || 0) * Math.PI / 180);
                ctx.drawImage(this.transformedImage, -this.transformedSize.width / 2, -this.transformedSize.height / 2);
                /** @type {?} */

                var output = {
                  width: width,
                  height: height,
                  imagePosition: imagePosition,
                  cropperPosition: Object.assign({}, this.cropper)
                };

                if (this.containWithinAspectRatio) {
                  output.offsetImagePosition = this.getOffsetImagePosition();
                }
                /** @type {?} */


                var resizeRatio = this.getResizeRatio(width, height);

                if (resizeRatio !== 1) {
                  output.width = Math.round(width * resizeRatio);
                  output.height = this.maintainAspectRatio ? Math.round(output.width / this.aspectRatio) : Math.round(height * resizeRatio);
                  resizeCanvas(cropCanvas, output.width, output.height);
                }

                output.base64 = this.cropToBase64(cropCanvas);
                this.imageCropped.emit(output);
                return output;
              }
            }

            return null;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getImagePosition",
          value: function getImagePosition() {
            /** @type {?} */
            var sourceImageElement = this.sourceImage.nativeElement;
            /** @type {?} */

            var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
            /** @type {?} */

            var out = {
              x1: Math.round(this.cropper.x1 * ratio),
              y1: Math.round(this.cropper.y1 * ratio),
              x2: Math.round(this.cropper.x2 * ratio),
              y2: Math.round(this.cropper.y2 * ratio)
            };

            if (!this.containWithinAspectRatio) {
              out.x1 = Math.max(out.x1, 0);
              out.y1 = Math.max(out.y1, 0);
              out.x2 = Math.min(out.x2, this.transformedSize.width);
              out.y2 = Math.min(out.y2, this.transformedSize.height);
            }

            return out;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getOffsetImagePosition",
          value: function getOffsetImagePosition() {
            /** @type {?} */
            var canvasRotation = this.canvasRotation + this.exifTransform.rotate;
            /** @type {?} */

            var sourceImageElement = this.sourceImage.nativeElement;
            /** @type {?} */

            var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
            /** @type {?} */

            var offsetX;
            /** @type {?} */

            var offsetY;

            if (canvasRotation % 2) {
              offsetX = (this.transformedSize.width - this.originalSize.height) / 2;
              offsetY = (this.transformedSize.height - this.originalSize.width) / 2;
            } else {
              offsetX = (this.transformedSize.width - this.originalSize.width) / 2;
              offsetY = (this.transformedSize.height - this.originalSize.height) / 2;
            }
            /** @type {?} */


            var out = {
              x1: Math.round(this.cropper.x1 * ratio) - offsetX,
              y1: Math.round(this.cropper.y1 * ratio) - offsetY,
              x2: Math.round(this.cropper.x2 * ratio) - offsetX,
              y2: Math.round(this.cropper.y2 * ratio) - offsetY
            };

            if (!this.containWithinAspectRatio) {
              out.x1 = Math.max(out.x1, 0);
              out.y1 = Math.max(out.y1, 0);
              out.x2 = Math.min(out.x2, this.transformedSize.width);
              out.y2 = Math.min(out.y2, this.transformedSize.height);
            }

            return out;
          }
          /**
           * @private
           * @param {?} cropCanvas
           * @return {?}
           */

        }, {
          key: "cropToBase64",
          value: function cropToBase64(cropCanvas) {
            return cropCanvas.toDataURL('image/' + this.format, this.getQuality());
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getQuality",
          value: function getQuality() {
            return Math.min(1, Math.max(0, this.imageQuality / 100));
          }
          /**
           * @param {?} width
           * @param {?} height
           * @return {?}
           */

        }, {
          key: "getResizeRatio",
          value: function getResizeRatio(width, height) {
            /** @type {?} */
            var ratioWidth = this.resizeToWidth / width;
            /** @type {?} */

            var ratioHeight = this.resizeToHeight / height;
            /** @type {?} */

            var ratios = new Array();

            if (this.resizeToWidth > 0) {
              ratios.push(ratioWidth);
            }

            if (this.resizeToHeight > 0) {
              ratios.push(ratioHeight);
            }
            /** @type {?} */


            var result = ratios.length === 0 ? 1 : Math.min.apply(Math, ratios);

            if (result > 1 && !this.onlyScaleDown) {
              return result;
            }

            return Math.min(result, 1);
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "getClientX",
          value: function getClientX(event) {
            return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "getClientY",
          value: function getClientY(event) {
            return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
          }
        }]);

        return ImageCropperComponent;
      }();

      ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) {
        return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ImageCropperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageCropperComponent,
        selectors: [["image-cropper"]],
        viewQuery: function ImageCropperComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
          }
        },
        hostVars: 4,
        hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() {
              return ctx.onResize();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) {
              return ctx.moveImg($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) {
              return ctx.moveImg($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() {
              return ctx.moveStop();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function ImageCropperComponent_touchend_HostBindingHandler() {
              return ctx.moveStop();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx.alignImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
          }
        },
        inputs: {
          format: "format",
          maintainAspectRatio: "maintainAspectRatio",
          transform: "transform",
          aspectRatio: "aspectRatio",
          resizeToWidth: "resizeToWidth",
          resizeToHeight: "resizeToHeight",
          cropperMinWidth: "cropperMinWidth",
          cropperMinHeight: "cropperMinHeight",
          cropperStaticWidth: "cropperStaticWidth",
          cropperStaticHeight: "cropperStaticHeight",
          canvasRotation: "canvasRotation",
          initialStepSize: "initialStepSize",
          roundCropper: "roundCropper",
          onlyScaleDown: "onlyScaleDown",
          imageQuality: "imageQuality",
          autoCrop: "autoCrop",
          containWithinAspectRatio: "containWithinAspectRatio",
          hideResizeSquares: "hideResizeSquares",
          cropper: "cropper",
          alignImage: "alignImage",
          disabled: "disabled",
          imageChangedEvent: "imageChangedEvent",
          imageURL: "imageURL",
          imageBase64: "imageBase64",
          imageFile: "imageFile",
          backgroundColor: "backgroundColor"
        },
        outputs: {
          imageCropped: "imageCropped",
          startCropImage: "startCropImage",
          imageLoaded: "imageLoaded",
          cropperReady: "cropperReady",
          loadImageFailed: "loadImageFailed"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 10,
        consts: [["wrapper", ""], ["class", "source-image", 3, "src", "visibility", "transform", "load", 4, "ngIf"], [1, "overlay"], ["class", "cropper", "tabindex", "0", 3, "rounded", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "source-image", 3, "src", "load"], ["sourceImage", ""], ["tabindex", "0", 1, "cropper", 3, "keydown"], [1, "move", 3, "mousedown", "touchstart"], [4, "ngIf"], [1, "resize", "topleft", 3, "mousedown", "touchstart"], [1, "square"], [1, "resize", "top"], [1, "resize", "topright", 3, "mousedown", "touchstart"], [1, "resize", "right"], [1, "resize", "bottomright", 3, "mousedown", "touchstart"], [1, "resize", "bottom"], [1, "resize", "bottomleft", 3, "mousedown", "touchstart"], [1, "resize", "left"], [1, "resize-bar", "top", 3, "mousedown", "touchstart"], [1, "resize-bar", "right", 3, "mousedown", "touchstart"], [1, "resize-bar", "bottom", 3, "mousedown", "touchstart"], [1, "resize-bar", "left", 3, "mousedown", "touchstart"]],
        template: function ImageCropperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_img_2_Template, 2, 5, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageCropperComponent_div_4_Template, 3, 15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:focus   .move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{display:none}"],
        changeDetection: 0
      });
      /** @nocollapse */

      ImageCropperComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      ImageCropperComponent.propDecorators = {
        wrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['wrapper', {
            "static": true
          }]
        }],
        sourceImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sourceImage', {
            "static": false
          }]
        }],
        imageChangedEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageURL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageBase64: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maintainAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transform: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        aspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resizeToWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resizeToHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cropperMinWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cropperMinHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cropperStaticWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cropperStaticHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        canvasRotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialStepSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roundCropper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onlyScaleDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageQuality: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoCrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containWithinAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideResizeSquares: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cropper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        alignImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.text-align']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.disabled']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageCropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        startCropImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        imageLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cropperReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        loadImageFailed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize']
        }],
        moveImg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mousemove', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:touchmove', ['$event']]
        }],
        moveStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mouseup']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:touchend']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'image-cropper',
            template: "<div [style.background]=\"imageVisible && backgroundColor\"\n     #wrapper\n>\n    <img\n      #sourceImage\n      class=\"source-image\"\n      *ngIf=\"safeImgDataUrl\"\n      [src]=\"safeImgDataUrl\"\n      [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n      [style.transform]=\"safeTransformStyle\"\n      (load)=\"imageLoadedInView()\"\n    />\n    <div\n        class=\"overlay\"\n        [style.width.px]=\"maxSize.width\"\n        [style.height.px]=\"maxSize.height\"\n        [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n    ></div>\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         (keydown)=\"keyboardAccess($event)\"\n         tabindex=\"0\"\n    >\n        <div\n            (mousedown)=\"startMove($event, moveTypes.Move)\"\n            (touchstart)=\"startMove($event, moveTypes.Move)\"\n            class=\"move\">\n        </div>\n        <ng-container *ngIf=\"!hideResizeSquares\">\n            <span class=\"resize topleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize top\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize topright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize right\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottom\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize left\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize-bar top\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\n            </span>\n            <span class=\"resize-bar right\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\n            </span>\n            <span class=\"resize-bar bottom\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\n            </span>\n            <span class=\"resize-bar left\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\n            </span>\n        </ng-container>\n    </div>\n</div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.source-image{max-width:100%;max-height:100%;transform-origin:center}:host .overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper:focus .move{border-color:#1e90ff;border-width:2px}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}:host .cropper.rounded .move{border-radius:100%}:host.disabled .cropper .move,:host.disabled .cropper .resize,:host.disabled .cropper .resize-bar{display:none}"]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maintainAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          transform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          aspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          resizeToWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          resizeToHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cropperMinWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cropperMinHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cropperStaticWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cropperStaticHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          canvasRotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          initialStepSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          roundCropper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onlyScaleDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageQuality: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoCrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          containWithinAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideResizeSquares: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cropper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          alignImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.text-align']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.disabled']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageCropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          startCropImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          imageLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cropperReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          loadImageFailed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * @return {?}
           */
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          moveImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchmove', ['$event']]
          }],

          /**
           * @return {?}
           */
          moveStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchend']
          }],
          wrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wrapper', {
              "static": true
            }]
          }],
          sourceImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sourceImage', {
              "static": false
            }]
          }],
          imageChangedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageBase64: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ImageCropperModule = function ImageCropperModule() {
        _classCallCheck(this, ImageCropperModule);
      };

      ImageCropperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ImageCropperModule
      });
      ImageCropperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ImageCropperModule_Factory(t) {
          return new (t || ImageCropperModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageCropperModule, {
          declarations: function declarations() {
            return [ImageCropperComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [ImageCropperComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [ImageCropperComponent],
            exports: [ImageCropperComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} base64Image
       * @return {?}
       */


      function base64ToFile(base64Image) {
        /** @type {?} */
        var split = base64Image.split(',');
        /** @type {?} */

        var type = split[0].replace('data:', '').replace(';base64', '');
        /** @type {?} */

        var byteString = atob(split[1]);
        /** @type {?} */

        var ab = new ArrayBuffer(byteString.length);
        /** @type {?} */

        var ia = new Uint8Array(ab);

        for (var i = 0; i < byteString.length; i += 1) {
          ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ab], {
          type: type
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-image-cropper.js.map

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


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title><strong style=\"text-align:center ;\">Crop Image </strong> <ion-icon style=\"margin: 5px;font-weight: 500;\" name=\"crop-sharp\"></ion-icon></ion-title>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <image-cropper *ngIf=\"imgTocrop\"\r\n  [imageFile]=\"imgTocrop\"\r\n  [maintainAspectRatio]=\"true\"\r\n  [aspectRatio]=\" 2 / 2\"\r\n  [roundCropper]=\"true\"\r\n  [imageQuality]=\"100\"\r\n  [canvasRotation]=\"canvasRotate\"\r\n  (imageLoaded)=\"imageLoaded()\"\r\n  format=\"jpeg\"\r\n  (imageCropped)=\"imageCropped($event)\"\r\n \r\n></image-cropper>\r\n<ion-grid *ngIf=\"imgTocrop\" style=\"position: fixed;\">\r\n  <ion-row>\r\n    <ion-col>\r\n      \r\n<ion-button color=\"medium\" expand=\"full\"   (click)=\"rotateRight()\">Rotate Right <img src=\"assets/RR.png\" alt=\"\" ></ion-button>\r\n    </ion-col>\r\n  \r\n    <ion-col>\r\n      <ion-button  color=\"light\" expand=\"full\"   (click)=\"rotateLeft()\">Rotate Left <img src=\"assets/LL.png\" alt=\"\" ></ion-button>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button *ngIf=\"imgTocrop\" expand=\"full\" style=\"text-align: center;\" color=\"danger\"  (click)=\"cancel()\">Cancel</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button *ngIf=\"imgTocrop\" expand=\"full\" style=\"text-align: center;\" color=\"primary\"  (click)=\"crop()\">Crop</ion-button>\r\n    </ion-col>\r\n    \r\n  </ion-row>\r\n</ion-grid>\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/crop/crop-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/crop/crop-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: CropPageRoutingModule */

    /***/
    function srcAppCropCropRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropPageRoutingModule", function () {
        return CropPageRoutingModule;
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


      var _crop_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./crop.page */
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

      var routes = [{
        path: '',
        component: _crop_page__WEBPACK_IMPORTED_MODULE_2__["CropPage"]
      }];

      var CropPageRoutingModule = function CropPageRoutingModule() {
        _classCallCheck(this, CropPageRoutingModule);
      };

      CropPageRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], CropPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/crop/crop.module.ts":
    /*!*************************************!*\
      !*** ./src/app/crop/crop.module.ts ***!
      \*************************************/

    /*! exports provided: CropPageModule */

    /***/
    function srcAppCropCropModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropPageModule", function () {
        return CropPageModule;
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


      var _crop_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./crop-routing.module */
      "./src/app/crop/crop-routing.module.ts");
      /* harmony import */


      var _crop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./crop.page */
      "./src/app/crop/crop.page.ts");
      /* harmony import */


      var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-image-cropper */
      "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CropPageModule = function CropPageModule() {
        _classCallCheck(this, CropPageModule);
      };

      CropPageModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _crop_routing_module__WEBPACK_IMPORTED_MODULE_4__["CropPageRoutingModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"]],
        declarations: [_crop_page__WEBPACK_IMPORTED_MODULE_5__["CropPage"]]
      })], CropPageModule);
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
            var _this8 = this;

            this.storage.get('front').then(function (photos) {
              _this8.photosF = photos || [];
            });
            this.storage.get('back').then(function (photos) {
              _this8.photosB = photos || [];
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
//# sourceMappingURL=crop-crop-module-es5.js.map