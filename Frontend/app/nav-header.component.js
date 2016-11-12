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
var router_1 = require('@angular/router');
var HeaderComponent = (function () {
    function HeaderComponent(route, router, el) {
        this.route = route;
        this.router = router;
        this.el = el;
        this.active = true;
    }
    HeaderComponent.prototype.ngAfterContentChecked = function () {
    };
    HeaderComponent.prototype.backToHome = function () {
        this.router.navigate(['']);
    };
    HeaderComponent.prototype.signIn = function () {
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng-header',
            template: "\n\t\t<nav class=\"navbar\" role=\"navigation\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<a class=\"navbar-brand\" (click)=\"backToHome()\">IGN SYSTEM</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t<li><a href=\"#\">\u7279\u6027</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\u6587\u6863</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\u901A\u4FE1</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\u5173\u4E8E</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t<li hightlight *ngIf=\"active\" #active><a (click)=\"signIn()\">\u7ACB\u5373\u5F00\u59CB\uFF01</a></li>\n\t\t\t\t\t\t<li *ngIf=\"!active\"><a>\u63A7\u5236\u53F0</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t\t<router-outlet></router-outlet>\n\t",
            styleUrls: ['../style.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, core_1.ElementRef])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=nav-header.component.js.map