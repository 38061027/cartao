import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMaturityComponent } from './input-maturity.component';

describe('InputMaturityComponent', () => {
  let component: InputMaturityComponent;
  let fixture: ComponentFixture<InputMaturityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
