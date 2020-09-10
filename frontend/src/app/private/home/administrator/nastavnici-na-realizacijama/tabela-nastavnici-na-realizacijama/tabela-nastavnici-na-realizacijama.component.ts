import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaNastavniciNaRealizacijamaDataSource, TabelaNastavniciNaRealizacijamaItem } from './tabela-nastavnici-na-realizacijama-datasource';

@Component({
  selector: 'app-tabela-nastavnici-na-realizacijama',
  templateUrl: './tabela-nastavnici-na-realizacijama.component.html',
  styleUrls: ['./tabela-nastavnici-na-realizacijama.component.css']
})
export class TabelaNastavniciNaRealizacijamaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TabelaNastavniciNaRealizacijamaItem>;
  dataSource: TabelaNastavniciNaRealizacijamaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaNastavniciNaRealizacijamaDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
