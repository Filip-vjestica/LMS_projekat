import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegistrovaniKorisnikComponent } from './card-registrovani-korisnik.component';

describe('CardRegistrovaniKorisnikComponent', () => {
  let component: CardRegistrovaniKorisnikComponent;
  let fixture: ComponentFixture<CardRegistrovaniKorisnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRegistrovaniKorisnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRegistrovaniKorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
