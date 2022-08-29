"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_establishment-board-model_establishment-board-model_module_ts"],{

/***/ 5267:
/*!***************************************************************************************!*\
  !*** ./src/app/establishment-board-model/establishment-board-model-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstablishmentBoardModelRoutingModule": () => (/* binding */ EstablishmentBoardModelRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _establishment_board_model_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./establishment-board-model.page */ 1247);




const routes = [
    {
        path: '',
        component: _establishment_board_model_page__WEBPACK_IMPORTED_MODULE_0__.EstablishmentBoardModelPage
    },
];
let EstablishmentBoardModelRoutingModule = class EstablishmentBoardModelRoutingModule {
};
EstablishmentBoardModelRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EstablishmentBoardModelRoutingModule);



/***/ }),

/***/ 9774:
/*!*******************************************************************************!*\
  !*** ./src/app/establishment-board-model/establishment-board-model.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstablishmentBoardModelPageModule": () => (/* binding */ EstablishmentBoardModelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _establishment_board_model_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./establishment-board-model-routing.module */ 5267);
/* harmony import */ var _establishment_board_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./establishment-board-model.page */ 1247);







let EstablishmentBoardModelPageModule = class EstablishmentBoardModelPageModule {
};
EstablishmentBoardModelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _establishment_board_model_routing_module__WEBPACK_IMPORTED_MODULE_0__.EstablishmentBoardModelRoutingModule
        ],
        declarations: [_establishment_board_model_page__WEBPACK_IMPORTED_MODULE_1__.EstablishmentBoardModelPage]
    })
], EstablishmentBoardModelPageModule);



/***/ }),

/***/ 1247:
/*!*****************************************************************************!*\
  !*** ./src/app/establishment-board-model/establishment-board-model.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstablishmentBoardModelPage": () => (/* binding */ EstablishmentBoardModelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _establishment_board_model_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./establishment-board-model.page.html?ngResource */ 6626);
/* harmony import */ var _establishment_board_model_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./establishment-board-model.page.scss?ngResource */ 3848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _model_filter_default_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_model/filter-default-model */ 1165);
/* harmony import */ var _services_ion_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/ion-loading.service */ 240);
/* harmony import */ var _services_board_model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/board-model.service */ 5119);









let EstablishmentBoardModelPage = class EstablishmentBoardModelPage {
    constructor(activatedRoute, boardModelService, ionLoaderService, router) {
        this.activatedRoute = activatedRoute;
        this.boardModelService = boardModelService;
        this.ionLoaderService = ionLoaderService;
        this.router = router;
    }
    ngOnInit() {
        this.parameter = this.activatedRoute.snapshot.paramMap.get('id');
        const filter = new _model_filter_default_model__WEBPACK_IMPORTED_MODULE_3__.FilterDefaultModel();
        filter.establishmentId = Number(this.parameter);
        this.ionLoaderService.simpleLoader().then(() => {
            this.boardModelService.filterAnonymous(filter).subscribe(result => {
                this.boardModels = result;
                this.ionLoaderService.dismissLoader();
            });
        });
    }
    getImage(nomeImage) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.urlImagesLojas + nomeImage;
    }
    detail(establishment) {
        this.router.navigate([`establishment-board-model-detail/${establishment.id}`]);
    }
};
EstablishmentBoardModelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_board_model_service__WEBPACK_IMPORTED_MODULE_5__.BoardModelService },
    { type: _services_ion_loading_service__WEBPACK_IMPORTED_MODULE_4__.IonLoadingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
EstablishmentBoardModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-establishment-board-model',
        template: _establishment_board_model_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_establishment_board_model_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EstablishmentBoardModelPage);



/***/ }),

/***/ 3848:
/*!******************************************************************************************!*\
  !*** ./src/app/establishment-board-model/establishment-board-model.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3RhYmxpc2htZW50LWJvYXJkLW1vZGVsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6626:
/*!******************************************************************************************!*\
  !*** ./src/app/establishment-board-model/establishment-board-model.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"establishment-detail\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Encomenda</ion-title>\r\n    </ion-toolbar>\r\n    </ion-header>\r\n    \r\n    <ion-content [fullscreen]=\"true\">\r\n      <ion-header collapse=\"condense\">\r\n        <ion-toolbar>\r\n          <ion-title size=\"large\">Encomenda</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n\r\n    <div id=\"container\">\r\n        <ion-card *ngFor=\"let boardModel of boardModels\" (click)=\"detail(boardModel)\">\r\n          <ion-card-header class=\"ion-no-padding\">\r\n              <ion-img [src]=\"getImage(boardModel.imageName)\"></ion-img>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"ion-margin-top\">\r\n            <ion-card-title>{{ boardModel.name }}</ion-card-title>\r\n            <!-- <ion-card-subtitle>{{ boardModel.city.description }} / {{ boardModel.city.state.description }}</ion-card-subtitle> -->\r\n          </ion-card-content>\r\n        </ion-card>   \r\n    </div>\r\n\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_establishment-board-model_establishment-board-model_module_ts.js.map