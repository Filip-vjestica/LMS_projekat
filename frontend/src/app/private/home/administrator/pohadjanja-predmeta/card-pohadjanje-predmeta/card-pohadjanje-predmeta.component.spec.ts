import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPohadjanjePredmetaComponent } from './card-pohadjanje-predmeta.component';

describe('CardPohadjanjePredmetaComponent', () => {
  let component: CardPohadjanjePredmetaComponent;
  let fixture: ComponentFixture<CardPohadjanjePredmetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPohadjanjePredmetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPohadjanjePredmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
