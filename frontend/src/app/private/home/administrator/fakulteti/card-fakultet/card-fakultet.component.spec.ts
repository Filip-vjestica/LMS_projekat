import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFakultetComponent } from './card-fakultet.component';

describe('CardFakultetComponent', () => {
  let component: CardFakultetComponent;
  let fixture: ComponentFixture<CardFakultetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFakultetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFakultetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
