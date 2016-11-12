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
var userMenuDirective = (function () {
    function userMenuDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    userMenuDirective.prototype.onMouseEnter = function () {
        this.MenuAnimation(true);
    };
    userMenuDirective.prototype.onMouseLeave = function () {
        this.MenuAnimation(false);
    };
    userMenuDirective.prototype.MenuAnimation = function (ani) {
        if (ani == true) {
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#menu'), 'display', 'block');
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#menu'), 'display', 'none');
        }
    };
    return userMenuDirective;
}());
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], userMenuDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], userMenuDirective.prototype, "onMouseLeave", null);
userMenuDirective = __decorate([
    core_1.Directive({
        selector: '[user-menu]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], userMenuDirective);
exports.userMenuDirective = userMenuDirective;
//# sourceMappingURL=user-menu.directive.js.map