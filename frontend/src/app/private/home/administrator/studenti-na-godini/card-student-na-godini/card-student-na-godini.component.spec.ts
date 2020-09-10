import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStudentNaGodiniComponent } from './card-student-na-godini.component';

describe('CardStudentNaGodiniComponent', () => {
  let component: CardStudentNaGodiniComponent;
  let fixture: ComponentFixture<CardStudentNaGodiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStudentNaGodiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStudentNaGodiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
