import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIshodComponent } from './card-ishod.component';

describe('CardIshodComponent', () => {
  let component: CardIshodComponent;
  let fixture: ComponentFixture<CardIshodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIshodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIshodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
