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
var UserComponent = (function () {
    function UserComponent(route, router, _CookieServers) {
        this.route = route;
        this.router = router;
        this._CookieServers = _CookieServers;
        this.id = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var data = this.getCookie();
        var user = JSON.parse(data['u']);
        this.id = user.id;
    };
    UserComponent.prototype.getCookie = function () {
        var data = this._CookieServers.getAll();
        return data;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ng-main-content',
        templateUrl: 'user-index.html',
        styleUrls: ['index.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        core_2.CookieService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=userindex.component.js.map