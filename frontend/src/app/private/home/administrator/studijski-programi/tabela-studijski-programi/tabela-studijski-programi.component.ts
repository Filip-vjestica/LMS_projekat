import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaStudijskiProgramiDataSource, TabelaStudijskiProgramiItem } from './tabela-studijski-programi-datasource';

@Component({
  selector: 'app-tabela-studijski-programi',
  templateUrl: './tabela-studijski-programi.component.html',
  styleUrls: ['./tabela-studijski-programi.component.css']
})
export class TabelaStudijskiProgramiComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaStudijskiProgramiItem>;
  dataSource: TabelaStudijskiProgramiDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaStudijskiProgramiDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
