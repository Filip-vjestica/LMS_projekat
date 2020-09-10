import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGodinaStudijaComponent } from './card-godina-studija.component';

describe('CardGodinaStudijaComponent', () => {
  let component: CardGodinaStudijaComponent;
  let fixture: ComponentFixture<CardGodinaStudijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGodinaStudijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGodinaStudijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
