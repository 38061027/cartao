"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var card_1 = require("@angular/material/card");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var animations_1 = require("@angular/platform-browser/animations");
var platform_browser_1 = require("@angular/platform-browser");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var MODULES = [
    card_1.MatCardModule,
    forms_1.ReactiveFormsModule,
    forms_2.FormsModule,
    input_1.MatInputModule,
    button_1.MatButtonModule,
    animations_1.BrowserAnimationsModule,
    platform_browser_1.BrowserModule,
    dialog_1.MatDialogModule,
    form_field_1.MatFormFieldModule,
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                MODULES
            ],
            exports: [MODULES]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
