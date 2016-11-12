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
var router_1 = require("@angular/router");
var register_login_form_component_1 = require("./register-login-form.component");
var register_logup_form_component_1 = require("./register-logup-form.component");
var userindex_component_1 = require("./userindex.component");
var pagenotfound_component_1 = require("./pagenotfound.component");
var auth_service_1 = require("./auth.service");
var auth_guard_service_1 = require("./auth-guard.service");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/login',
                    pathMatch: 'full'
                },
                {
                    path: 'logup',
                    component: register_logup_form_component_1.Registerlogupfrom
                },
                {
                    path: 'login',
                    component: register_login_form_component_1.Registerloginfrom
                },
                {
                    path: 'member',
                    component: userindex_component_1.UserComponent,
                    canActivate: [auth_guard_service_1.AuthGuard]
                },
                {
                    path: '**',
                    component: pagenotfound_component_1.PageNotFoundComponent
                },
            ], { useHash: true })
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            auth_service_1.AuthService,
            auth_guard_service_1.AuthGuard
        ]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map