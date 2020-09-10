import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaGodineStudijaDataSource, TabelaGodineStudijaItem } from './tabela-godine-studija-datasource';

@Component({
  selector: 'app-tabela-godine-studija',
  templateUrl: './tabela-godine-studija.component.html',
  styleUrls: ['./tabela-godine-studija.component.css']
})
export class TabelaGodineStudijaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaGodineStudijaItem>;
  dataSource: TabelaGodineStudijaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaGodineStudijaDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
