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
var CardComponent = /** @class */ (function () {
    function CardComponent(fb, element, render, sharedService) {
        this.fb = fb;
        this.element = element;
        this.render = render;
        this.sharedService = sharedService;
        this.bandeiraImageUrl = '';
        this.bandeiraColor = '';
        this.valorPreCarregado = '**** **** **** ****';
        this.namePreCarregado = 'José Augusto';
        this.vencimentoPreCarregado = '02/29';
        this.cvcPreCarregado = '123';
        this.forms = this.fb.group({
            cardNumber: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(16),
                    forms_1.Validators.pattern('^[0-9]$'),
                ],
            ],
            nickName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(15)]],
            vencimento: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            cvc: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]]
        });
    }
    CardComponent.prototype.onSubmit = function () {
        console.log(this.forms.value);
    };
    CardComponent.prototype.virar = function () {
        var card = this.element.nativeElement.querySelector('#card');
        this.render.setStyle(card, 'transform', 'rotateY(180deg)');
    };
    CardComponent.prototype.desfoque = function () {
        var card = this.element.nativeElement.querySelector('#card');
        this.render.setStyle(card, 'transform', 'rotateY(0deg)');
    };
    CardComponent.prototype.ngOnInit = function () {
        this.trocarBandeira();
    };
    CardComponent.prototype.trocarBandeira = function () {
        var cardNumberInput = this.element.nativeElement.querySelector('#number-card');
        var cardNumberValue = cardNumberInput.value;
        var bandeira = this.sharedService.findBandeira(cardNumberValue);
        if (bandeira) {
            this.bandeiraImageUrl = bandeira.img;
            this.bandeiraColor = bandeira.color;
        }
        else {
            this.bandeiraImageUrl = '';
            this.bandeiraColor = '';
        }
    };
    CardComponent.prototype.formatarNumero = function (numero) {
        var numeroFormatado = numero
            .toString()
            .replace(/\s/g, '')
            .match(/.{1,4}/g);
        return numeroFormatado ? numeroFormatado.join(' ') : '';
    };
    CardComponent.prototype.numberPre = function (event) {
        var cardInput = event.target;
        if (cardInput.value === this.valorPreCarregado) {
            cardInput.value = '';
        }
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
