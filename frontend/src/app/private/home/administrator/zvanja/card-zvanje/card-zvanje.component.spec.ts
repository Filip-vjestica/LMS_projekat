import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardZvanjeComponent } from './card-zvanje.component';

describe('CardZvanjeComponent', () => {
  let component: CardZvanjeComponent;
  let fixture: ComponentFixture<CardZvanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardZvanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardZvanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
