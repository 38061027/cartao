"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_component_1 = require("../shared/dialog/dialog.component");
var CardComponent = /** @class */ (function () {
    function CardComponent(eventService, fb, element, render, sharedService, dialog) {
        this.eventService = eventService;
        this.fb = fb;
        this.element = element;
        this.render = render;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.bandeiraImageUrl = '';
        this.bandeiraColor = 'rgb(170, 170, 166)';
        this.valorPreCarregado = '0000 0000 0000 0000';
        this.namePreCarregado = 'Nome aqui';
        this.vencimentoPreCarregado = 'MM/YY';
        this.cvcPreCarregado = '123';
        this.placeholders = {
            cardNumber: "**** **** **** ****",
            name: 'Nome impresso',
            expires: '02/33',
            cvc: '***'
        };
        this.forms = this.fb.group({
            cardNumber: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(16),
                ],
            ],
            nickName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            vencimento: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            cvc: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]]
        });
    }
    Object.defineProperty(CardComponent.prototype, "f", {
        get: function () {
            return this.forms.controls;
        },
        enumerable: false,
        configurable: true
    });
    CardComponent.prototype.onReset = function () {
        this.forms.reset();
    };
    CardComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent);
    };
    CardComponent.prototype.onSubmit = function () {
        console.log(this.forms.value);
    };
    CardComponent.prototype.handleKeyPressEvent = function (event) {
        if (!this.checkChar(event)) {
            event.preventDefault();
        }
    };
    CardComponent.prototype.checkChar = function (event) {
        var char = String.fromCharCode(event.keyCode);
        var pattern = /[0-9]/g;
        if (char.match(pattern)) {
            return true;
        }
        return false;
    };
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trocarBandeira();
        this.eventService.resetEvent.subscribe(function () {
            _this.onReset();
        });
    };
    CardComponent.prototype.trocarBandeira = function () {
        var cardNumberInput = this.element.nativeElement.querySelector('#number-card');
        var cardNumberValue = cardNumberInput.value;
        var bandeira = this.sharedService.findBandeira(cardNumberValue);
        if (bandeira) {
            this.bandeiraImageUrl = bandeira.img;
        }
        else {
            this.bandeiraImageUrl = 'https://marcas-logos.net/wp-content/uploads/2021/06/Discover-logo.png';
        }
    };
    CardComponent.prototype.formatarNumero = function (numero) {
        var numeroFormatado = numero
            .toString()
            .replace(/\s/g, '')
            .match(/.{1,4}/g);
        return numeroFormatado ? numeroFormatado.join(' ') : '';
    };
    CardComponent.prototype.namePre = function (event) {
        var cardInput = event.target;
        if (cardInput.value === this.namePreCarregado) {
            cardInput.value = '';
        }
    };
    CardComponent.prototype.valPre = function (event) {
        var cardInput = event.target;
        if (cardInput.value === this.vencimentoPreCarregado) {
            cardInput.value = '';
        }
    };
    CardComponent.prototype.cvcPre = function (event) {
        var cardInput = event.target;
        if (cardInput.value === this.cvcPreCarregado) {
            cardInput.value = '';
        }
    };
    CardComponent = __decorate([
        core_1.Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss']
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
