(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3486:
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth-Interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/authentication.service */ 8698);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);






let AuthInterceptor = class AuthInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.AUTH_HEADER = 'Authorization';
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.MerchantId = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.merchantId}`;
        this.MerchantKey = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.merchantKey}`;
    }
    intercept(req, next) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.authenticationService.getCurrentUser())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(token => {
            if (token !== null) {
                req = req.clone({
                    headers: req.headers.set(this.AUTH_HEADER, 'bearer ' + token.token)
                });
            }
            return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
                if (error && error.status === 401) {
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
                }
            }));
        }));
    }
    addHeaderCielo(request) {
        return request.clone({
            headers: request.headers.set('Content-Type', 'application/json')
                .set('MerchantId', this.MerchantId)
                .set('MerchantKey', this.MerchantKey),
            params: request.params.delete('Cielo', 'true')
        });
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
], AuthInterceptor);



/***/ }),

/***/ 3201:
/*!******************************************************!*\
  !*** ./src/app/_helpers/http-request.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpRequestInterceptor": () => (/* binding */ HttpRequestInterceptor)
/* harmony export */ });
/* harmony import */ var C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/authentication.service */ 8698);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);




 // import { NgxSpinnerService } from 'ngx-spinner';




let HttpRequestInterceptor = class HttpRequestInterceptor {
  // private countSpinner: number;
  constructor(authenticationService, // private toastr: ToastrService,
  toastController) {
    this.authenticationService = authenticationService;
    this.toastController = toastController; // this.countSpinner = 0;
  }

  intercept(request, next) {
    // this.countSpinner++;
    // this.spinner.show();
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {// this.countSpinner--;
      // if (this.countSpinner === 0) {
      //     // this.spinner.hide();
      // }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      const msgDefault = 'Falha na conexão, tente novamente.';

      if (err.status === 401) {
        // this.toastr.error('Acesso negado.', 'Atenção!');
        // this.authenticationService.logout();
        this.presentToast(err.error); // localStorage.clear();
        // location.reload();
      }

      if (err.status === 400) {
        console.log(err);

        if (Array.isArray(err.error)) {
          if (err.url === src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.urlSandboxRequisicaoCielo) {
            switch (err.error[0].Code) {
              case 126:
                // this.toastr.error('Data de expiração do cartão de crédito é inválida', 'Atenção!');
                break;

              case 999:
                // this.toastr.error('Problemas na identificação do cartão', 'Atenção!');
                break;

              case 104:
                // this.toastr.error('Cliente é obrigatório', 'Atenção!');
                break;

              case 105:
                // this.toastr.error('Cliente é obrigatório', 'Atenção!');
                break;

              case 146:
                // this.toastr.error('Código de segurança é inválido', 'Atenção!');
                break;

              case 129:
                // this.toastr.error('Meio de pagamento não vinculado a loja ou Provider inválido', 'Atenção!');
                break;

              default:
                // this.toastr.error('Código do erro ' + err.error[0].Code , 'Atenção!');
                break;
            }
          }
        } else {// this.toastr.error(err.error, 'Atenção!');
        }
      }

      if (err.status === 500) {// this.toastr.error(err.error, 'Atenção!');
      }

      if (err.status === 403) {// this.toastr.error('Acesso negado.', 'Atenção!');
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
    }));
  }

  presentToast(error) {
    var _this = this;

    return (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: error,
        duration: 2000,
        position: 'top'
      });
      toast.present();
    })();
  }

};

HttpRequestInterceptor.ctorParameters = () => [{
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}];

HttpRequestInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()], HttpRequestInterceptor);


/***/ }),

/***/ 8698:
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _genericHttpService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genericHttpService */ 5814);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 460);







