"use strict";
(self["webpackChunkPosts"] = self["webpackChunkPosts"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



// import { AppComponent } from './app.component';
// import { HomeComponent } from './user/home/home.component';
const routes = [{
  path: '',
  redirectTo: '/user',
  pathMatch: 'full'
}, {
  path: 'user',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./user/user.module */ 90)).then(m => m.UserModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _user_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/header/header.component */ 4310);
/* harmony import */ var _user_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/footer/footer.component */ 2433);
/* harmony import */ var _user_trending_hashtags_posts_trending_hashtags_posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/trending-hashtags-posts/trending-hashtags-posts.component */ 4173);
/* harmony import */ var _user_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/instructions/instructions.component */ 5864);






class AppComponent {
  constructor() {
    this.title = 'Posts';
    this.windowWidth = window.innerWidth;
  }
  ngOnInit() {}
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }
  },
  decls: 9,
  vars: 0,
  consts: [[1, "container"], [1, "navContainer"], [1, "mainContainer"], [1, "sideContainer"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-instructions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-trending-hashtags-posts")(8, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _user_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _user_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _user_trending_hashtags_posts_trending_hashtags_posts_component__WEBPACK_IMPORTED_MODULE_2__.TrendingHashtagsPostsComponent, _user_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_3__.InstructionsComponent],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  gap: 10px;\n}\n.container[_ngcontent-%COMP%]   .navContainer[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.128), -5px -5px 10px rgba(0, 0, 0, 0.075);\n}\n.container[_ngcontent-%COMP%]   .mainContainer[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 100%;\n  position: relative;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.144);\n}\n.container[_ngcontent-%COMP%]   .sideContainer[_ngcontent-%COMP%] {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.179);\n  height: 100%;\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.container[_ngcontent-%COMP%]   .sideContainer[_ngcontent-%COMP%]   app-trending-hashtags-posts[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vRnJvbnQlMjBFbmQlMjBXZWJzaXRlL0Jlc3QlMjBDb2RlJTIwVGVtcGxldGUlMjBpJTIwd3JvdGUvQW5ndWxhciUyMGxlYXJuaW5nJTIwY2xhc3MvQmxvZy1Qb3N0JTIwV2Vic2l0ZS91c2luZyUyMGZpcmViYXNlJTIwYXBpL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNwQkY7O0FEd0JFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFSixhQUFBO0VBQ0EsU0FBQTtBQ3RCQTtBRHVCSTtFQUVFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0ZBQUE7QUN0Qk47QUR3Qkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBQ0EsNkNBQUE7QUN4Qk47QUQwQkk7RUFDRSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUN4Qk47QUQwQk07RUFDRSxXQUFBO0FDeEJSIiwic291cmNlc0NvbnRlbnQiOlsiLy8gOmhvc3R7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICBkaXNwbGF5OiBmbGV4OyAgXHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICB9XHJcbi8vIGFwcC1oZWFkZXIsYXBwLWZvb3RlcntcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG4vLyAubWFpbkNvbnRhaW5lcntcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgd2lkdGg6IDgwJTtcclxuLy8gICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIHBhZGRpbmc6IDElO1xyXG4vLyB9XHJcblxyXG46aG9zdHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7ICBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4vLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbmhlaWdodDogMTAwdmg7XHJcbmdhcDogMTBweDtcclxuICAgIC5uYXZDb250YWluZXJ7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMjgpLC01cHggLTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xyXG4gICAgfVxyXG4gICAgLm1haW5Db250YWluZXJ7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAvLyBwYWRkaW5nOiAyJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE0NCk7XHJcbiAgICB9XHJcbiAgICAuc2lkZUNvbnRhaW5lcntcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNzkpO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgXHJcbiAgICAgIGFwcC10cmVuZGluZy1oYXNodGFncy1wb3N0c3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGdhcDogMTBweDtcbn1cbi5jb250YWluZXIgLm5hdkNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMjgpLCAtNXB4IC01cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbn1cbi5jb250YWluZXIgLm1haW5Db250YWluZXIge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNDQpO1xufVxuLmNvbnRhaW5lciAuc2lkZUNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTc5KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGFpbmVyIC5zaWRlQ29udGFpbmVyIGFwcC10cmVuZGluZy1oYXNodGFncy1wb3N0cyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 6208);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.module */ 90);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/app */ 6140);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);

















const firebaseConfig = {
  apiKey: "AIzaSyDaIfEelWZ13gCWHM6lWhp_kLQgrI3AiSQ",
  authDomain: "social-app-posts.firebaseapp.com",
  projectId: "social-app-posts",
  storageBucket: "social-app-posts.appspot.com",
  messagingSenderId: "514282961247",
  appId: "1:514282961247:web:fe085e1d2c4f0b51575eea"
};
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _user_user_module__WEBPACK_IMPORTED_MODULE_3__.UserModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule.forRoot(),
  // AngularFireModule.initializeApp(environment.firebaseConfig),
  // AngularFirestoreModule
  (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.initializeApp)(firebaseConfig)), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getFirestore)()), (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.getAuth)())]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _user_user_module__WEBPACK_IMPORTED_MODULE_3__.UserModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.FirebaseAppModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.FirestoreModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.AuthModule]
  });
})();

/***/ }),

/***/ 5541:
/*!***********************************!*\
  !*** ./src/app/server.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerService: () => (/* binding */ ServerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class ServerService {
  constructor(http) {
    this.http = http;
    this.baseUrl = 'http://localhost:3000';
    this.userUrl = 'http://localhost:3000/users';
  }
  getAllUser() {
    return this.http.get(`${this.userUrl}`);
  }
  addUser(data) {
    return this.http.post(`${this.userUrl}`, data);
  }
  getUser(userId) {
    return this.http.get(`${this.userUrl}/${userId}`);
  }
  patchUser(userId, userData) {
    return this.http.patch(`${this.userUrl}/${userId}`, userData);
  }
  updateUser(userId, userData) {
    const patchData = {
      ...userData
    };
    return this.http.patch(`${this.userUrl}/${userId}`, patchData);
  }
}
ServerService.ɵfac = function ServerService_Factory(t) {
  return new (t || ServerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ServerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ServerService,
  factory: ServerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3772:
/*!*******************************************!*\
  !*** ./src/app/shared/caching.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CachingService: () => (/* binding */ CachingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CachingService {
  constructor() {
    this.cache = {};
  }
  set(key, data) {
    this.cache[key] = data;
  }
  get(key) {
    return this.cache[key];
  }
  clear() {
    this.cache = {};
  }
}
CachingService.ɵfac = function CachingService_Factory(t) {
  return new (t || CachingService)();
};
CachingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CachingService,
  factory: CachingService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6873:
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);


class DataService {
  constructor() {
    this.userInstructions = true;
    this.editMode = false;
    this.userId = sessionStorage.getItem('userId');
    // userId: any = 'ParagUnhale1998';
    this.userName = sessionStorage.getItem('userName');
    this.userProfilePic = sessionStorage.getItem('userProfilePic');
    this.userIsRegister = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getUserIsRegisteredFromLocalStorage());
    this.userIsRegister$ = this.userIsRegister.asObservable();
    this.getAllUsersFunctionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    // Observable to subscribe to the getallUsers() function
    this.getAllUsersFunction$ = this.getAllUsersFunctionSubject.asObservable();
  }
  setUserIsRegister(value) {
    this.userIsRegister.next(value);
  }
  getUserIsRegister() {
    return this.userIsRegister$;
  }
  getUserIsRegisteredFromLocalStorage() {
    const storedValue = sessionStorage.getItem('UserIsRegister');
    // Convert the string value to a boolean using a simple comparison.
    return storedValue === 'true';
  }
  // Function to emit the event to call the getallUsers() function
  callGetAllUsersFunction() {
    this.getAllUsersFunctionSubject.next();
  }
}
DataService.ɵfac = function DataService_Factory(t) {
  return new (t || DataService)();
};
DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: DataService,
  factory: DataService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3137:
/*!***************************************!*\
  !*** ./src/app/shared/filter.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPipe: () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FilterPipe {
  transform(hotelsData, searchInput) {
    if (!hotelsData || !searchInput) {
      return hotelsData;
    }
    searchInput = searchInput.toLowerCase();
    return hotelsData.filter(hotel => {
      // Modify this condition based on the property you want to search by
      return JSON.stringify(hotel).toLowerCase().includes(searchInput);
    });
  }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) {
  return new (t || FilterPipe)();
};
FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: FilterPipe,
  pure: true
});

/***/ }),

/***/ 7726:
/*!*********************************************!*\
  !*** ./src/app/shared/fire-auth.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FireAuthService: () => (/* binding */ FireAuthService)
/* harmony export */ });
/* harmony import */ var D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ 6873);

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



class FireAuthService {
  constructor(dataService) {
    this.dataService = dataService;
    this.user = null;
    this.auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
    this.auth.onAuthStateChanged(user => {
      this.user = user;
      console.log(this.user);
    });
  }
  signIn(email, password) {
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(this.auth, email, password);
  }
  sendPasswordResetEmail(email) {
    var _this = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.sendPasswordResetEmail)(_this.auth, email).then(() => {
        console.log('Password reset email sent');
        console.log(_this.auth);
      }).catch(error => {
        console.error('Error sending password reset email', error);
      });
    })();
  }
  /*
    signIn(email: string, password: string,name:any,profilepic:any) {
      signInWithEmailAndPassword(this.auth, email, password)
        .then(() => {
            this.dataService.userId = email
            this.dataService.userName = name
             this.dataService.userProfilePic = profilepic
          console.log('Signed in')
        })
        .catch(error => console.error('Sign-in error', error));
    }*/
  signUp(email, password) {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(this.auth, email, password).then(() => console.log('User created')).catch(error => console.error('Sign-up error', error));
  }
  signOut() {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(this.auth).then(() => console.log('Signed out')).catch(error => console.error('Sign-out error', error));
  }
}
FireAuthService.ɵfac = function FireAuthService_Factory(t) {
  return new (t || FireAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService));
};
FireAuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: FireAuthService,
  factory: FireAuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1139:
/*!*********************************************!*\
  !*** ./src/app/shared/firestore.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirestoreService: () => (/* binding */ FirestoreService)
/* harmony export */ });
/* harmony import */ var D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _caching_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caching.service */ 3772);





class FirestoreService {
  constructor(fireService, cachingService) {
    this.fireService = fireService;
    this.cachingService = cachingService;
  }
  getData() {
    const cachedData = this.cachingService.get('userData');
    if (cachedData) {
      return cachedData;
    } else {
      let userCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.fireService, 'users');
      const data = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionData)(userCollection, {
        idField: 'id'
      });
      this.cachingService.set('userData', data);
      return data;
      // let userCollection = collection(this.fireService,'users')
      // return collectionData(userCollection,{idField:'id'})
    }
  }

  getUserById(id) {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.fireService, 'users', id);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(userDocRef);
  }
  createData(data) {
    let userCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.fireService, 'users');
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(userCollection, data);
  }
  createUserData(userId, data) {
    // Specify the collection reference
    const userCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.fireService, 'users');
    // Add a new document with the specified custom user ID
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(userCollectionRef, userId), data);
  }
  getPostWithID(userId, postId) {
    var _this = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const postDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this.fireService, 'users', userId, 'posts', postId);
      const postSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(postDocRef);
      if (postSnapshot.exists()) {
        return postSnapshot.data();
      } else {
        throw new Error(`Post with ID ${postId} not found.`);
      }
    })();
  }
  getAllUsers() {
    var _this2 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const usersCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_this2.fireService, 'users');
      const usersQuerySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(usersCollectionRef);
      const users = [];
      usersQuerySnapshot.forEach(doc => {
        users.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return users;
    })();
  }
  getAllUserPosts(userId) {
    var _this3 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cacheKey = `userPosts_${userId}`;
      const cachedData = _this3.cachingService.get(cacheKey);
      if (cachedData) {
        console.log(`Retrieving from cache userPosts_${userId}`);
        return cachedData;
      } else {
        console.log(`Fetching from Firebase userPosts_${userId}`);
        const postsCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_this3.fireService, `users/${userId}/posts`);
        const postsQuerySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(postsCollectionRef);
        const posts = [];
        postsQuerySnapshot.forEach(doc => {
          const postData = doc.data();
          posts.push({
            id: doc.id,
            ...postData
          });
        });
        // Store data in cache
        _this3.cachingService.set(cacheKey, posts);
        return posts;
      }
    })();
  }
  // async getAllUserPosts(userId: string): Promise<any[]> {
  //   const postsCollectionRef = collection(this.fireService, `users/${userId}/posts`);
  //   const postsQuerySnapshot = await getDocs(postsCollectionRef);
  //   const posts: any[] = [];
  //   postsQuerySnapshot.forEach((doc:any) => {
  //     const postData = doc.data();
  //     posts.push({ id: doc.id, ...postData });
  //   });
  //   return posts;
  // }
  getAllPosts() {
    var _this4 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cacheKey = 'allPosts';
      const cachedData = _this4.cachingService.get(cacheKey);
      if (cachedData) {
        return cachedData;
      } else {
        const postsCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_this4.fireService, 'posts');
        const postsQuerySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(postsCollectionRef);
        const posts = [];
        postsQuerySnapshot.forEach(doc => {
          const postData = doc.data();
          posts.push({
            id: doc.id,
            ...postData
          });
        });
        // Store data in cache
        _this4.cachingService.set(cacheKey, posts);
        return posts;
      }
    })();
  }
  // async getAllPosts(): Promise<any[]> {
  //   const postsCollectionRef = collection(this.fireService, 'posts');
  //   const postsQuerySnapshot = await getDocs(postsCollectionRef);
  //   const posts: any[] = [];
  //   postsQuerySnapshot.forEach((doc) => {
  //     const postData = doc.data();
  //     posts.push({ id: doc.id, ...postData });
  //   });
  //   return posts;
  // }
  createPost(userId, postData) {
    var _this5 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const postDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_this5.fireService, 'users', userId, 'posts');
      const newPostRef = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(postDocRef, postData);
      const newPostId = newPostRef.id;
      postData.id = newPostId;
      _this5.cachingService.clear();
      console.log('Post data with ID:', postData);
      yield _this5.updatePost(userId, newPostId, {
        id: newPostId
      });
      // return setDoc(doc(postDocRef, postId), newPostId);
      // await addDoc(postDocRef, postData);
    })();
  }
  // async updatePost(userId: string, postId: string, updatedData: any) {
  //   const postDocRef = doc(this.fireService, 'users', userId, 'posts', postId);
  //   await setDoc(postDocRef, updatedData, { merge: true }); // Use merge option to update without overwriting
  // }
  deletePost(userId, postId) {
    var _this6 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const postDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this6.fireService, 'users', userId, 'posts', postId);
      _this6.cachingService.clear();
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.deleteDoc)(postDocRef);
    })();
  }
  getPost(userId, postId) {
    var _this7 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const postDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this7.fireService, 'users', userId, 'posts', postId);
      const postDocSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(postDocRef);
      if (postDocSnapshot.exists()) {
        return postDocSnapshot.data();
      } else {
        return null;
      }
    })();
  }
  updatePost(userId, postId, updatedData) {
    var _this8 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const postDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_this8.fireService, 'users', userId, 'posts'), postId);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(postDocRef, updatedData);
    })();
  }
  addCommentToPost(userId, postId, commentData) {
    var _this9 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const post = yield _this9.getPost(userId, postId);
      if (post) {
        const updatedComments = [...post.comments, commentData];
        yield _this9.updatePost(userId, postId, {
          comments: updatedComments
        });
      }
    })();
  }
  incrementLikes(userId, postId) {
    var _this10 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const post = yield _this10.getPost(userId, postId);
      if (post) {
        const updatedLikes = post.likes + 1;
        yield _this10.updatePost(userId, postId, {
          likes: updatedLikes
        });
      }
    })();
  }
  updateTitleAndContent(userId, postId, newTitle, newContent) {
    var _this11 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const post = yield _this11.getPost(userId, postId);
      if (post) {
        yield _this11.updatePost(userId, postId, {
          title: newTitle,
          content: newContent
        });
      }
    })();
  }
  // async addPost(userId: string, postData: any): Promise<void> {
  //   const userCollectionRef = collection(this.fireService, 'users');
  //   const postCollectionRef = collection(doc(userCollectionRef, userId), 'posts');
  //   // Add a new post document to the subcollection
  //   await addDoc(postCollectionRef, postData);
  // }
  // createUserData(data: any) {
  //   // Specify the collection reference
  //   const userCollectionRef = collection(this.fireService, 'users');
  //   // Add a new document with a custom user ID
  //   return addDoc(userCollectionRef, data);
  // }
  updateData(id, updatedData) {
    console.log(updatedData);
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.fireService, 'users', id);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(userDocRef, updatedData);
  }
  deleteData(id) {
    let docref = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.fireService, 'users/' + id);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.deleteDoc)(docref);
  }
}
FirestoreService.ɵfac = function FirestoreService_Factory(t) {
  return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_caching_service__WEBPACK_IMPORTED_MODULE_1__.CachingService));
};
FirestoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: FirestoreService,
  factory: FirestoreService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8468:
