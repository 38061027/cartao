import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit{

  forms: FormGroup;


  constructor(private fb: FormBuilder,
    private element: ElementRef,
    private render: Renderer2
){
    this.forms = this.fb.group({
      cardNumber: [''],
      nickName: [''],
      vencimento: [''],
      cvc: ['']
    })
  }







  virar():void{
    const card = this.element.nativeElement.querySelector('#card')
    this.render.setStyle(card, 'transform', 'rotateY(180deg)')
  }




  ngAfterViewInit(): void {





  }






}
