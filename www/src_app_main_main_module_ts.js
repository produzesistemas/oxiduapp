"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_main_module_ts"],{

/***/ 9853:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 4332);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 5705:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 9853);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 4332);







let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 4332:
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.html?ngResource */ 8583);
/* harmony import */ var _main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.page.scss?ngResource */ 4982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/category.service */ 8722);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var _model_filter_default_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_model/filter-default-model */ 1165);
/* harmony import */ var _services_ion_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/ion-loading.service */ 240);
/* harmony import */ var _services_establishment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/establishment.service */ 5897);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);













let MainPage = class MainPage {
  constructor(categoryService, establishmentService, platform, ionLoaderService, toastController, formBuilder) {
    this.categoryService = categoryService;
    this.establishmentService = establishmentService;
    this.platform = platform;
    this.ionLoaderService = ionLoaderService;
    this.toastController = toastController;
    this.formBuilder = formBuilder;
    this.toggled = false;
    this.hasFilter = false;
    this.slideOpts = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay: true,
      speed: 400
    };
  }

  afterslidesLoad(slides) {
    slides.startAutoplay();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.states = _this.categoryService.getStates();
      _this.form = _this.formBuilder.group({
        search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
      });
    })();
  }

  filter(state) {
    var _this2 = this;

    return (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.networkStatus = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus();

      if (_this2.networkStatus.connected === false) {
        return _this2.presentToast("Dispositivo sem internet. Verifique a conexão e tente novamente.");
      }

      const filter = new _model_filter_default_model__WEBPACK_IMPORTED_MODULE_5__.FilterDefaultModel();

      _this2.ionLoaderService.simpleLoader().then(() => {
        filter.id = state.id;

        _this2.establishmentService.getByState(filter).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (establisments) {
            if (establisments.length === 0) {
              _this2.establishments = [];

              _this2.ionLoaderService.dismissLoader();

              return _this2.presentToast("Nenhum registro encontrado!");
            } else {
              _this2.establishments = establisments;
              _this2.titleFilter = _this2.establishments.length + ' encontrado(s) / ' + state.description;
              _this2.hasFilter = true;

              _this2.ionLoaderService.dismissLoader();
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    })();
  }

  presentToast(error) {
    var _this3 = this;

    return (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: error,
        duration: 2000,
        position: 'top'
      });
      toast.present();
    })();
  }

  getImage(nomeImage) {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.urlImagesEstablishment + nomeImage;
  }

  onBackFilter() {
    this.hasFilter = false;
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  search() {
    var _this4 = this;

    return (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.form.invalid) {
        return;
      }

      _this4.networkStatus = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus();

      if (_this4.networkStatus.connected === false) {
        return _this4.presentToast("Dispositivo sem internet. Verifique a conexão e tente novamente.");
      }

      const filter = new _model_filter_default_model__WEBPACK_IMPORTED_MODULE_5__.FilterDefaultModel();

      _this4.ionLoaderService.simpleLoader().then(() => {
        filter.name = _this4.form.controls.search.value;

        _this4.establishmentService.getByDescription(filter).subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (establisments) {
            if (establisments.length === 0) {
              _this4.establishments = [];

              _this4.ionLoaderService.dismissLoader();

              return _this4.presentToast("Nenhum registro encontrado!");
            } else {
              _this4.establishments = establisments;
              _this4.titleFilter = _this4.establishments.length + ' encontrado(s)';
              _this4.hasFilter = true;
              _this4.toggled = !_this4.toggled;

              _this4.ionLoaderService.dismissLoader();
            }
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
    })();
  }

};

MainPage.ctorParameters = () => [{
  type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService
}, {
  type: _services_establishment_service__WEBPACK_IMPORTED_MODULE_7__.EstablishmentService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
}, {
  type: _services_ion_loading_service__WEBPACK_IMPORTED_MODULE_6__.IonLoadingService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}];

MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-main',
  template: _main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MainPage);


/***/ }),