/*!***************************************************!*\
  !*** ./src/app/shared/hashtag-service.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HashtagServiceService: () => (/* binding */ HashtagServiceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firestore.service */ 1139);



class HashtagServiceService {
  constructor(fireservice) {
    this.fireservice = fireservice;
    this.trendingHashtags = [];
    this.trendingHashtagsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.trendingHashtags$ = this.trendingHashtagsSubject.asObservable();
  }
  extractHashtagsFromPostContent(content) {
    // Regular expression to find hashtags in the post content
    const regex = /#(\w+)/g;
    const matches = content.match(regex);
    if (matches) {
      // Remove the '#' character from the matches
      return matches.map(match => match.substring(1));
    }
    return [];
  }
  updateTrendingHashtags(allPostss) {
    // Clear the existing trending hashtags
    this.trendingHashtags = [];
    // Your logic to extract hashtags from all posts and update the trendingHashtags array
    const hashtagsMap = new Map();
    console.log('allposthashtag0,', allPostss);
    allPostss.forEach(post => {
      const hashtags = this.extractHashtagsFromPostContent(post.content);
      hashtags.forEach(tag => {
        const lowercaseTag = tag.toLowerCase();
        const count = hashtagsMap.get(lowercaseTag) || 0;
        hashtagsMap.set(lowercaseTag, count + 1);
      });
    });
    // Convert the map to an array of Hashtag objects
    this.trendingHashtags = Array.from(hashtagsMap.entries()).map(([name, count]) => ({
      name,
      count
    }));
    // Sort the trending hashtags based on count in descending order
    this.trendingHashtags.sort((a, b) => b.count - a.count);
    // Get the top ten hashtags
    this.trendingHashtags = this.trendingHashtags.slice(0, 5);
    console.log(this.trendingHashtags);
    this.trendingHashtagsSubject.next(this.trendingHashtags);
  }
}
HashtagServiceService.ɵfac = function HashtagServiceService_Factory(t) {
  return new (t || HashtagServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_firestore_service__WEBPACK_IMPORTED_MODULE_0__.FirestoreService));
};
HashtagServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: HashtagServiceService,
  factory: HashtagServiceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);






class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule]
  });
})();

/***/ }),

/***/ 3182:
/*!******************************************!*\
  !*** ./src/app/shared/toster.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TosterService: () => (/* binding */ TosterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 7548);


class TosterService {
  constructor(toastr) {
    this.toastr = toastr;
  }
  showSuccess(msg1, msg2) {
    this.toastr.success(msg1, msg2, {
      positionClass: 'toast-top-left',
      timeOut: 2000,
      closeButton: true
    });
  }
  showWarning(msg1, msg2) {
    this.toastr.warning(msg1, msg2, {
      positionClass: 'toast-top-right',
      timeOut: 2000,
      closeButton: true
    });
  }
  showError(msg1, msg2) {
    this.toastr.error(msg1, msg2, {
      positionClass: 'toast-top-right',
      timeOut: 2000,
      closeButton: true
    });
  }
}
TosterService.ɵfac = function TosterService_Factory(t) {
  return new (t || TosterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
};
TosterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: TosterService,
  factory: TosterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6621:
/*!*****************************************************!*\
  !*** ./src/app/user/add-post/add-post.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddPostComponent: () => (/* binding */ AddPostComponent)
/* harmony export */ });
/* harmony import */ var D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/server.service */ 5541);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data.service */ 6873);
/* harmony import */ var src_app_shared_toster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/toster.service */ 3182);
/* harmony import */ var src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/firestore.service */ 1139);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);











function AddPostComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 4)(2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Image:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div")(7, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Profile Pic : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddPostComponent_div_15_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _r2.value || ctx_r0.postImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function AddPostComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class AddPostComponent {
  constructor(formBuilder, server, activeModal, modalService, dataService, tosterService, fireService, sanitizer) {
    this.formBuilder = formBuilder;
    this.server = server;
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.dataService = dataService;
    this.tosterService = tosterService;
    this.fireService = fireService;
    this.sanitizer = sanitizer;
    this.loading = false;
    this.editmode = this.dataService.editMode;
    const date = new Date();
    this.currentDate = date.toLocaleString();
  }
  ngOnInit() {
    this.createPostForm();
    this.userID = this.dataService.userId;
    // console.log(this.dataService.userId)
    this.fireService.getUserById(this.userID).then(docSnapshot => {
      if (docSnapshot.exists()) {
        this.userData = docSnapshot.data();
        // this.postID = this.userData.posts.length + 1;
      } else {
        console.log('User not found');
      }
    }).catch(error => {
      console.error('Data Not Fetched', error);
    });
    if (this.editmode) {
      if (this.post) {
        console.log(this.post);
        this.postForm.patchValue({
          title: this.post.title,
          content: this.post.content,
          image: this.post.image
        });
      } else {
        this.tosterService.showError('not found in user data', 'failed');
        console.log(`Post with ID ${this.post.id} not found in user data.`);
      }
    }
  }
  createPostForm() {
    this.postForm = this.formBuilder.group({
      userId: [this.userID],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      image: [''],
      likes: [0],
      comments: this.formBuilder.array([])
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.postImage = reader.result;
      // Store this in your form or the data object you're sending to Firestore
    };
  }

  onSubmit() {
    var _this = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.postForm.valid) {
        _this.loading = true;
        if (_this.userID) {
          const userId = _this.userID;
          const postData = _this.postForm.value;
          postData.userId = userId;
          // postData.postImage = this.postImage || '';
          if (!_this.postImage) {
            postData.postImage = _this.post?.image || ''; // Preserve the existing image if no new image is selected
          } else {
            postData.postImage = _this.postImage;
          }
          //       const sanitizedImageUrl = this.sanitizer.bypassSecurityTrustUrl(postData.image);
          // postData.image = sanitizedImageUrl;
          // postData.id = this.editmode ? this.post.id : this.userData.posts.length + 1;
          const successMessage = _this.editmode ? 'Post Edited Successfully' : 'Post Added Successfully';
          const errorMessage = _this.editmode ? 'not found in user data' : 'Failed to add Post';
          postData.createdAt = _this.currentDate;
          if (_this.editmode) {
            postData.likes = _this.post.likes;
            postData.comments = _this.post.comments;
            postData.createdAt = _this.post.createdAt;
            const postId = _this.post.id;
            // const posts = await this.fireService.getAllUserPosts(userId)
            // const postIndex = posts.findIndex(
            //   (post: any) => post.id === this.post.id
            // );
            // if (postIndex !== -1) {
            //   this.userData.posts[postIndex] = postData;
            _this.fireService.updatePost(userId, postId, postData).then(data => {
              _this.tosterService.showSuccess(successMessage, 'Success');
              _this.resetFormAndCloseModal();
            }).catch(err => {
              _this.tosterService.showError(errorMessage, 'Error');
              console.log(`Post with ID ${postData.id} not found in user data.`);
            });
          } else {
            _this.fireService.createPost(postData.userId, postData).then(() => {
              console.log("User data updated successfully");
              _this.loading = false;
              _this.tosterService.showSuccess('Post Added Successfully', 'Success');
              _this.resetFormAndCloseModal();
            }).catch(error => {
              _this.tosterService.showError(errorMessage, 'Error');
              console.error("Error updating user data:", error);
              _this.loading = false;
            });
          }
        }
      }
    })();
  }
  resetFormAndCloseModal() {
    this.postForm.reset();
    this.modalService.dismissAll();
    this.activeModal.close();
    this.dataService.editMode = false;
    this.loading = false;
  }
  close() {
    this.activeModal.close();
  }
  ngOnDestroy() {
    this.dataService.editMode = false;
  }
}
AddPostComponent.ɵfac = function AddPostComponent_Factory(t) {
  return new (t || AddPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_server_service__WEBPACK_IMPORTED_MODULE_1__.ServerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_toster_service__WEBPACK_IMPORTED_MODULE_3__.TosterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer));
};
AddPostComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddPostComponent,
  selectors: [["app-add-post"]],
  inputs: {
    post: "post"
  },
  decls: 19,
  vars: 5,
  consts: [[1, "container"], [1, "headerContainer"], [3, "click"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "title"], ["type", "text", "formControlName", "title", 1, "form-control"], ["for", "content"], ["formControlName", "content", 1, "form-control"], ["class", "imgContainer", 4, "ngIf"], ["type", "submit", 3, "disabled"], ["mdbBtn", "", "class", "btn btn-dark", "color", "dark", "type", "button", "disabled", "", 4, "ngIf"], [1, "imgContainer"], ["for", "image"], ["type", "text", "formControlName", "image", "placeholder", "Add Image Link or Choose File", 1, "form-control"], ["img", ""], ["for", "username"], ["type", "file", "id", "postImage", "formControlName", "postImage", "placeholder", "Add Image Link", "accept", "image/*", 3, "change"], [1, "form-group", "img-form"], [1, "img-fluid", 3, "src"], ["mdbBtn", "", "color", "dark", "type", "button", "disabled", "", 1, "btn", "btn-dark"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]],
  template: function AddPostComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Create Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddPostComponent_Template_a_click_4_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u274C");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AddPostComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Question:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4)(12, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Answer:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AddPostComponent_div_15_Template, 12, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AddPostComponent_button_18_Template, 3, 0, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.postForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editmode);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.postForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.editmode ? "Update Post " : " Add Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: #f9f9f9;\n}\n\n.headerContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.headerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.headerContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 15px;\n  cursor: pointer;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\ninput[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\n.img-form[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1%;\n}\n.img-form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 10px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #007bff;\n  cursor: not-allowed;\n}\n\nbutton[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9hZGQtcG9zdC9hZGQtcG9zdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLy4uL0Zyb250JTIwRW5kJTIwV2Vic2l0ZS9CZXN0JTIwQ29kZSUyMFRlbXBsZXRlJTIwaSUyMHdyb3RlL0FuZ3VsYXIlMjBsZWFybmluZyUyMGNsYXNzL0Jsb2ctUG9zdCUyMFdlYnNpdGUvdXNpbmclMjBmaXJlYmFzZSUyMGFwaS9zcmMvYXBwL3VzZXIvYWRkLXBvc3QvYWRkLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSw4QkFBQTtBQ0VKO0FEREk7RUFDRSxrQkFBQTtBQ0dOO0FEQUk7RUFDTSxlQUFBO0VBQ0EsZUFBQTtBQ0VWOztBREdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElFO0VBQ0UsZ0JBQUE7QUNESjs7QURNRTtFQUNDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDSEg7QURJRztFQUNDLFdBQUE7QUNGSjs7QURLSTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURLRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURJRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUNESiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIH1cclxuICAuaGVhZGVyQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaDEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBhe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIFxyXG4gIGZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmltZy1mb3Jte1xyXG4gICB3aWR0aDogNzAlO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbiAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG4gIGJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG4uaGVhZGVyQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlckNvbnRhaW5lciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkZXJDb250YWluZXIgYSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxudGV4dGFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLmltZy1mb3JtIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuLmltZy1mb3JtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1503:
/*!*******************************************************!*\
  !*** ./src/app/user/all-posts/all-posts.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllPostsComponent: () => (/* binding */ AllPostsComponent)
/* harmony export */ });
/* harmony import */ var D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/server.service */ 5541);
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data.service */ 6873);
/* harmony import */ var src_app_shared_hashtag_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/hashtag-service.service */ 8468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/firestore.service */ 1139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/filter.pipe */ 3137);










