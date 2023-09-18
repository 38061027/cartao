"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.DialogComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var DialogComponent = /** @class */ (function () {
    function DialogComponent(eventService, dialogRef, data) {
        this.eventService = eventService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.sucesso = 'Sucesso!';
        this.descricao = 'Suas informações foram enviadas com sucesso.';
    }
    DialogComponent.prototype.onOkClick = function (event) {
        this.eventService.resetForm();
    };
    __decorate([
        core_1.HostListener('click', ['$event'])
    ], DialogComponent.prototype, "onOkClick");
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog',
            templateUrl: './dialog.component.html',
            styleUrls: ['./dialog.component.scss']
        }),
        __param(2, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
