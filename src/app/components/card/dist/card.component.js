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
        this.bandeiraColor = 'rgb(170, 170, 166)';
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
    CardComponent.prototype.onSubmit = function () {
        console.log(this.forms.value);
    };
    CardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cardVal.nativeElement.addEventListener('keypress', function (event) {
            _this.handleKeyPressEvent(event);
        });
        this.cardCvc.nativeElement.addEventListener('keypress', function (event) {
            _this.handleKeyPressEvent(event);
        });
        this.cardNumber.nativeElement.addEventListener('keypress', function (event) {
            _this.handleKeyPressEvent(event);
        });
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
    __decorate([
        core_1.ViewChild('numberCard')
    ], CardComponent.prototype, "cardNumber");
    __decorate([
        core_1.ViewChild('cardCvc')
    ], CardComponent.prototype, "cardCvc");
    __decorate([
        core_1.ViewChild('cardVal')
    ], CardComponent.prototype, "cardVal");
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
