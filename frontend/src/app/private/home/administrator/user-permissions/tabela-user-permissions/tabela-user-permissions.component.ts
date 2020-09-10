import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaUserPermissionsDataSource, TabelaUserPermissionsItem } from './tabela-user-permissions-datasource';

@Component({
  selector: 'app-tabela-user-permissions',
  templateUrl: './tabela-user-permissions.component.html',
  styleUrls: ['./tabela-user-permissions.component.css']
})
export class TabelaUserPermissionsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaUserPermissionsItem>;
  dataSource: TabelaUserPermissionsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaUserPermissionsDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
