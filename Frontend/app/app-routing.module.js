"use strict";
var router_1 = require('@angular/router');
var register_login_form_component_1 = require('./register-login-form.component');
var register_logup_form_component_1 = require('./register-logup-form.component');
var routes = [
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
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes, { useHash: true });
//# sourceMappingURL=app-routing.module.js.map