let AuthenticationService = class AuthenticationService extends _genericHttpService__WEBPACK_IMPORTED_MODULE_2__.GenericHttpService {
  // private currentUserSubject: BehaviorSubject<any>;
  // public currentUser: BehaviorSubject<any>;
  constructor(http) {
    super(http);
    this.http = http;
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlApi}`;
    this.baseSite = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlApi}`; // this.currentUser = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('petixco_user')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  registerPartner(user) {
    return this.postAll('account/registerPartner', user);
  }

  registerMaster(user) {
    return this.postAll('account/registerMaster', user);
  }

  registerClient(user) {
    return this.postAll('account/registerClient', user);
  }

  getClientsStore() {
    return this.http.get(`${this.getUrlApi()}account/getClients`);
  }

  save(store) {
    return this.post('account/save', store);
  }

  login(user) {
    return this.postAll('account/login', user);
  }

  loginPartner(user) {
    return this.postAll('account/loginPartner', user);
  }

  getByFilter(filter) {
    return this.postAll('account/filter', filter);
  }

  register(user) {
    return this.postAll('account/register', user);
  }

  recoverPassword(user) {
    return this.postAll('account/recoverPassword', user);
  }

  deleteById(id) {
    return this.delete(`account/${id}`);
  }

  disableUser(user) {
    return this.postAll('account/disable', user);
  }

  enableUser(user) {
    return this.postAll('account/enable', user);
  }

  getClients() {
    return this.http.get(`${this.getUrlApi()}account/getClients`);
  }

  changePassword(user) {
    return this.postAll('account/changePassword', user);
  }

  confirmUser(user) {
    return this.postAll('account/confirm', user);
  }

  setObject(value) {
    return (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
        key: 'oxidu_user',
        value: JSON.stringify(value)
      });
    })();
  }

  getCurrentUser() {
    return (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ret = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({
        key: 'oxidu_user'
      });
      return JSON.parse(ret.value);
    })();
  }

  clear() {
    return (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.clear();
    })();
  }

};

AuthenticationService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}];

AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], AuthenticationService);


/***/ }),

/***/ 8722:
/*!***********************************************!*\
  !*** ./src/app/_services/category.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let CategoryService = class CategoryService {
    constructor() {
        this.categorys = [];
        this.states = [];
        this.load();
        this.loadStates();
    }
    load() {
        this.categorys.push({ id: 1, description: 'Esportes', icon: 'bicycle', open: false, subcategorys: [{
                    id: 1, description: "Pranchas de surf", active: true, categoryId: 1
                }] });
    }
    get() {
        return this.categorys;
    }
    getSubCategory(id) {
        return this.categorys.find(x => x.subcategorys.find(c => c.id === id));
    }
    loadStates() {
        this.states.push({ id: 1, description: 'Acre', sigla: 'AC', active: false });
        this.states.push({ id: 2, description: 'Alagoas', sigla: 'AL', active: true });
        this.states.push({ id: 3, description: 'Amapá', sigla: 'AP', active: true });
        this.states.push({ id: 4, description: 'Amazonas', sigla: 'AM', active: false });
        this.states.push({ id: 5, description: 'Bahia', sigla: 'BA', active: true });
        this.states.push({ id: 6, description: 'Ceará', sigla: 'CE', active: true });
        this.states.push({ id: 7, description: 'Distrito Federal', sigla: 'DF', active: false });
        this.states.push({ id: 8, description: 'Espírito Santo', sigla: 'ES', active: true });
        this.states.push({ id: 9, description: 'Goiás', sigla: 'GO', active: false });
        this.states.push({ id: 10, description: 'Maranhão', sigla: 'MA', active: true });
        this.states.push({ id: 11, description: 'Mato Grosso', sigla: 'MT', active: false });
        this.states.push({ id: 12, description: 'Mato Grosso do Sul', sigla: 'MS', active: false });
        this.states.push({ id: 13, description: 'Minas Gerais', sigla: 'MG', active: false });
        this.states.push({ id: 14, description: 'Pará', sigla: 'PA', active: true });
        this.states.push({ id: 15, description: 'Paraíba', sigla: 'PB', active: true });
        this.states.push({ id: 16, description: 'Paraná', sigla: 'PR', active: true });
        this.states.push({ id: 17, description: 'Pernambuco', sigla: 'PE', active: true });
        this.states.push({ id: 18, description: 'Piauí', sigla: 'PI', active: true });
        this.states.push({ id: 19, description: 'Rio de Janeiro', sigla: 'RJ', active: true });
        this.states.push({ id: 20, description: 'Rio Grande do Norte', sigla: 'RN', active: true });
        this.states.push({ id: 21, description: 'Rio Grande do Sul', sigla: 'RS', active: true });
        this.states.push({ id: 22, description: 'Rondônia', sigla: 'RO', active: false });
        this.states.push({ id: 23, description: 'Roraima', sigla: 'RR', active: false });
        this.states.push({ id: 24, description: 'Santa Catarina', sigla: 'SC', active: true });
        this.states.push({ id: 25, description: 'São Paulo', sigla: 'SP', active: true });
        this.states.push({ id: 26, description: 'Sergipe', sigla: 'SE', active: true });
        this.states.push({ id: 27, description: 'Tocantins', sigla: 'TO', active: false });
    }
    getStates() {
        return this.states.filter(x => x.active);
    }
    getState(id) {
        return this.states.find(x => x.id === id);
    }
};
CategoryService.ctorParameters = () => [];
CategoryService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], CategoryService);



/***/ }),

