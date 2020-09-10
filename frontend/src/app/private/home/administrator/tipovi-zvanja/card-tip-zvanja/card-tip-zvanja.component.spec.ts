import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTipZvanjaComponent } from './card-tip-zvanja.component';

describe('CardTipZvanjaComponent', () => {
  let component: CardTipZvanjaComponent;
  let fixture: ComponentFixture<CardTipZvanjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTipZvanjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTipZvanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
