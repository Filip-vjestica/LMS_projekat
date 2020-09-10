import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdreseFakultetiComponent } from './adrese-fakulteti.component';

describe('AdreseFakultetiComponent', () => {
  let component: AdreseFakultetiComponent;
  let fixture: ComponentFixture<AdreseFakultetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdreseFakultetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdreseFakultetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
