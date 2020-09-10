import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TabelaNastavniciNaRealizacijamaComponent } from './tabela-nastavnici-na-realizacijama.component';

describe('TabelaNastavniciNaRealizacijamaComponent', () => {
  let component: TabelaNastavniciNaRealizacijamaComponent;
  let fixture: ComponentFixture<TabelaNastavniciNaRealizacijamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaNastavniciNaRealizacijamaComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaNastavniciNaRealizacijamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
