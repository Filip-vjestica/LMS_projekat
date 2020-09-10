import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMestoComponent } from './card-mesto.component';

describe('CardMestoComponent', () => {
  let component: CardMestoComponent;
  let fixture: ComponentFixture<CardMestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
