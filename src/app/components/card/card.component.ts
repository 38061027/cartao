import { SharedService } from './../../service/shared.service';
import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  Renderer2,
} from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { EventService } from 'src/app/service/event.service';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {


  forms: FormGroup;

  bandeiraImageUrl: string = '';

  valorPreCarregado: string = '0000 0000 0000 0000';
  namePreCarregado: string = 'Nome aqui';
  vencimentoPreCarregado: string = 'MM/YY';
  cvcPreCarregado: string = '123';


  placeholders = {
    cardNumber: "**** **** **** ****",
    name: 'Nome impresso',
    expires: '02/33',
    cvc: '***'
  }


  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private element: ElementRef,
    private render: Renderer2,
    private sharedService: SharedService,
    public dialog: MatDialog
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





  onReset(){
    this.forms.reset()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);


  }

  onSubmit(): void {
    console.log(this.forms.value);
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




  ngOnInit(): void {

    this.eventService.resetEvent.subscribe(()=>{
      this.onReset()
    })


  }

  trocarBandeira():void {


    setTimeout(()=>{



      const cardNumberInput =
      this.element.nativeElement.querySelector('#number-card');
      const cardNumberValue = cardNumberInput.value;

      const bandeira = this.sharedService.findBandeira(cardNumberValue);

      if (bandeira) {
        this.bandeiraImageUrl = bandeira.img;

      } else {
        this.bandeiraImageUrl = 'https://marcas-logos.net/wp-content/uploads/2021/06/Discover-logo.png';

      }
    })
  }

  formatarNumero(numero: string): string {
    const numeroFormatado = numero
      .toString()
      .replace(/\s/g, '')
      .match(/.{1,4}/g);
    return numeroFormatado ? numeroFormatado.join(' ') : '';
  }


}
