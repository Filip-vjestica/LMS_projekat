import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRealizacijaPredmetaComponent } from './card-realizacija-predmeta.component';

describe('CardRealizacijaPredmetaComponent', () => {
  let component: CardRealizacijaPredmetaComponent;
  let fixture: ComponentFixture<CardRealizacijaPredmetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRealizacijaPredmetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRealizacijaPredmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
