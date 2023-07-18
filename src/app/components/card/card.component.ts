import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  forms: FormGroup;



  valorPreCarregado: string = '**** **** **** ****';
  namePreCarregado: string = 'José Augusto';
  vencimentoPreCarregado: string = '02/29';
  cvcPreCarregado: string = '123';

  constructor(
    private fb: FormBuilder,
    private element: ElementRef,
    private render: Renderer2,

  ) {
    this.forms = this.fb.group({
      cardNumber: [''],
      nickName: [''],
      vencimento: [''],
      cvc: [''],
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

  ngOnInit(): void {}

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
