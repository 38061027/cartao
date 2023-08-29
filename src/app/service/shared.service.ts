


import { Injectable } from '@angular/core';
import { Bandeiras } from '../models/bandeiras.model';



@Injectable({
  providedIn: 'root',
})
export class SharedService {

  constructor() {
  }

  bandeiraList: Bandeiras[] = [
    {
      name: 'visa',
      img: 'https://www.mobills.com.br/blog/wp-content/uploads/2022/06/logo-da-visa-bandeira-cartao.png',

    },
    {
      name: 'mastercard',
      img: 'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png',

    },
    {
      name: 'amex',
      img: 'https://www.mobills.com.br/blog/wp-content/uploads/2022/06/logo-da-bandeira-american-express-amex.png',

    },
    {
      name: 'discover',
      img: 'https://marcas-logos.net/wp-content/uploads/2021/06/Discover-logo.png',

    },
    {
      name: 'maestro',
      img: 'https://brand.mastercard.com/content/dam/mccom/brandcenter-br/other-marks/othermarks_maestro_vrt_2x.png',

    },
    {
      name: 'elo',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/1200px-Elo_card_association_logo_-_black_text.svg.png',
    
    },
  ];

  findBandeira(cardNumberValue: string): any {
    const firstDigit = cardNumberValue.charAt(0);

    const bandeira = this.bandeiraList.find((bandeira: any) => {
      if (
        bandeira.name === 'amex' &&
        cardNumberValue.substring(0, 2) === '34'
      ) {
        return true;
      } else if (
        bandeira.name === 'visa' &&
        cardNumberValue.substring(0, 1) === '4'
      ) {
        return true;
      } else if (
        bandeira.name === 'mastercard' &&
        cardNumberValue.substring(0, 1) === '5'
      ) {
        return true;
      } else if (
        bandeira.name === 'elo' &&
        cardNumberValue.substring(0, 1) === '3'
      ) {
        return true;
      } else if (
        bandeira.name === 'maestro' &&
        cardNumberValue.substring(0, 1) === '7'
      ) {
        return true;
      } else if (
        bandeira.name === 'discover' &&
        cardNumberValue.substring(0, 1) === '6'
      ) {
        return true;
      }

      return bandeira.name === firstDigit;
    });

    return bandeira;
  }
}
