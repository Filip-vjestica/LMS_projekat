import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiverzitetiComponent } from './uiverziteti.component';

describe('UiverzitetiComponent', () => {
  let component: UiverzitetiComponent;
  let fixture: ComponentFixture<UiverzitetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiverzitetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiverzitetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
