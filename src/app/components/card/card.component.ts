import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements AfterViewInit {
  forms: FormGroup;

  valorPreCarregado: string = '1246 8742 9452 7631'
  namePreCarregado: string = 'José Augusto'
  vencimentoPreCarregado: string = '02/29'
  cvcPreCarregado: string = '02/29'

  constructor(
    private fb: FormBuilder,
    private element: ElementRef,
    private render: Renderer2
  ) {
    this.forms = this.fb.group({
      cardNumber: [''],
      nickName: [''],
      vencimento: [''],
      cvc: [''],
    });
  }

  virar(): void {
    const card = this.element.nativeElement.querySelector('#card');
    this.render.setStyle(card, 'transform', 'rotateY(180deg)');
  }


  formatarNumero(numero: string): string {
    const numeroFormatado = numero.toString().replace(/\s/g, '').match(/.{1,4}/g);
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


  ngAfterViewInit(): void {

  }
}
