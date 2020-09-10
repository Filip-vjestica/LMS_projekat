import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPredmetComponent } from './card-predmet.component';

describe('CardPredmetComponent', () => {
  let component: CardPredmetComponent;
  let fixture: ComponentFixture<CardPredmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPredmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
