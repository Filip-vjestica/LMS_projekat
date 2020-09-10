import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaPredmetiDataSource, TabelaPredmetiItem } from './tabela-predmeti-datasource';

@Component({
  selector: 'app-tabela-predmeti',
  templateUrl: './tabela-predmeti.component.html',
  styleUrls: ['./tabela-predmeti.component.css']
})
export class TabelaPredmetiComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaPredmetiItem>;
  dataSource: TabelaPredmetiDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaPredmetiDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
