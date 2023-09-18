import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss']
})
export class InputNameComponent implements AfterViewInit {
  @ViewChild('cardName') cardName!: ElementRef;


  @Input() formGroup!: FormGroup
  @Input() formControls: any
  @Input() namePre:any



  handleKeyPressEvent(event: KeyboardEvent): void {
    if (!this.checkChar(event)) {
      event.preventDefault();
    }
  }





  checkChar(event: KeyboardEvent): boolean {
    const char = String.fromCharCode(event.keyCode);
    const pattern = /[a-z]/gi

    if (char.match(pattern)) {
      return true
    }

return false

  }



  ngAfterViewInit(): void {
    this.cardName.nativeElement.addEventListener('keypress', (event: KeyboardEvent)=>{
      this.handleKeyPressEvent(event)
    })

  }


}
