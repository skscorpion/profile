webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!-- About Section -->\r\n<div class=\"about-box\">\r\n<div class=\"about-container\" id=\"about\">\r\n  <div class=\"about-item1\">\r\n  <h2 class=\"about-name\">Senthil Kumar</h2>\r\n  <hr style=\"width:178px\" class=\"w3-opacity\">\r\n  <p style=\"text-indent: 105px;\">\r\n    I am MCA graduate from Bharath Institute of Science & Technology, I am carrying 5+ years of experience in Software development.\r\n     Currently working in Hexaware Technologies Ltd., Chennai, as Senior Software Engineer. \r\n    Have experience in developing Microsoft .Net framework applications using C#, Asp.net, MVC, Angular, SQL, JQuery etc.,\r\n    I have couple of hobbies, fond of learning new technology, roaming with friends.\r\n  </p>\r\n  </div>\r\n  <div class=\"about-item2\">\r\n   <h3 class=\"\"> Responsibilities</h3>\r\n<ul>\r\n<li>Execute full software development life cycle (SDLC)</li>\r\n<li>Develop flowcharts, layouts and documentation to identify requirements and solutions</li>\r\n<li>Write well-designed, testable code</li>\r\n<li>Produce specifications and determine operational feasibility</li>\r\n<li>Integrate software components into a fully functional software system</li>\r\n<li>Develop software verification plans and quality assurance procedures</li>\r\n<li>Document and maintain software functionality</li>\r\n<li>Troubleshoot, debug and upgrade existing systems</li>\r\n<li>Deploy programs and evaluate user feedback</li>\r\n<li>Comply with project plans and industry standards</li>\r\n<li>Ensure software is updated with latest features</li>  \r\n  </ul>\r\n</div>\r\n<div class=\"about-item3\">\r\n    <h3 class=\"\">My Skills</h3>\r\n  <div class=\"skill-container\" *ngFor=\"let skill of skills\">\r\n    <p class=\"\">{{skill.Technology}}</p>\r\n  <div class=\"skill-outer\">\r\n    <div class=\"skill-inner\" [style.width]=\"skill.Level\"></div>\r\n  </div>\r\n  </div>\r\n</div>\r\n  <!-- <p class=\"w3-wide\">MVC</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:90%\"></div>\r\n  </div>\r\n  <p class=\"w3-wide\">C#</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:85%\"></div>\r\n  </div>\r\n  <p class=\"w3-wide\">Asp.Net</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:80%\"></div>\r\n  </div>\r\n  <p class=\"w3-wide\">Asp.Net Web Api</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:80%\"></div>\r\n  </div>\r\n  <p class=\"w3-wide\">Asp.Net Core</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:70%\"></div>\r\n  </div>\r\n  <p class=\"w3-wide\">JQuery</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:85%\"></div>\r\n  </div>\r\n  <p class=\"w3-wide\">Angular 4</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:75%\"></div>\r\n  </div>\r\n  <p class=\"w3-wide\">CSS</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:85%\"></div>\r\n  </div>\r\n  <p class=\"w3-wide\">SQL</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:80%\"></div>\r\n  </div>\r\n  <p class=\"w3-wide\">LINQ</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:75%\"></div>\r\n  </div>\r\n  <p class=\"w3-wide\">Entity Framework</p>\r\n  <div class=\"w3-white\">\r\n    <div class=\"w3-dark-grey\" style=\"height:28px;width:70%\"></div>\r\n  </div>     -->\r\n  <br>\r\n  \r\n  <!-- <div class=\"w3-row w3-center w3-padding-16 w3-section w3-light-grey\">\r\n    <div class=\"w3-quarter w3-section\">\r\n      <span class=\"w3-xlarge\">11+</span><br>\r\n      Partners\r\n    </div>\r\n    <div class=\"w3-quarter w3-section\">\r\n      <span class=\"w3-xlarge\">55+</span><br>\r\n      Projects Done\r\n    </div>\r\n    <div class=\"w3-quarter w3-section\">\r\n      <span class=\"w3-xlarge\">89+</span><br>\r\n      Happy Clients\r\n    </div>\r\n    <div class=\"w3-quarter w3-section\">\r\n      <span class=\"w3-xlarge\">150+</span><br>\r\n      Meetings\r\n    </div>\r\n  </div> -->\r\n<div>\r\n<!-- <app-pdf-downloader></app-pdf-downloader> -->\r\n</div>\r\n\r\n  <!-- <button class=\"w3-button w3-light-grey w3-padding-large w3-section\">\r\n    <i class=\"fa fa-download\"></i> Download Resume\r\n     <span class=\"fa fa-download\" *ngIf=\"!pending\"></span>\r\n          <span class=\"fa fa-refresh fa-spin\" *ngIf=\"pending\"></span>\r\n  </button> -->\r\n  \r\n  <!-- Grid for pricing tables -->\r\n  <!-- <h3 class=\"w3-padding-16 w3-text-light-grey\">My Price</h3>\r\n  <div class=\"w3-row-padding\" style=\"margin:0 -16px\">\r\n    <div class=\"w3-half w3-margin-bottom\">\r\n      <ul class=\"w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off\">\r\n        <li class=\"w3-dark-grey w3-xlarge w3-padding-32\">Basic</li>\r\n        <li class=\"w3-padding-16\">Web Design</li>\r\n        <li class=\"w3-padding-16\">Photography</li>\r\n        <li class=\"w3-padding-16\">5GB Storage</li>\r\n        <li class=\"w3-padding-16\">Mail Support</li>\r\n        <li class=\"w3-padding-16\">\r\n          <h2>$ 10</h2>\r\n          <span class=\"w3-opacity\">per month</span>\r\n        </li>\r\n        <li class=\"w3-light-grey w3-padding-24\">\r\n          <button class=\"w3-button w3-white w3-padding-large w3-hover-black\">Sign Up</button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"w3-half\">\r\n      <ul class=\"w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off\">\r\n        <li class=\"w3-dark-grey w3-xlarge w3-padding-32\">Pro</li>\r\n        <li class=\"w3-padding-16\">Web Design</li>\r\n        <li class=\"w3-padding-16\">Photography</li>\r\n        <li class=\"w3-padding-16\">50GB Storage</li>\r\n        <li class=\"w3-padding-16\">Endless Support</li>\r\n        <li class=\"w3-padding-16\">\r\n          <h2>$ 25</h2>\r\n          <span class=\"w3-opacity\">per month</span>\r\n        </li>\r\n        <li class=\"w3-light-grey w3-padding-24\">\r\n          <button class=\"w3-button w3-white w3-padding-large w3-hover-black\">Sign Up</button>\r\n        </li>\r\n      </ul>\r\n    </div>    \r\n  </div> -->\r\n  <!-- End Grid/Pricing tables -->\r\n  \r\n  <!-- Testimonials -->\r\n  <!-- <h3 class=\"w3-padding-24 w3-text-light-grey\">My Reputation</h3>  \r\n  <img src=\"/w3images/bandmember.jpg\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:80px\">\r\n  <p><span class=\"w3-large w3-margin-right\">Chris Fox.</span> CEO at Mighty Schools.</p>\r\n  <p>Jane Doe saved us from a web disaster.</p><br>\r\n  \r\n  <img src=\"/w3images/avatar_g2.jpg\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:80px\">\r\n  <p><span class=\"w3-large w3-margin-right\">Rebecca Flex.</span> CEO at Company.</p>\r\n  <p>No one is better than Jane Doe.</p> -->\r\n<!-- End About Section -->\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 768px) {\n  .about-box {\n    margin-top: 100px; } }\n\n.about-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .about-box .about-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    max-width: 70%;\n    padding-top: 64px;\n    padding-bottom: 64px; }\n    .about-box .about-container .about-item1 {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n      .about-box .about-container .about-item1 .about-name {\n        margin-bottom: auto; }\n      .about-box .about-container .about-item1 hr {\n        margin-left: 0px; }\n    .about-box .about-container .about-item2 {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n      .about-box .about-container .about-item2 ul {\n        line-height: 2em; }\n      .about-box .about-container .about-item2 h3 {\n        margin-bottom: auto; }\n    .about-box .about-container .about-item3 {\n      width: 100%; }\n      .about-box .about-container .about-item3 .skill-container p {\n        margin-bottom: 0px; }\n      .about-box .about-container .about-item3 .skill-container .skill-outer {\n        background-color: white; }\n        .about-box .about-container .about-item3 .skill-container .skill-outer .skill-inner {\n          height: 28px;\n          background-color: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.skills = [
            { Technology: "MVC", Level: "90%" },
            { Technology: "C#", Level: "85%" },
            { Technology: "Asp.Net", Level: "80%" },
            { Technology: "Asp.Net Web Api", Level: "80% " },
            { Technology: "Asp.Net Core", Level: "70%" },
            { Technology: "JQuery", Level: "85%" },
            { Technology: "Angular 4", Level: "75%" },
            { Technology: "CSS", Level: "85%" },
            { Technology: "SQL", Level: "80%" },
            { Technology: "LINQ", Level: "75%" },
            { Technology: "Entity Framework", Level: "70%" },
        ];
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());

