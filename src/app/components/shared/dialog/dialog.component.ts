import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from 'src/app/service/event.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {


  sucesso: string = 'Sucesso!'
  descricao: string = 'Suas informações foram enviadas com sucesso.'

  constructor(
    private eventService: EventService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    ) {}



  @HostListener('click', ['$event'])
  onOkClick(event: KeyboardEvent): void {
    this.eventService.resetForm();
  }


}
