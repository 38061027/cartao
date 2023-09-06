import { SharedService } from './../../service/shared.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {

   @ViewChild('cardCvc') cardCvc!: ElementRef;
   @ViewChild('cardVal') cardVal!: ElementRef;





  forms: FormGroup;

  bandeiraImageUrl: string = '';
  bandeiraColor: string = 'rgb(170, 170, 166)';

  valorPreCarregado: string = '**** **** **** ****';
  namePreCarregado: string = 'José Augusto';
  vencimentoPreCarregado: string = '02/29';
  cvcPreCarregado: string = '123';

  constructor(
    private fb: FormBuilder,
    private element: ElementRef,
    private render: Renderer2,
    private sharedService: SharedService
  ) {
    this.forms = this.fb.group({
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
        ],
      ],
      nickName: ['', [Validators.required, Validators.minLength(3)]],
      vencimento: ['', [Validators.required, Validators.minLength(4)]],
      cvc: ['', [Validators.required, Validators.minLength(3)]],
    });
  }


  get f(){
    return this.forms.controls
  }


  onSubmit(): void {
    console.log(this.forms.value);
  }

  ngAfterViewInit(): void {


     this.cardVal.nativeElement.addEventListener('keypress', (event: KeyboardEvent)=>{
       this.handleKeyPressEvent(event)
     })


     this.cardCvc.nativeElement.addEventListener('keypress', (event: KeyboardEvent)=>{
       this.handleKeyPressEvent(event)
     })


  }

  handleKeyPressEvent(event: KeyboardEvent): void {
    if (!this.checkChar(event)) {
      event.preventDefault();
    }
  }

  checkChar(event: KeyboardEvent): boolean {
    const char = String.fromCharCode(event.keyCode);
    const pattern = /[0-9]/g;

    if (char.match(pattern)) {
      return true
    }

return false

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
    this.trocarBandeira();

  }

  trocarBandeira():void {
    const cardNumberInput =
    this.element.nativeElement.querySelector('#number-card');
    const cardNumberValue = cardNumberInput.value;

    const bandeira = this.sharedService.findBandeira(cardNumberValue);

    if (bandeira) {
      this.bandeiraImageUrl = bandeira.img;

    } else {
      this.bandeiraImageUrl = 'https://marcas-logos.net/wp-content/uploads/2021/06/Discover-logo.png';

    }
  }

  formatarNumero(numero: string): string {
    const numeroFormatado = numero
      .toString()
      .replace(/\s/g, '')
      .match(/.{1,4}/g);
    return numeroFormatado ? numeroFormatado.join(' ') : '';
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
