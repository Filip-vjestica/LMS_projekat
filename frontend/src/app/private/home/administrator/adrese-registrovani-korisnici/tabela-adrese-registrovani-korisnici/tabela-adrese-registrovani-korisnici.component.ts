import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaAdreseRegistrovaniKorisniciDataSource, TabelaAdreseRegistrovaniKorisniciItem } from './tabela-adrese-registrovani-korisnici-datasource';

@Component({
  selector: 'app-tabela-adrese-registrovani-korisnici',
  templateUrl: './tabela-adrese-registrovani-korisnici.component.html',
  styleUrls: ['./tabela-adrese-registrovani-korisnici.component.css']
})
export class TabelaAdreseRegistrovaniKorisniciComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaAdreseRegistrovaniKorisniciItem>;
  dataSource: TabelaAdreseRegistrovaniKorisniciDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaAdreseRegistrovaniKorisniciDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
