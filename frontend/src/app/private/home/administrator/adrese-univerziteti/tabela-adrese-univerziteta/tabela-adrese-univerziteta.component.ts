import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaAdreseUniverzitetaDataSource, TabelaAdreseUniverzitetaItem } from './tabela-adrese-univerziteta-datasource';

@Component({
  selector: 'app-tabela-adrese-univerziteta',
  templateUrl: './tabela-adrese-univerziteta.component.html',
  styleUrls: ['./tabela-adrese-univerziteta.component.css']
})
export class TabelaAdreseUniverzitetaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaAdreseUniverzitetaItem>;
  dataSource: TabelaAdreseUniverzitetaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaAdreseUniverzitetaDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
