import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaNastavniciDataSource, TabelaNastavniciItem } from './tabela-nastavnici-datasource';

@Component({
  selector: 'app-tabela-nastavnici',
  templateUrl: './tabela-nastavnici.component.html',
  styleUrls: ['./tabela-nastavnici.component.css']
})
export class TabelaNastavniciComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaNastavniciItem>;
  dataSource: TabelaNastavniciDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaNastavniciDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
