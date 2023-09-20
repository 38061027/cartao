"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedService = void 0;
var core_1 = require("@angular/core");
var SharedService = /** @class */ (function () {
    function SharedService() {
        this.bandeiraList = [
            {
                name: 'visa',
                img: 'https://www.mobills.com.br/blog/wp-content/uploads/2022/06/logo-da-visa-bandeira-cartao.png'
            },
            {
                name: 'mastercard',
                img: 'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png'
            },
            {
                name: 'amex',
                img: 'https://assets.stickpng.com/images/620670b9d7b91b0004122617.png'
            },
            {
                name: 'discover',
                img: 'https://marcas-logos.net/wp-content/uploads/2021/06/Discover-logo.png'
            },
            {
                name: 'maestro',
                img: 'https://logodownload.org/wp-content/uploads/2018/05/maestro-logo-8.png'
            },
            {
                name: 'elo',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/1200px-Elo_card_association_logo_-_black_text.svg.png'
            },
        ];
    }
    SharedService.prototype.findBandeira = function (cardNumberValue) {
        var firstDigit = cardNumberValue.charAt(0);
        var bandeira = this.bandeiraList.find(function (bandeira) {
            if (bandeira.name === 'amex' &&
                cardNumberValue.substring(0, 2) === '34') {
                return true;
            }
            else if (bandeira.name === 'visa' &&
                cardNumberValue.substring(0, 1) === '4') {
                return true;
            }
            else if (bandeira.name === 'mastercard' &&
                cardNumberValue.substring(0, 1) === '5') {
                return true;
            }
            else if (bandeira.name === 'elo' &&
                cardNumberValue.substring(0, 1) === '3') {
                return true;
            }
            else if (bandeira.name === 'maestro' &&
                cardNumberValue.substring(0, 1) === '7') {
                return true;
            }
            else if (bandeira.name === 'discover' &&
                cardNumberValue.substring(0, 1) === '6') {
                return true;
            }
            return bandeira.name === firstDigit;
        });
        return bandeira;
    };
    SharedService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
