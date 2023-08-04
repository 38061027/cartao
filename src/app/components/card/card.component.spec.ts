import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { By } from '@angular/platform-browser';


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ CardComponent ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve está desabilitado o botão quando o formulário for inválido',()=>{

    const button = fixture.debugElement

    expect(button.nativeElement.querySelector('.submit-btn').disabled).toBeTrue()

  })

  it('Deve virar o elemento corretamente', () => {

    component.virar();


    const card = fixture.debugElement.query(By.css('#card')).nativeElement;
    const transformValue = card.style.transform;
    expect(transformValue).toBe('rotateY(180deg)');
  });

  it('Deve desfocar o elemento corretamente', () => {

    component.desfoque();


    const card = fixture.debugElement.query(By.css('#card')).nativeElement;
    const transformValue = card.style.transform;
    expect(transformValue).toBe('rotateY(0deg)');
  });



});
