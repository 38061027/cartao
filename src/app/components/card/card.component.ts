import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  forms: FormGroup;

  bandeiraImageUrl: string = '';
  valorPreCarregado: string = '**** **** **** ****';
  namePreCarregado: string = 'José Augusto';
  vencimentoPreCarregado: string = '02/29';
  cvcPreCarregado: string = '123';

  constructor(
    private fb: FormBuilder,
    private element: ElementRef,
    private render: Renderer2
  ) {
    this.forms = this.fb.group({
      cardNumber: ['', [Validators.required , Validators.minLength(16), Validators.pattern('^[0-9]$')]],
      nickName: ['', [Validators.required , Validators.minLength(15)]],
      vencimento: ['', [Validators.required , Validators.minLength(4)]],
      cvc: ['', [Validators.required , Validators.minLength(3)]],
    });
  }

  onSubmit(): void {
   console.log(this.forms.value);
  }

  virar(): void {
    const card = this.element.nativeElement.querySelector('#card');
    this.render.setStyle(card, 'transform', 'rotateY(180deg)');
  }

  desfoque(): void {
    const card = this.element.nativeElement.querySelector('#card');
    this.render.setStyle(card, 'transform', 'rotateY(0deg)');
  }

  ngOnInit(): void {
this.trocarBandeira()

  }




  trocarBandeira() {
    const cardNumberInput = this.element.nativeElement.querySelector("#number-card");
    const cardNumberValue = cardNumberInput.value;

    if (cardNumberValue.charAt(0) === '4') {
      this.bandeiraImageUrl = 'https://www.mobills.com.br/blog/wp-content/uploads/2022/06/logo-da-visa-bandeira-cartao.png';
    }else if(cardNumberValue.charAt(0) === '5'){
      this.bandeiraImageUrl = 'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png'
    }else if(cardNumberValue.charAt(0) === '3' && cardNumberValue.charAt(1) === '4'){
      this.bandeiraImageUrl = 'https://www.mobills.com.br/blog/wp-content/uploads/2022/06/logo-da-bandeira-american-express-amex.png'
    }else if(cardNumberValue.charAt(0) === '6'){
      this.bandeiraImageUrl = 'https://marcas-logos.net/wp-content/uploads/2021/06/Discover-logo.png'
    }else if(cardNumberValue.charAt(0) === '7'){
      this.bandeiraImageUrl = 'https://brand.mastercard.com/content/dam/mccom/brandcenter-br/other-marks/othermarks_maestro_vrt_2x.png'
    }else if(cardNumberValue.charAt(0) === '3'){
      this.bandeiraImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/1200px-Elo_card_association_logo_-_black_text.svg.png'
    }else {
      this.bandeiraImageUrl = '';
    }
  }




  formatarNumero(numero: string): string {
    const numeroFormatado = numero
      .toString()
      .replace(/\s/g, '')
      .match(/.{1,4}/g);
    return numeroFormatado ? numeroFormatado.join(' ') : '';
  }

  numberPre(event: KeyboardEvent): void {
    const cardInput = event.target as HTMLInputElement;
    if (cardInput.value === this.valorPreCarregado) {
      cardInput.value = '';
    }
  }

  namePre(event: KeyboardEvent): void {
    const cardInput = event.target as HTMLInputElement;
    if (cardInput.value === this.namePreCarregado) {
      cardInput.value = '';
    }
  }

  valPre(event: KeyboardEvent): void {
    const cardInput = event.target as HTMLInputElement;
    if (cardInput.value === this.vencimentoPreCarregado) {
      cardInput.value = '';
    }
  }

  cvcPre(event: KeyboardEvent): void {
    const cardInput = event.target as HTMLInputElement;
    if (cardInput.value === this.cvcPreCarregado) {
      cardInput.value = '';
    }
  }
}
