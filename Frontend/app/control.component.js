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
var core_1 = require("@angular/core");
//Providers
var core_2 = require("angular2-cookie/core");
var ControlComponent = (function () {
    function ControlComponent(_CookieServices) {
        this._CookieServices = _CookieServices;
        this.id = [];
    }
    ControlComponent.prototype.ngOnInit = function () {
        var data = this.getCookie();
        var user = JSON.parse(data['u']);
        this.id = user.id;
    };
    ControlComponent.prototype.getCookie = function () {
        var data = this._CookieServices.getAll();
        return data;
    };
    return ControlComponent;
}());
ControlComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ng-control',
        templateUrl: 'pages/control-page.html',
        styleUrls: ['../css/control-page.css'],
    }),
    __metadata("design:paramtypes", [core_2.CookieService])
], ControlComponent);
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map