function AllPostsComponent_div_3_button_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", post_r2.likes, " ", post_r2.likes === 1 ? "Like" : "Likes", "");
  }
}
function AllPostsComponent_div_3_div_14_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllPostsComponent_div_3_div_14_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.addlike(post_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", post_r2.likes, " ", post_r2.likes === 1 ? "Like" : "Likes", " ");
  }
}
function AllPostsComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AllPostsComponent_div_3_div_14_button_2_Template, 2, 2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllPostsComponent_div_3_div_14_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
      const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.addComment(post_r2, _r8.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Add Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.userIsRegistered);
  }
}
function AllPostsComponent_div_3_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const comment_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", comment_r18.userProfile, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](comment_r18.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](comment_r18.comment);
  }
}
function AllPostsComponent_div_3_div_15_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllPostsComponent_div_3_div_15_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.showMoreComments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Show more comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AllPostsComponent_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "All Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AllPostsComponent_div_3_div_15_div_4_Template, 7, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AllPostsComponent_div_3_div_15_button_5_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", post_r2.comments.slice(0, ctx_r5.visibleComments));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", post_r2.comments.length > ctx_r5.visibleComments);
  }
}
function AllPostsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllPostsComponent_div_3_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const post_r2 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.navigateToUser(post_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Answer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", 9)(12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AllPostsComponent_div_3_button_13_Template, 2, 2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AllPostsComponent_div_3_div_14_Template, 8, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AllPostsComponent_div_3_div_15_Template, 6, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", post_r2.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", post_r2.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", post_r2.image || post_r2.postImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.userIsRegistered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.userIsRegistered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", post_r2.comments.length > 0);
  }
}
function AllPostsComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AllPostsComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.showMorePosts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Show more posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class AllPostsComponent {
  constructor(server, dataService, hashtagService, route, router, fireservice) {
    this.server = server;
    this.dataService = dataService;
    this.hashtagService = hashtagService;
    this.route = route;
    this.router = router;
    this.fireservice = fireservice;
    this.allUsers = [];
    this.newComment = '';
    this.userIsRegistered = false;
    this.visibleComments = 2;
    this.likedPosts = new Set();
    this.latestPosts = [];
    this.displayedPosts = [];
    this.initialPostsToShow = 10;
    this.hashtagName = '';
    this.filteredPosts = [];
    this.allPostss = [];
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.hashtagName = params.get('hashtag') || '';
      console.log(this.hashtagName);
      this.filterPostsByHashtag();
      // this.loadUserData();
    });

    this.dataService.getUserIsRegister().subscribe(isRegistered => {
      this.userIsRegistered = isRegistered;
    });
    const likedPostsString = localStorage.getItem('likedPosts');
    if (likedPostsString) {
      console.log(likedPostsString);
      this.likedPosts = new Set(JSON.parse(likedPostsString));
    }
    this.loadAllUserPosts();
  }
  loadUserData() {
    this.dataService.getAllUsersFunction$.subscribe(() => {
      this.filterPostsByHashtag();
    });
  }
  loadAllUserPosts() {
    var _this = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.allUsers = yield _this.fireservice.getAllUsers();
        console.log('All users:', _this.allUsers);
        for (const user of _this.allUsers) {
          const UserallPosts = yield _this.fireservice.getAllUserPosts(user.id);
          console.log(`Posts for user ${user.id}:`, UserallPosts);
          // Update each post with username and userprofilepic
          const updatedPosts = UserallPosts.map(post => {
            return {
              ...post,
              name: user.name,
              profilePic: user.profilePic // Replace with the actual property name in your user object
            };
          });

          _this.allPostss.push(...updatedPosts);
          console.log(_this.allPostss);
        }
        _this.allPostss.sort((a, b) => {
          const dateA = new Date(a.createdAt).getTime();
          const dateB = new Date(b.createdAt).getTime();
          return dateB - dateA;
        });
        _this.displayedPosts = _this.allPostss.slice(0, _this.initialPostsToShow);
        _this.hashtagService.updateTrendingHashtags(_this.allPostss);
        // this.filterPostsByHashtag();
      } catch (error) {
        console.error('Error fetching users and posts:', error);
      }
      console.log(_this.allPostss);
    })();
  }
  filterPostsByHashtag() {
    this.filteredPosts = [];
    this.allPostss.forEach(post => {
      const hashtags = this.hashtagService.extractHashtagsFromPostContent(post.content);
      if (hashtags.includes(this.hashtagName)) {
        this.filteredPosts.push(post);
      }
    });
    this.filteredPosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    console.log('filetpost', this.filteredPosts);
  }
  showMorePosts() {
    // Calculate the index of the last post to be displayed after adding more posts
    const endIndex = this.displayedPosts.length + this.initialPostsToShow;
    // Get the additional posts to be displayed
    const additionalPosts = this.allPostss.slice(this.displayedPosts.length, endIndex);
    // Add the additional posts to the displayedPosts array
    this.displayedPosts.push(...additionalPosts);
  }
  addlike(post) {
    var _this2 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userId = post.userId;
      const postId = post.id;
      if (_this2.likedPosts.has(postId)) {
        console.log('Post is already liked by the user.');
      } else {
        // Increment the likes count and add the post ID to the likedPosts Set
        post.likes++;
        _this2.likedPosts.add(postId);
        localStorage.setItem('likedPosts', JSON.stringify(Array.from(_this2.likedPosts)));
        const postIndex = _this2.allPostss.findIndex(p => p.id === post.id);
        if (postIndex !== -1) {
          // Update the userdata with the modified post
          _this2.allPostss[postIndex] = post;
          yield _this2.fireservice.incrementLikes(userId, postId);
          // Reload or refresh the post after incrementing likes
          // ...
        }
      }
    })();
  }

  addComment(post, commentText) {
    var _this3 = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this3.newComment);
      if (commentText.trim() === '') {
        return;
      }
      const userId = post.userId;
      const postId = post.id;
      const newComment = {
        id: post.comments.length + 1,
        postId: post.id,
        postUserId: post.userId,
        userName: _this3.dataService.userName,
        userProfile: _this3.dataService.userProfilePic,
        userId: _this3.dataService.userId,
        comment: commentText
      };
      post.comments.push(newComment);
      const postIndex = _this3.allPostss.findIndex(p => p.id === post.id);
      if (postIndex !== -1) {
        _this3.allPostss[postIndex] = post;
        yield _this3.fireservice.addCommentToPost(userId, postId, newComment);
      }
      _this3.newComment = '';
    })();
  }
  showMoreComments() {
    this.visibleComments += 2;
  }
  navigateToUser(post) {
    // this.router.navigateByUrl('/showUser')
    this.router.navigateByUrl(`/profile?id=${post.userId}`);
  }
}
AllPostsComponent.ɵfac = function AllPostsComponent_Factory(t) {
  return new (t || AllPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_server_service__WEBPACK_IMPORTED_MODULE_1__.ServerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_hashtag_service_service__WEBPACK_IMPORTED_MODULE_3__.HashtagServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService));
};
AllPostsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AllPostsComponent,
  selectors: [["app-all-posts"]],
  decls: 7,
  vars: 6,
  consts: [[1, "search-container"], ["type", "text", "placeholder", "Search ... Questions.. ", "aria-label", "Search", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "allusersContainer"], ["class", "postContainer", 4, "ngFor", "ngForOf"], [1, "showMoreContainer", "showMore"], ["class", "btn btn-dark", 3, "click", 4, "ngIf"], [1, "postContainer"], [1, "postNameHeading", 3, "click"], [1, "postProPIc", 3, "src"], ["alt", "", 3, "src"], ["class", "btn btn-primary likebtn", 4, "ngIf"], ["class", "likeCommentContainer", 4, "ngIf"], ["class", "allcommentContainer", 4, "ngIf"], [1, "btn", "btn-primary", "likebtn"], [1, "likeCommentContainer"], [1, "likeContainer"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "commentContainer"], ["type", "text", "placeholder", "Add a comment"], ["comments", ""], [1, "btn", "btn-dark", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "allcommentContainer"], [1, "userCommentsContainer"], ["class", "commenteuser", 4, "ngFor", "ngForOf"], [1, "commenteuser"], [1, "userHeadingContainer"], [1, "commentPorfilePic", 3, "src"]],
  template: function AllPostsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AllPostsComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.searchInput = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AllPostsComponent_div_3_Template, 17, 8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AllPostsComponent_button_6_Template, 2, 0, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 3, ctx.filteredPosts.length > 0 ? ctx.filteredPosts : ctx.displayedPosts, ctx.searchInput));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayedPosts.length < ctx.allPostss.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_5__.FilterPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.allusersContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  position: relative;\n  gap: 10px;\n  overflow-y: scroll;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 2%;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.327);\n  border-radius: 10px;\n  background: #fff;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1%;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .postNameHeading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 10px;\n  margin-bottom: 1%;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .postNameHeading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  cursor: pointer;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .postNameHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 1vw;\n  cursor: pointer;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 1.5vw;\n  margin: 0;\n  cursor: pointer;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likebtn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0px;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .likeContainer[_ngcontent-%COMP%] {\n  width: 15%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .commentContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .commentContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70%;\n  outline: none;\n  border: 1px solid rgba(0, 0, 0, 0.498);\n  padding: 6px;\n  border-radius: 5px;\n}\n.allusersContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .commentContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.allcommentContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n  flex-direction: column;\n  gap: 10px;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 100%;\n  gap: 5px;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%] {\n  width: auto;\n  border-radius: 10px;\n  background: #eaeaea;\n  padding: 5px 10px;\n  text-transform: capitalize;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%]   .userHeadingContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%]   .userHeadingContainer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%]   .userHeadingContainer[_ngcontent-%COMP%]   .commentPorfilePic[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  padding: 2%;\n  position: sticky;\n  width: 100%;\n  z-index: 2;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  outline: none;\n  font-size: 16px;\n  width: 100%;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.086);\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.25);\n}\n.search-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #7a7a7a;\n  font-style: italic;\n}\n\n.showMore[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9hbGwtcG9zdHMvYWxsLXBvc3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vRnJvbnQlMjBFbmQlMjBXZWJzaXRlL0Jlc3QlMjBDb2RlJTIwVGVtcGxldGUlMjBpJTIwd3JvdGUvQW5ndWxhciUyMGxlYXJuaW5nJTIwY2xhc3MvQmxvZy1Qb3N0JTIwV2Vic2l0ZS91c2luZyUyMGZpcmViYXNlJTIwYXBpL3NyYy9hcHAvdXNlci9hbGwtcG9zdHMvYWxsLXBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDRUo7QURESTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDR047QURESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDR047QURGTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNJUjtBREZNO0VBQ0UsNERBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0lSO0FEQUk7RUFHRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNBTjtBREVJO0VBQ0UsZUFBQTtBQ0FOO0FERUk7RUFDRSxXQUFBO0FDQU47QURFRztFQUNDLG1CQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDQU47QURDTTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQ0NSO0FEQ007RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FDQ1I7QURBUTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFVjtBREFRO0VBQ0UsVUFBQTtBQ0VWOztBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFFQSxTQUFBO0FDRkY7QURHRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0RKO0FER0k7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNETjtBREVNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FDQVI7QURDUTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDQ1Y7QURDUTtFQUNFLFdBQUE7RUFDRixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FESU07RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0ZSOztBRFFBO0VBQ0UsV0FBQTtFQUlBLGdCQUFBO0VBQ0YsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ1RBO0FEVUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQ1JKO0FEV0U7RUFFRSwyQ0FBQTtBQ1ZKO0FEYUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURlQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ1pGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6MTBweFxyXG59XHJcbi5hbGx1c2Vyc0NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgLnBvc3RDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzI3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaHJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDElO1xyXG4gICAgfVxyXG4gICAgLnBvc3ROYW1lSGVhZGluZ3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBnYXA6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIH1cclxuICAgICAgaDV7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAubGlrZWJ0bntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgIH1cclxuICAgIC5saWtlQ29tbWVudENvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAubGlrZUNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWVudENvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ5OCk7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDoyNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5hbGxjb21tZW50Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gIGdhcDogMTBweDtcclxuICAudXNlckNvbW1lbnRzQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdhcDogNXB4O1xyXG5cclxuICAgIC5jb21tZW50ZXVzZXIge1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAudXNlckhlYWRpbmdDb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbW1lbnRQb3JmaWxlUGlje1xyXG4gICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG59XHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyJTtcclxuICAvLyBtYXJnaW4tdG9wOiAxJTtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAvLyBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIHBvc2l0aW9uOnN0aWNreTtcclxud2lkdGg6IDEwMCU7XHJcbi8vIGhlaWdodDogNTBweDtcclxuei1pbmRleDogMjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wODYpO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcclxuICAgIC8vIGJvcmRlci1jb2xvcjogIzAwZmYxMTkyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB9XHJcbiAgXHJcbiAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzdhN2E3YTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbn1cclxuXHJcbi5zaG93TW9yZXtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uYWxsdXNlcnNDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ2FwOiAxMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uYWxsdXNlcnNDb250YWluZXIgLnBvc3RDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMyNyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hbGx1c2Vyc0NvbnRhaW5lciAucG9zdENvbnRhaW5lciBociB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDElO1xufVxuLmFsbHVzZXJzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5wb3N0TmFtZUhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG4uYWxsdXNlcnNDb250YWluZXIgLnBvc3RDb250YWluZXIgLnBvc3ROYW1lSGVhZGluZyBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uYWxsdXNlcnNDb250YWluZXIgLnBvc3RDb250YWluZXIgLnBvc3ROYW1lSGVhZGluZyBoNSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDF2dztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFsbHVzZXJzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFsbHVzZXJzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIHAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uYWxsdXNlcnNDb250YWluZXIgLnBvc3RDb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWxsdXNlcnNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmxpa2VidG4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmFsbHVzZXJzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5saWtlQ29tbWVudENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLmFsbHVzZXJzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5saWtlQ29tbWVudENvbnRhaW5lciAubGlrZUNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYWxsdXNlcnNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmxpa2VDb21tZW50Q29udGFpbmVyIC5jb21tZW50Q29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5hbGx1c2Vyc0NvbnRhaW5lciAucG9zdENvbnRhaW5lciAubGlrZUNvbW1lbnRDb250YWluZXIgLmNvbW1lbnRDb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogNzAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDk4KTtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYWxsdXNlcnNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmxpa2VDb21tZW50Q29udGFpbmVyIC5jb21tZW50Q29udGFpbmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5hbGxjb21tZW50Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbi5hbGxjb21tZW50Q29udGFpbmVyIC51c2VyQ29tbWVudHNDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiA1cHg7XG59XG4uYWxsY29tbWVudENvbnRhaW5lciAudXNlckNvbW1lbnRzQ29udGFpbmVyIC5jb21tZW50ZXVzZXIge1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmFsbGNvbW1lbnRDb250YWluZXIgLnVzZXJDb21tZW50c0NvbnRhaW5lciAuY29tbWVudGV1c2VyIC51c2VySGVhZGluZ0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG4uYWxsY29tbWVudENvbnRhaW5lciAudXNlckNvbW1lbnRzQ29udGFpbmVyIC5jb21tZW50ZXVzZXIgLnVzZXJIZWFkaW5nQ29udGFpbmVyIHN0cm9uZyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5hbGxjb21tZW50Q29udGFpbmVyIC51c2VyQ29tbWVudHNDb250YWluZXIgLmNvbW1lbnRldXNlciAudXNlckhlYWRpbmdDb250YWluZXIgLmNvbW1lbnRQb3JmaWxlUGljIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5hbGxjb21tZW50Q29udGFpbmVyIC51c2VyQ29tbWVudHNDb250YWluZXIgLmNvbW1lbnRldXNlciBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWlucHV0IHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDg2KTtcbn1cbi5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLnNlYXJjaC1jb250YWluZXIgOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjN2E3YTdhO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zaG93TW9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2433:
