"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Core
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
//Class
var user_1 = require("./user");
//Providers
var register_service_1 = require("./register.service");
var core_2 = require("angular2-cookie/core");
var auth_service_1 = require("./auth.service");
var Registerloginfrom = (function () {
    function Registerloginfrom(http, router, fb, rgservice, _cookieService, authService) {
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.rgservice = rgservice;
        this._cookieService = _cookieService;
        this.authService = authService;
        this.title = '登录';
        this.active = true;
        this.data = new user_1.User('', '');
        this.formErrors = {
            'name': '',
            'passwd': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long',
            },
            'passwd': {
                'required': 'Passwd is required.',
                'minlength': 'Passwd must be at least 6 characters long',
                'maxlength': 'Passwd can not be more than 24 characters long'
            }
        };
        this.errors = false;
        this.result = [];
        this.errs = [];
        this.errorMsgs = [];
    }
    Registerloginfrom.prototype.navTologup = function () {
        this.router.navigate(['logup']);
    };
    Registerloginfrom.prototype.ngOnInit = function () {
        this.buildForm();
    };
    Registerloginfrom.prototype.buildForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            'name': [this.data.name, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4)
                ]
            ],
            'passwd': [this.data.passwd, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(6),
                    forms_1.Validators.maxLength(24)
                ]
            ]
        });
        this.loginForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    Registerloginfrom.prototype.onValueChanged = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    Registerloginfrom.prototype.onSubmit = function () {
        var _this = this;
        this.data = this.loginForm.value;
        this.rgservice.checkRegister(this.data).subscribe(function (res) { return _this.checkResponse(res); }, function (err) { return _this.errorMsgs.push(err); });
    };
    Registerloginfrom.prototype.setMessage = function () {
        this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    Registerloginfrom.prototype.checkResponse = function (res) {
        var _this = this;
        if (res.error) {
            this.errors = true;
            this.errs = res.error;
        }
        else if (res.id) {
            var params = { "id": res.id, "name": this.data.name, "passwd": this.data.passwd };
            this.setCookie("u", params);
            this.authService.login().subscribe(function () {
                _this.setMessage();
                if (_this.authService.isLoggedIn) {
                    var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/member';
                    // Redirect the user
                    _this.router.navigate([redirect]);
                }
                else {
                    _this.errs.push("未知的错误，请联系客服");
                }
            });
        }
        else {
            this.errorMsgs.push("Unknown error.");
        }
    };
    Registerloginfrom.prototype.setCookie = function (key, value) {
        this._cookieService.putObject(key, value);
    };
    return Registerloginfrom;
}());
Registerloginfrom = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ng-login',
        templateUrl: 'register-login-form.html',
        styleUrls: ['../forms.css'],
        providers: [register_service_1.RegisterService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        forms_1.FormBuilder,
        register_service_1.RegisterService,
        core_2.CookieService,
        auth_service_1.AuthService])
], Registerloginfrom);
exports.Registerloginfrom = Registerloginfrom;
//# sourceMappingURL=register-login-form.component.js.map