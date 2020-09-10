import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdresaRegistrovaniKorisnikComponent } from './card-adresa-registrovani-korisnik.component';

describe('CardAdresaRegistrovaniKorisnikComponent', () => {
  let component: CardAdresaRegistrovaniKorisnikComponent;
  let fixture: ComponentFixture<CardAdresaRegistrovaniKorisnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAdresaRegistrovaniKorisnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdresaRegistrovaniKorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