/***/ 5814:
/*!*************************************************!*\
  !*** ./src/app/_services/genericHttpService.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericHttpService": () => (/* binding */ GenericHttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);





let GenericHttpService = class GenericHttpService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getUrlApi() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlApi;
    }
    // protected getUrlApiCep() {
    //   return environment.urlApiCep;
    // }
    getAll(url) {
        return this.httpService.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlApi}` + url);
    }
    get(url) {
        return this.httpService.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlApi}` + url);
    }
    post(url, body) {
        return this.httpService.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlApi}` + url, body);
    }
    sendCielo(body) {
        return this.httpService.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlSandboxRequisicaoCielo}`, body, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('Cielo', 'true')
        });
    }
    getCielo(id) {
        return this.httpService.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlSandboxConsultaCielo}` + `{` + `${id}` + `}`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('Cielo', 'true')
        });
    }
    postAll(url, body) {
        return this.httpService.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlApi}` + url, body);
    }
    // public postAllCep(url: string, body: any): Observable<T[]> {
    //   return this.httpService.post<T[]>(`${environment.urlApiCep}` + url, body);
    // }
    delete(url) {
        return this.httpService.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlApi}` + url);
    }
    getHeaders(json) {
        return { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Access-Control-Allow-Origin', '*')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', 'Bearer') };
    }
    handleError(error) {
        console.log('Erro na requisição =>', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }
};
GenericHttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
GenericHttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], GenericHttpService);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_main_main_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 5705)).then(m => m.MainPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 6985)).then(m => m.AboutModule)
    },
    {
        path: 'establishment/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_establishment_establishment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./establishment/establishment.module */ 917)).then(m => m.EstablishmentPageModule)
    },
    {
        path: 'establishment-detail/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_establishment-detail_establishment-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./establishment-detail/establishment-detail.module */ 7493)).then(m => m.EstablishmentDetailPageModule)
    },
    {
        path: 'establishment-board-model/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_establishment-board-model_establishment-board-model_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./establishment-board-model/establishment-board-model.module */ 9774)).then(m => m.EstablishmentBoardModelPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/category.service */ 8722);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/app */ 3253);










let AppComponent = class AppComponent {
  constructor(categoryService, router, platform, toastController, routerOutlet, navCtrl) {
    this.categoryService = categoryService;
    this.router = router;
    this.platform = platform;
    this.toastController = toastController;
    this.routerOutlet = routerOutlet;
    this.navCtrl = navCtrl;
    this.toggle = false;
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (!this.routerOutlet.canGoBack()) {
        _capacitor_app__WEBPACK_IMPORTED_MODULE_5__.App.exitApp();
      }
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.states = _this.categoryService.getStates();
    })();
  }

  sidemenuClick() {
    this.toggle ? this.toggle = false : this.toggle = true;
  }

  filter(state) {
    var _this2 = this;

    return (0,C_Users_paulo_sergio_Documents_oxiduapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.networkStatus = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus();

      if (_this2.networkStatus.connected === false) {
        return _this2.presentToast("Dispositivo sem internet. Verifique a conexão e tente novamente.");
      }

      _this2.navCtrl.navigateForward(["establishment", state.id]);
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

  onMenu() {
    this.navCtrl.navigateForward(["about"]);
  }

};

AppComponent.ctorParameters = () => [{
  type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRouterOutlet
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_helpers_auth_Interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/_helpers/auth-Interceptor */ 3486);
/* harmony import */ var _app_helpers_http_request_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/_helpers/http-request.interceptor */ 3201);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule.forRoot()
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _app_helpers_http_request_interceptor__WEBPACK_IMPORTED_MODULE_3__.HttpRequestInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _app_helpers_auth_Interceptor__WEBPACK_IMPORTED_MODULE_2__.AuthInterceptor, multi: true },],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    version: '1.0.0',
    // urlApi: 'https://localhost:44359/api/',
    // urlImagesLojas: 'https://localhost:44359/Files/Store/',
    // urlImagesProducts: 'https://localhost:44359/Files/Product/',
    // urlImagesTails: 'https://localhost:44359/Files/Tail/',
    // urlImagesBottons: 'https://localhost:44359/Files/Bottom/',
    // urlImagesEstablishment: 'https://localhost:44359/Files/Establishment/',
    urlApi: 'https://oxidu.com.br/api/',
    urlImagesLojas: 'https://oxidu.com.br/Files/Store/',
    urlImagesProducts: 'https://oxidu.com.br/Files/Product/',
    urlImagesTails: 'https://oxidu.com.br/Files/Tail/',
    urlImagesBottons: 'https://oxidu.com.br/Files/Bottom/',
    urlImagesEstablishment: 'https://oxidu.com.br/Files/Establishment/',
    urlSandboxRequisicaoCielo: 'https://apisandbox.cieloecommerce.cielo.com.br/1/sales/',
    urlSandboxConsultaCielo: 'https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/',
    merchantId: 'cd516613-3c14-43ee-9f4b-8c4287e4dd19',
    merchantKey: 'DTBHFVOPAVILETWYGJIYKEUAUDNPRMPXTJTYVCNJ',
    urlCorreios: 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-img {\n  width: 40px;\n  height: 46px;\n  object-fit: contain;\n  margin-bottom: 10px;\n}\n\n.sub-item {\n  margin-left: 60px;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZ3tcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDZweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN1Yi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6NjBweDtcbiAgfVxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-item lines=\"none\">\n            <ion-img src = \"assets/logo_with_name.png\"></ion-img>\n          </ion-item>\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\" [routerLink]=\"['/home']\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"'home-outline'\" [md]=\"'home-sharp'\"></ion-icon>\n              <ion-label>Home</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n            <!-- <ion-item (click)=\"sidemenuClick()\" routerDirection=\"root\" [routerLink]=\"\" lines=\"none\" detail=\"false\"\n              routerLinkActive=\"selected\">\n              <ion-icon color=\"primary\" slot=\"start\" [ios]=\"'search-circle-outline'\" [md]=\"'search-circle-sharp'\"></ion-icon>\n              <ion-label>Busque pelo estado</ion-label>\n            </ion-item>\n\n            <div *ngIf=\"toggle\">\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" (click)=\"filter(state)\" *ngFor=\"let state of states;\" routerDirection=\"root\" [routerLink]=\"\"\n                  lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n                  <ion-label>{{ state.description }}</ion-label>\n                  <ion-icon slot=\"end\" [ios]=\"'chevron-forward-outline'\" [md]=\"'chevron-forward-outline'\"></ion-icon>\n                </ion-item>\n              </ion-menu-toggle>\n          </div> -->\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item routerDirection=\"root\"  (click)=\"onMenu()\" lines=\"none\" detail=\"false\" [routerLink]=\"\" routerLinkActive=\"selected\">\n              <ion-icon color=\"primary\" slot=\"start\" [ios]=\"'help-outline'\" [md]=\"'help-outline'\"></ion-icon>\n              <ion-label>Sobre</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map