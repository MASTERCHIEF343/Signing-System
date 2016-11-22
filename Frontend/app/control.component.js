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
    function ControlComponent(_CookieServices, el, renderer) {
        this._CookieServices = _CookieServices;
        this.el = el;
        this.renderer = renderer;
        this.msgs = [];
        this.id = [];
    }
    ControlComponent.prototype.Success = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    ControlComponent.prototype.clear = function () {
        this.msgs = [];
    };
    ControlComponent.prototype.ngOnInit = function () {
        var data = this.getCookie();
        var user = JSON.parse(data['u']);
        this.id = user.id;
        this.renderer.setElementStyle(this.month.nativeElement, 'display', 'block');
    };
    ControlComponent.prototype.getCookie = function () {
        var data = this._CookieServices.getAll();
        return data;
    };
    ControlComponent.prototype.MonthTimes = function () {
        this.renderer.setElementStyle(this.month.nativeElement, 'display', 'block');
        this.renderer.setElementStyle(this.file.nativeElement, 'display', 'none');
        this.renderer.setElementStyle(this.message.nativeElement, 'display', 'none');
    };
    ControlComponent.prototype.FileSystems = function () {
        this.renderer.setElementStyle(this.file.nativeElement, 'display', 'block');
        this.renderer.setElementStyle(this.month.nativeElement, 'display', 'none');
        this.renderer.setElementStyle(this.message.nativeElement, 'display', 'none');
    };
    ControlComponent.prototype.Messages = function () {
        this.renderer.setElementStyle(this.message.nativeElement, 'display', 'block');
        this.renderer.setElementStyle(this.file.nativeElement, 'display', 'none');
        this.renderer.setElementStyle(this.month.nativeElement, 'display', 'none');
    };
    return ControlComponent;
}());
__decorate([
    core_1.ViewChild('monthtimes'),
    __metadata("design:type", core_1.ElementRef)
], ControlComponent.prototype, "month", void 0);
__decorate([
    core_1.ViewChild('filesystems'),
    __metadata("design:type", core_1.ElementRef)
], ControlComponent.prototype, "file", void 0);
__decorate([
    core_1.ViewChild('messages'),
    __metadata("design:type", core_1.ElementRef)
], ControlComponent.prototype, "message", void 0);
ControlComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ng-control',
        templateUrl: 'pages/control-page.html',
        styleUrls: ['../css/control-page.css'],
    }),
    __metadata("design:paramtypes", [core_2.CookieService,
        core_1.ElementRef,
        core_1.Renderer])
], ControlComponent);
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map