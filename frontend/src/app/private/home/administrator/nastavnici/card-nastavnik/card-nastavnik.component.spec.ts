import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNastavnikComponent } from './card-nastavnik.component';

describe('CardNastavnikComponent', () => {
  let component: CardNastavnikComponent;
  let fixture: ComponentFixture<CardNastavnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNastavnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
