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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var register_1 = require('./register');
var register_service_1 = require('./register.service');
require('./rxjs-operators');
var http_1 = require('@angular/http');
var Registerlogupfrom = (function () {
    function Registerlogupfrom(http, fb, rgservice) {
        this.http = http;
        this.fb = fb;
        this.rgservice = rgservice;
        this.data = new register_1.Register('', '', '', '');
        this.active = true;
        this.formErrors = {
            'name': '',
            'email': '',
            'passwd': '',
            'direct': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long',
            },
            'email': {
                'required': 'Email is required.',
            },
            'passwd': {
                'required': 'Passwd is required.',
                'minlength': 'Passwd must be at least 6 characters long',
                'maxlength': 'Passwd can not be more than 24 characters long'
            },
            'direct': {
                'required': 'Direct is required.'
            }
        };
    }
    Registerlogupfrom.prototype.ngOnInit = function () {
        this.buildForm();
    };
    Registerlogupfrom.prototype.buildForm = function () {
        var _this = this;
        this.logupForm = this.fb.group({
            'name': [this.data.name, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4)
                ]],
            'email': [this.data.email, [
                    forms_1.Validators.required
                ]],
            'passwd': [this.data.passwd, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(6),
                    forms_1.Validators.maxLength(24)
                ]],
            'direct': [this.data.direct, [
                    forms_1.Validators.required
                ]]
        });
        this.logupForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    Registerlogupfrom.prototype.onValueChanged = function (data) {
        if (!this.logupForm) {
            return;
        }
        var form = this.logupForm;
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
    Registerlogupfrom.prototype.onSubmit = function () {
        this.data = this.logupForm.value;
        this.rgservice.addRegister(this.data).subscribe(function (res) {
            console.log(res);
        });
    };
    Registerlogupfrom = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register-form-logup',
            templateUrl: 'register-logup-form.html',
            providers: [register_service_1.RegisterService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, forms_1.FormBuilder, register_service_1.RegisterService])
    ], Registerlogupfrom);
    return Registerlogupfrom;
}());
exports.Registerlogupfrom = Registerlogupfrom;
//# sourceMappingURL=register-logup-form.component.js.map