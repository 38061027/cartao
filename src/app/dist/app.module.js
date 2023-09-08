"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var card_component_1 = require("./components/card/card.component");
var material_module_1 = require("./material/material.module");
var input_number_component_1 = require("./components/shared/input-number/input-number.component");
var input_name_component_1 = require("./components/shared/input-name/input-name.component");
var input_maturity_component_1 = require("./components/shared/input-maturity/input-maturity.component");
var input_cvc_component_1 = require("./components/shared/input-cvc/input-cvc.component");
var dialog_component_1 = require("./components/shared/dialog/dialog.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                card_component_1.CardComponent,
                input_number_component_1.InputNumberComponent,
                input_name_component_1.InputNameComponent,
                input_maturity_component_1.InputMaturityComponent,
                input_cvc_component_1.InputCvcComponent,
                dialog_component_1.DialogComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
