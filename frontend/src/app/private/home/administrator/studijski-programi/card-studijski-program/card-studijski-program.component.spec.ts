import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStudijskiProgramComponent } from './card-studijski-program.component';

describe('CardStudijskiProgramComponent', () => {
  let component: CardStudijskiProgramComponent;
  let fixture: ComponentFixture<CardStudijskiProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStudijskiProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStudijskiProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
