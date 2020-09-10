import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdreseUniverzitetiComponent } from './adrese-univerziteti.component';

describe('AdreseUniverzitetiComponent', () => {
  let component: AdreseUniverzitetiComponent;
  let fixture: ComponentFixture<AdreseUniverzitetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdreseUniverzitetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdreseUniverzitetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
