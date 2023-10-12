import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNameComponent } from './input-name.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('InputNameComponent', () => {
  let component: InputNameComponent;
  let fixture: ComponentFixture<InputNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MaterialModule],
      declarations: [ InputNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
