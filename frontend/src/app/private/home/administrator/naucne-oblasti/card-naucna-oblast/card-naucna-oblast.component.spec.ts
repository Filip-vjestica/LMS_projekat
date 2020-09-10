import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNaucnaOblastComponent } from './card-naucna-oblast.component';

describe('CardNaucnaOblastComponent', () => {
  let component: CardNaucnaOblastComponent;
  let fixture: ComponentFixture<CardNaucnaOblastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNaucnaOblastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNaucnaOblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
