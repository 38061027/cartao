import { FormGroup } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements AfterViewInit{
  @ViewChild('numberCard') cardNumber!: ElementRef;

  @Input() formGroup!: FormGroup
  @Input() trocarBandeira:any
  @Input() formControls: any



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


  ngAfterViewInit(): void {

     this.cardNumber.nativeElement.addEventListener('keypress', (event: KeyboardEvent)=>{
      this.handleKeyPressEvent(event)
    })

  }



}
