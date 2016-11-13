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
var router_1 = require("@angular/router");
//Providers
var core_2 = require("angular2-cookie/core");
var auth_service_1 = require("./services/auth.service");
var AppComponent = (function () {
    function AppComponent(route, router, el, _CookieServers, authService) {
        this.route = route;
        this.router = router;
        this.el = el;
        this._CookieServers = _CookieServers;
        this.authService = authService;
        this.active = true;
        this.id = [];
        this.username = [];
    }
    AppComponent.prototype.ngAfterContentChecked = function () {
        var dom = this.el.nativeElement;
        if (dom.querySelector('#id') != undefined || dom.querySelector('#id') != null) {
            this.active = false;
            this.id = dom.querySelector('#id').innerHTML;
            var user = JSON.parse(this._CookieServers.get('u'));
            this.username = user.name;
        }
        else {
            this.active = true;
        }
        ;
    };
    AppComponent.prototype.backToHome = function () {
        this.router.navigate(['']);
    };
    AppComponent.prototype.signIn = function () {
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this._CookieServers.removeAll();
        this.router.navigate(['']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t\t<nav class=\"navbar\" role=\"navigation\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<a class=\"navbar-brand\" (click)=\"backToHome()\">IGN SYSTEM</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t<li><a href=\"#\">\u7279\u6027</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\u6587\u6863</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\u901A\u4FE1</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">\u5173\u4E8E</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul user-menu class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t<li *ngIf=\"active\" #active><a (click)=\"signIn()\">\u7ACB\u5373\u5F00\u59CB\uFF01</a></li>\n\t\t\t\t\t\t<li *ngIf=\"!active\" class=\"dropdown\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> {{ username }} <span class=\"caret\"></span></a>\n\t\t\t\t\t\t\t<ul id=\"menu\"  class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t\t\t\t<li><a>\u63A7\u5236\u53F0</a></li>\n\t\t\t\t\t\t\t\t<li><a (click)=\"logout()\">\u9000\u51FA</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t\t<router-outlet></router-outlet>\n\t",
        styleUrls: ['../style.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        core_1.ElementRef,
        core_2.CookieService,
        auth_service_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map