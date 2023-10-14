import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-maturity',
  templateUrl: './input-maturity.component.html',
  styleUrls: ['./input-maturity.component.scss']
})
export class InputMaturityComponent implements AfterViewInit{
  @ViewChild('cardVal') cardVal!: ElementRef;


  @Input() formGroup!: FormGroup
  @Input() formControls: any
  @Input() valPre: any
  @Input() placeholder: any


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
    this.cardVal.nativeElement.addEventListener('keypress', (event: KeyboardEvent)=>{
      this.handleKeyPressEvent(event)
    })



  }



}
