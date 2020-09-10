import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaNaucneOblastiDataSource, TabelaNaucneOblastiItem } from './tabela-naucne-oblasti-datasource';

@Component({
  selector: 'app-tabela-naucne-oblasti',
  templateUrl: './tabela-naucne-oblasti.component.html',
  styleUrls: ['./tabela-naucne-oblasti.component.css']
})
export class TabelaNaucneOblastiComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaNaucneOblastiItem>;
  dataSource: TabelaNaucneOblastiDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaNaucneOblastiDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
