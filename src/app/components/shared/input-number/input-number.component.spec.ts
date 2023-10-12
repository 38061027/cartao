import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberComponent } from './input-number.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('InputNumberComponent', () => {
  let component: InputNumberComponent;
  let fixture: ComponentFixture<InputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MaterialModule],
      declarations: [ InputNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
