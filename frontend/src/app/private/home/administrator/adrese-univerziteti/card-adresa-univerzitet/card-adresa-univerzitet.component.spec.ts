import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdresaUniverzitetComponent } from './card-adresa-univerzitet.component';

describe('CardAdresaUniverzitetComponent', () => {
  let component: CardAdresaUniverzitetComponent;
  let fixture: ComponentFixture<CardAdresaUniverzitetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAdresaUniverzitetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdresaUniverzitetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