/*!*************************************************!*\
  !*** ./src/app/user/footer/footer.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 4,
  vars: 0,
  consts: [[1, "container"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A9 2023 Your Website. All rights reserved. @paragUnhale");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["footer[_ngcontent-%COMP%] {\n  background-color: #e8e8e8;\n  padding: 15px 0;\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vRnJvbnQlMjBFbmQlMjBXZWJzaXRlL0Jlc3QlMjBDb2RlJTIwVGVtcGxldGUlMjBpJTIwd3JvdGUvQW5ndWxhciUyMGxlYXJuaW5nJTIwY2xhc3MvQmxvZy1Qb3N0JTIwV2Vic2l0ZS91c2luZyUyMGZpcmViYXNlJTIwYXBpL3NyYy9hcHAvdXNlci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAiLCJmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7905:
/*!*************************************************************!*\
  !*** ./src/app/user/google-login/google-login.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleLoginComponent: () => (/* binding */ GoogleLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class GoogleLoginComponent {
  gmailLoginSuccsfull(response) {
    console.log('login succesfull', response);
  }
}
GoogleLoginComponent.ɵfac = function GoogleLoginComponent_Factory(t) {
  return new (t || GoogleLoginComponent)();
};
GoogleLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GoogleLoginComponent,
  selectors: [["app-google-login"]],
  decls: 2,
  vars: 0,
  consts: [["id", "g_id_onload", "data-client_id", "427625286453-ln53l9ng9g08ki9oaf7nsdpu5atqoel5.apps.googleusercontent.com", "data-context", "signin", "data-ux_mode", "popup", "data-callback", "gmailLoginSuccsfull", "data-auto_select", "true", "data-itp_support", "true"], ["data-type", "standard", "data-shape", "pill", "data-theme", "filled_black", "data-text", "signin_with", "data-size", "large", "data-logo_alignment", "left", 1, "g_id_signin"]],
  template: function GoogleLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0)(1, "div", 1);
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4310:
/*!*************************************************!*\
  !*** ./src/app/user/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.component */ 4479);
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-post/add-post.component */ 6621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data.service */ 6873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);








const _c0 = function (a0) {
  return {
    "active": a0
  };
};
function HeaderComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.navigateToLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "log in/Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r0.activeButton === "Login"));
  }
}
function HeaderComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.navigateToCreatePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Create Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r1.activeButton === "CreatePost"));
  }
}
function HeaderComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.navigateToLoginProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r2.activeButton === "profile"));
  }
}
function HeaderComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class HeaderComponent {
  constructor(router, modalService, dataService) {
    this.router = router;
    this.modalService = modalService;
    this.dataService = dataService;
    this.userIsRegister = false;
    this.activeButton = 'Home';
  }
  ngOnInit() {
    this.dataService.getUserIsRegister().subscribe(value => {
      this.userIsRegister = value;
    });
  }
  navigateToHome() {
    this.activeButton = 'Home';
    this.router.navigateByUrl('/user');
  }
  navigateToLogin() {
    this.activeButton = 'Login';
    this.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, {
      centered: true,
      backdrop: true
    });
  }
  navigateToCreatePost() {
    this.activeButton = 'CreatePost';
    this.modalService.open(_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_1__.AddPostComponent, {
      centered: true,
      backdrop: true
    });
  }
  navigateToLoginProfile() {
    this.activeButton = 'profile';
    this.router.navigateByUrl('profile');
  }
  logout() {
    sessionStorage.setItem('userId', '');
    sessionStorage.setItem('userName', '');
    sessionStorage.setItem('userProfilePic', '');
    sessionStorage.setItem('UserIsRegister', 'false');
    this.dataService.userId = sessionStorage.getItem('userId');
    this.dataService.userName = sessionStorage.getItem('userName');
    this.dataService.userProfilePic = sessionStorage.getItem('userProfilePic');
    this.dataService.setUserIsRegister(this.dataService.getUserIsRegisteredFromLocalStorage());
    // this.dataService.setUserIsRegister(false);
    this.router.navigateByUrl('/');
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 14,
  vars: 7,
  consts: [[1, "logoContaienr"], ["src", "https://icon-library.com/images/me-icon/me-icon-12.jpg", "alt", ""], [1, "links"], [1, "btn", 3, "ngClass", "click"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "home"], ["class", "btn", 3, "ngClass", "click", 4, "ngIf"], ["class", "btn", 3, "click", 4, "ngIf"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "login"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "add_circle"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "person"], [1, "btn", 3, "click"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "logout"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Answers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() {
        return ctx.navigateToHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, HeaderComponent_button_10_Template, 4, 3, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, HeaderComponent_button_11_Template, 4, 3, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, HeaderComponent_button_12_Template, 4, 3, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, HeaderComponent_button_13_Template, 4, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.activeButton === "Home"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.userIsRegister);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userIsRegister);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userIsRegister);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userIsRegister);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
  styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  padding: 1%;\n  padding-top: 5%;\n  gap: 10px;\n}\nnav[_ngcontent-%COMP%]   .logoContaienr[_ngcontent-%COMP%] {\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 10px;\n  border-bottom: 1px solid black;\n}\nnav[_ngcontent-%COMP%]   .logoContaienr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnav[_ngcontent-%COMP%]   .logoContaienr[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin: 0;\n  padding: 0;\n  font-size: 2vw;\n  font-weight: 660;\n}\nnav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.btn.active[_ngcontent-%COMP%] {\n  background-color: #343a40;\n  color: #fff;\n}\n.btn.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  outline: none;\n  gap: 15px;\n  box-shadow: none;\n  border: none;\n  transition: ease-in transform 0.3s;\n  padding: 5% 3%;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n  border: none;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transform: scale(0.9);\n  background: #cccccc;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vRnJvbnQlMjBFbmQlMjBXZWJzaXRlL0Jlc3QlMjBDb2RlJTIwVGVtcGxldGUlMjBpJTIwd3JvdGUvQW5ndWxhciUyMGxlYXJuaW5nJTIwY2xhc3MvQmxvZy1Qb3N0JTIwV2Vic2l0ZS91c2luZyUyMGZpcmViYXNlJTIwYXBpL3NyYy9hcHAvdXNlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDREE7QURJSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FDRlI7QURHSztFQUNHLFdBQUE7QUNEUjtBREdLO0VBQ0csa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RSO0FESUk7RUFFSCxVQUFBO0VBQ0QsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNIQTs7QURPQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0pKO0FES0k7RUFDRSxnQkFBQTtBQ0hOOztBRE1FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7QUNKSjs7QURNRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNISjs7QURNRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNISiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5uYXZ7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbi8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5wYWRkaW5nOiAxJTtcclxucGFkZGluZy10b3A6IDUlO1xyXG5nYXA6IDEwcHg7XHJcbi8vIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuLy8gYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMTYpO1xyXG4gICAgLmxvZ29Db250YWllbnJ7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgfVxyXG4gICAgIGgye1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICBmb250LXdlaWdodDogNjYwO1xyXG4gICAgIH1cclxuICAgIH1cclxuICAgIC5saW5rc3tcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gd2lkdGg6IDcwJTtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbmp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwOyBcclxuICAgIGNvbG9yOiAjZmZmOyBcclxuICAgIHNwYW57XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246ZWFzZS1pbiB0cmFuc2Zvcm0gMC4zcztcclxuICAgIC8vIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgICBwYWRkaW5nOiA1JSAzJTtcclxuICB9XHJcbiAgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgXHJcbiAgfVxyXG4gIGJ1dHRvbjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XHJcbiAgfSIsIm5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgZ2FwOiAxMHB4O1xufVxubmF2IC5sb2dvQ29udGFpZW5yIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbm5hdiAubG9nb0NvbnRhaWVuciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbm5hdiAubG9nb0NvbnRhaWVuciBoMiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDJ2dztcbiAgZm9udC13ZWlnaHQ6IDY2MDtcbn1cbm5hdiAubGlua3Mge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLmFjdGl2ZSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGdhcDogMTVweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIHRyYW5zZm9ybSAwLjNzO1xuICBwYWRkaW5nOiA1JSAzJTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5864:
/*!*************************************************************!*\
  !*** ./src/app/user/instructions/instructions.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructionsComponent: () => (/* binding */ InstructionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data.service */ 6873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function InstructionsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Welcome to My Website!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Thank you for visiting. Here are some instructions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul")(7, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Wait for 1 minute to allow backend data to load.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Use the following credentials for testing:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "User ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ParagUnhale1998@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ", Password: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "parag123");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Create Account ,Update Account , Add Post , Add Comments , Add Likes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Use all functionalities for Better User Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Wait For update Realtime Backend Data From Firebase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Feel free to explore and check out all the functionalities!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InstructionsComponent_div_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class InstructionsComponent {
  constructor(userService) {
    this.userService = userService;
    this.instructions = false;
    this.instructions = this.userService.userInstructions;
  }
  closeModal() {
    this.userService.userInstructions = false;
    this.instructions = false;
  }
}
InstructionsComponent.ɵfac = function InstructionsComponent_Factory(t) {
  return new (t || InstructionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
};
InstructionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: InstructionsComponent,
  selectors: [["app-instructions"]],
  decls: 1,
  vars: 1,
  consts: [["class", "modal-container", 4, "ngIf"], [1, "modal-container"], [1, "modal-content"], [1, "intro1"], [1, "intro2"], [1, "highlight"], [1, "close-button", 3, "click"]],
  template: function InstructionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InstructionsComponent_div_0_Template, 30, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.instructions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["[_nghost-%COMP%] {\n  background: #fff;\n  z-index: 99;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  justify-content: center;\n  align-items: center;\n}\n.modal-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2vw;\n  letter-spacing: 1px;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.modal-content[_ngcontent-%COMP%]   P[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 1vw;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n.modal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 1%;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.331);\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.39);\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 5px;\n}\n.modal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-decoration: none;\n  list-style: none;\n}\n.modal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .intro1[_ngcontent-%COMP%] {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 1vw;\n  font-weight: 600;\n}\n.modal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .intro2[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-top: 10px;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.445);\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ffff99;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9pbnN0cnVjdGlvbnMvaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vRnJvbnQlMjBFbmQlMjBXZWJzaXRlL0Jlc3QlMjBDb2RlJTIwVGVtcGxldGUlMjBpJTIwd3JvdGUvQW5ndWxhciUyMGxlYXJuaW5nJTIwY2xhc3MvQmxvZy1Qb3N0JTIwV2Vic2l0ZS91c2luZyUyMGZpcmViYXNlJTIwYXBpL3NyYy9hcHAvdXNlci9pbnN0cnVjdGlvbnMvaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQUM7RUFFRyxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEQUk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNFUjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDRCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDQ0g7QURBSTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHdFQUFBO0FDRVI7QURFRztFQUNDLFdBQUE7RUFDQSw2Q0FBQTtFQUNHLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUNBUDtBREVPO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER0k7RUFFSSxzSEFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FESUk7RUFDSSwwQkFBQTtBQ0ZSOztBRE9FO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE1JO0VBQ0ksNkNBQUE7QUNKUjs7QURRRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNMSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59Lm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgIH1cclxuXHJcbiAgIHVse1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMzMSk7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM5KTtcclxuICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgIGdhcDogNXB4O1xyXG5cclxuICAgICAgIGxpe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgLmludHJvMXtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5pbnRybzJ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NDUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9IiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsLWNvbnRhaW5lciBoMiB7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tb2RhbC1jb250ZW50IFAge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4ubW9kYWwtY29udGVudCB1bCB7XG4gIHBhZGRpbmc6IDElO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMzMSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zOSk7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbn1cbi5tb2RhbC1jb250ZW50IHVsIGxpIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm1vZGFsLWNvbnRlbnQgdWwgLmludHJvMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubW9kYWwtY29udGVudCB1bCAuaW50cm8yIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDQ1KTtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4479:
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sign-up/sign-up.component */ 4029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/server.service */ 5541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data.service */ 6873);
/* harmony import */ var src_app_shared_toster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/toster.service */ 3182);
/* harmony import */ var src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/firestore.service */ 1139);
/* harmony import */ var src_app_shared_fire_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/fire-auth.service */ 7726);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);












function LoginComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_0_div_1_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.onLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 7)(5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7)(9, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_div_0_div_1_Template_a_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.forgetpassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Forgotten password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 13)(15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_div_0_div_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.navigateToSignUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loginForm.invalid);
  }
}
function LoginComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_0_div_2_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.onLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 7)(5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_div_0_div_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.resetPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r3.forgotPasswordForm);
  }
}
function LoginComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LoginComponent_div_0_div_1_Template, 19, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LoginComponent_div_0_div_2_Template, 10, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.forgotPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.forgotPassword);
  }
}
function LoginComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Loading...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(formBuilder, server, router, modalService, activeModal, dataService, tosterService, fireService, fireAuth) {
    this.formBuilder = formBuilder;
    this.server = server;
    this.router = router;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this.dataService = dataService;
    this.tosterService = tosterService;
    this.fireService = fireService;
    this.fireAuth = fireAuth;
    this.userIsRegister = false;
    this.forgotPassword = false;
    this.loader = false;
    this.loginformUser();
  }
  loginformUser() {
    this.loginForm = this.formBuilder.group({
      id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  forgetPasswordForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  forgetpassword() {
    this.forgetPasswordForm();
    this.forgotPassword = true;
  }
  resetPassword() {
    this.loader = true;
    const id = this.forgotPasswordForm.value.email;
    if (id) {
      this.fireAuth.sendPasswordResetEmail(id).then(res => {
        this.tosterService.showSuccess('Password reset email sent successfully', 'Success');
        this.modalService.dismissAll();
        this.activeModal.close();
        this.loader = false;
        console.log('Password reset email sent successfully');
        console.log(res);
        // You can show a success message to the user
      }).catch(error => {
        console.error('Error sending password reset email', error);
        // Handle the error, show an error message to the user, etc.
      });
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.loader = true;
      const userId = this.loginForm.value.id;
      const password = this.loginForm.value.password;
      // Use a query to retrieve the document based on your custom ID
      this.fireService.getUserById(userId).then(docSnapshot => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          console.log(userData);
          this.fireAuth.signIn(userId, password).then(() => {
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('userName', userData['name']);
            sessionStorage.setItem('userProfilePic', userData['profilePic']);
            sessionStorage.setItem('UserIsRegister', 'true');
            console.log(this.dataService.userId, this.dataService.userName, this.dataService.getUserIsRegister());
            this.dataService.userId = sessionStorage.getItem('userId');
            this.dataService.userName = sessionStorage.getItem('userName');
            this.dataService.userProfilePic = sessionStorage.getItem('userProfilePic');
            this.dataService.setUserIsRegister(this.dataService.getUserIsRegisteredFromLocalStorage());
            this.handleSuccessfulLogin(userId);
            console.log('Signed in');
          }).catch(error => {
            this.loader = false;
            // Handle error in the component
            console.error('Error in component', error);
            this.handleLoginFailure();
          });
        } else {
          console.log('User not found');
          this.loader = false;
        }
      }).catch(error => {
        this.loader = false;
        console.error('Error getting user data:', error);
      });
    }
  }
  handleSuccessfulLogin(userId) {
    this.tosterService.showSuccess('Login Successful', 'Success');
    // this.dataService.userId = userId;
    this.modalService.dismissAll();
    this.activeModal.close();
    this.loader = false;
  }
  handleLoginFailure() {
    this.tosterService.showError('Incorrect username or password', 'Login Failed');
  }
  navigateToSignUp() {
    this.activeModal.close();
    this.modalService.open(_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_0__.SignUpComponent, {
      centered: true
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_server_service__WEBPACK_IMPORTED_MODULE_1__.ServerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_toster_service__WEBPACK_IMPORTED_MODULE_3__.TosterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_fire_auth_service__WEBPACK_IMPORTED_MODULE_5__.FireAuthService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 2,
  vars: 2,
  consts: [["class", "UserLogin", 4, "ngIf"], ["id", "spinner", "mdbBtn", "", "color", "success", "type", "button", "disabled", "", 4, "ngIf"], [1, "UserLogin"], ["class", "login-container", 4, "ngIf"], ["class", "forgotPassword", 4, "ngIf"], [1, "login-container"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "id"], ["type", "email", "id", "id", "formControlName", "id", "required", "", "placeholder", "Enter Your email"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "required", ""], [1, "forgotPassword", 3, "click"], [1, "btnContainer"], ["type", "submit", 3, "disabled"], [1, "btn", "btn-dark", 3, "click"], [1, "forgotPassword"], ["type", "email", "id", "email", "formControlName", "email", "required", "", "placeholder", "Enter Your email"], [1, "btn", "btn-info", 3, "click"], ["id", "spinner", "mdbBtn", "", "color", "success", "type", "button", "disabled", ""], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 3, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LoginComponent_button_1_Template, 3, 0, "button", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  padding: 2%;\n}\n\n.UserLogin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 5px;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.btnContainer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton[_ngcontent-%COMP%]:not(.btn-dark) {\n  display: block;\n  width: 100%;\n  padding: 10px;\n  background-color: #00ff2f;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 10px;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #007bff;\n  cursor: not-allowed;\n}\n\nbutton[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n\n.gmailContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n}\n\n#spinner[_ngcontent-%COMP%] {\n  background-image: linear-gradient(50deg, #0dff15, #4a9bff);\n  background-size: 200% 100%; \n\n  animation: _ngcontent-%COMP%_gradientMove 2s linear infinite alternate-reverse; \n\n}\n\n@keyframes _ngcontent-%COMP%_gradientMove {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 100%;\n  }\n}\n.forgotPassword[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLy4uL0Zyb250JTIwRW5kJTIwV2Vic2l0ZS9CZXN0JTIwQ29kZSUyMFRlbXBsZXRlJTIwaSUyMHdyb3RlL0FuZ3VsYXIlMjBsZWFybmluZyUyMGNsYXNzL0Jsb2ctUG9zdCUyMFdlYnNpdGUvdXNpbmclMjBmaXJlYmFzZSUyMGFwaS9zcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FETUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtBQ0hKOztBRE1FO0VBQ0UsbUJBQUE7QUNISjs7QURNRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURLRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBRElFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREdFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDR0o7O0FEQUE7RUFDRSwwREFBQTtFQUNBLDBCQUFBLEVBQUEsOENBQUE7RUFDQSw0REFBQSxFQUFBLHdDQUFBO0FDR0Y7O0FEREE7RUFDSTtJQUNBLDJCQUFBO0VDSUY7RURGQTtJQUNFLDJCQUFBO0VDSUY7QUFDRjtBRERBO0VBQ0EsZUFBQTtBQ0dBIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrOyAvKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc3R5bGVzIGFyZSBhcHBsaWVkIG9ubHkgdG8gdGhpcyBjb21wb25lbnQgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMiU7XHJcblxyXG59IFxyXG4uVXNlckxvZ2lue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcblxyXG5cclxufVxyXG4vL2xvZ2luXHJcbiAgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAuYnRuQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgYnV0dG9uOm5vdCguYnRuLWRhcmspIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmYyZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuYnRuLWRhcmt7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG4gIGJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgLmdtYWlsQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuLy8uXHJcbiNzcGlubmVye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgIzBkZmYxNSwgIzRhOWJmZik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7IC8qIERvdWJsZSB0aGUgd2lkdGggZm9yIHRoZSBhbmltYXRpb24gZWZmZWN0ICovXHJcbiAgYW5pbWF0aW9uOiBncmFkaWVudE1vdmUgMnMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlOyAvKiBBZGp1c3QgYW5pbWF0aW9uIGR1cmF0aW9uIGFzIG5lZWRlZCAqL1xyXG59XHJcbkBrZXlmcmFtZXMgZ3JhZGllbnRNb3ZlIHtcclxuICAgIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9yZ290UGFzc3dvcmQ6aG92ZXJ7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufSIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIlO1xufVxuXG4uVXNlckxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5idG5Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5idXR0b246bm90KC5idG4tZGFyaykge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmMmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWRhcmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZ21haWxDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuI3NwaW5uZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsICMwZGZmMTUsICM0YTliZmYpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTsgLyogRG91YmxlIHRoZSB3aWR0aCBmb3IgdGhlIGFuaW1hdGlvbiBlZmZlY3QgKi9cbiAgYW5pbWF0aW9uOiBncmFkaWVudE1vdmUgMnMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlOyAvKiBBZGp1c3QgYW5pbWF0aW9uIGR1cmF0aW9uIGFzIG5lZWRlZCAqL1xufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50TW92ZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xuICB9XG59XG4uZm9yZ290UGFzc3dvcmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5680:
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sign-up/sign-up.component */ 4029);
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-post/add-post.component */ 6621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/server.service */ 5541);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/data.service */ 6873);
/* harmony import */ var src_app_shared_toster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/toster.service */ 3182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/firestore.service */ 1139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/filter.pipe */ 3137);














function ProfileComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfileComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.editProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ProfileComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.userData.username);
  }
}
function ProfileComponent_div_35_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 30)(4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfileComponent_div_35_div_5_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const post_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.editPost(post_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfileComponent_div_35_div_5_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const post_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.deletePost(post_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function ProfileComponent_div_35_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const comment_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](comment_r16.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](comment_r16.comment);
  }
}
function ProfileComponent_div_35_div_16_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfileComponent_div_35_div_16_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.showMoreComments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Show more comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_35_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "All Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ProfileComponent_div_35_div_16_div_4_Template, 5, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ProfileComponent_div_35_div_16_button_5_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", post_r6.comments.slice(0, ctx_r8.visibleComments));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", post_r6.comments.length > ctx_r8.visibleComments);
  }
}
function ProfileComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ProfileComponent_div_35_div_5_Template, 8, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p")(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Answer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "img", 25)(13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, ProfileComponent_div_35_div_16_Template, 6, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r2.userData.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.userData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.isCurrentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](post_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", post_r6.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", post_r6.image || post_r6.postImage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", post_r6.likes, " ", post_r6.likes === 1 ? "Like" : "Likes", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", post_r6.comments.length > 0);
  }
}
function ProfileComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfileComponent_div_37_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.showMorePosts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Show More");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
class ProfileComponent {
  constructor(server, modalService, dataService, tosterService, route, fireService) {
    this.server = server;
    this.modalService = modalService;
    this.dataService = dataService;
    this.tosterService = tosterService;
    this.route = route;
    this.fireService = fireService;
    this.visibleComments = 2;
    this.latestPosts = [];
    this.displayedPosts = [];
    this.postsPerPage = 2;
  }
  ngOnInit() {
    this.userID = this.dataService.userId;
    this.route.queryParamMap.subscribe(params => {
      this.otherUserId = params.get('id') || '';
      if (this.otherUserId && this.otherUserId !== this.userID) {
        this.isCurrentUser = false;
        this.fetchUserData(this.otherUserId);
      } else {
        this.isCurrentUser = true;
        this.fetchUserData(this.userID);
      }
    });
  }
  fetchUserData(id) {
    this.fireService.getUserById(id).then(docSnapshot => {
      if (docSnapshot.exists()) {
        this.userData = docSnapshot.data();
        console.log(this.userData);
        this.getLatestPosts(id);
      } else {
        console.log('User not found');
      }
    }).catch(error => {
      console.error('Data Not Fetched', error);
    });
  }
  getLatestPosts(id) {
    var _this = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.allposts = yield _this.fireService.getAllUserPosts(id);
      _this.latestPosts = _this.allposts.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
      });
      _this.displayedPosts = _this.latestPosts.slice(0, _this.postsPerPage);
    })();
  }
  showMorePosts() {
    const remainingPosts = this.latestPosts.slice(this.displayedPosts.length);
    const nextPosts = remainingPosts.slice(0, this.postsPerPage);
    this.displayedPosts = this.displayedPosts.concat(nextPosts);
  }
  showMoreComments() {
    this.visibleComments += 2;
  }
  deletePost(post) {
    // console.log(post)
    const postIndex = this.displayedPosts.findIndex(p => p.id === post.id);
    // console.log(postIndex)
    const userId = this.userID;
    const postId = post.id;
    if (postIndex !== -1) {
      this.displayedPosts.splice(postIndex, 1);
      this.fireService.deletePost(userId, postId).then(res => {
        this.tosterService.showSuccess('Post Deleted Successfully', 'Success');
      });
    } else {
      this.tosterService.showError('Post with ID not found in user data.', 'failed');
      console.log(`Post with ID ${post.id} not found in user data.`);
    }
  }
  openModelWithComponent(component, dataName, data) {
    this.dataService.editMode = true;
    const modalRef = this.modalService.open(component, {
      centered: true
    });
    if (dataName === 'userData') {
      modalRef.componentInstance.userData = data;
      modalRef.result.then(() => {
        this.fetchUserData(this.userID);
      });
    } else {
      modalRef.componentInstance.post = data;
    }
  }
  editProfile() {
    this.openModelWithComponent(_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent, 'userData', this.userData);
  }
  editPost(post) {
    this.openModelWithComponent(_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_2__.AddPostComponent, 'post', post);
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_server_service__WEBPACK_IMPORTED_MODULE_3__.ServerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_toster_service__WEBPACK_IMPORTED_MODULE_5__.TosterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_6__.FirestoreService));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 38,
  vars: 17,
  consts: [[1, "container"], [1, "coverContainer"], ["alt", "CoverPhoto", 1, "coverImg", 3, "src"], [1, "detailContainer"], [1, "editContainer"], ["alt", "", 1, "propic", 3, "src"], ["class", "btn btn-light", 3, "click", 4, "ngIf"], [1, "nameContainer"], [4, "ngIf"], [1, "bioContainer"], [1, "infoContainer"], [1, "info1"], [1, "info2"], [3, "href"], [1, "search-container"], ["type", "text", "placeholder", "Search ... Questions.. ", "aria-label", "Search", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "postsContainer"], ["class", "postContainer", 4, "ngFor", "ngForOf"], ["class", "load-more-button-container", 4, "ngIf"], [1, "btn", "btn-light", 3, "click"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "edit"], [1, "postContainer"], [1, "postNameHeading"], [1, "postProPIc", 3, "src"], ["ngbDropdown", "", "container", "body", "class", "dropdownAction", 4, "ngIf"], ["alt", "", 3, "src"], [1, "btn", "btn-primary", "likebtn"], ["class", "allcommentContainer", 4, "ngIf"], ["ngbDropdown", "", "container", "body", 1, "dropdownAction"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-dark", "btn-sm", "actionBtn"], ["ngbDropdownMenu", ""], ["type", "button", "ngbDropdownItem", "", 3, "click"], [1, "allcommentContainer"], [1, "userCommentsContainer"], ["class", "commenteuser", 4, "ngFor", "ngForOf"], ["class", "btn btn-dark", 3, "click", 4, "ngIf"], [1, "commenteuser"], [1, "btn", "btn-dark", 3, "click"], [1, "load-more-button-container"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ProfileComponent_button_6_Template, 4, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7)(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ProfileComponent_span_10_Template, 2, 1, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "span")(17, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Talks about : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "span")(21, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "address : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 12)(25, "a", 13)(26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "span")(29, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "joined :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 14)(33, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_33_listener($event) {
        return ctx.searchInput = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, ProfileComponent_div_35_Template, 18, 9, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, ProfileComponent_div_37_Template, 3, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.userData.coverPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.userData.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isCurrentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.userData.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isCurrentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.userData.bio);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.userData.talksAbout);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.userData.address);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", ctx.userData.socialLink, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.userData.socialLink);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.userData.joinedDate.slice(0, 8), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](36, 14, ctx.displayedPosts, ctx.searchInput));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.latestPosts.length > ctx.displayedPosts.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_7__.FilterPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  position: relative;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  position: relative;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.194);\n}\n.container[_ngcontent-%COMP%]   .coverContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .coverContainer[_ngcontent-%COMP%]   .coverImg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 260px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0% 2%;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .editContainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  position: relative;\n  padding: 2% 2% 0% 2%;\n  height: 50px;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .editContainer[_ngcontent-%COMP%]   .propic[_ngcontent-%COMP%] {\n  top: -80px;\n  width: 135px;\n  height: 135px;\n  left: 0px;\n  border: 2px solid #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  position: absolute;\n  object-fit: cover;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .editContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  outline: none;\n  gap: 10px;\n  box-shadow: none;\n  border-radius: 10%;\n  border: 1px solid rgba(114, 114, 114, 0.412);\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .nameContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .nameContainer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.2vw;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .infoContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 10px;\n  text-transform: capitalize;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .infoContainer[_ngcontent-%COMP%]   .info1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .infoContainer[_ngcontent-%COMP%]   .info2[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.postsContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  position: relative;\n  gap: 10px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 2%;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.327);\n  border-radius: 10px;\n  background: #fff;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .dropdownAction[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 4%;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .dropdownAction[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: none;\n  box-shadow: none;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .dropdownAction[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .btn-outline-dark[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1%;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .postNameHeading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 10px;\n  margin-bottom: 1%;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .postNameHeading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  cursor: pointer;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .postNameHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 1vw;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 1.5vw;\n  margin: 0;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likebtn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .likeContainer[_ngcontent-%COMP%] {\n  width: 15%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .commentContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .commentContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70%;\n  outline: none;\n  border: 1px solid rgba(0, 0, 0, 0.498);\n  padding: 6px;\n  border-radius: 5px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .commentContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.postsContainer[_ngcontent-%COMP%]   .load-more-button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.allcommentContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n  flex-direction: column;\n  gap: 10px;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 100%;\n  gap: 5px;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%] {\n  width: auto;\n  border-radius: 10px;\n  background: #eaeaea;\n  padding: 5px 10px;\n  text-transform: capitalize;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  padding: 2%;\n  position: sticky;\n  width: 100%;\n  z-index: 2;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  outline: none;\n  font-size: 16px;\n  width: 100%;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.086);\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.25);\n}\n.search-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #7a7a7a;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi9Gcm9udCUyMEVuZCUyMFdlYnNpdGUvQmVzdCUyMENvZGUlMjBUZW1wbGV0ZSUyMGklMjB3cm90ZS9Bbmd1bGFyJTIwbGVhcm5pbmclMjBjbGFzcy9CbG9nLVBvc3QlMjBXZWJzaXRlL3VzaW5nJTIwZmlyZWJhc2UlMjBhcGkvc3JjL2FwcC91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0NGO0FERUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0FDREo7QURHSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNETjtBRElFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNGSjtBREtJO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0pOO0FES007RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSFI7QURLTTtFQUVGLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNKSjtBRE9JO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0xSO0FETVE7RUFDSSxnQkFBQTtBQ0paO0FET0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7QUNMUjtBRFFRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUNOWjs7QURjQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ1hKO0FEY0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDWk47QURjTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDWlI7QURjUTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ1pWO0FEYVU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDWFo7QURrQk07RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ2hCUjtBRGtCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDaEJSO0FEaUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2ZWO0FEaUJRO0VBQ0UsNERBQUE7RUFDQSxjQUFBO0FDZlY7QURtQk07RUFHRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ25CUjtBRHFCTTtFQUNFLGVBQUE7QUNuQlI7QURxQk07RUFDRSxXQUFBO0FDbkJSO0FEcUJLO0VBQ0MsbUJBQUE7QUNuQk47QURxQk07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ25CUjtBRG9CUTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQ2xCVjtBRG9CUTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNsQlY7QURtQlU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDakJaO0FEbUJVO0VBQ0UsVUFBQTtBQ2pCWjtBRHNCSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3BCUjs7QUR1QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUVBLFNBQUE7QUNyQko7QURzQkk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNwQk47QURzQk07RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNwQlI7QURxQlE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ25CVjtBRHFCUTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDbkJWOztBRHdCRTtFQUNFLFdBQUE7RUFJQSxnQkFBQTtFQUNGLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUN6QkY7QUQwQkk7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQ3hCTjtBRDJCSTtFQUVFLDJDQUFBO0FDMUJOO0FENkJJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDM0JOIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xOTQpO1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuXHJcbiAgLmNvdmVyQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCAyNTUsIDApO1xyXG4gICAgLmNvdmVySW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZGV0YWlsQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwJSAyJTtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjMsIDAsIDI1NSk7XHJcbiAgICBcclxuICAgIC5lZGl0Q29udGFpbmVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6MiUgMiUgMCUgMiU7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgLnByb3BpYyB7XHJcbiAgICAgICAgdG9wOiAtODBweDtcclxuICAgICAgICB3aWR0aDogMTM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzVweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE0LCAxMTQsIDExNCwgMC40MTIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmFtZUNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHN0cm9uZ3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mb0NvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLmluZm8xLC5pbmZvMntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4ucG9zdHNDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgXHJcbiAgICAucG9zdENvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzI3KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgICAgIC5kcm9wZG93bkFjdGlvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogNCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAuYnRuLW91dGxpbmUtZGFya3tcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICBcclxuICAgICAgfVxyXG4gICAgICBocntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDElO1xyXG4gICAgICB9XHJcbiAgICAgIC5wb3N0TmFtZUhlYWRpbmd7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgIC5saWtlYnRue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgIH1cclxuICAgICAgLmxpa2VDb21tZW50Q29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgIC5saWtlQ29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb21tZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDk4KTtcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDoyNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubG9hZC1tb3JlLWJ1dHRvbi1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWxsY29tbWVudENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIC51c2VyQ29tbWVudHNDb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZ2FwOiA1cHg7XHJcbiAgXHJcbiAgICAgIC5jb21tZW50ZXVzZXIge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDElO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgcG9zaXRpb246c3RpY2t5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGhlaWdodDogNTBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wODYpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcclxuICAgICAgLy8gYm9yZGVyLWNvbG9yOiAjMDBmZjExOTI7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzdhN2E3YTtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE5NCk7XG59XG4uY29udGFpbmVyIC5jb3ZlckNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5jb3ZlckNvbnRhaW5lciAuY292ZXJJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY29udGFpbmVyIC5kZXRhaWxDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAwJSAyJTtcbn1cbi5jb250YWluZXIgLmRldGFpbENvbnRhaW5lciAuZWRpdENvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyJSAyJSAwJSAyJTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNvbnRhaW5lciAuZGV0YWlsQ29udGFpbmVyIC5lZGl0Q29udGFpbmVyIC5wcm9waWMge1xuICB0b3A6IC04MHB4O1xuICB3aWR0aDogMTM1cHg7XG4gIGhlaWdodDogMTM1cHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY29udGFpbmVyIC5kZXRhaWxDb250YWluZXIgLmVkaXRDb250YWluZXIgYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZ2FwOiAxMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE0LCAxMTQsIDExNCwgMC40MTIpO1xufVxuLmNvbnRhaW5lciAuZGV0YWlsQ29udGFpbmVyIC5uYW1lQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIgLmRldGFpbENvbnRhaW5lciAubmFtZUNvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDEuMnZ3O1xufVxuLmNvbnRhaW5lciAuZGV0YWlsQ29udGFpbmVyIC5pbmZvQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY29udGFpbmVyIC5kZXRhaWxDb250YWluZXIgLmluZm9Db250YWluZXIgLmluZm8xLCAuY29udGFpbmVyIC5kZXRhaWxDb250YWluZXIgLmluZm9Db250YWluZXIgLmluZm8yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wb3N0c0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBnYXA6IDEwcHg7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMyNyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wb3N0c0NvbnRhaW5lciAucG9zdENvbnRhaW5lciAuZHJvcGRvd25BY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogNCU7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmRyb3Bkb3duQWN0aW9uIGJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmRyb3Bkb3duQWN0aW9uIGJ1dHRvbiAuYnRuLW91dGxpbmUtZGFyayB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5wb3N0c0NvbnRhaW5lciAucG9zdENvbnRhaW5lciBociB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDElO1xufVxuLnBvc3RzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5wb3N0TmFtZUhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgLnBvc3ROYW1lSGVhZGluZyBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgLnBvc3ROYW1lSGVhZGluZyBoNSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDF2dztcbn1cbi5wb3N0c0NvbnRhaW5lciAucG9zdENvbnRhaW5lciBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBtYXJnaW46IDA7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgcCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wb3N0c0NvbnRhaW5lciAucG9zdENvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wb3N0c0NvbnRhaW5lciAucG9zdENvbnRhaW5lciAubGlrZWJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmxpa2VDb21tZW50Q29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmxpa2VDb21tZW50Q29udGFpbmVyIC5saWtlQ29udGFpbmVyIHtcbiAgd2lkdGg6IDE1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5wb3N0c0NvbnRhaW5lciAucG9zdENvbnRhaW5lciAubGlrZUNvbW1lbnRDb250YWluZXIgLmNvbW1lbnRDb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLnBvc3RzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5saWtlQ29tbWVudENvbnRhaW5lciAuY29tbWVudENvbnRhaW5lciBpbnB1dCB7XG4gIHdpZHRoOiA3MCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40OTgpO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wb3N0c0NvbnRhaW5lciAucG9zdENvbnRhaW5lciAubGlrZUNvbW1lbnRDb250YWluZXIgLmNvbW1lbnRDb250YWluZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5wb3N0c0NvbnRhaW5lciAubG9hZC1tb3JlLWJ1dHRvbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hbGxjb21tZW50Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbi5hbGxjb21tZW50Q29udGFpbmVyIC51c2VyQ29tbWVudHNDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiA1cHg7XG59XG4uYWxsY29tbWVudENvbnRhaW5lciAudXNlckNvbW1lbnRzQ29udGFpbmVyIC5jb21tZW50ZXVzZXIge1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmFsbGNvbW1lbnRDb250YWluZXIgLnVzZXJDb21tZW50c0NvbnRhaW5lciAuY29tbWVudGV1c2VyIHN0cm9uZyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5hbGxjb21tZW50Q29udGFpbmVyIC51c2VyQ29tbWVudHNDb250YWluZXIgLmNvbW1lbnRldXNlciBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWlucHV0IHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDg2KTtcbn1cbi5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLnNlYXJjaC1jb250YWluZXIgOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjN2E3YTdhO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1186:
