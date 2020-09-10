import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDrzavaComponent } from './card-drzava.component';

describe('CardDrzavaComponent', () => {
  let component: CardDrzavaComponent;
  let fixture: ComponentFixture<CardDrzavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDrzavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDrzavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
