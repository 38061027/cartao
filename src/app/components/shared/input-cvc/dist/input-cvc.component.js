"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputCvcComponent = void 0;
var core_1 = require("@angular/core");
var InputCvcComponent = /** @class */ (function () {
    function InputCvcComponent(render, element) {
        this.render = render;
        this.element = element;
    }
    InputCvcComponent.prototype.handleKeyPressEvent = function (event) {
        if (!this.checkChar(event)) {
            event.preventDefault();
        }
    };
    InputCvcComponent.prototype.checkChar = function (event) {
        var char = String.fromCharCode(event.keyCode);
        var pattern = /[0-9]/g;
        if (char.match(pattern)) {
            return true;
        }
        return false;
    };
    InputCvcComponent.prototype.virar = function () {
        var card = document.querySelector('#card'); // Procura o elemento pelo ID
        if (card) {
            this.render.setStyle(card, 'transform', 'rotateY(180deg)');
        }
    };
    InputCvcComponent.prototype.desfoque = function () {
        var card = document.querySelector('#card');
        if (card) {
            this.render.setStyle(card, 'transform', 'rotateY(0deg)');
        }
    };
    InputCvcComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cardCvc.nativeElement.addEventListener('keypress', function (event) {
            _this.handleKeyPressEvent(event);
        });
    };
    __decorate([
        core_1.ViewChild('cardCvc')
    ], InputCvcComponent.prototype, "cardCvc");
    __decorate([
        core_1.Input()
    ], InputCvcComponent.prototype, "formGroup");
    __decorate([
        core_1.Input()
    ], InputCvcComponent.prototype, "formControls");
    __decorate([
        core_1.Input()
    ], InputCvcComponent.prototype, "cvcPre");
    InputCvcComponent = __decorate([
        core_1.Component({
            selector: 'app-input-cvc',
            templateUrl: './input-cvc.component.html',
            styleUrls: ['./input-cvc.component.scss']
        })
    ], InputCvcComponent);
    return InputCvcComponent;
}());
exports.InputCvcComponent = InputCvcComponent;
