import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavniciNaRealizacijamaComponent } from './nastavnici-na-realizacijama.component';

describe('NastavniciNaRealizacijamaComponent', () => {
  let component: NastavniciNaRealizacijamaComponent;
  let fixture: ComponentFixture<NastavniciNaRealizacijamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavniciNaRealizacijamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavniciNaRealizacijamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
