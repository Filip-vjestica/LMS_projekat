import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaFakultetiDataSource, TabelaFakultetiItem } from './tabela-fakulteti-datasource';

@Component({
  selector: 'app-tabela-fakulteti',
  templateUrl: './tabela-fakulteti.component.html',
  styleUrls: ['./tabela-fakulteti.component.css']
})
export class TabelaFakultetiComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaFakultetiItem>;
  dataSource: TabelaFakultetiDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaFakultetiDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
