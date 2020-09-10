import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TabelaAdreseRegistrovaniKorisniciComponent } from './tabela-adrese-registrovani-korisnici.component';

describe('TabelaAdreseRegistrovaniKorisniciComponent', () => {
  let component: TabelaAdreseRegistrovaniKorisniciComponent;
  let fixture: ComponentFixture<TabelaAdreseRegistrovaniKorisniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaAdreseRegistrovaniKorisniciComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaAdreseRegistrovaniKorisniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
