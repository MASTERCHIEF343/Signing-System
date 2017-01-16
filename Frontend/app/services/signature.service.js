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
var SignatureService = (function () {
    //constructor
    function SignatureService(http) {
        this.http = http;
        //Urls
        this.dateTimer = 'http://localhost/signing-system/Backend/signature';
        this.checkUrl = 'http://localhost/signing-system/Backend/checksign';
        this.getTimes = 'http://localhost/signing-system/Backend/gettimes/';
    }
    //Init get sign times
    SignatureService.prototype.getSignTimes = function (data) {
        var url = this.getTimes + data;
        return this.http.get(url).map(this.extractData).catch(this.handleError);
    };
    //check signature
    SignatureService.prototype.checkSign = function (data) {
        var body = JSON.stringify({ data: data });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.checkUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    //input signature
    SignatureService.prototype.timerSign = function (data) {
        var body = JSON.stringify({ data: data });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.dateTimer, body, options).map(function (res) { return ' '; }).catch(this.handleError);
    };
    //transform to json
    SignatureService.prototype.extractData = function (res) {
        var data = res.json() || {};
        return data;
    };
    //Errors absolutes
    SignatureService.prototype.handleError = function (error) {
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
    return SignatureService;
}());
SignatureService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SignatureService);
exports.SignatureService = SignatureService;
//# sourceMappingURL=signature.service.js.map