/*!***********************************************************************!*\
  !*** ./src/app/user/show-user-profile/show-user-profile.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowUserProfileComponent: () => (/* binding */ ShowUserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/server.service */ 5541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/filter.pipe */ 3137);






function ShowUserProfileComponent_div_35_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r6.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r6.comment);
  }
}
function ShowUserProfileComponent_div_35_div_15_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShowUserProfileComponent_div_35_div_15_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.showMoreComments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Show more comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ShowUserProfileComponent_div_35_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "All Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ShowUserProfileComponent_div_35_div_15_div_4_Template, 5, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ShowUserProfileComponent_div_35_div_15_button_5_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", post_r2.comments.slice(0, ctx_r3.visibleComments));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", post_r2.comments.length > ctx_r3.visibleComments);
  }
}
function ShowUserProfileComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Answer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 20)(12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ShowUserProfileComponent_div_35_div_15_Template, 6, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.userData.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.userData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](post_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", post_r2.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", post_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", post_r2.likes, " ", post_r2.likes === 1 ? "Like" : "Likes", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", post_r2.comments.length > 0);
  }
}
function ShowUserProfileComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShowUserProfileComponent_div_37_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.showMorePosts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Show More");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ShowUserProfileComponent {
  constructor(route, server) {
    this.route = route;
    this.server = server;
    this.visibleComments = 2;
    this.latestPosts = [];
    this.displayedPosts = [];
    this.postsPerPage = 2;
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.userID = params.get('id') || '';
    });
    this.fetchUserData();
  }
  fetchUserData() {
    this.server.getUser(this.userID).subscribe({
      next: data => {
        this.userData = data;
        this.getLatestPosts();
      },
      error: error => {
        console.error('Data Not Fetched', error);
      }
    });
  }
  getLatestPosts() {
    const posts = this.userData.posts;
    this.latestPosts = posts.slice().sort((a, b) => b.id - a.id);
    this.displayedPosts = this.latestPosts.slice(0, this.postsPerPage);
  }
  showMorePosts() {
    const remainingPosts = this.latestPosts.slice(this.displayedPosts.length);
    const nextPosts = remainingPosts.slice(0, this.postsPerPage);
    this.displayedPosts = this.displayedPosts.concat(nextPosts);
  }
  showMoreComments() {
    this.visibleComments += 2;
  }
}
ShowUserProfileComponent.ɵfac = function ShowUserProfileComponent_Factory(t) {
  return new (t || ShowUserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_server_service__WEBPACK_IMPORTED_MODULE_0__.ServerService));
};
ShowUserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ShowUserProfileComponent,
  selectors: [["app-show-user-profile"]],
  decls: 38,
  vars: 16,
  consts: [[1, "container"], [1, "coverContainer"], ["alt", "", 1, "coverImg", 3, "src"], [1, "detailContainer"], [1, "editContainer"], ["alt", "", 1, "propic", 3, "src"], [1, "nameContainer"], [1, "bioContainer"], [1, "infoContainer"], [1, "info1"], [1, "info2"], [3, "href"], [1, "search-container"], ["type", "text", "placeholder", "Search ... Questions.. ", "aria-label", "Search", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "postsContainer"], ["class", "postContainer", 4, "ngFor", "ngForOf"], ["class", "load-more-button-container", 4, "ngIf"], [1, "postContainer"], [1, "postNameHeading"], [1, "postProPIc", 3, "src"], ["alt", "", 3, "src"], [1, "btn", "btn-primary", "likebtn"], ["class", "allcommentContainer", 4, "ngIf"], [1, "allcommentContainer"], [1, "userCommentsContainer"], ["class", "commenteuser", 4, "ngFor", "ngForOf"], ["class", "btn btn-dark", 3, "click", 4, "ngIf"], [1, "commenteuser"], [1, "btn", "btn-dark", 3, "click"], [1, "load-more-button-container"]],
  template: function ShowUserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "span")(17, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Talks about : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span")(21, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "address : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10)(25, "a", 11)(26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span")(29, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "joined :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12)(33, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShowUserProfileComponent_Template_input_ngModelChange_33_listener($event) {
        return ctx.searchInput = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ShowUserProfileComponent_div_35_Template, 17, 8, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ShowUserProfileComponent_div_37_Template, 3, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.userData.coverPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.userData.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userData.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userData.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userData.bio);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userData.talksAbout);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userData.address);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.userData.socialLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userData.socialLink);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.userData.joinedDate.slice(0, 8), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](36, 13, ctx.displayedPosts, ctx.searchInput));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.latestPosts.length > ctx.displayedPosts.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  position: relative;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  position: relative;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.194);\n}\n.container[_ngcontent-%COMP%]   .coverContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .coverContainer[_ngcontent-%COMP%]   .coverImg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 260px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0% 2%;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .editContainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  position: relative;\n  padding: 2% 2% 0% 2%;\n  height: 50px;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .editContainer[_ngcontent-%COMP%]   .propic[_ngcontent-%COMP%] {\n  top: -80px;\n  width: 135px;\n  height: 135px;\n  left: 0px;\n  border: 2px solid #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  position: absolute;\n  object-fit: cover;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .editContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  outline: none;\n  gap: 10px;\n  box-shadow: none;\n  border-radius: 10%;\n  border: 1px solid rgba(114, 114, 114, 0.412);\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .nameContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .nameContainer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.2vw;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .infoContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 10px;\n  text-transform: capitalize;\n}\n.container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .infoContainer[_ngcontent-%COMP%]   .info1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .detailContainer[_ngcontent-%COMP%]   .infoContainer[_ngcontent-%COMP%]   .info2[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.postsContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  position: relative;\n  gap: 10px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 2%;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.327);\n  border-radius: 10px;\n  background: #fff;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .dropdownAction[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 4%;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .dropdownAction[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: none;\n  box-shadow: none;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .dropdownAction[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .btn-outline-dark[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1%;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .postNameHeading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 10px;\n  margin-bottom: 1%;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .postNameHeading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  cursor: pointer;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .postNameHeading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 1vw;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 1.5vw;\n  margin: 0;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likebtn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .likeContainer[_ngcontent-%COMP%] {\n  width: 15%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .commentContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .commentContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70%;\n  outline: none;\n  border: 1px solid rgba(0, 0, 0, 0.498);\n  padding: 6px;\n  border-radius: 5px;\n}\n.postsContainer[_ngcontent-%COMP%]   .postContainer[_ngcontent-%COMP%]   .likeCommentContainer[_ngcontent-%COMP%]   .commentContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.postsContainer[_ngcontent-%COMP%]   .load-more-button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.allcommentContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n  flex-direction: column;\n  gap: 10px;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 100%;\n  gap: 5px;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%] {\n  width: auto;\n  border-radius: 10px;\n  background: #eaeaea;\n  padding: 5px 10px;\n  text-transform: capitalize;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.allcommentContainer[_ngcontent-%COMP%]   .userCommentsContainer[_ngcontent-%COMP%]   .commenteuser[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  padding: 2%;\n  position: sticky;\n  width: 100%;\n  z-index: 2;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  outline: none;\n  font-size: 16px;\n  width: 100%;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.086);\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.25);\n}\n.search-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #7a7a7a;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9zaG93LXVzZXItcHJvZmlsZS9zaG93LXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLy4uL0Zyb250JTIwRW5kJTIwV2Vic2l0ZS9CZXN0JTIwQ29kZSUyMFRlbXBsZXRlJTIwaSUyMHdyb3RlL0FuZ3VsYXIlMjBsZWFybmluZyUyMGNsYXNzL0Jsb2ctUG9zdCUyMFdlYnNpdGUvdXNpbmclMjBmaXJlYmFzZSUyMGFwaS9zcmMvYXBwL3VzZXIvc2hvdy11c2VyLXByb2ZpbGUvc2hvdy11c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNDSjtBREVJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtBQ0ROO0FER007RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRFI7QURJSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDRk47QURLTTtFQUNFLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNKUjtBREtRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0hWO0FES1E7RUFFRixhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDSk47QURPTTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNMVjtBRE1VO0VBQ0ksZ0JBQUE7QUNKZDtBRE9NO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FDTFY7QURRVTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FDTmQ7O0FEY0U7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNYTjtBRGNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ1pSO0FEY1E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ1pWO0FEY1U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNaWjtBRGFZO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1hkO0FEa0JRO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNoQlY7QURrQlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ2hCVjtBRGlCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNmWjtBRGlCVTtFQUNFLDREQUFBO0VBQ0EsY0FBQTtBQ2ZaO0FEbUJRO0VBR0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNuQlY7QURxQlE7RUFDRSxlQUFBO0FDbkJWO0FEcUJRO0VBQ0UsV0FBQTtBQ25CVjtBRHFCTztFQUNDLG1CQUFBO0FDbkJSO0FEcUJRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNuQlY7QURvQlU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNsQlo7QURvQlU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FDbEJaO0FEbUJZO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2pCZDtBRG1CWTtFQUNFLFVBQUE7QUNqQmQ7QURzQk07RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNwQlY7O0FEdUJJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFFQSxTQUFBO0FDckJOO0FEc0JNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDcEJSO0FEc0JRO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDcEJWO0FEcUJVO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNuQlo7QURxQlU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ25CWjs7QUR3Qkk7RUFDRSxXQUFBO0VBSUEsZ0JBQUE7RUFDRixXQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDekJKO0FEMEJNO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QUN4QlI7QUQyQk07RUFFRSwyQ0FBQTtBQzFCUjtBRDZCTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQzNCUiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTk0KTtcclxuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBcclxuICAgIC5jb3ZlckNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDI1NSwgMCk7XHJcbiAgICAgIC5jb3ZlckltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldGFpbENvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAlIDIlO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTIzLCAwLCAyNTUpO1xyXG4gIFxyXG4gICAgICAuZWRpdENvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzoyJSAyJSAwJSAyJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLnByb3BpYyB7XHJcbiAgICAgICAgICB0b3A6IC04MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMzVweDtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExNCwgMTE0LCAxMTQsIDAuNDEyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm5hbWVDb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgc3Ryb25ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmluZm9Db250YWluZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxuICAgICAgICAgIC5pbmZvMSwuaW5mbzJ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAucG9zdHNDb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAvLyBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBcclxuICAgICAgLnBvc3RDb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMjcpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIFxyXG4gICAgICAgIC5kcm9wZG93bkFjdGlvbntcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiA0JTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAuYnRuLW91dGxpbmUtZGFya3tcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDElO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9zdE5hbWVIZWFkaW5ne1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDF2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLmxpa2VidG57XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgIH1cclxuICAgICAgICAubGlrZUNvbW1lbnRDb250YWluZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgICAgLmxpa2VDb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbW1lbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40OTgpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICB3aWR0aDoyNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmxvYWQtbW9yZS1idXR0b24tY29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWxsY29tbWVudENvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAudXNlckNvbW1lbnRzQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGdhcDogNXB4O1xyXG4gICAgXHJcbiAgICAgICAgLmNvbW1lbnRldXNlciB7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAvLyBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgIHBvc2l0aW9uOnN0aWNreTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4Nik7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgIC8vIGJvcmRlci1jb2xvcjogIzAwZmYxMTkyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjN2E3YTdhO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xOTQpO1xufVxuLmNvbnRhaW5lciAuY292ZXJDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciAuY292ZXJDb250YWluZXIgLmNvdmVySW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmNvbnRhaW5lciAuZGV0YWlsQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMCUgMiU7XG59XG4uY29udGFpbmVyIC5kZXRhaWxDb250YWluZXIgLmVkaXRDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMiUgMiUgMCUgMiU7XG4gIGhlaWdodDogNTBweDtcbn1cbi5jb250YWluZXIgLmRldGFpbENvbnRhaW5lciAuZWRpdENvbnRhaW5lciAucHJvcGljIHtcbiAgdG9wOiAtODBweDtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDEzNXB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmNvbnRhaW5lciAuZGV0YWlsQ29udGFpbmVyIC5lZGl0Q29udGFpbmVyIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGdhcDogMTBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExNCwgMTE0LCAxMTQsIDAuNDEyKTtcbn1cbi5jb250YWluZXIgLmRldGFpbENvbnRhaW5lciAubmFtZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFpbmVyIC5kZXRhaWxDb250YWluZXIgLm5hbWVDb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxLjJ2dztcbn1cbi5jb250YWluZXIgLmRldGFpbENvbnRhaW5lciAuaW5mb0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmNvbnRhaW5lciAuZGV0YWlsQ29udGFpbmVyIC5pbmZvQ29udGFpbmVyIC5pbmZvMSwgLmNvbnRhaW5lciAuZGV0YWlsQ29udGFpbmVyIC5pbmZvQ29udGFpbmVyIC5pbmZvMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucG9zdHNDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ2FwOiAxMHB4O1xufVxuLnBvc3RzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMjcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmRyb3Bkb3duQWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDQlO1xufVxuLnBvc3RzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5kcm9wZG93bkFjdGlvbiBidXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnBvc3RzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5kcm9wZG93bkFjdGlvbiBidXR0b24gLmJ0bi1vdXRsaW5lLWRhcmsge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgaHIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxJTtcbn1cbi5wb3N0c0NvbnRhaW5lciAucG9zdENvbnRhaW5lciAucG9zdE5hbWVIZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuLnBvc3RzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5wb3N0TmFtZUhlYWRpbmcgaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnBvc3RzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5wb3N0TmFtZUhlYWRpbmcgaDUge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxdnc7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxLjV2dztcbiAgbWFyZ2luOiAwO1xufVxuLnBvc3RzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIHAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmxpa2VidG4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBvc3RzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5saWtlQ29tbWVudENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLnBvc3RzQ29udGFpbmVyIC5wb3N0Q29udGFpbmVyIC5saWtlQ29tbWVudENvbnRhaW5lciAubGlrZUNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmxpa2VDb21tZW50Q29udGFpbmVyIC5jb21tZW50Q29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5wb3N0c0NvbnRhaW5lciAucG9zdENvbnRhaW5lciAubGlrZUNvbW1lbnRDb250YWluZXIgLmNvbW1lbnRDb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogNzAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDk4KTtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucG9zdHNDb250YWluZXIgLnBvc3RDb250YWluZXIgLmxpa2VDb21tZW50Q29udGFpbmVyIC5jb21tZW50Q29udGFpbmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAyNSU7XG59XG4ucG9zdHNDb250YWluZXIgLmxvYWQtbW9yZS1idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxsY29tbWVudENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4uYWxsY29tbWVudENvbnRhaW5lciAudXNlckNvbW1lbnRzQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogNXB4O1xufVxuLmFsbGNvbW1lbnRDb250YWluZXIgLnVzZXJDb21tZW50c0NvbnRhaW5lciAuY29tbWVudGV1c2VyIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5hbGxjb21tZW50Q29udGFpbmVyIC51c2VyQ29tbWVudHNDb250YWluZXIgLmNvbW1lbnRldXNlciBzdHJvbmcge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uYWxsY29tbWVudENvbnRhaW5lciAudXNlckNvbW1lbnRzQ29udGFpbmVyIC5jb21tZW50ZXVzZXIgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyJTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1pbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4Nik7XG59XG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5zZWFyY2gtY29udGFpbmVyIDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzdhN2E3YTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4029:
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpComponent: () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data.service */ 6873);
/* harmony import */ var src_app_shared_toster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/toster.service */ 3182);
/* harmony import */ var src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/firestore.service */ 1139);
/* harmony import */ var src_app_shared_fire_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/fire-auth.service */ 7726);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);