var Skills = (function () {
    function Skills() {
    }
    return Skills;
}());


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"\r\nfxLayout\r\nfxLayout.xs=\"column\"\r\nfxLayoutAlign=\"center\"\r\nfxLayoutGap=\"10px\"\r\nfxLayoutGap.xs=\"0\"> -->\r\n<mat-sidenav-container>\r\n        \r\n    <app-navigation></app-navigation>\r\n  \r\n<!-- <div class=\"w3-padding-large sidenav-right-content\" id=\"main\"> -->\r\n  <div>\r\n<router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-sidenav-container {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_app_service__ = __webpack_require__("../../../../../src/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//moduleimport --start










//module import --end
//component declare-- start








// import { PdfDownloaderComponent } from './pdf-downloader/pdf-downloader.component';
// import { BootstrapModalModule } from 'ng2-bootstrap-modal';
// import { ModalPopupComponent } from './modal-popup/modal-popup.component';
//component declare-- end
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_15__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_carousel__["a" /* NgxCarouselModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__service_app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <!-- Contact Section -->\r\n  <div class=\"contact-container\">\r\n  <div class=\"contact-content\" id=\"contact\">\r\n    <div class=\"inner-content\">\r\n    <h2 class=\"\">Contact Me</h2>\r\n    <hr class=\"\">\r\n\r\n    <div class=\"contact-section\">\r\n      <p><mat-icon>place</mat-icon><span> Chennai, India</span></p>\r\n      <p><mat-icon>contact_phone</mat-icon><span> Phone: +91 98412 17272</span></p>\r\n      <p><mat-icon>contact_mail</mat-icon><span> Email: senthilkmaar@gmail.com</span></p>\r\n    </div><br>\r\n    <p>Lets get in touch. Send me a message:</p>\r\n    \r\n    <form (ngSubmit) = \"submit()\" [formGroup]=\"contactform\" fxLayout = \"column\"\r\n    fxLayoutAlign=\"center\"\r\n    fxLayoutGap=\"20px\"\r\n    fxLayoutGap.xs=\"0\">\r\n      <!-- <p><input class=\"w3-input w3-padding-16\" type=\"text\" placeholder=\"Name\" required [(ngModel)]=\"contactObj.Name\" name=\"Name\" maxlength=\"100\" #contactname=\"ngModel\"></p>\r\n      <div class=\"alert alert-danger error\" [hidden]=\"contactname.valid || contactname.untouched\">\r\n        <div  *ngIf=\"contactname.errors && contactname.errors.required\">\r\n            Name is required\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-field\">\r\n        <mat-form-field floatPlaceholder=\"never\">\r\n          <input class=\"\" matInput placeholder=\"Enter your name\" required formControlName=\"name\" [(ngModel)]=\"contactObj.Name\" name=\"name\" maxlength=\"200\">\r\n          <mat-error *ngIf=\"contactform.controls.name.invalid\">You must enter your name</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-field\">\r\n        <mat-form-field floatPlaceholder=\"never\">\r\n          <input class=\"\" matInput placeholder=\"Enter your email\" required formControlName=\"email\" [(ngModel)]=\"contactObj.Email\" name=\"email\" maxlength=\"200\" >\r\n          <mat-error *ngIf=\"contactform.controls.email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n          <span matSuffix><mat-icon>email</mat-icon></span>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-field\">\r\n        <mat-form-field floatPlaceholder=\"never\">\r\n          <input class=\"\" matInput placeholder=\"Enter subject\" required formControlName=\"subject\" [(ngModel)]=\"contactObj.Subject\" name=\"subject\" maxlength=\"200\">\r\n          <mat-error *ngIf=\"contactform.controls.subject.invalid\">You must enter subject</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-field\">\r\n        <mat-form-field floatPlaceholder=\"never\">\r\n          <textarea rows=\"5\" class=\"\" matInput placeholder=\"Enter your message\" required formControlName=\"message\" [(ngModel)]=\"contactObj.Message\" name=\"message\" maxlength=\"500\"></textarea>\r\n          <mat-error *ngIf=\"contactform.controls.message.invalid\">You must enter your message</mat-error>\r\n          <mat-hint align=\"end\">{{contactform.controls.message.value?.length || 0}} / 500</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- <p><input class=\"w3-input w3-padding-16\" type=\"text\" placeholder=\"Email\" required [(ngModel)]=\"contactObj.Email\" name=\"Email\" maxlength=\"200\" #contactemail=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"></p>\r\n      <div class=\"alert alert-danger error\" [hidden]=\"contactemail.valid || contactemail.untouched\">\r\n        <div  *ngIf=\"contactemail.errors && contactemail.errors.required\">\r\n            Email is required\r\n        </div>\r\n        <div  *ngIf=\"contactemail.errors && contactemail.errors.pattern\">\r\n            Email is invalid\r\n        </div>\r\n      </div> -->\r\n      <!-- <p><input class=\"w3-input w3-padding-16\" type=\"text\" placeholder=\"Subject\" required [(ngModel)]=\"contactObj.Subject\" name=\"Subject\" maxlength=\"200\" #contactsubject=\"ngModel\"></p>\r\n      <div class=\"alert alert-danger error\" [hidden]=\"contactsubject.valid || contactsubject.untouched\">\r\n        <div  *ngIf=\"contactsubject.errors && contactsubject.errors.required\">\r\n            Subject is required\r\n        </div>\r\n      </div>\r\n      <p><textarea rows=\"4\" class=\"w3-input w3-padding-16\" type=\"text\" placeholder=\"Message\" required [(ngModel)]=\"contactObj.Message\" name=\"Message\" maxlength=\"2000\" #contactmsg=\"ngModel\"></textarea></p>\r\n      <div class=\"alert alert-danger error\" [hidden]=\"contactmsg.valid || contactmsg.untouched\">\r\n        <div  *ngIf=\"contactmsg.errors && contactmsg.errors.required\">\r\n            Message is required\r\n        </div>\r\n      </div>\r\n      -->\r\n      <div >\r\n        <button mat-button class=\"\" type=\"submit\" [disabled]=\"!contactform.valid\">\r\n            <mat-icon>send</mat-icon> SEND MESSAGE\r\n        </button>\r\n      </div>\r\n    </form>\r\n  <!-- End Contact Section -->\r\n</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 768px) {\n  .contact-container {\n    margin-top: 100px; } }\n\n.contact-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .contact-container .contact-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    max-width: 70%;\n    padding-top: 64px;\n    padding-bottom: 64px;\n    min-width: 0;\n    margin: 5px; }\n    .contact-container .contact-content h2 {\n      margin-bottom: auto; }\n    .contact-container .contact-content hr {\n      width: 142px;\n      margin-left: 0px; }\n    .contact-container .contact-content .inner-content {\n      width: 992px;\n      max-width: 100%;\n      max-height: 1108px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .contact-container .contact-content .inner-content .contact-section {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n        .contact-container .contact-content .inner-content .contact-section p {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end; }\n          .contact-container .contact-content .inner-content .contact-section p span {\n            padding-left: 20px; }\n        .contact-container .contact-content .inner-content .contact-section .mat-icon {\n          font-size: 36px;\n          height: 36px;\n          width: 36px; }\n\n.form-field > .mat-form-field {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* unused harmony export Contact */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_app_service__ = __webpack_require__("../../../../../src/service/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var ContactComponent = (function () {
    function ContactComponent(fb, _appService, snackBar) {
        this._appService = _appService;
        this.snackBar = snackBar;
        this.contactform = fb.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern(emailRegex)]),
            subject: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
            message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required])
        });
    } //private _appService: AppService
    ContactComponent.prototype.ngOnInit = function () {
        this.contactObj = new Contact();
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        this.snackBar.open("Message sending...", "Please wait.", {});
        // this.showSnackBar("Message sending...", "");
        this._appService.SendEmail(this.contactObj)
            .subscribe(function (result) {
            _this.showSnackBar("Message sent successfully!", "");
        }, function (error) {
            console.log(error);
        });
    };
    ContactComponent.prototype.getEmailErrorMessage = function () {
        return this.contactform.controls.email.hasError('required') ? 'You must enter your email' :
            this.contactform.controls.email.hasError('pattern') ? 'Not a valid email' : '';
    };
    ContactComponent.prototype.showSnackBar = function (message, action) {
        this.snackBar.dismiss();
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__service_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBar */]])
    ], ContactComponent);
    return ContactComponent;
}());

