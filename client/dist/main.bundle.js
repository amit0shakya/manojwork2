webpackJsonp([1,4],{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webheader_webheader_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webfooter_webfooter_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobsearchbar_jobsearchbar_component__ = __webpack_require__(332);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = (function () {
    function HomepageComponent() {
        this.employeeslist = [
            { "image": "client1.jpg", "title": "beats" },
            { "image": "client2.jpg", "title": "facebook" },
            { "image": "client3.jpg", "title": "twitter" },
            { "image": "client4.jpg", "title": "instagram" },
            { "image": "client5.jpg", "title": "microsoft" },
            { "image": "client6.jpg", "title": "pitrest" }];
        this.jobslist = [
            { "image": "client1.jpg", "jobtitle": "FrontEnd Developer", 'experience': "2+ Years experience", "name": "ABC Company", "location": "Sec 15, Gurgaon" },
            { "image": "client2.jpg", "jobtitle": "Content Writer", "experience": "0 - 3yrs experience", "name": "fizerv Company", "location": "Sec 15, Gurgaon" },
            { "image": "client3.jpg", "jobtitle": "Graphic Designer", "experience": "2+ Years experience", "name": "ABC Company", "location": "Sec 15, Gurgaon" },
            { "image": "client4.jpg", "jobtitle": "FrontEnd Developer", "experience": "2+ Years experience", "name": "ABC Company", "location": "Sec 15, Gurgaon" },
            { "image": "client5.jpg", "jobtitle": "FrontEnd Developer", "experience": "2+ Years experience", "name": "ABC Company", "location": "Sec 15, Gurgaon" },
            { "image": "client6.jpg", "jobtitle": "FrontEnd Developer", "experience": "2+ Years experience", "name": "ABC Company", "location": "Sec 15, Gurgaon" }
        ];
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__(677),
            styles: [__webpack_require__(669)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__webheader_webheader_component__["a" /* WebheaderComponent */], __WEBPACK_IMPORTED_MODULE_2__webfooter_webfooter_component__["a" /* WebfooterComponent */], __WEBPACK_IMPORTED_MODULE_3__jobsearchbar_jobsearchbar_component__["a" /* JobsearchbarComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomepageComponent);
    return HomepageComponent;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/homepage.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CaptchaService = (function () {
    function CaptchaService() {
        this.vals = { val1: 1, val2: 2, method: '+' };
        this.method = ['+', 'x', '+', 'x'];
        this.ans = 0;
        this.generatecaptcha();
        this.calculate();
    }
    CaptchaService.prototype.generatecaptcha = function () {
        this.vals.val1 = Math.round(Math.random() * 9);
        this.vals.val2 = Math.round(Math.random() * 9);
        this.vals.method = this.method[Math.round(Math.random() * 3)];
    };
    CaptchaService.prototype.calculate = function () {
        switch (this.vals.method) {
            case '+':
                this.ans = this.vals.val1 + this.vals.val2;
                break;
            case 'x':
                this.ans = this.vals.val1 + this.vals.val2;
                break;
        }
    };
    CaptchaService.prototype.get = function () {
        return this.vals;
    };
    CaptchaService.prototype.check = function (params) {
        var bool = false;
        if (params == this.ans) {
            bool = true;
        }
        return bool;
    };
    CaptchaService.prototype.reset = function () {
        this.generatecaptcha();
        this.calculate();
    };
    CaptchaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CaptchaService);
    return CaptchaService;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/captcha.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsearchbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobsearchbarComponent = (function () {
    function JobsearchbarComponent() {
    }
    JobsearchbarComponent.prototype.ngOnInit = function () {
    };
    JobsearchbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-jobsearchbar',
            template: __webpack_require__(678),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], JobsearchbarComponent);
    return JobsearchbarComponent;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/jobsearchbar.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_captcha_service__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientregisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientregisterComponent = (function () {
    function ClientregisterComponent(captcha) {
        this.captcha = captcha;
        this.formoptions = true;
        this.fresherform = false;
        this.experienceform = false;
        this.reset();
    }
    ClientregisterComponent.prototype.reset = function () {
        this.formoptions = true;
        this.fresherform = false;
        this.experienceform = false;
    };
    ClientregisterComponent.prototype.callback = function (val) {
    };
    ClientregisterComponent.prototype.ngOnInit = function () {
        console.log(this.captcha.get(), "<<<captcha");
    };
    ClientregisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-clientregister',
            template: __webpack_require__(679),
            styles: [__webpack_require__(671)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_captcha_service__["a" /* CaptchaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_captcha_service__["a" /* CaptchaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_captcha_service__["a" /* CaptchaService */]) === 'function' && _a) || Object])
    ], ClientregisterComponent);
    return ClientregisterComponent;
    var _a;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/clientregister.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebfooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebfooterComponent = (function () {
    function WebfooterComponent() {
    }
    WebfooterComponent.prototype.ngOnInit = function () {
    };
    WebfooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'web-footer',
            template: __webpack_require__(682),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], WebfooterComponent);
    return WebfooterComponent;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/webfooter.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebheaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebheaderComponent = (function () {
    function WebheaderComponent() {
    }
    WebheaderComponent.prototype.ngOnInit = function () {
    };
    WebheaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'web-header',
            template: __webpack_require__(683),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], WebheaderComponent);
    return WebheaderComponent;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/webheader.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepage_homepage_component__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(676),
            styles: [__webpack_require__(668)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__homepage_homepage_component__["a" /* HomepageComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webheader_webheader_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webfooter_webfooter_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobsearchbar_jobsearchbar_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__route__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_candidate_clientregister_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_candidate_freshersform_fresherregisteration_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__registration_candidate_professionalform_experienceregistration_component__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__webheader_webheader_component__["a" /* WebheaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__webfooter_webfooter_component__["a" /* WebfooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__jobsearchbar_jobsearchbar_component__["a" /* JobsearchbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__registration_candidate_clientregister_component__["a" /* ClientregisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__registration_candidate_freshersform_fresherregisteration_component__["a" /* FresherregisterationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__registration_candidate_professionalform_experienceregistration_component__["a" /* ExperienceregistrationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__route__["a" /* AppRouter */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_captcha_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dataservice_service__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FresherregisterationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FresherregisterationComponent = (function () {
    function FresherregisterationComponent(form, _dataservice, captcha) {
        this.form = form;
        this._dataservice = _dataservice;
        this.captcha = captcha;
        this.captchadata = { val1: 0, val2: 0, method: '' };
        this.captchadataanswer = null;
        this.States = [{ "title": "Andhra Pradesh" }, { "title": "Arunachal Pradesh" }, { "title": "Assam" }, { "title": "Bihar" },
            { "title": "Chhattisgarh" }, { "title": "Goa" }, { "title": "Gujarat" }, { "title": "Haryana" }, { "title": "Himachal Pradesh" },
            { "title": "Jammu & Kashmir" }, { "title": "Jharkhand" }, { "title": "Karnataka" }, { "title": "Kerala" }, { "title": "Madhya Pradesh" },
            { "title": "Maharashtra" }, { "title": "Manipur" }, { "title": "Meghalaya" }, { "title": "Mizoram" }, { "title": "Nagaland" },
            { "title": "Odisha" }, { "title": "Punjab" }, { "title": "Rajasthan" }, { "title": "Sikkim" }, { "title": "Tamil Nadu" },
            { "title": "Telangana" }, { "title": "Tripura" }, { "title": "Uttarakhand" }, { "title": "Uttar Pradesh" }, { "title": "West Bengal" },
            { "title": "Andaman and Nicobar Islands" }, { "title": "Chandigarh" }, { "title": "Delhi" }, { "title": "Other" }];
        /*
        educationobj={class:'',univ:'',subjects:'',duration:'',marks:'',action:true}
        candidateinfo=new candidateformInfo();
        educationaldata=[]
        */
        this.browsedfilename = "Upload Resume";
        this.formsetup();
    }
    /*
      submitform(){
        if(!this.captcha.check(this.captchadataanswer)){
            console.log("wrong captcha answer")
        }
      }*/
    FresherregisterationComponent.prototype.getfile = function (filname) {
        console.log(filname.target.value, "<<filname");
        if (filname.target.value == "") {
        }
        else {
            this.browsedfilename = filname.target.value.replace("C:\\fakepath\\", "");
        }
    };
    FresherregisterationComponent.prototype.ngOnInit = function () {
        //this.captchadata=this.captcha.get();
    };
    FresherregisterationComponent.prototype.formsetup = function () {
        this.fresherform = this.form.group({
            personelinfo: this.form.group({
                name: '',
                lname: '',
                email: '',
                pass: '',
                mobile: '',
                address: this.addressfield()
            }),
            education: this.getEducationaldata(),
            techqual: this.getTechQualdata()
        });
    };
    FresherregisterationComponent.prototype.getTechQualdata = function () {
        this.techqual = this.form.array([
            this.form.group({ title: '', edu: '', from: '', to: '', institute: '' })
        ]);
        return this.techqual;
    };
    FresherregisterationComponent.prototype.addTechQual = function () {
        this.techqual.push(this.form.group({ title: '', edu: '', from: '', to: '', institute: '' }));
    };
    FresherregisterationComponent.prototype.removeTechQual = function (index) {
        this.techqual.controls.splice(index, 1);
    };
    FresherregisterationComponent.prototype.getEducationaldata = function () {
        this.education = this.form.array([
            this.form.group({ title: "10th", marks: '', univ: '', from: '', to: '', subjects: this.getsubjectsdata() }),
            this.form.group({ title: "12th", marks: '', univ: '', from: '', to: '', subjects: this.getsubjectsdata() }),
        ]);
        return this.education;
    };
    FresherregisterationComponent.prototype.removeEducation = function (index) {
        if (this.education.controls.length > 2) {
            this.education.controls.splice(index, 1);
        }
    };
    FresherregisterationComponent.prototype.addEducation = function () {
        this.education.push(this.form.group({ title: '', marks: '', univ: '', from: '', to: '', subjects: this.getsubjectsdata() }));
    };
    FresherregisterationComponent.prototype.getsubjectsdata = function () {
        this.subjects = this.form.array([
            this.form.group({ title: '', marks: '' }),
            this.form.group({ title: '', marks: '' }),
            this.form.group({ title: '', marks: '' }),
            this.form.group({ title: '', marks: '' }),
            this.form.group({ title: '', marks: '' })
        ]);
        return this.subjects;
    };
    FresherregisterationComponent.prototype.addSubjects = function (parentArr) {
        var subjectArr = parentArr.controls.subjects;
        subjectArr.push(this.form.group({ title: '', marks: '' }));
    };
    FresherregisterationComponent.prototype.removeSubjects = function (index) {
        this.subjects.controls.slice(index, 1);
    };
    FresherregisterationComponent.prototype.addressfield = function () {
        this.address = this.form.array([
            this.form.group({ state: '', city: '', zip: '', address: '' })
        ]);
        return this.address;
    };
    FresherregisterationComponent.prototype.addAddress = function () {
        var fg = this.form.group({ state: '', city: '', zip: '', address: '' });
        this.address.push(fg);
    };
    FresherregisterationComponent.prototype.removeAddress = function (index) {
        if (this.address.controls.length > 1) {
            this.address.controls.splice(index, 1);
        }
    };
    FresherregisterationComponent.prototype.formsubmit = function (formData) {
        console.log(formData);
        console.log(this.captcha.get(), "<<<captcha data");
        this._dataservice.postdata();
    };
    FresherregisterationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'fresherregisteration',
            template: __webpack_require__(680),
            styles: [__webpack_require__(672)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_captcha_service__["a" /* CaptchaService */], __WEBPACK_IMPORTED_MODULE_3__services_dataservice_service__["a" /* dataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dataservice_service__["a" /* dataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_dataservice_service__["a" /* dataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_captcha_service__["a" /* CaptchaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_captcha_service__["a" /* CaptchaService */]) === 'function' && _c) || Object])
    ], FresherregisterationComponent);
    return FresherregisterationComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/fresherregisteration.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_captcha_service__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceregistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceregistrationComponent = (function () {
    function ExperienceregistrationComponent(captcha) {
        this.captcha = captcha;
        this.captchadata = { val1: 0, val2: 0, method: '' };
        this.captchadataanswer = null;
        /*
        userData= new candidateformInfo(
          {name:'',pass:'',email:'',phone:'',institute:'',specilization:'',location:''},
          [{
              title:'',
              marks:'',
              univ:'',
                duration:{
                          from:'',
                          to:''
                          },
                        subjects:[{
                            name:'',
                            marks:''
          }]}],
          [{
                    title:'',
                    degree:'',
                    duration:{
                        from:'',
                        to:''},
                    institute:''
          }]);
        */
        this.Indianstates = [{ "title": "Andhra Pradesh" }, { "title": "Arunachal Pradesh" }, { "title": "Assam" }, { "title": "Bihar" },
            { "title": "Chhattisgarh" }, { "title": "Goa" }, { "title": "Gujarat" }, { "title": "Haryana" }, { "title": "Himachal Pradesh" },
            { "title": "Jammu & Kashmir" }, { "title": "Jharkhand" }, { "title": "Karnataka" }, { "title": "Kerala" }, { "title": "Madhya Pradesh" },
            { "title": "Maharashtra" }, { "title": "Manipur" }, { "title": "Meghalaya" }, { "title": "Mizoram" }, { "title": "Nagaland" },
            { "title": "Odisha" }, { "title": "Punjab" }, { "title": "Rajasthan" }, { "title": "Sikkim" }, { "title": "Tamil Nadu" },
            { "title": "Telangana" }, { "title": "Tripura" }, { "title": "Uttarakhand" }, { "title": "Uttar Pradesh" }, { "title": "West Bengal" },
            { "title": "Andaman and Nicobar Islands" }, { "title": "Chandigarh" }, { "title": "Delhi" }];
        this.browsedfilename = "Upload Resume";
        this.browsedfilename = "Upload Resume";
    }
    ExperienceregistrationComponent.prototype.getfile = function (filname) {
        console.log(filname.target.value, "<<filname");
        if (filname.target.value == "") {
        }
        else {
            this.browsedfilename = filname.target.value.replace("C:\\fakepath\\", "");
        }
    };
    ExperienceregistrationComponent.prototype.submitform = function () {
        if (!this.captcha.check(this.captchadataanswer)) {
            console.log("wrong captcha answer");
        }
    };
    ExperienceregistrationComponent.prototype.submitdata = function () {
    };
    ExperienceregistrationComponent.prototype.ngOnInit = function () {
        this.captchadata = this.captcha.get();
        console.log(this.captchadata, "<<<captcha in fresher");
        //console.log(this.captcha.check(10),"<<<check captcha");
    };
    ExperienceregistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'experienceregistration',
            template: __webpack_require__(681),
            styles: [__webpack_require__(673)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_captcha_service__["a" /* CaptchaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_captcha_service__["a" /* CaptchaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_captcha_service__["a" /* CaptchaService */]) === 'function' && _a) || Object])
    ], ExperienceregistrationComponent);
    return ExperienceregistrationComponent;
    var _a;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/experienceregistration.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepage_homepage_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_candidate_clientregister_component__ = __webpack_require__(333);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });



var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_1__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'register/candidate', component: __WEBPACK_IMPORTED_MODULE_2__registration_candidate_clientregister_component__["a" /* ClientregisterComponent */] },
];
var AppRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/route.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var dataService = (function () {
    function dataService(_http) {
        this._http = _http;
    }
    dataService.prototype.postdata = function () {
        console.log('post data method in dataservice');
        var json = JSON.stringify({ user: 'amit', lname: 'shakya' });
        var params = 'json=' + json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('api/employerzone/register', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    dataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], dataService);
    return dataService;
    var _a;
}());
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/dataservice.service.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/WORK/JobOcolur/website/client/src/environment.js.map

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ".bodyoptions{margin-top:30px;}\r\n\r\n.bodyoptions .col-sm-4{float: left;}\r\n\r\n.bodyoptions .option{min-height:360px;box-sizing: border-box; border-bottom:2px solid #00aeef; \r\ncursor: pointer; display: block; background-color: transparent; text-align: center;}\r\n\r\n.bodyoptions .option:hover{min-height:360px;box-sizing: border-box; border-bottom:2px solid #00aeef; \r\ncursor: pointer; display: block; background-color: #00aeef; text-align: center;}\r\n\r\n.bodyoptions .option .iconparent{width:100%; float:left; text-align:center;}\r\n\r\n.bodyoptions .option .icon{width:90px; height:90px; float: none; margin:50px auto 25px auto;}\r\n\r\n.bodyoptions .option .option-text-parent{width:100%; text-align: center; padding:0px 30px; color:#000;}\r\n\r\n.bodyoptions .option:hover .option-text-parent{width:100%; text-align: center; padding:0px 30px; color:#fff;}\r\n\r\n.home-employeerslist{margin-top:80px; height:130px;}\r\n\r\n.home-employeers ul{margin: 0px; padding: 0px;}\r\n\r\n.home-employeers ul li{list-style: none; float: left; width:90px; height:100px; margin:0px 15px; \r\n        border-radius: 5px; overflow: hidden; border:1px solid #eee;}\r\n\r\n.home-employeers ul li:nth-child(1){list-style: none; float: left; width:90px; height:100px; margin-right:15px; \r\n        border-radius: 5px; overflow: hidden; border:1px solid #eee;}\r\n\r\n.home-jobsection{ border-top: 1px solid #eee; box-sizing: border-box; border-bottom:1px solid #eee; \r\n        padding:90px 0px; margin-top: 90px; width:100%;}\r\n\r\n.home-jobsection-heading{width: 100%; margin: 0 auto; text-align: center;}\r\n\r\n.home-jobsection-heading h4{color:#000; font-family: \"roboto-light\"}\r\n\r\n.home-jobsection-heading h2{color:#000; font-family: \"roboto-black\"; font-weight: 900;}\r\n\r\n.home-jobsection-heading h2 span{ color:#00aeef;}\r\n\r\n.home-jobcontainer{margin-top:90px;}\r\n\r\n.home-joblist{height: 600px; overflow: hidden; }\r\n\r\n.home-joblist ul{margin: 0px; padding: 0px;}\r\n\r\n.home-joblist ul li:nth-child(odd){margin: 0px; padding: 0px; width:100%; height:100px; list-style: none; display: block; background-color: #f9f9f9}\r\n\r\n.home-joblist ul li:nth-child(even){margin: 0px; padding: 0px; width:100%; height:100px; list-style: none; display: block; background-color: #eee}\r\n\r\n.home-jobimgContainer{width:70px; height: 70px; border-radius: 5px; overflow: hidden; float: left; \r\nmargin-top: 15px; float: left;}\r\n\r\n.home-jobdisc{ float: left;font-family: \"roboto\"; color:#000; padding: 0px;}\r\n\r\n.home-jobdisc h4{margin: 0px; padding: 0px; font-weight: 900;}\r\n\r\n.home-companyname{ float: left; color:#000; font-family: \"roboto\"; font-size: 16px;  padding: 0px;}\r\n\r\n.home-companylocation{ float:left; color:#000; font-family: \"roboto\"; font-size: 14px; padding: 0px;}\r\n\r\n.home-jobapplybtn{text-align: center;}\r\n\r\n.home-jobapplybtn .btn-info{text-align: center; background-color: #00aeef; padding:10px 15px;}\r\n\r\n.home-jobapplybtn .btn-info:hover{text-align: center; background-color: #0486b7; padding:10px 15px;}\r\n\r\n.home-morejobs{margin-top:35px; float: left;}\r\n\r\n.home-morejobs button{padding:12px 15px;}\r\n\r\n.home-testimonial{height: 250px;  margin-top: 50px; width:100%; border-top: 1px solid #eeeeee; box-sizing: border-box;\r\nbackground-image: url(\"../../assets/images/home-bg-comma.jpg\"); background-repeat: no-repeat;}\r\n\r\n.home-testimonial ul li{list-style: none; width:500px; height: 150px; \r\nmargin: 50px auto 0px auto; text-align: center; position: relative;}\r\n\r\n.home-testimonialtext{text-align: center; margin: 50px auto 0px auto; width:100%;  color:#000;\r\nfont-weight: 900;}\r\n\r\n.home-testimonialtext p{margin: 0px; padding: 0px; font-family: \"roboto-light\"}\r\n\r\n.home-testimonialtext h3{margin: 0px; padding: 0px; font-family: \"roboto-black\"}\r\n\r\n.home-clientfeedback{width:100%; height:100px;  background-color: #00aeef; color:#fff; border-radius: 5px;\r\npadding: 10px; text-align: left; font-family: \"roboto\"; line-height: 27px; }\r\n\r\n.home-clientimg{width:100px; height: 100px; border-radius: 50px; background-color: green; border:5px solid #fff;\r\nposition: absolute; right:-50px;top:55px; overflow: hidden;}\r\n\r\n.advertisebtn{ background-color: #00aeef; padding:20px 60px; margin:450px 0px 0px 20px; font-family:'roboto' }\r\n\r\n.advertisebtn:hover{ background-color: #0486b7; padding:20px 60px; margin:450px 0px 0px 20px; font-family:'roboto' }\r\n\r\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = ".jobsearch-bar{width:100%; height:300px; float:left; background-image: url('assets/images/homebannerbg.jpg')}\r\n\r\n.jobsearch-barbgimg{}\r\n\r\n.jobsearch-container{margin-top:35px;}\r\n\r\n.jobsearch-body{height:100px;float:left; background-color: rgba(255,255,255,.5); padding:20px 30px; width:100%; \r\nposition: relative;}\r\n\r\n#jobsearchbtn{border-radius: 0px; background-color: #0486b7; border:none; padding: 15px; position: absolute;\r\ntop:20px; right:30px; text-decoration: none; font-family: 'roboto-light'}\r\n\r\n#jobsearchbtn:hover{border-radius: 0px; background-color:#047aa7; border:none; padding: 15px; position: absolute;\r\ntop:20px; right:30px; text-decoration: none; font-family: 'roboto-light'}\r\n\r\n.jobsearch-body input[type=\"text\"]{width:100%; height:50px; padding:15px;}\r\n\r\n.jobsearch-body input[type=\"text\"]::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\nfont-family: 'roboto'; font-size:'20px';}\r\n\r\n.jobsearch-registerbox{background-color: rgba(255,255,255,.5);}\r\n\r\n.jobsearch-candidate{width:45%; height:180px; margin:25px 12px; background-color:#fff; position: relative; cursor: pointer;}\r\n\r\n.jobsearch-candidate:hover{width:45%; height:180px; margin:25px 12px; background-color:#047aa7; position: relative; \r\ncursor: pointer;}\r\n\r\n.jobsearch-candidate .icon {position: absolute; bottom: 10px; right: 10px;}\r\n\r\n.jobsearch-candidate p {font-size: 18px; text-align: center; width:100%; margin-top:30px; color:#000;}\r\n\r\n.jobsearch-candidate:hover p {font-size: 18px; text-align: center; width:100%; margin-top:30px; color:#fff;}\r\n\r\n.jobsearch-candidate h4{position: absolute; left:10px; bottom:0px; font-weight: 300; color:#047aa7}\r\n\r\n.jobsearch-candidate:hover h4{position: absolute; left:10px; bottom:0px; font-weight: 300; color:#fff}\r\n\r\n.jobsearch-employee{ width:45%; height:180px;  margin:25px 12px; background-color:#fff;\r\n position: relative; cursor: pointer;}\r\n\r\n.jobsearch-employee:hover{ width:45%; height:180px;  margin:25px 12px; background-color:#047aa7; \r\nposition: relative; cursor: pointer;}\r\n\r\n.jobsearch-employee p{font-size: 18px; text-align: center; width:100%; margin-top:30px; color:#000}\r\n\r\n.jobsearch-employee:hover p{font-size: 18px; text-align: center; width:100%; margin-top:30px; color:#fff;}\r\n\r\n.jobsearch-employee .icon {position: absolute; bottom: 1px; right: 1px;}\r\n\r\n.jobsearch-employee h4{position: absolute; left:10px; bottom:0px; font-weight: 300; color:#047aa7}\r\n\r\n.jobsearch-employee:hover h4{position: absolute; left:10px; bottom:0px; font-weight: 300; color:#fff}"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ".candidate-register-options{margin-top:30px;}\r\n\r\n.candidate-register-smallbanner{height:100px;background-image: url('assets/images/homebannerbg.jpg')}\r\n\r\n.candidate-register-smallbanner h1{color:#fff; font-family: 'roboto-black'; font-size:36px; padding-top:10px;}\r\n\r\n.candidate-fresher, .candidate-professional{height: 250px; font-style:'roboto-light'; color:#000; cursor: pointer;}\r\n\r\n.candidate-fresher:hover, .candidate-professional:hover{height: 250px; \r\nfont-style:'roboto-light'; background-color:#00aeef; cursor: pointer;}\r\n\r\n.candidate-fresher p, .candidate-professional p{ width: 100%; margin-top:20px; text-align: center; color:#000;}\r\n\r\n.candidate-fresher:hover p, .candidate-professional:hover p{ width: 100%; margin-top:20px; text-align: center; color:#fff;}\r\n\r\n.candidate-fresher p span, .candidate-professional p span{ width: 100%; margin-top:20px; text-align: center; \r\nfont-style: 'roboto-bold'; color:#00aeef;}\r\n\r\n.candidate-fresher:hover p span, .candidate-professional:hover p span{ width: 100%; margin-top:20px; text-align: center; \r\nfont-style: 'roboto-bold'; color:#fff;}\r\n\r\n.register-fresher{width: 152px; height:160px; margin: 0 auto;}\r\n\r\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ".form-container{width:800px; height:auto; background-color: #f6f8fd; border :1px solid #afafb0; \r\nmargin: 50px auto 0px auto; overflow: hidden;}\r\n\r\n.form-heading{font-family: 'roboto'; font-size:32px; color:#666; padding:25px 0px 50px 20px;}\r\n\r\n.form-subheading{font-family: 'roboto'; font-size:18px; color:#666; padding:5px 35px;}\r\n\r\n.form-fieldcontainer{width:100%; float:left; padding:0px 20px; overflow: hidden; height: auto; margin:7px auto;}\r\n\r\n.inputfield{height:45px;}\r\n\r\n.inputfield input{height:45px; border:none; padding: 15px 0px 0px 15px; font-style:'roboto-light'}\r\n\r\n.resuleuploader{width:100%; height:45px; line-height: 45px; text-align: center; color:#fff; background-color: #339900;\r\n                font-style:'roboto-light'; }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* client.formfield{height:60px; line-height: 60px; position: relative;}\r\n\r\n.formfield input[type=\"text\"], .formfield input[type=\"email\"], .formfield input[type=\"password\"],\r\n.formfield input[type=\"tel\"] {width:100%; height:40px; padding:0px 10px;}\r\n\r\n.formfield input[type=\"tel\"]{padding-left:40px;}\r\n\r\n.formfield .form-tel-label{position: absolute; left:25px; top:0px;}\r\n\r\n.formfield select{width:100%; height: 40px; padding:0px 10px; }\r\n\r\n.formfield .fresher-formfieldradio{ text-align: center; border:1px solid #d9d9d9; \r\nbox-sizing: border-box; height:50px; line-height:50px; display: block; cursor: pointer; background-color: none; }\r\n\r\n.formfield .selectedtab{ background-color: #27a7d4; color:#fff; border:1px solid #27a7d4;}\r\n\r\n.resuleuploader{background-color: #4caf50; padding:0px 20px; color:#fff; cursor:pointer;}\r\n\r\n.resuleuploader:hover{background-color: #4caf22; padding:0px 20px; color:#fff; cursor:pointer;}\r\n\r\n.custombtn{padding:10px 40px; border-radius: 0px; margin:0 15px;}\r\n\r\n.captchabox{width:212px; height:40px; margin: 10px;}\r\n\r\n.captchabox .captchatitle{width:70px; height:40px; float: left; line-height: 40px}\r\n\r\n.captchabox .captchatext{ float:left; width:25px; height:40px; text-align: center; line-height: 40px; \r\nfont-family: 'roboto'; text-align: center; font-size: 16px;}\r\n\r\n.captchabox input[type=\"text\"]{width:40px; height:40px; text-align: center; line-height: 40px; font-family: 'roboto-black'; text-align: center; \r\ncolor:#fff; background-color: #6ac6f9; float: left; border: none; font-size: 16px;}\r\n\r\n.educationalinfo{width: 100%; border:1px solid #eee; box-sizing: border-box; margin:10px 0px;}\r\n\r\n.educationalinfo tr th{text-align: center;border:1px solid #eee; padding:0px 5px;}\r\n\r\n.educationalinfo tr td{border:1px solid #eee; padding:0px 5px;}\r\n\r\n.addqual{ background-color:#6ac6f9; border: none; height:40px; line-height: 40px;color: #fff; padding:0px 20px;}\r\n\r\n.addqual:hover{ background-color:#63b7e6; border: none; height:40px; line-height: 40px;color: #fff; padding:0px 20px;}\r\n\r\n.removequal{ background-color:#fa7f7f; border: none; height:40px; line-height: 40px;color: #fff; padding:0px 20px;}\r\n\r\n.removequal:hover{ background-color:#ff5f5f; border: none; height:40px; line-height: 40px;color: #fff; padding:0px 20px;}\r\n\r\n*/"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ".formfield{height:60px; line-height: 60px; position: relative;}\r\n\r\n.formfield input[type=\"text\"], .formfield input[type=\"email\"], .formfield input[type=\"password\"],\r\n.formfield input[type=\"tel\"] {width:100%; height:40px; padding:0px 10px;}\r\n\r\n.formfield input[type=\"tel\"]{padding-left:40px;}\r\n\r\n.formfield .form-tel-label{position: absolute; left:25px; top:0px;}\r\n\r\n.formfield select{width:100%; height: 40px; padding:0px 10px; }\r\n\r\n.formfield .fresher-formfieldradio{ text-align: center; border:1px solid #d9d9d9; \r\nbox-sizing: border-box; height:50px; line-height:50px; display: block; cursor: pointer; background-color: none; }\r\n\r\n.formfield .selectedtab{ background-color: #27a7d4; color:#fff; border:1px solid #27a7d4;}\r\n\r\n.resuleuploader{background-color: #4caf50; padding:0px 20px; color:#fff; cursor:pointer;}\r\n\r\n.resuleuploader:hover{background-color: #4caf22; padding:0px 20px; color:#fff; cursor:pointer;}\r\n\r\n.custombtn{padding:10px 40px; border-radius: 0px; margin:0 15px;}"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ".footer-maincontainer{border-top:5px solid #00aeef; box-sizing: border-box; width:100%; height:400px; \r\nbackground-color:#222;}\r\n\r\n.footer-containerbody{margin-top:60px;}\r\n\r\n.footer-logo{width:100%;float: left;}\r\n\r\n.footer-about{color:#fff; margin-top:80px; font-family: 'roboto'; font-size: 12px; line-height: 25px;}\r\n\r\n.footer-updates{font-family: 'roboto-bold'; font-size: 20px; color:#fff; font-weight: 900;}\r\n\r\n.footer-newsfeed{color:#fff; font-family: 'roboto'}  \r\n\r\n.footer-newsfeed p{font-size: 12px; line-height: 25px;}\r\n\r\n.footer-nav ul {margin:0px; padding: 0px;}\r\n\r\n.footer-nav ul li{list-style: none; height:30px; line-height: 30px; font-family: 'roboto'; font-size: 16px;}\r\n\r\n.footer-nav ul li a{color:#5e6970; text-decoration: none; cursor: pointer; font-weight: 300;}\r\n\r\n.footer-nav ul li a:hover{color:#00aeef; text-decoration: none; cursor: pointer; font-weight: 300;}\r\n\r\n.footer-webfooter{height:40px; float: left; background-color:#131313; width:100%; margin-top: 40px;}\r\n\r\n.footer-webfootertext{line-height: 40px; font-family: 'roboto-light'; color:#5e6970; font-size: 14px;}"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ".headertop{padding:10px 0px; font-size: 20px; font-family: \"roboto-light\"}\r\n\r\n.headerlogo{padding:20px 0px; cursor: pointer;}\r\n\r\n.headernav ul{margin: 0px; padding: 0px;}\r\n\r\n.headernav ul li{margin: 0px; padding: 0px; float: left; list-style: none; border-bottom:5px solid rgba(0,174,239,0); \r\n                    box-sizing:border-box; height:91px;}\r\n\r\n.headernav ul li.active, .headernav ul li:hover{margin: 0px; padding: 0px; float: left; list-style: none; \r\nborder-bottom:5px solid rgba(0,174,239,1); box-sizing:border-box; height:91px;}\r\n\r\n.headernav ul li a{margin: 0px; padding: 30px 20px; text-decoration: none; color:#000;font-family: \"roboto-light\"; \r\nfont-size: 14px; height: 75px; display: block; cursor: pointer; text-align: center; }\r\n\r\n.headernav ul li.active>a,.headernav ul li a:hover {margin: 0px; padding: 30px 20px; text-decoration: none; \r\ncolor:#000;font-family: \"roboto\"; font-size: 14px; height: 75px; display: block; cursor: pointer;\r\ntext-align: center;}\r\n\r\n.navloginbtn{padding:8px 30px; font-size: 14px; margin-top:20px;}"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div>\n  <web-header></web-header>\n  <app-jobsearchbar></app-jobsearchbar>\n\n  <!-- main container starts -->\n  <div class=\"container\">\n\n    <!-- body heading -->\n    <div class=\"row\" style=\"text-align:center; margin-top:40px;\">\n        <p style=\"font-family:'roboto-light'; font-size:20px\">OUR PROCESS</p>\n        <h2 style=\"font-family:'roboto-black'; margin:0px;\">WE WORK FOR YOU</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br>incididunt ut labore et dolore magna aliqua</p>\n    </div>\n\n    <!-- body 3 options -->\n    <div class=\"row bodyoptions\">\n      <div class=\"col-sm-4\">\n        <div class=\"option\">\n\n          <div class=\"iconparent\">\n            <div class=\"icon\">\n              <img src=\"assets/images/header-option-callout.png\" >\n            </div>\n          </div>\n\n          <div class=\"option-text-parent\">\n              <h4>Searching for the best job</h4>\n              <p>Using the outcomes from the job, we will put together a plan for the most effective marketing strategy to get the best results.</p>\n          </div>  \n\n        </div>  \n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"option\">\n          \n          <div class=\"iconparent\">\n            <div class=\"icon\">\n              <img src=\"assets/images/header-option-resume.png\" >\n            </div> \n          </div>\n\n          <div class=\"option-text-parent\">\n              <h4>Create your resume</h4>\n              <p>Using the outcomes from the job, we will put together a plan for the most effective marketing strategy to get the best results.</p>\n          </div> \n\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"option\">\n\n          <div class=\"iconparent\">\n            <div class=\"icon\">\n                <img src=\"assets/images/header-option-candidate.png\" >\n            </div> \n          </div>\n\n          <div class=\"option-text-parent\">\n              <h4>Face interview online</h4>\n              <p>Using the outcomes from the job, we will put together a plan for the most effective marketing strategy to get the best results.</p>\n          </div> \n\n        </div>\n      </div>\n    </div>\n    <!-- body 3 options close -->\n\n    <div class=\"row home-employeerslist\" >\n        <p> <strong>Top Employeers</strong></p>\n\n        <!-- Employeers List -->\n        <div class=\"home-employeers\">\n            <ul>\n              <li *ngFor=\"let employee of employeeslist; let i=index\">\n                    <img src=\"../../assets/images/dummy/{{employee.image}}\" width=\"90\" height=\"100\"> \n              </li>\n            </ul>\n        </div>\n        <!-- Employeers List End-->\n    </div>\n\n  </div>\n  <!-- main container Ends -->\n\n  <div class=\"home-jobsection\">\n          \n          <div class=\" row home-jobsection-heading\">\n                <h4 style=\"margin:0px\">RECENT JOBS</h4>\n                <h2 style=\"margin:0px\"><span>9999</span> AVAILABLE JOBS FOR YOU</h2>\n          </div>\n\n          <div class=\"container home-jobcontainer\" >\n\n            <!-- Job Listing Start -->\n                <div class=\"col-sm-9 home-joblist\">\n                    <ul>                   \n                        <li *ngFor=\"let job of jobslist; let i=index\">\n                            <div class=\"col-sm-2\">\n                              <!-- company logo -->\n                              <div class=\"home-jobimgContainer\">\n                                  <img src=\"../../assets/images/dummy/{{job.image}}\" width=\"70\" height=\"70\">\n                              </div>\n                            </div>\n                            <div class=\"col-sm-10\" style=\"height:70px; margin:0px; padding:30px 0px 0px 0px;\">\n\n                                <!-- Job Discription-->\n                                <div class=\"home-jobdisc col-sm-3\">\n                                    <h4>{{job.jobtitle}}</h4>\n                                    <p>{{job.experience}}</p>\n                                </div>\n\n                                <!-- Company Name -->\n                                <div class=\"home-companyname col-sm-3\">{{job.name}}</div>\n\n                                <!-- Company Location -->\n                                <div class=\"home-companylocation col-sm-3\">\n                                  <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{job.location}}\n                                </div>\n\n                                <div class=\"col-sm-3 home-jobapplybtn\">\n                                    <button type=\"button\" class=\"btn btn-info\">Apply Now</button>\n                                </div>\n\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n\n                <!-- Job Listing Ends -->\n\n                <!-- Advertisement -->\n                <div class=\"col-sm-3\" style=\"background-image: url(assets/images/bannerguy.jpg); height:600px; position:relative; text-style:center;\">\n\n                  <button type=\"button\" class=\"btn btn-info advertisebtn\">Create a Account</button>\n                   \n                </div>\n                <!-- Advertisement Area End-->\n\n                <div class=\"container home-morejobs\" routerLink='/register/candidate'>\n                  \n                  <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Browse more jobs</button>\n\n                </div>\n          </div>\n          <!-- Job Container Ends -->\n\n          \n          <div class=\"home-testimonial\">\n\n              <div class=\"home-testimonialtext\">\n                      <p>TESTIMONIALS</p>\n                    <h3>WHAT PEOPLE ARE SAYING</h3>\n              </div>\n\n              <ul>\n                <li>\n                    <div class=\"home-clientfeedback\">\n                        <p>JobOculur offer me an amazing service and I couldn't be happier! They are dedicated\n                           to helpinng recruiter fing great candidates, wonderful service! \n                           <br><strong>Piyush Gupta, </strong>Project Manager</p>\n                    </div>\n\n                    <div class=\"home-clientimg\">\n                      <img src=\"../../assets/images/dummy/ankush.jpg\" width=\"100\" height=\"100\">\n                    </div>\n                </li>\n              </ul>\n          </div>\n            \n  </div>\n\n  <web-footer></web-footer>\n</div>"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div class=\"jobsearch-bar jobsearch-barbgimg\">\n  <div class=\"container jobsearch-container\">\n    <div class=\"col-sm-6\"> \n      <div class=\"jobsearch-body\">\n          <input type=\"text\" placeholder=\"Search Jobs\" id=\"jobsearch\">\n          <button type=\"button\" class=\"btn btn-info\" id=\"jobsearchbtn\" value=\"Search Job\">Search Job</button>\n      </div>\n      \n    </div>\n    <div class=\"col-sm-6 jobsearch-registerbox\">\n        <div class=\"col-sm-6 jobsearch-candidate\" routerLink='/register/candidate' >\n            <p>Register now and get<br>Instant Job!</p>\n            <div class=\"icon\"><img src=\"assets/images/header-candidateicon.png\"></div>\n            <h4>Register as<br>EMPLOYEE</h4>\n        </div>\n        <div class=\"col-sm-6 jobsearch-employee\" routerLink='home'>\n          <p>Register us to find best <br>Talent in Industry</p>\n          <div class=\"icon\"><img src=\"assets/images/header-employericon.png\"></div>\n          <h4>Register as<br>EMPLOYER</h4>\n        </div>\n    </div>\n   </div>\n</div>"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<web-header></web-header>\n<div class=\"row candidate-register-smallbanner\">\n    <div class=\"container\">\n       <h1>Candiate Registration</h1>\n    </div>\n  </div>\n<!-- form body -->\n<div class=\"container\">\n    <div class=\"candidate-register-options\" *ngIf=\"formoptions\"> \n        <div class=\"col-sm-3\"></div>\n        \n        <div class=\"col-sm-3 candidate-fresher\" (click)=\"formoptions=false; fresherform=true\">\n            <p>Register as <br><span> FRESHER EMPLOYEE </span> </p>\n            <div class=\"register-fresher\">\n                <img src=\"assets/images/fresher.png\">\n            </div>\n        </div>\n\n        <div class=\"col-sm-3 candidate-professional\" (click)=\"formoptions=false; experienceform=true\">\n          <p>Register as <br><span>EXPERIENCE EMPLOYEE </span> </p>\n            <div class=\"register-fresher\">\n                <img src=\"assets/images/employee.png\">\n            </div>\n        </div>\n        <div class=\"col-sm-3\"></div>\n    </div>\n\n    <!-- Fresher Employee Form starts-->\n    <div *ngIf=\"fresherform\" class=\"row\">\n        \n        <fresherregisteration></fresherregisteration>\n    </div>\n    <!-- Fresher Employee Form ends-->\n\n    <!-- Experience employee form -->\n    <div *ngIf=\"experienceform\" class=\"container\">\n        <!--<experienceregistration></experienceregistration>-->\n    </div>\n    <!-- Experience employee form ends-->\n</div>"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"form-container\">\r\n        <form [formGroup]=\"fresherform\" (ngSubmit)=\"formsubmit(fresherform.value)\" novalidate>\r\n            <!-- Step1 -->\r\n            <div class=\"column form-heading\">\r\n                Fresher Candidate Register\r\n            </div>\r\n\r\n            <div formGroupName=\"personelinfo\">\r\n                <div class=\"form-subheading\">Personel Info</div>\r\n        <!-- Username and password -->\r\n                <div class=\"form-fieldcontainer\">\r\n\r\n                    <div class=\"col-sm-6 inputfield\">\r\n                        <input class=\"form-Control\" formControlName=\"name\" placeholder=\"Name\" style=\"width:100%\"/>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6 inputfield\">\r\n                        <input class=\"form-Control\" formControlName=\"lname\" placeholder=\"Last name\" style=\"width:100%\"/>\r\n                    </div>\r\n\r\n                </div>\r\n        <!-- Username and password -->\r\n\r\n        <div class=\"row separator\"></div>\r\n\r\n        <!-- Password & email start -->\r\n                 <div class=\"form-fieldcontainer\">\r\n\r\n                    <div class=\"col-sm-6 inputfield\">\r\n                        <input class=\"form-Control\" formControlName=\"pass\" placeholder=\"Set password\" style=\"width:100%\"/>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6 inputfield\">\r\n                        <input class=\"form-Control\" formControlName=\"email\" placeholder=\"Email\" style=\"width:100%\"/>\r\n                    </div>\r\n\r\n                </div>\r\n        <!-- Password & email end -->\r\n\r\n\r\n        <!-- Mobile && resume Upload Start-->\r\n               <div class=\"form-fieldcontainer\">\r\n                    <div class=\"col-sm-6 inputfield\">\r\n                        <input class=\"form-Control\" formControlName=\"mobile\" placeholder=\"Mobile\" style=\"width:100%\"/>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6 inputfield\">\r\n                        <input type=\"file\" style=\"display:none;\" (change)=\"getfile($event)\" id=\"resumeuploader\" name=\"resume\" \r\n                        value=\"Upload Latest Resume\" accept=\".doc,.docx,.rtf,.pdf\">\r\n                        \r\n                        <label class=\"resuleuploader\" for=\"resumeuploader\" >{{browsedfilename}}</label>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- Mobile && resume Upload End-->\r\n\r\n                <!-- Address Start -->\r\n                <div class=\"form-fieldcontainer\" formArrayName=\"address\">\r\n                    \r\n                    <div class=\"col-sm-12\"  *ngFor=\"let add of address.controls; let i=index\" [formGroupName]=\"i\" >\r\n                        \r\n                        <div style=\"width:100%\"> <h3>Address</h3></div>\r\n\r\n                        <div class=\"col-sm-4\">\r\n                            <select formControlName=\"state\">\r\n                                <option>Select State</option>\r\n                                <option *ngFor=\"let state of States; let j=index\" [selected]=\"state.title\"  [value]=\"state.title\">{{state.title}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-4 inputfield\">\r\n                            <input class=\"form-Control\" formControlName=\"city\" placeholder=\"City\" style=\"width:100%\"/>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-4 inputfield\">\r\n                            <input class=\"form-Control\" formControlName=\"zip\" placeholder=\"Zip\" style=\"width:100%\"/>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 inputfield\">\r\n                            <input class=\"form-Control\" formControlName=\"address\" placeholder=\"address\" style=\"width:100%\"/>\r\n                        </div>\r\n\r\n                            <div class=\"col-sm-12\" >\r\n                                <button *ngIf=\"i>0\" class=\"btn btn-danger\" (click)=\"removeAddress(i)\" >-Remove Address</button>\r\n                                <button *ngIf=\"i==(address.controls.length-1)\" class=\"btn btn-info\" (click)=\"addAddress()\" >+Add Another Addrss</button>\r\n                            </div>\r\n                         </div>\r\n \r\n                    </div>\r\n                <!-- Address Ends -->\r\n\r\n\r\n            </div>\r\n            <!-- Step 1 End-->\r\n\r\n            <!-- Step 2 Start-->\r\n            <!-- Education field starts -->\r\n             <div class=\"form-fieldcontainer\" [hidden]=\"true\">\r\n             <div formArrayName=\"education\">\r\n             <div >Educational Qualifiation</div>\r\n                    <div *ngFor=\"let edu of education.controls; let i=index\" [formGroupName]=\"i\">\r\n\r\n                        <div class=\"row\">\r\n\r\n                            <div class=\"col-sm-5\">\r\n                                <div *ngIf=\"i==0\">10th</div>\r\n                                <div *ngIf=\"i==1\">12th</div>\r\n                                <input *ngIf=\"i>1\" class=\"form-Control\" formControlName=\"title\" placeholder=\"Qualification\" style=\"width:100%\"/>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-5\">\r\n                                <input class=\"form-Control\" formControlName=\"univ\" placeholder=\"University\" style=\"width:100%\"/>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-2\">\r\n                                <input class=\"form-Control\" formControlName=\"marks\" placeholder=\"Marks%\" style=\"width:100%\"/>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n\r\n                            <div class=\"col-sm-2\">\r\n                                <input class=\"form-Control\" formControlName=\"from\" placeholder=\"From year\" style=\"width:100%\"/>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-2\">\r\n                                <input class=\"form-Control\" formControlName=\"from\" placeholder=\"To Year\" style=\"width:100%\"/>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-8\" formArrayName=\"subjects\">\r\n\r\n                                <div *ngFor=\"let subject of subjects.controls; let j=index\" [formGroupName]=\"j\" class=\"row\" style=\"height:auto; overflow:hidden;\">\r\n\r\n                                    <div class=\"col-sm-10\">\r\n                                        <input class=\"form-Control\" formControlName=\"title\" placeholder=\"Subject\" style=\"width:100%\"/>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-sm-2\">\r\n                                        <input class=\"form-Control\" formControlName=\"marks\" placeholder=\"Marks\" style=\"width:100%\"/>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                     <div class=\"row\">\r\n                         <button *ngIf=\"i>1\" class=\"btn btn-danger\" (click)=\"removeEducation(i)\" >-Remove</button>\r\n                         <button *ngIf=\"i==(education.controls.length-1)\" class=\"btn btn-info\" (click)=\"addEducation()\" >+Add</button>\r\n                    </div>\r\n\r\n                    </div>\r\n\r\n\r\n            </div>      \r\n            <!-- Education field Ends -->\r\n\r\n            <!-- Technical field Ends -->\r\n            <div class=\"row\" formArrayName=\"techqual\" [hidden]=\"true\">\r\n                <div>Technical Qualification</div>\r\n                <div *ngFor=\"let qual of techqual.controls; let i=index\" col=\"col-sm-12\" [formGroupName]=\"i\">\r\n                \r\n                    \r\n                    <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <input class=\"form-Control\" formControlName=\"title\" placeholder=\"Qualification\" style=\"width:100%\"/>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-4\">\r\n                        <select formControlName=\"edu\">\r\n                            <option [selected] [value]=\"Diploma\">Diploma</option>\r\n                            <option  [value]=\"Certification\">Certification</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-4\">\r\n                        <input class=\"form-Control\" formControlName=\"institute\" placeholder=\"Institute/University Name\" style=\"width:100%\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div>Duration</div>\r\n\r\n                    <div class=\"col-sm-4\">\r\n                        <input class=\"form-Control\" formControlName=\"from\" placeholder=\"From year\" style=\"width:100%\"/>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-4\">\r\n                        <input class=\"form-Control\" formControlName=\"to\" placeholder=\"To year\" style=\"width:100%\"/>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <button class=\"btn btn-danger\" (click)=\"removeTechQual(i)\">- Remove</button>\r\n                        <button *ngIf=\"i==(techqual.controls.length-1)\" class=\"btn btn-primary\" (click)=\"addTechQual()\">+Add</button>\r\n                        <button *ngIf=\"techqual.controls.length==''\" class=\"btn btn-primary\" (click)=\"addTechQual()\">+Add</button>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            </div>\r\n            <!-- Step 2 Ends-->\r\n                    <button class=\"btn btn-info\" type=\"submit\" style=\"display:none;\" >Register</button>\r\n        </form>   \r\n    </div>\r\n</div>\r\n\r\n{{fresherform.value | json}}"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<div style=\"float:left; overflow:hidden; \">\n    <form #pressionalregister=\"ngForm\" (ngSubmit)=\"submitform()\" >\n      <div class=\"col-sm-12\">\n        \n        <!-- fresher form step1 starts -->\n\n        <!-- name:string; pass:string; phone:string;email:string; -->\n        <div>\n          <div class=\"fresher-formfields\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> Name </div>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" name=\"name\"  placeholder=\"Name\" required>\n            </div>\n          </div>\n\n          <div class=\"fresher-email\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> Email ID </div>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" name=\"email\" placeholder=\"Enter your active email id\" required >\n            </div>\n          </div>\n\n          <div class=\"fresher-password\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\">Enter Password </div>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" placeholder=\"Min 6 characters\" required name=\"pass\" >\n            </div>\n          </div>\n\n          <div class=\"fresher-mobile\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\">Enter Mobile</div>\n            <div class=\"col-sm-9\">\n              <div class=\"form-tel-label\">+91</div>\n              <input type=\"tel\" onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength=\"10\" placeholder=\"Where recruiters call you\" required name=\"phone\"  >\n            </div>\n          </div>\n\n          <div class=\"fresher-location\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> Current Location </div>\n            <div class=\"col-sm-9\">\n              <select name=\"location\" >\n                <option *ngFor=\"let state of indianstates\" value=\"{{state.title}}\" ngControl=\"state\" >{{state.title}}</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"fresher-resume\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> Upload Resume </div>\n            <div class=\"col-sm-9\">\n              <input type=\"file\" style=\"display:none;\" (change)=\"getfile($event)\" id=\"resuleuploader\" name=\"resuleuploader\" \n              value=\"Upload Latest Resume\" accept=\".doc,.docx,.rtf,.pdf\">\n              <label class=\"resuleuploader\" for=\"resuleuploader\" >{{browsedfilename}}</label>\n            </div>\n          </div>\n          \n          <div class=\"fresher-formfields\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> Highest Qualification </div>\n            <div class=\"col-sm-9\">\n              Select your highest Qualification\n            </div>\n          </div>\n\n          <div class=\"fresher-formfields\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> course </div>\n            <div class=\"col-sm-9\">\n              <div (click)=\"tab1=!tab1; tab2=false; tab3=false; val='fulltime'\" class=\"col-sm-4 fresher-formfieldradio\"  [ngClass]=\"{'selectedtab':tab1}\">Full Time</div>\n              <div (click)=\"tab2=!tab2; tab1=false; tab3=false; val='parttime'\" class=\"col-sm-4 fresher-formfieldradio\" [ngClass]=\"{'selectedtab':tab2}\">Part Time</div>\n              <div (click)=\"tab3=!tab3; tab1=false; tab2=false; val='correspondence'\" class=\"col-sm-4 fresher-formfieldradio\" [ngClass]=\"{'selectedtab':tab3}\">Correspondence</div>\n            </div>\n          </div>\n\n          <div class=\"fresher-formfields\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> Specialization </div>\n            <div class=\"col-sm-9\">\n              <input type=\"text\"  placeholder=\"Your technical specialization\" required name=\"specilization\" >\n            </div>\n          </div>\n\n          <div class=\"fresher-formfields\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> University/College </div>\n            <div class=\"col-sm-9\">\n              <input type=\"text\"  placeholder=\"Institute Name\" required name=\"institute\">\n            </div>\n          </div>\n\n          <div class=\"fresher-formfields\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> Course </div>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" placeholder=\"Enter your full name\" required >\n            </div>\n          </div>\n\n          <div class=\"fresher-formfields\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> Passing year </div>\n            <div class=\"col-sm-9\">\n              <input type=\"text\"  placeholder=\"select year of passing\" required >\n            </div>\n          </div>\n\n          <div class=\"fresher-formfields\" class=\"col-sm-12 formfield\">\n            <div class=\"col-sm-3\"> Skills </div>\n            <div class=\"col-sm-9\">\n              <input minlength=\"\" type=\"text\" placeholder=\"Enter your areas of expertise/specilization\" required >\n            </div>\n          </div>\n        <!-- End of step 1 ends-->\n\n        <div class=\"fresher-formfields\" class=\"col-sm-12 formfield\">\n           <div class=\"captchabox\" id=\"captcha\">\n\n             <div class=\"captchatitle\"> Solve this</div>\n\n             <div class=\"captchatext\"> {{captchadata.val1}} </div>\n\n             <div class=\"captchatext\"> {{captchadata.method}} </div>\n\n             <div class=\"captchatext\"> {{captchadata.val2}} </div>\n\n             <div class=\"captchatext\"> = </div>\n\n             <input type=\"text\" class=\"captchaanswerbox\" [(ngModel)]=\"captchadataanswer\" name=\"captchadataanswer\" >\n             \n           </div>\n        </div>\n\n          <div class=\"col-sm-12\" style=\"height:160px; padding-top:40px;\">\n           \n              <input type=\"submit\" class=\"btn btn-primary custombtn\" value=\"Register\" >\n          </div>\n        </div>\n      </div>\n      <!-- End of form -->\n    </form>\n</div>\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-maincontainer\">\r\n    <div class=\"container footer-containerbody\">\r\n        \r\n        <div class=\"col-sm-4\">\r\n            <div class=\"footer-logo\">\r\n                <img src=\"assets/images/footerlogo.png\">\r\n            </div>\r\n\r\n            <div class=\"footer-about\">\r\n                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.\r\n                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. \r\n                sed diam nonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \r\n                sed diam nonumy eirmod tempor invidunt ut labore.\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-4\">\r\n\r\n            <div class=\"footer-updates\">News Feed</div>\r\n            <div class=\"footer-newsfeed\">\r\n                <h4>Latest News feed information</h4><br>\r\n                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\r\n                ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\r\n                invidunt ut labore.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"footer-updates\">Useful Links</div>\r\n            <div class=\"footer-nav\"> <br>\r\n                    <ul>\r\n                        <li><a>About Us</a></li>\r\n                        <li><a>Recruiters</a></li>\r\n                        <li><a>Companies</a></li>\r\n                        <li><a>Contact Us</a></li>\r\n                        <li><a>Jobseeker Login</a></li>\r\n                    </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"footer-webfooter\">\r\n        <div class=\"container footer-webfootertext\">\r\n            JobOculur 2017 | Developer : <span>Amit Shakya</span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row headertop\">\n        <div class=\"col-md-2\" >\n          <i class=\"fa fa-phone\" aria-hidden=\"true\"></i> \n          9999999999</div>\n        <div class=\"col-md-3\">\n          <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n          hello@jobsocular.com\n        </div>\n    </div>\n</div>\n\n<hr style=\"margin:5px 0px;\">\n\n<div class=\"container\">\n    <div class=\"row headernav\">\n          <div class=\"col-md-3 headerlogo\" routerLink='/index'> <img src=\"assets/images/headerlogo.png\" > </div>\n          <div class=\"col-md-6\"> \n            <ul>\n              <li class=\"active\">\n                <a routerLink='register/candidate'><i class=\"fa fa-user\" aria-hidden=\"true\"></i><br>About</a>\n              </li>\n\n              <li>\n                <a><i class=\"fa fa-users\" aria-hidden=\"true\"></i><br>Recruiters</a>\n              </li>\n\n              <li>\n                <a><i class=\"fa fa-building\" aria-hidden=\"true\"></i><br>Companies</a>\n              </li>\n\n              <li>\n                <a><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><br>Contact</a>\n              </li>\n\n              <li>\n                <a><i class=\"fa fa-lock\" aria-hidden=\"true\"></i><br>JobSeeker Login</a>\n              </li>\n            </ul>  \n          </div>\n          \n          <!-- login/Registration -->\n          <div class=\"col-md-3\"> \n            <button type=\"button\" class=\"btn btn-info navloginbtn\">Employer Login</button>\n         </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ })

},[702]);
//# sourceMappingURL=main.bundle.map