function SignUpComponent_div_0_ng_container_40_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_0_ng_container_40_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password must be at least 6 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_0_ng_container_40_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_0_ng_container_40_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password Does Not Matched");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_0_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div")(2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Password :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SignUpComponent_div_0_ng_container_40_div_5_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SignUpComponent_div_0_ng_container_40_div_6_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Confirm Password :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SignUpComponent_div_0_ng_container_40_div_11_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SignUpComponent_div_0_ng_container_40_span_12_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.userForm.controls["password"].touched && (ctx_r2.userForm.controls["password"].errors == null ? null : ctx_r2.userForm.controls["password"].errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r2.userForm.controls["password"].errors == null ? null : ctx_r2.userForm.controls["password"].errors["minlength"]) && ctx_r2.userForm.controls["password"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.userForm.controls["confirmPassword"].touched && (ctx_r2.userForm.controls["confirmPassword"].errors == null ? null : ctx_r2.userForm.controls["confirmPassword"].errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.userForm.controls["confirmPassword"].dirty && !ctx_r2.isPasswordMatch);
  }
}
function SignUpComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function SignUpComponent_div_0_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.onSignUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div")(9, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Email :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div")(13, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "bio :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div")(17, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "CoverPhoto Link :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div")(21, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Profile Pic :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SignUpComponent_div_0_Template_input_change_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div")(25, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Talks About :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div")(29, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Address :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div")(33, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Social Links :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div")(37, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Phone Number :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, SignUpComponent_div_0_ng_container_40_Template, 13, 4, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.editmode ? "Edit Data" : "SignUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.editmode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.userForm.controls["username"].errors || !ctx_r0.isPasswordMatch || !ctx_r0.userForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.editmode ? "Update User" : "Create User");
  }
}
function SignUpComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class SignUpComponent {
  constructor(formBuilder, activeModal, dataService, toastrService, fireService, fireAuth) {
    this.formBuilder = formBuilder;
    this.activeModal = activeModal;
    this.dataService = dataService;
    this.toastrService = toastrService;
    this.fireService = fireService;
    this.fireAuth = fireAuth;
    this.loader = false;
    this.editmode = this.dataService.editMode;
    const date = new Date();
    this.currentDate = date.toLocaleString();
    // this.currentDate = new Date().toLocaleString();
  }

  ngOnInit() {
    this.editmode ? this.editformUser() : this.signupformUser();
    this.fireService.getData().subscribe(res => console.log(res));
  }
  signupformUser() {
    this.userForm = this.formBuilder.group({
      name: [''],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      bio: [''],
      coverPhoto: [''],
      profilePic: [''],
      talksAbout: [''],
      address: [''],
      socialLink: [''],
      phoneNo: [''],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  editformUser() {
    this.originalUserData = {
      ...this.userData
    };
    this.userForm = this.formBuilder.group({
      name: [this.userData.name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      username: [this.userData.username, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      bio: [this.userData.bio],
      coverPhoto: [this.userData.coverPhoto],
      profilePic: [this.userData.profilePic],
      talksAbout: [this.userData.talksAbout],
      address: [this.userData.address],
      socialLink: [this.userData.socialLink],
      phoneNo: [this.userData.phoneNo],
      password: [this.userData.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
      confirmPassword: [this.userData.confirmPassword, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  get isPasswordMatch() {
    return this.userForm.get('password')?.value === this.userForm.get('confirmPassword')?.value;
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.profilePics = reader.result;
    };
  }
  onSignUp() {
    var _this = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.userForm.valid) {
        _this.loader = true;
        const userData = _this.userForm.value;
        userData.id = userData.username;
        userData.joinedDate = _this.currentDate;
        if (_this.profilePics) {
          userData.profilePic = _this.profilePics;
        }
        const SUCCESS_EDIT_MESSAGE = _this.editmode ? 'User Successfully Edited' : 'User Successfully Created';
        const ERROR_EDIT_MESSAGE = _this.editmode ? 'Failed to edit user' : 'Failed to create user';
        try {
          if (_this.editmode) {
            console.log('editmode active');
            const updatedFields = {};
            for (const key in userData) {
              if (userData.hasOwnProperty(key) && userData[key] !== _this.originalUserData[key]) {
                updatedFields[key] = userData[key];
              }
            }
            if (Object.keys(updatedFields).length === 0) {
              // No fields have been changed, you can handle this case as needed
              _this.activeModal.close();
              _this.userForm.reset();
              _this.dataService.editMode = false;
              _this.loader = false;
              console.log('Nothing Has Changed');
              return; // Exit the function
            }

            updatedFields.id = userData.username;
            if (Object.keys(updatedFields).length === 2 && 'joinedDate' in updatedFields && 'id' in updatedFields) {
              _this.toastrService.showWarning('nothing Changed', 'Warning');
              _this.activeModal.close();
              _this.userForm.reset();
              _this.dataService.editMode = false;
              _this.loader = false;
              return;
            }
            for (const key in updatedFields) {
              if (updatedFields.hasOwnProperty(key)) {
                const updatedData = {}; //   const updatedData: any = { [key]: updatedFields[key] };
                updatedData[key] = updatedFields[key];
                if (Object.keys(updatedData).length > 0) {
                  yield _this.fireService.updateData(userData.id, updatedData);
                }
              }
            }
          } else {
            yield _this.fireService.createUserData(userData.username, userData).then(() => {
              _this.fireAuth.signUp(userData.username, userData.password);
              // console.log('User added with custom ID: ', userData.username);
              // this.dataService.userId = userData.username;
              // this.dataService.setUserIsRegister(true);
              sessionStorage.setItem('userId', userData.username);
              sessionStorage.setItem('userName', userData.name);
              sessionStorage.setItem('userProfilePic', userData.profilePic || '');
              sessionStorage.setItem('UserIsRegister', 'true');
              console.log(_this.dataService.userId, _this.dataService.userName, _this.dataService.getUserIsRegister());
              _this.dataService.userId = sessionStorage.getItem('userId');
              _this.dataService.userName = sessionStorage.getItem('userName');
              _this.dataService.userProfilePic = sessionStorage.getItem('userProfilePic');
              _this.dataService.setUserIsRegister(_this.dataService.getUserIsRegisteredFromLocalStorage());
              _this.loader = false;
            }).catch(error => {
              console.error('Error adding user: ', error);
              _this.loader = false;
            });
            // await this.fireService.createData(userData).then(data => console.log(data))
          }

          _this.toastrService.showSuccess(SUCCESS_EDIT_MESSAGE, 'Success');
          _this.activeModal.close();
          _this.userForm.reset();
          _this.dataService.editMode = false;
          _this.loader = false;
        } catch (error) {
          _this.toastrService.showError(ERROR_EDIT_MESSAGE, 'Error');
          _this.activeModal.close();
          _this.userForm.reset();
          _this.dataService.editMode = false;
          _this.loader = false;
          console.error('Error:', error);
        }
      }
    })();
  }
  ngOnDestroy() {
    this.dataService.editMode = false;
    console.log(this.dataService.editMode);
  }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
  return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_toster_service__WEBPACK_IMPORTED_MODULE_2__.TosterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_fire_auth_service__WEBPACK_IMPORTED_MODULE_4__.FireAuthService));
};
SignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SignUpComponent,
  selectors: [["app-sign-up"]],
  inputs: {
    userData: "userData"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "CreateUserContainer", 4, "ngIf"], ["id", "spinner", "mdbBtn", "", "color", "success", "type", "button", "disabled", "", 4, "ngIf"], [1, "CreateUserContainer"], [3, "formGroup", "ngSubmit"], ["for", "username"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Your Name"], ["type", "email", "id", "id", "formControlName", "username", "required", "", "placeholder", "Enter Your Email"], ["type", "text", "id", "bio", "formControlName", "bio", "placeholder", "Enter About Yourself"], ["type", "text", "id", "coverPhoto", "formControlName", "coverPhoto", "placeholder", "Add Image Link"], ["type", "file", "id", "profilePic", "formControlName", "profilePic", "placeholder", "Add Image Link", "accept", "image/*", 3, "change"], ["type", "text", "id", "talksAbout", "formControlName", "talksAbout", "placeholder", "Ex.. Computer , Programming"], ["type", "text", "id", "address", "formControlName", "address", "placeholder", "Ex.. Maharashtra , India"], ["type", "text", "id", "socialLink", "formControlName", "socialLink", "placeholder", "Add Other Social Links"], ["for", "phoneNo"], ["type", "text", "id", "phoneNo", "formControlName", "phoneNo", "placeholder", "Ex..999999999"], [4, "ngIf"], ["type", "submit", 3, "disabled"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "required", "", "placeholder", "Enter Password"], ["class", "error-message", 4, "ngIf"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", "required", "", "placeholder", "Confirm Password"], [1, "error-message"], ["id", "spinner", "mdbBtn", "", "color", "success", "type", "button", "disabled", ""], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SignUpComponent_div_0_Template, 43, 5, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SignUpComponent_button_1_Template, 3, 0, "button", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
  styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  padding: 2%;\n}\n\n.CreateUserContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 10px;\n  background-color: #00ff00;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #007bff;\n}\n\nbutton[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi9Gcm9udCUyMEVuZCUyMFdlYnNpdGUvQmVzdCUyMENvZGUlMjBUZW1wbGV0ZSUyMGklMjB3cm90ZS9Bbmd1bGFyJTIwbGVhcm5pbmclMjBjbGFzcy9CbG9nLVBvc3QlMjBXZWJzaXRlL3VzaW5nJTIwZmlyZWJhc2UlMjBhcGkvc3JjL2FwcC91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRSw0QkFBQTtBQUVBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDRixtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDRTtFQUNFLG1CQUFBO0FDRUo7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7QUNDSjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0VGIiwic291cmNlc0NvbnRlbnQiOlsiICAvKiB1c2VyLWZvcm0uY29tcG9uZW50LmNzcyAqL1xyXG4gIFxyXG4gIDpob3N0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyJTtcclxuICB9XHJcbiAgLkNyZWF0ZVVzZXJDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgZGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLy9sb2dpblxyXG4gIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gIH1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn0iLCIvKiB1c2VyLWZvcm0uY29tcG9uZW50LmNzcyAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMiU7XG59XG5cbi5DcmVhdGVVc2VyQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xufVxuXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4173:
/*!***********************************************************************************!*\
  !*** ./src/app/user/trending-hashtags-posts/trending-hashtags-posts.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrendingHashtagsPostsComponent: () => (/* binding */ TrendingHashtagsPostsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_hashtag_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/hashtag-service.service */ 8468);
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data.service */ 6873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function TrendingHashtagsPostsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrendingHashtagsPostsComponent_div_2_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const hashtag_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.navigateToHashtag(hashtag_r1.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const hashtag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("#", hashtag_r1.name, " (", hashtag_r1.count, ")");
  }
}
class TrendingHashtagsPostsComponent {
  constructor(hastagService, dataService, router) {
    this.hastagService = hastagService;
    this.dataService = dataService;
    this.router = router;
    this.trendingHashtags = [];
  }
  ngAfterViewInit() {
    this.hastagService.trendingHashtags$.subscribe(hashtags => {
      this.trendingHashtags = hashtags;
      console.log(this, this.trendingHashtags);
    });
  }
  navigateToHashtag(hashtagName) {
    this.router.navigateByUrl(`allposts?hashtag=${hashtagName}`);
    this.dataService.callGetAllUsersFunction();
  }
}
TrendingHashtagsPostsComponent.ɵfac = function TrendingHashtagsPostsComponent_Factory(t) {
  return new (t || TrendingHashtagsPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_hashtag_service_service__WEBPACK_IMPORTED_MODULE_0__.HashtagServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
TrendingHashtagsPostsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TrendingHashtagsPostsComponent,
  selectors: [["app-trending-hashtags-posts"]],
  decls: 4,
  vars: 1,
  consts: [["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1h_66N7cPiU-ZjoTVny_Y8OMLenZWW2Z4Q&usqp=CAU", "alt", ""], [1, "trendingContainer"], ["class", "hashtag", 4, "ngFor", "ngForOf"], [1, "hashtag"], [1, "btn", "btn-light", 3, "click"]],
  template: function TrendingHashtagsPostsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TrendingHashtagsPostsComponent_div_2_Template, 3, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.trendingHashtags);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\nh4[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 2%;\n  padding: 1%;\n  background: #f8f8f8;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.479);\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.trendingContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 2%;\n  text-transform: capitalize;\n}\n.trendingContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-weight: 550;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.254);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci90cmVuZGluZy1oYXNodGFncy1wb3N0cy90cmVuZGluZy1oYXNodGFncy1wb3N0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLy4uL0Zyb250JTIwRW5kJTIwV2Vic2l0ZS9CZXN0JTIwQ29kZSUyMFRlbXBsZXRlJTIwaSUyMHdyb3RlL0FuZ3VsYXIlMjBsZWFybmluZyUyMGNsYXNzL0Jsb2ctUG9zdCUyMFdlYnNpdGUvdXNpbmclMjBmaXJlYmFzZSUyMGFwaS9zcmMvYXBwL3VzZXIvdHJlbmRpbmctaGFzaHRhZ3MtcG9zdHMvdHJlbmRpbmctaGFzaHRhZ3MtcG9zdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENDO0VBQ0csV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0FDR0o7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNHSjtBRENJO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0FDQ1IiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59aDR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQ3OSk7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDMwJTtcclxufVxyXG4udHJlbmRpbmdDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNTQpO1xyXG4gICAgfVxyXG4gICBcclxufSIsIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oNCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBwYWRkaW5nOiAxJTtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQ3OSk7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHJlbmRpbmdDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMiU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnRyZW5kaW5nQ29udGFpbmVyIGJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTUwO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1NCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7388:
/*!*****************************************************************!*\
  !*** ./src/app/user/trending-posts/trending-posts.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrendingPostsComponent: () => (/* binding */ TrendingPostsComponent)
/* harmony export */ });
/* harmony import */ var D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/server.service */ 5541);
/* harmony import */ var src_app_shared_hashtag_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/hashtag-service.service */ 8468);
/* harmony import */ var src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/firestore.service */ 1139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);







function TrendingPostsComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const post_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](post_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](post_r3.content);
  }
}
function TrendingPostsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TrendingPostsComponent_div_0_div_3_Template, 5, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Posts with Hashtag: ", ctx_r0.hashtagName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.filteredPosts);
  }
}
function TrendingPostsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("No posts found with Hashtag: ", ctx_r1.hashtagName, "");
  }
}
class TrendingPostsComponent {
  constructor(route, server, hashtagService, fireservice) {
    this.route = route;
    this.server = server;
    this.hashtagService = hashtagService;
    this.fireservice = fireservice;
    this.hashtagName = '';
    this.filteredPosts = [];
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.hashtagName = params.get('hashtag') || '';
      this.getallUsers();
    });
  }
  getallUsers() {
    this.server.getAllUser().subscribe(users => {
      this.allUsers = users;
      this.filterPostsByHashtag();
    });
  }
  filterPostsByHashtag() {
    var _this = this;
    return (0,D_Front_End_Website_Best_Code_Templete_i_wrote_Angular_learning_class_Blog_Post_Website_using_firebase_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.filteredPosts = [];
      try {
        _this.allUsers = yield _this.fireservice.getAllUsers();
        for (const user of _this.allUsers) {
          const UserallPosts = yield _this.fireservice.getAllUserPosts(user.id);
          const updatedPosts = UserallPosts.map(post => {
            return {
              ...post,
              name: user.name,
              profilePic: user.profilePic
            };
          });
          _this.allPosts.push(...updatedPosts);
        }
        _this.allPosts.forEach(post => {
          const hashtags = _this.hashtagService.extractHashtagsFromPostContent(post.content);
          if (hashtags.includes(_this.hashtagName)) {
            _this.filteredPosts.push(post);
          }
        });
      } catch (error) {
        console.error('Error fetching users and posts:', error);
      }
    })();
  }
}
TrendingPostsComponent.ɵfac = function TrendingPostsComponent_Factory(t) {
  return new (t || TrendingPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_server_service__WEBPACK_IMPORTED_MODULE_1__.ServerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_hashtag_service_service__WEBPACK_IMPORTED_MODULE_2__.HashtagServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService));
};
TrendingPostsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TrendingPostsComponent,
  selectors: [["app-trending-posts"]],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"]],
  template: function TrendingPostsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TrendingPostsComponent_div_0_Template, 4, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TrendingPostsComponent_div_1_Template, 3, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filteredPosts.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filteredPosts.length === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6280:
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRoutingModule: () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-post/add-post.component */ 6621);
/* harmony import */ var _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-posts/all-posts.component */ 1503);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 5680);
/* harmony import */ var _trending_posts_trending_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trending-posts/trending-posts.component */ 7388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);



// import { HomeComponent } from './home/home.component';




// import { ShowUserProfileComponent } from './show-user-profile/show-user-profile.component';
const routes = [{
  path: '',
  component: _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_1__.AllPostsComponent
},
// {path:'home',component:HomeComponent},
// {path:'login',component:LoginComponent},
// {path:'signUp',component:SignUpComponent},
{
  path: 'addPost',
  component: _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_0__.AddPostComponent
}, {
  path: 'allposts',
  component: _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_1__.AllPostsComponent
}, {
  path: 'profile',
  component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent
}, {
  path: 'trendingPost',
  component: _trending_posts_trending_posts_component__WEBPACK_IMPORTED_MODULE_3__.TrendingPostsComponent
}
// { path: 'showUser', component: ShowUserProfileComponent }
];

class UserRoutingModule {}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) {
  return new (t || UserRoutingModule)();
};
UserRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: UserRoutingModule
});
UserRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 72:
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserComponent: () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class UserComponent {}
UserComponent.ɵfac = function UserComponent_Factory(t) {
  return new (t || UserComponent)();
};
UserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UserComponent,
  selectors: [["app-user"]],
  decls: 0,
  vars: 0,
  template: function UserComponent_Template(rf, ctx) {},
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 90:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModule: () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 6280);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 4029);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 4479);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ 72);
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-post/add-post.component */ 6621);
/* harmony import */ var _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-posts/all-posts.component */ 1503);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ 4310);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ 2433);
/* harmony import */ var _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/filter.pipe */ 3137);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ 5680);
/* harmony import */ var _trending_hashtags_posts_trending_hashtags_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trending-hashtags-posts/trending-hashtags-posts.component */ 4173);
/* harmony import */ var _trending_posts_trending_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trending-posts/trending-posts.component */ 7388);
/* harmony import */ var _show_user_profile_show_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./show-user-profile/show-user-profile.component */ 1186);
/* harmony import */ var _google_login_google_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./google-login/google-login.component */ 7905);
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./instructions/instructions.component */ 5864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);




// import { PostsComponent } from './posts/posts.component';






// import { HomeComponent } from './home/home.component';








class UserModule {}
UserModule.ɵfac = function UserModule_Factory(t) {
  return new (t || UserModule)();
};
UserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: UserModule
});
UserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [
    // UserComponent,
    _user_component__WEBPACK_IMPORTED_MODULE_4__.UserComponent, _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
    // PostsComponent,
    _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_5__.AddPostComponent, _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_6__.AllPostsComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent,
    // HomeComponent,
    _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_9__.FilterPipe, _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__.ProfileComponent, _trending_hashtags_posts_trending_hashtags_posts_component__WEBPACK_IMPORTED_MODULE_11__.TrendingHashtagsPostsComponent, _trending_posts_trending_posts_component__WEBPACK_IMPORTED_MODULE_12__.TrendingPostsComponent, _show_user_profile_show_user_profile_component__WEBPACK_IMPORTED_MODULE_13__.ShowUserProfileComponent, _google_login_google_login_component__WEBPACK_IMPORTED_MODULE_14__.GoogleLoginComponent, _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_15__.InstructionsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
    exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent, _trending_hashtags_posts_trending_hashtags_posts_component__WEBPACK_IMPORTED_MODULE_11__.TrendingHashtagsPostsComponent, _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_15__.InstructionsComponent]
  });
})();

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map