import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdresaComponent } from './card-adresa.component';

describe('CardAdresaComponent', () => {
  let component: CardAdresaComponent;
  let fixture: ComponentFixture<CardAdresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAdresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