var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Footer -->\r\n <div class=\"footer\">\r\n   <p>© 2017 Senthil kumar</p>\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  /* background-color: red; */\n  color: white;\n  text-align: center;\n  z-index: 1; }\n  .footer p {\n    width: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Header/Home -->\r\n<div class=\"home-container\" id=\"home\" >\r\n  <h1 class=\"home-header\"><span class=\"\">I'm</span> Senthil Kumar.</h1>\r\n  <p>Software Developer (Microsoft .Net).</p>\r\n  <div class=\"section\">\r\n  <!-- <div class=\"home-img\">\r\n  <!-- <img src=\"../../assets/images/IMG_4264.jpg\" alt=\"boy\">  -->\r\n  <!-- <img src=\"../../profile/assets/images/IMG_4264.jpg\" alt=\"boy\"> -->\r\n  <!-- Indicators -->\r\n \r\n<!-- </div> --> \r\n<ngx-carousel\r\n[inputs]=\"carouselBanner\"\r\n[moveToSlide]=\"1\"\r\n(onMove)=\"onmoveFn($event)\">\r\n\r\n    <ngx-item NgxCarouselItem class=\"bannerStyle\">\r\n      <h1 style=\"margin-left: 200px;\"><img src=\"../../assets/images/IMG_4264.jpg\" alt=\"boy\"></h1>\r\n    </ngx-item>\r\n\r\n    <ngx-item NgxCarouselItem class=\"bannerStyle\">\r\n      <h1 style=\"margin-left: 200px;\"><img src=\"../../assets/images/IMG_4264.jpg\" alt=\"boy\"></h1>\r\n    </ngx-item>\r\n\r\n    <ngx-item NgxCarouselItem class=\"bannerStyle\">\r\n     <h1 style=\"margin-left: 200px;\" ><img src=\"../../assets/images/IMG_4264.jpg\" alt=\"boy\"></h1>\r\n    </ngx-item>\r\n\r\n    <button NgxCarouselPrev class='leftRs'>&lt;</button>\r\n    <button NgxCarouselNext class='rightRs'>&gt;</button>\r\n</ngx-carousel>\r\n\r\n  \r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 768px) {\n  .home-container {\n    margin-top: 100px; }\n    .home-container h1 {\n      font-size: 40px !important; } }\n\n.home-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .home-container .home-header {\n    font-size: 64px;\n    /* margin-top: 60px; */\n    margin-bottom: 5px;\n    font-weight: 400;\n    margin: 10px 0;\n    font-family: \"Segoe UI\",Arial,sans-serif; }\n  .home-container p {\n    margin-bottom: 30px; }\n  .home-container .section {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .home-container .section .home-img {\n      min-width: 0;\n      margin: 5px; }\n    .home-container .section img {\n      width: 992px;\n      max-width: 100%;\n      max-height: 1108px; }\n\n.bannerStyle h1 {\n  background-color: #ccc;\n  min-height: 300px;\n  text-align: center;\n  line-height: 300px; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  margin-left: 200px;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  left: 0; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  margin-right: 155px;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AppService } from '../../service/app.service';
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.carouselBanner = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 2000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            position: absolute;\n            width: 100%;\n            bottom: 20px;\n            left: 0;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 999px;\n            background: rgba(255, 255, 255, 0.55);\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s ease all;\n          }\n          .ngxcarouselPoint li.active {\n              background: white;\n              width: 10px;\n          }\n        "
            },
            load: 2,
            loop: true,
            touch: true
        };
    };
    /* It will be triggered on every slide*/
    HomeComponent.prototype.onmoveFn = function (data) {
        console.log(data);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\">\r\n<span>My Profile</span>\r\n<span class=\"example-spacer\"></span>\r\n<button mat-button [matMenuTriggerFor]=\"appMenu\">Menu</button>\r\n</mat-toolbar>\r\n<mat-menu #appMenu=\"matMenu\">\r\n  <button mat-menu-item>Home</button>\r\n  <button mat-menu-item>About</button>\r\n  <button mat-menu-item>Projects</button>\r\n  <button mat-menu-item>Contact</button>\r\n</mat-menu> -->\r\n    <!-- <a routerLink=\"/home\" routerLinkActive #rla1=\"routerLinkActive\" [ngClass]=\"rla1.isActive?'w3-black':'w3-hover-black'\">\r\n      <i class=\"fa fa-home w3-xxlarge\"></i>\r\n      <p>HOME</p>\r\n    </a>\r\n    <a routerLink=\"/about\" routerLinkActive #rla2=\"routerLinkActive\" [ngClass]=\"rla2.isActive?'w3-black':'w3-hover-black'\">\r\n      <i class=\"fa fa-user w3-xxlarge\"></i>\r\n      <p>ABOUT</p>\r\n    </a>\r\n    <a routerLink=\"/projects\" routerLinkActive #rla3=\"routerLinkActive\" [ngClass]=\"rla3.isActive?'w3-black':'w3-hover-black'\">\r\n      <i class=\"fa fa-tasks w3-xxlarge\"></i>\r\n      <p>PROJECTS</p>\r\n    </a>\r\n    <a routerLink=\"/contact\" routerLinkActive #rla4=\"routerLinkActive\" [ngClass]=\"rla4.isActive?'w3-black':'w3-hover-black'\">\r\n      <i class=\"fa fa-envelope w3-xxlarge\"></i>\r\n      <p>CONTACT</p>\r\n    </a> -->\r\n\r\n<!-- <nav class=\"w3-sidebar w3-bar-block w3-small w3-hide-small w3-center\"> -->\r\n  <!-- Avatar image in top left corner -->\r\n  <!-- <img src=\"../../assets/images/IMG_4264.jpg\" style=\"width:100%\">\r\n  <a routerLink=\"/home\" class=\"w3-bar-item w3-button w3-padding-large\" routerLinkActive #rla1=\"routerLinkActive\" [ngClass]=\"rla1.isActive?'w3-black':'w3-hover-black'\">\r\n    <i class=\"fa fa-home w3-xxlarge\"></i>\r\n    <p>HOME</p>\r\n  </a>\r\n  <a routerLink=\"/about\" class=\"w3-bar-item w3-button w3-padding-large\" routerLinkActive #rla2=\"routerLinkActive\" [ngClass]=\"rla2.isActive?'w3-black':'w3-hover-black'\">\r\n    <i class=\"fa fa-user w3-xxlarge\"></i>\r\n    <p>ABOUT</p>\r\n  </a>\r\n  <a routerLink=\"/projects\" class=\"w3-bar-item w3-button w3-padding-large\" routerLinkActive #rla3=\"routerLinkActive\" [ngClass]=\"rla3.isActive?'w3-black':'w3-hover-black'\">\r\n    <i class=\"fa fa-tasks w3-xxlarge\"></i>\r\n    <p>PROJECTS</p>\r\n  </a>\r\n  <a routerLink=\"/contact\" class=\"w3-bar-item w3-button w3-padding-large\" routerLinkActive #rla4=\"routerLinkActive\" [ngClass]=\"rla4.isActive?'w3-black':'w3-hover-black'\">\r\n    <i class=\"fa fa-envelope w3-xxlarge\"></i>\r\n    <p>CONTACT</p>\r\n  </a>\r\n</nav> -->\r\n\r\n<!-- Navbar on small screens (Hidden on medium and large screens) -->\r\n<!-- <div class=\"w3-top w3-hide-large w3-hide-medium\" id=\"myNavbar\">\r\n  <div class=\"w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small\">\r\n    <a routerLink=\"/home\" class=\"w3-bar-item w3-button\" style=\"width:25% !important\" routerLinkActive #rla11=\"routerLinkActive\" [ngClass]=\"rla11.isActive?'w3-black':'w3-hover-black'\">HOME</a>\r\n    <a routerLink=\"/about\" class=\"w3-bar-item w3-button\" style=\"width:25% !important\" routerLinkActive #rla22=\"routerLinkActive\" [ngClass]=\"rla22.isActive?'w3-black':'w3-hover-black'\">ABOUT</a>\r\n    <a routerLink=\"/projects\" class=\"w3-bar-item w3-button\" style=\"width:25% !important\" routerLinkActive #rla33=\"routerLinkActive\" [ngClass]=\"rla33.isActive?'w3-black':'w3-hover-black'\">PROJECTS</a>\r\n    <a routerLink=\"/contact\" class=\"w3-bar-item w3-button\" style=\"width:25% !important\" routerLinkActive #rla44=\"routerLinkActive\" [ngClass]=\"rla44.isActive?'w3-black':'w3-hover-black'\">CONTACT</a>\r\n  </div>\r\n</div> -->\r\n<mat-sidenav mode=\"side\" opened=\"true\" class=\"nav-menu\">  \r\n    <!-- <nav-menu></nav-menu> -->\r\n    <div>\r\n<div class=\"menu-container\">\r\n    <img class=\"avatar\" src=\"../../assets/images/IMG_4265.jpg\"> \r\n    <!-- <img class=\"avatar\" src=\"../../profile/assets/images/IMG_4265.jpg\"> -->\r\n<ul>\r\n  <li routerLink=\"/home\" routerLinkActive #rla1=\"routerLinkActive\" [ngClass]=\"rla1.isActive?'bg-black':'bg-hover-black'\">\r\n    <a class=\"menu-item\">\r\n      <mat-icon>home</mat-icon>\r\n      <p>HOME</p>\r\n    </a>\r\n  </li>\r\n  <li routerLink=\"/about\" routerLinkActive #rla2=\"routerLinkActive\" [ngClass]=\"rla2.isActive?'bg-black':'bg-hover-black'\">\r\n    <a class=\"menu-item\">\r\n      <mat-icon>person</mat-icon>\r\n      <p>ABOUT</p>\r\n    </a>\r\n  </li>\r\n  <li routerLink=\"/projects\" routerLinkActive #rla3=\"routerLinkActive\" [ngClass]=\"rla3.isActive?'bg-black':'bg-hover-black'\">\r\n    <a class=\"menu-item\">\r\n      <mat-icon>assignment</mat-icon>\r\n      <p>PROJECTS</p>\r\n    </a>\r\n  </li>\r\n  <li routerLink=\"/contact\" routerLinkActive #rla4=\"routerLinkActive\" [ngClass]=\"rla4.isActive?'bg-black':'bg-hover-black'\">\r\n    <a class=\"menu-item\">\r\n      <mat-icon>contacts</mat-icon>\r\n      <p>CONTACT</p>\r\n    </a>\r\n  </li>\r\n</ul>\r\n</div>\r\n</div>\r\n</mat-sidenav>\r\n\r\n<div class=\"xs-menu-wrapper\">\r\n  <div class=\"xs-avatar\">\r\n      <!-- <img class=\"avatar\" src=\"../../assets/images/IMG_4265.jpg\"> -->\r\n      <img class=\"avatar\" src=\"../../profile/assets/images/IMG_4265.jpg\">\r\n  </div>\r\n<div class=\"xs-menu-button\">\r\n<button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item routerLink=\"/home\" routerLinkActive #rla1=\"routerLinkActive\" [ngClass]=\"rla1.isActive?'bg-black':'bg-hover-black'\">\r\n      <mat-icon>home</mat-icon>\r\n      <span>HOME</span>\r\n    </button>\r\n    <button mat-menu-item routerLink=\"/about\" routerLinkActive #rla2=\"routerLinkActive\" [ngClass]=\"rla2.isActive?'bg-black':'bg-hover-black'\">\r\n      <mat-icon>person</mat-icon>\r\n      <span>ABOUT</span>\r\n    </button>\r\n    <button mat-menu-item routerLink=\"/projects\" routerLinkActive #rla3=\"routerLinkActive\" [ngClass]=\"rla3.isActive?'bg-black':'bg-hover-black'\">\r\n      <mat-icon>assignment</mat-icon>\r\n      <span>PROJECTS</span>\r\n    </button>\r\n    <button mat-menu-item routerLink=\"/contact\" routerLinkActive #rla4=\"routerLinkActive\" [ngClass]=\"rla4.isActive?'bg-black':'bg-hover-black'\">\r\n      <mat-icon>contacts</mat-icon>\r\n      <span>CONTACT</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 767px) {\n  .mat-sidenav {\n    display: none; } }\n\n@media only screen and (min-width: 768px) {\n  .xs-menu-wrapper {\n    display: none !important; } }\n\n.menu-container {\n  width: 120px; }\n  .menu-container ul {\n    display: flex;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .menu-container ul li {\n      width: 100%;\n      cursor: pointer; }\n\n.avatar {\n  height: 120px;\n  width: 100%; }\n\n.nav-menu {\n  width: 120px;\n  position: fixed !important;\n  /* margin-bottom: 52.4px; */\n  overflow-x: hidden; }\n\n.bg-black, .bg-hover-black:hover {\n  background-color: black; }\n\n.menu-item {\n  color: #fff;\n  /* padding: 5px; */\n  line-height: 40px;\n  width: auto;\n  margin: 10px;\n  height: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-decoration: none; }\n  .menu-item p {\n    margin-top: 0px;\n    font-size: 12px; }\n  .menu-item .mat-icon {\n    font-size: 36px;\n    height: 36px;\n    width: 36px; }\n\n.xs-menu-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100px;\n  position: fixed;\n  background-color: black; }\n  .xs-menu-wrapper .xs-avatar {\n    width: 32% !important; }\n    .xs-menu-wrapper .xs-avatar img {\n      height: 100px; }\n  .xs-menu-wrapper .xs-menu-button .mat-icon-button {\n    margin: 20px; }\n    .xs-menu-wrapper .xs-menu-button .mat-icon-button .mat-icon {\n      font-size: 36px;\n      height: 36px;\n      width: 36px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <!-- Portfolio Section -->\r\n  <div class=\"projects-container\">\r\n  <div class=\"projects-content\" id=\"projects\">\r\n    <h2 class=\"w3-text-light-grey\">My Projects</h2>\r\n    <hr style=\"width:200px\" class=\"w3-opacity\">\r\n\r\n    <!-- Grid for photos -->\r\n    <div class=\"w3-row-padding\" style=\"margin:0 -16px\">\r\n      <!-- <div class=\"w3-half\">\r\n        <img src=\"/w3images/wedding.jpg\" style=\"width:100%\">\r\n        <img src=\"/w3images/rocks.jpg\" style=\"width:100%\">\r\n        <img src=\"/w3images/sailboat.jpg\" style=\"width:100%\">\r\n      </div>\r\n\r\n      <div class=\"w3-half\">\r\n        <img src=\"/w3images/underwater.jpg\" style=\"width:100%\">\r\n        <img src=\"/w3images/chef.jpg\" style=\"width:100%\">\r\n        <img src=\"/w3images/wedding.jpg\" style=\"width:100%\">\r\n        <img src=\"/w3images/p6.jpg\" style=\"width:100%\">\r\n      </div> -->\r\n    <!-- End photo grid -->\r\n    </div>\r\n  <!-- End Portfolio Section -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".projects-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%; }\n  .projects-container .projects-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 70%;\n    padding-top: 64px;\n    padding-bottom: 64px; }\n\n@media only screen and (max-width: 768px) {\n  .projects-container {\n    margin-top: 100px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/service/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = (function () {
    function AppService(_http) {
        this._http = _http;
        this._serviceUrl = 'api/home';
    }
    // sayHello(): Observable <string>  {
    //     return this._http.get(this._serviceUrl)
    //         .map((response: Response) => {
    //             return response.text();
    //         });
    // }
    AppService.prototype.SendEmail = function (contact) {
        return this._http.post('api/home/SendEmail', contact)
            .map(function (response) {
            return response.text();
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map