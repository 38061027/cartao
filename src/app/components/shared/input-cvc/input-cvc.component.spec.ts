import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCvcComponent } from './input-cvc.component';

describe('InputCvcComponent', () => {
  let component: InputCvcComponent;
  let fixture: ComponentFixture<InputCvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCvcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
