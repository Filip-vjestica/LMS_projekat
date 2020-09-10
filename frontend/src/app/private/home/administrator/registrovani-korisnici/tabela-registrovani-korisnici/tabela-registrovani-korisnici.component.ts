import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaRegistrovaniKorisniciDataSource, TabelaRegistrovaniKorisniciItem } from './tabela-registrovani-korisnici-datasource';

@Component({
  selector: 'app-tabela-registrovani-korisnici',
  templateUrl: './tabela-registrovani-korisnici.component.html',
  styleUrls: ['./tabela-registrovani-korisnici.component.css']
})
export class TabelaRegistrovaniKorisniciComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaRegistrovaniKorisniciItem>;
  dataSource: TabelaRegistrovaniKorisniciDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaRegistrovaniKorisniciDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
