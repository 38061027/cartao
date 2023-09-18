"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputNameComponent = void 0;
var core_1 = require("@angular/core");
var InputNameComponent = /** @class */ (function () {
    function InputNameComponent() {
    }
    InputNameComponent.prototype.handleKeyPressEvent = function (event) {
        if (!this.checkChar(event)) {
            event.preventDefault();
        }
    };
    InputNameComponent.prototype.checkChar = function (event) {
        var char = String.fromCharCode(event.keyCode);
        var pattern = /[a-z]/gi;
        if (char.match(pattern)) {
            return true;
        }
        return false;
    };
    InputNameComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cardName.nativeElement.addEventListener('keypress', function (event) {
            _this.handleKeyPressEvent(event);
        });
    };
    __decorate([
        core_1.ViewChild('cardName')
    ], InputNameComponent.prototype, "cardName");
    __decorate([
        core_1.Input()
    ], InputNameComponent.prototype, "formGroup");
    __decorate([
        core_1.Input()
    ], InputNameComponent.prototype, "formControls");
    __decorate([
        core_1.Input()
    ], InputNameComponent.prototype, "namePre");
    InputNameComponent = __decorate([
        core_1.Component({
            selector: 'app-input-name',
            templateUrl: './input-name.component.html',
            styleUrls: ['./input-name.component.scss']
        })
    ], InputNameComponent);
    return InputNameComponent;
}());
exports.InputNameComponent = InputNameComponent;
