import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaTipoviZvanjaDataSource, TabelaTipoviZvanjaItem } from './tabela-tipovi-zvanja-datasource';

@Component({
  selector: 'app-tabela-tipovi-zvanja',
  templateUrl: './tabela-tipovi-zvanja.component.html',
  styleUrls: ['./tabela-tipovi-zvanja.component.css']
})
export class TabelaTipoviZvanjaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaTipoviZvanjaItem>;
  dataSource: TabelaTipoviZvanjaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaTipoviZvanjaDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
