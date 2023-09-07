import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-cvc',
  templateUrl: './input-cvc.component.html',
  styleUrls: ['./input-cvc.component.scss']
})
export class InputCvcComponent implements AfterViewInit{

  @ViewChild('cardCvc') cardCvc!: ElementRef;

  @Input() formGroup!: FormGroup
  @Input() formControls: any
  @Input() cvcPre: any

constructor(
  private render: Renderer2,
  private element: ElementRef){}

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
    const card = document.querySelector('#card'); // Procura o elemento pelo ID
    if (card) {
      this.render.setStyle(card, 'transform', 'rotateY(180deg)');
    }
  }

  desfoque(): void {
    const card = document.querySelector('#card');
    if(card){

      this.render.setStyle(card, 'transform', 'rotateY(0deg)');
    }
  }

  ngAfterViewInit(): void {
    this.cardCvc.nativeElement.addEventListener('keypress', (event: KeyboardEvent)=>{
      this.handleKeyPressEvent(event)
    })
  }


}
