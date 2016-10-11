"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var register_login_form_component_1 = require('./register-login-form.component');
var routes = [
    {
        path: 'registe',
        component: register_login_form_component_1.Registerloginfrom
    },
    {
        path: '',
        component: app_component_1.AppComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes, { useHash: true });
//# sourceMappingURL=app-routing.module.js.map