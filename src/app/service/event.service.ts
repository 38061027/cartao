import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public resetEvent: EventEmitter<void> = new EventEmitter<void>();

  resetForm(): void {
    this.resetEvent.emit();
  }
}
