import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNastavnikNaRealizacijiComponent } from './card-nastavnik-na-realizaciji.component';

describe('CardNastavnikNaRealizacijiComponent', () => {
  let component: CardNastavnikNaRealizacijiComponent;
  let fixture: ComponentFixture<CardNastavnikNaRealizacijiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNastavnikNaRealizacijiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNastavnikNaRealizacijiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
