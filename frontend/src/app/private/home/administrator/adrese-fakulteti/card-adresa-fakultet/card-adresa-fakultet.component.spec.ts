import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdresaFakultetComponent } from './card-adresa-fakultet.component';

describe('CardAdresaFakultetComponent', () => {
  let component: CardAdresaFakultetComponent;
  let fixture: ComponentFixture<CardAdresaFakultetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAdresaFakultetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdresaFakultetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
