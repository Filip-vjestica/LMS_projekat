import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaAdreseFakultetiDataSource, TabelaAdreseFakultetiItem } from './tabela-adrese-fakulteti-datasource';

@Component({
  selector: 'app-tabela-adrese-fakulteti',
  templateUrl: './tabela-adrese-fakulteti.component.html',
  styleUrls: ['./tabela-adrese-fakulteti.component.css']
})
export class TabelaAdreseFakultetiComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaAdreseFakultetiItem>;
  dataSource: TabelaAdreseFakultetiDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaAdreseFakultetiDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
