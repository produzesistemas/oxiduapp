"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_establishment-detail_establishment-detail_module_ts"],{

/***/ 6562:
/*!*****************************************************************************!*\
  !*** ./src/app/establishment-detail/establishment-detail-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstablishmentDetailPageRoutingModule": () => (/* binding */ EstablishmentDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _establishment_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./establishment-detail.page */ 5211);




const routes = [
    {
        path: '',
        component: _establishment_detail_page__WEBPACK_IMPORTED_MODULE_0__.EstablishmentDetailPage
    },
];
let EstablishmentDetailPageRoutingModule = class EstablishmentDetailPageRoutingModule {
};
EstablishmentDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EstablishmentDetailPageRoutingModule);



/***/ }),

/***/ 7493:
/*!*********************************************************************!*\
  !*** ./src/app/establishment-detail/establishment-detail.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstablishmentDetailPageModule": () => (/* binding */ EstablishmentDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _establishment_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./establishment-detail.page */ 5211);
/* harmony import */ var _establishment_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./establishment-detail-routing.module */ 6562);







let EstablishmentDetailPageModule = class EstablishmentDetailPageModule {
};
EstablishmentDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _establishment_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.EstablishmentDetailPageRoutingModule
        ],
        declarations: [_establishment_detail_page__WEBPACK_IMPORTED_MODULE_0__.EstablishmentDetailPage]
    })
], EstablishmentDetailPageModule);



/***/ }),

/***/ 5211:
/*!*******************************************************************!*\
  !*** ./src/app/establishment-detail/establishment-detail.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstablishmentDetailPage": () => (/* binding */ EstablishmentDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _establishment_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./establishment-detail.page.html?ngResource */ 6299);
/* harmony import */ var _establishment_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./establishment-detail.page.scss?ngResource */ 9317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _services_board_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/board-model.service */ 5119);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/category.service */ 8722);
/* harmony import */ var _services_establishment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/establishment.service */ 5897);
/* harmony import */ var _services_ion_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/ion-loading.service */ 240);










let EstablishmentDetailPage = class EstablishmentDetailPage {
    constructor(activatedRoute, establishmentService, boardModelService, ionLoaderService, router, categoryService) {
        this.activatedRoute = activatedRoute;
        this.establishmentService = establishmentService;
        this.boardModelService = boardModelService;
        this.ionLoaderService = ionLoaderService;
        this.router = router;
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.establishmentId = this.activatedRoute.snapshot.paramMap.get('id');
        this.ionLoaderService.simpleLoader().then(() => {
            this.establishmentService.getById(Number(this.establishmentId)).subscribe(result => {
                this.establishment = result;
                this.title = this.establishment.description;
                this.ionLoaderService.dismissLoader();
            });
        });
    }
    getImage(nomeImage) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.urlImagesEstablishment + nomeImage;
    }
    onOrder() {
        this.router.navigate([`establishment-board-model/${this.establishment.id}`]);
    }
};
EstablishmentDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _services_establishment_service__WEBPACK_IMPORTED_MODULE_5__.EstablishmentService },
    { type: _services_board_model_service__WEBPACK_IMPORTED_MODULE_3__.BoardModelService },
    { type: _services_ion_loading_service__WEBPACK_IMPORTED_MODULE_6__.IonLoadingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__.CategoryService }
];
EstablishmentDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-establishment-detail',
        template: _establishment_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_establishment_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EstablishmentDetailPage);



/***/ }),

/***/ 9317:
/*!********************************************************************************!*\
  !*** ./src/app/establishment-detail/establishment-detail.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-img {\n  width: 150px;\n  height: 150px;\n  object-fit: contain;\n}\n\n.bottomRow {\n  margin-top: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdGFibGlzaG1lbnQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQyxtQkFBQTtFQUNBLHVCQUFBO0FBQ0w7O0FBRWdCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNwQjs7QUFFZ0I7RUFFRSxpQkFBQTtBQUFsQiIsImZpbGUiOiJlc3RhYmxpc2htZW50LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWltZ3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ib3R0b21Sb3dcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaW9uLWNhcmR7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgaW9uLWltZ3tcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgXHJcbiJdfQ== */";

/***/ }),

/***/ 6299:
/*!********************************************************************************!*\
  !*** ./src/app/establishment-detail/establishment-detail.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ title }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <!-- <ion-header collapse=\"condense\">\r\n      <ion-toolbar>\r\n        <ion-title size=\"large\">{{ title }}</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header> -->\r\n\r\n  <div *ngIf=\"establishment\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n              <ion-img [src]=\"getImage(establishment.imageName)\"></ion-img>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text color=\"dark\">\r\n              <h5>{{ establishment.description }}</h5>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text color=\"dark\">\r\n              <h5 [innerHTML]=\"establishment.details\"></h5>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"establishment.email\">\r\n          <ion-col>\r\n            <ion-icon ios=\"mail-outline\" md=\"mail-sharp\" size=\"large\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"bottomRow\" *ngIf=\"establishment.email\">\r\n          <ion-col>\r\n            <ion-text color=\"dark\">\r\n              <h5>{{ establishment.email }}</h5>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"establishment.telephone\">\r\n          <ion-col>\r\n            <ion-icon ios=\"call-outline\" md=\"call-sharp\" size=\"large\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"bottomRow\" *ngIf=\"establishment.telephone\">\r\n          <ion-col>\r\n            <ion-text color=\"dark\">\r\n              <h5>{{ establishment.telephone }}</h5>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"establishment.facebook\">\r\n          <ion-col>\r\n            <ion-icon ios=\"logo-facebook\" md=\"logo-facebook\" size=\"large\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"bottomRow\" *ngIf=\"establishment.facebook\">\r\n          <ion-col>\r\n            <ion-text color=\"dark\">\r\n              <h5>{{ establishment.facebook }}</h5>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"establishment.instagram\">\r\n          <ion-col>\r\n            <ion-icon ios=\"logo-instagram\" md=\"logo-instagram\" size=\"large\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"bottomRow\" *ngIf=\"establishment.instagram\">\r\n          <ion-col>\r\n            <ion-text color=\"dark\">\r\n              <h5>{{ establishment.instagram }}</h5>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"establishment.webSite\">\r\n          <ion-col>\r\n            <ion-icon ios=\"globe-outline\" md=\"globe-sharp\" size=\"large\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"establishment.webSite\" class=\"bottomRow\">\r\n          <ion-col>\r\n            <ion-text color=\"dark\">\r\n              <h5>{{ establishment.webSite }}</h5>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"establishment.city\">\r\n          <ion-col>\r\n            <ion-icon ios=\"location-outline\" md=\"location-sharp\" size=\"large\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"bottomRow\"\r\n          *ngIf=\"establishment.publicPlace && establishment.postalCode && establishment.district\">\r\n          <ion-col>\r\n            <ion-text color=\"dark\">\r\n              <h5>{{ establishment.publicPlace }}, {{ establishment.postalCode }}, {{ establishment.district }}</h5>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"bottomRow\" *ngIf=\"establishment.city\">\r\n          <ion-col>\r\n            <ion-text color=\"dark\">\r\n              <h5>{{ establishment.city.description }} / {{ establishment.city.state.description }}</h5>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!-- <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" fill=\"outline\" (click)=\"onOrder()\">Encomenda</ion-button>\r\n      </ion-col>\r\n    </ion-row> -->\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_establishment-detail_establishment-detail_module_ts.js.map