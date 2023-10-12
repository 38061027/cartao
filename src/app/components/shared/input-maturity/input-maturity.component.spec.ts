import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMaturityComponent } from './input-maturity.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('InputMaturityComponent', () => {
  let component: InputMaturityComponent;
  let fixture: ComponentFixture<InputMaturityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MaterialModule],
      declarations: [ InputMaturityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMaturityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
