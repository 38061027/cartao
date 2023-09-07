"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputMaturityComponent = void 0;
var core_1 = require("@angular/core");
var InputMaturityComponent = /** @class */ (function () {
    function InputMaturityComponent() {
    }
    InputMaturityComponent.prototype.handleKeyPressEvent = function (event) {
        if (!this.checkChar(event)) {
            event.preventDefault();
        }
    };
    InputMaturityComponent.prototype.checkChar = function (event) {
        var char = String.fromCharCode(event.keyCode);
        var pattern = /[0-9]/g;
        if (char.match(pattern)) {
            return true;
        }
        return false;
    };
    InputMaturityComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cardVal.nativeElement.addEventListener('keypress', function (event) {
            _this.handleKeyPressEvent(event);
        });
    };
    __decorate([
        core_1.ViewChild('cardVal')
    ], InputMaturityComponent.prototype, "cardVal");
    __decorate([
        core_1.Input()
    ], InputMaturityComponent.prototype, "formGroup");
    __decorate([
        core_1.Input()
    ], InputMaturityComponent.prototype, "formControls");
    __decorate([
        core_1.Input()
    ], InputMaturityComponent.prototype, "valPre");
    InputMaturityComponent = __decorate([
        core_1.Component({
            selector: 'app-input-maturity',
            templateUrl: './input-maturity.component.html',
            styleUrls: ['./input-maturity.component.scss']
        })
    ], InputMaturityComponent);
    return InputMaturityComponent;
}());
exports.InputMaturityComponent = InputMaturityComponent;
