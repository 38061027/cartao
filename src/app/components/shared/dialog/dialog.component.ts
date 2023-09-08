import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {



  sucesso: string = 'Sucesso!'
  descricao: string = 'Suas informações foram enviadas com sucesso.'

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {}




}
