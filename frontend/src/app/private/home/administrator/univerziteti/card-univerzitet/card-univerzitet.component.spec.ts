import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUniverzitetComponent } from './card-univerzitet.component';

describe('CardUniverzitetComponent', () => {
  let component: CardUniverzitetComponent;
  let fixture: ComponentFixture<CardUniverzitetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUniverzitetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUniverzitetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