/***/ 4982:
/*!************************************************!*\
  !*** ./src/app/main/main.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: 8rem;\n}\n\nion-grid {\n  height: 100%;\n}\n\nion-grid ion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\nion-grid ion-row ion-col {\n  text-align: center;\n}\n\nion-card {\n  text-align: center;\n  box-shadow: none;\n}\n\nion-card ion-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-card ion-card-header ion-img {\n  width: 150px;\n  height: 150px;\n  object-fit: contain;\n}\n\n.card-partner {\n  border-left: 3px solid var(--ion-color-primary);\n}\n\nion-slides {\n  margin: 16px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDRSxrQkFBQTtBQUdOOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFTjs7QUFJQTtFQUNFLCtDQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA4cmVtO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGlvbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWltZ3tcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uY2FyZC1wYXJ0bmVyIHtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgbWFyZ2luOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 8583:
/*!************************************************!*\
  !*** ./src/app/main/main.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"!toggled\">Oxidu</ion-title>\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button (click)=\"toggle()\" *ngIf=\"!toggled\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"search()\" *ngIf=\"toggled\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <form [formGroup]=\"form\">\r\n      <ion-searchbar formControlName=\"search\" placeholder=\"Busque pelo nome\" *ngIf=\"toggled\" [showCancelButton]=\"true\"\r\n        (ionCancel)=\"toggle()\">\r\n      </ion-searchbar>\r\n    </form>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div id=\"container\">\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" #slider (ionSlidesDidLoad)=\"afterslidesLoad(slider)\">\r\n      <ion-slide>\r\n        <ion-img src=\"assets/bg4.png\"></ion-img>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <ion-img src=\"assets/bg3.png\"></ion-img>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <div *ngIf=\"!hasFilter\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-card color=\"light\" *ngFor=\"let state of states\" class=\"container\" (click)=\"filter(state)\">\r\n            <ion-col>\r\n              <ion-card-content>\r\n                <ion-text>\r\n                  <h6>{{ state.description }}</h6>\r\n                </ion-text>\r\n              </ion-card-content>\r\n            </ion-col>\r\n          </ion-card>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div *ngIf=\"hasFilter\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"1\">\r\n            <ion-icon color=\"primary\" (click)=\"onBackFilter()\" ios=\"arrow-back-outline\" md=\"arrow-back-sharp\"\r\n              size=\"large\" name=\"arrow-back-outline\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"10\">\r\n            <ion-text color=\"primary\">\r\n              <small>{{ titleFilter }} </small>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid>\r\n        <ion-row *ngFor=\"let establishment of establishments\">\r\n          <ion-col>\r\n            <ion-card color=\"light\" [ngClass]=\"{'card-partner': establishment.isPartner}\">\r\n              <ion-card-header>\r\n                <ion-img [src]=\"getImage(establishment.imageName)\"></ion-img>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <h2>{{ establishment.description }}</h2>\r\n                <h3>{{ establishment.city.description }} / {{\r\n                  establishment.city.state.description }}</h3>\r\n                <p *ngIf=\"establishment.email\">\r\n                  <ion-icon slot=\"start\" color=\"primary\" ios=\"mail-outline\" md=\"mail-sharp\" size=\"small\"></ion-icon> {{\r\n                  establishment.email }}\r\n                </p>\r\n                <p *ngIf=\"establishment.telephone\">\r\n                  <ion-icon slot=\"start\" color=\"primary\" ios=\"call-outline\" md=\"call-sharp\" size=\"small\"></ion-icon> {{\r\n                  establishment.telephone }}\r\n                </p>\r\n                <p *ngIf=\"establishment.whatsApp\">\r\n                  <ion-icon slot=\"start\" color=\"primary\" ios=\"logo-whatsapp\" md=\"logo-whatsapp\" size=\"small\"></ion-icon>\r\n                  {{ establishment.whatsApp }}\r\n                </p>\r\n                <p *ngIf=\"establishment.facebook\">\r\n                  <ion-icon slot=\"start\" color=\"primary\" ios=\"logo-facebook\" md=\"logo-facebook\" size=\"small\"></ion-icon>\r\n                  {{ establishment.facebook }}\r\n                </p>\r\n                <p *ngIf=\"establishment.instagram\">\r\n                  <ion-icon slot=\"start\" color=\"primary\" ios=\"logo-instagram\" md=\"logo-instagram\" size=\"small\">\r\n                  </ion-icon> {{ establishment.instagram }}\r\n                </p>\r\n                <p *ngIf=\"establishment.webSite\">\r\n                  <ion-icon slot=\"start\" color=\"primary\" ios=\"globe-outline\" md=\"globe-sharp\" size=\"small\"></ion-icon>\r\n                  {{ establishment.webSite }}\r\n                </p>\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n      <!-- <ion-list *ngFor=\"let establishment of establishments\">\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <ion-img [src]=\"getImage(establishment.imageName)\"></ion-img>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>{{ establishment.description }}</h2>\r\n            <h3>{{ establishment.city.description }} / {{\r\n              establishment.city.state.description }}</h3>\r\n            <p *ngIf=\"establishment.email\"><ion-icon slot=\"start\" color=\"primary\" ios=\"mail-outline\" md=\"mail-sharp\" size=\"small\"></ion-icon> {{ establishment.email }} </p>\r\n            <p *ngIf=\"establishment.telephone\"><ion-icon slot=\"start\" color=\"primary\" ios=\"call-outline\" md=\"call-sharp\" size=\"small\"></ion-icon> {{ establishment.telephone }} </p>\r\n            <p *ngIf=\"establishment.whatsApp\"><ion-icon slot=\"start\" color=\"primary\" ios=\"logo-whatsapp\" md=\"logo-whatsapp\" size=\"small\"></ion-icon> {{ establishment.whatsApp }} </p>\r\n            <p *ngIf=\"establishment.facebook\"><ion-icon slot=\"start\" color=\"primary\" ios=\"logo-facebook\" md=\"logo-facebook\" size=\"small\"></ion-icon> {{ establishment.facebook }} </p>\r\n            <p *ngIf=\"establishment.instagram\"><ion-icon slot=\"start\" color=\"primary\" ios=\"logo-instagram\" md=\"logo-instagram\" size=\"small\"></ion-icon> {{ establishment.instagram }} </p>\r\n            <p *ngIf=\"establishment.webSite\"><ion-icon slot=\"start\" color=\"primary\" ios=\"globe-outline\" md=\"globe-sharp\" size=\"small\"></ion-icon> {{ establishment.webSite }} </p>\r\n          </ion-label>\r\n          <ion-icon *ngIf=\"establishment.isPartner\" size=\"large\" name=\"close-circle\" slot=\"end\"></ion-icon>\r\n        </ion-item>\r\n      </ion-list> -->\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map