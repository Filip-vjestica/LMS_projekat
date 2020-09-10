import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UniverzitetService } from 'src/app/service/univerzitet/univerzitet.service';
import { UniverzitetInfo } from 'src/app/model/univerzitet/univerzitet';

@Component({
  selector: 'app-tabela-univerziteti',
  templateUrl: './tabela-univerziteti.component.html',
  styleUrls: ['./tabela-univerziteti.component.css']
})
export class TabelaUniverzitetiComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  univerziteti: UniverzitetInfo[];
  dataSource = new MatTableDataSource<UniverzitetInfo>(this.univerziteti);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['id', 'naziv', "rektor","action"];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private us: UniverzitetService) {}
  ngOnInit() {
    this.getAll();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAll(){
    let res = this.us.getAll();
    res.subscribe(report => this.dataSource.data = report as UniverzitetInfo[]);
  }

  deleteUniverzitet(id) {
    this.us.deleteOne(id).subscribe(() => this.getAll());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}