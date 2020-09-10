import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaRealizacijePredmetaDataSource, TabelaRealizacijePredmetaItem } from './tabela-realizacije-predmeta-datasource';

@Component({
  selector: 'app-tabela-realizacije-predmeta',
  templateUrl: './tabela-realizacije-predmeta.component.html',
  styleUrls: ['./tabela-realizacije-predmeta.component.css']
})
export class TabelaRealizacijePredmetaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaRealizacijePredmetaItem>;
  dataSource: TabelaRealizacijePredmetaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaRealizacijePredmetaDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
