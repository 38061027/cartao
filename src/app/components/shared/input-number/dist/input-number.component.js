"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputNumberComponent = void 0;
var core_1 = require("@angular/core");
var InputNumberComponent = /** @class */ (function () {
    function InputNumberComponent() {
    }
    InputNumberComponent.prototype.handleKeyPressEvent = function (event) {
        if (!this.checkChar(event)) {
            event.preventDefault();
        }
    };
    InputNumberComponent.prototype.checkChar = function (event) {
        var char = String.fromCharCode(event.keyCode);
        var pattern = /[0-9]/g;
        if (char.match(pattern)) {
            return true;
        }
        return false;
    };
    InputNumberComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cardNumber.nativeElement.addEventListener('keypress', function (event) {
            _this.handleKeyPressEvent(event);
        });
    };
    __decorate([
        core_1.ViewChild('numberCard')
    ], InputNumberComponent.prototype, "cardNumber");
    __decorate([
        core_1.Input()
    ], InputNumberComponent.prototype, "formGroup");
    __decorate([
        core_1.Input()
    ], InputNumberComponent.prototype, "trocarBandeira");
    __decorate([
        core_1.Input()
    ], InputNumberComponent.prototype, "formControls");
    InputNumberComponent = __decorate([
        core_1.Component({
            selector: 'app-input-number',
            templateUrl: './input-number.component.html',
            styleUrls: ['./input-number.component.scss']
        })
    ], InputNumberComponent);
    return InputNumberComponent;
}());
exports.InputNumberComponent = InputNumberComponent;
