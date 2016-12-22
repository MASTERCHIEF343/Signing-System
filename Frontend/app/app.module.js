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
var platform_browser_1 = require("@angular/platform-browser");
//Http
var http_1 = require("@angular/http");
//Forms
var forms_1 = require("@angular/forms");
//Component
var app_component_1 = require("./app.component");
var register_login_form_component_1 = require("./register-login-form.component");
var register_logup_form_component_1 = require("./register-logup-form.component");
var userindex_component_1 = require("./userindex.component");
var control_component_1 = require("./control.component");
var pagenotfound_component_1 = require("./pagenotfound.component");
//Providers
var app_routing_module_1 = require("./app-routing.module");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
//Directive
var user_menu_directive_1 = require("./services/user-menu.directive");
var primeng_1 = require("primeng/primeng");
var primeng_2 = require("primeng/primeng");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_module_1.AppRoutingModule,
            primeng_2.GrowlModule,
            primeng_1.ChartModule
        ],
        declarations: [
            app_component_1.AppComponent,
            register_login_form_component_1.Registerloginfrom,
            register_logup_form_component_1.Registerlogupfrom,
            userindex_component_1.UserComponent,
            control_component_1.ControlComponent,
            pagenotfound_component_1.PageNotFoundComponent,
            user_menu_directive_1.userMenuDirective,
        ],
        providers: [
            cookies_service_1.CookieService,
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map