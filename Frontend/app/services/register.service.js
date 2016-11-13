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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
//RxJS
require("../rxjs-operators");
var Observable_1 = require("rxjs/Observable");
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
        this.logupUrl = 'http://localhost/signing-system/Backend/logup';
        this.loginUrl = 'http://localhost/signing-system/Backend/login';
    }
    RegisterService.prototype.addRegister = function (data) {
        var body = JSON.stringify({ data: data });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.logupUrl, body, options).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RegisterService.prototype.checkRegister = function (data) {
        var body = JSON.stringify({ data: data });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.loginUrl, body, options).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RegisterService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return RegisterService;
}());
RegisterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map