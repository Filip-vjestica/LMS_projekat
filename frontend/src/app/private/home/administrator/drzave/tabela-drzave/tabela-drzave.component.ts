import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DrzavaInfo } from 'src/app/model/drzava/drzava';
import { DrzavaService } from 'src/app/service/drzava/drzava.service';

@Component({
  selector: 'app-tabela-drzave',
  templateUrl: './tabela-drzave.component.html',
  styleUrls: ['./tabela-drzave.component.css']
})
export class TabelaDrzaveComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  drzave: DrzavaInfo[];
  dataSource = new MatTableDataSource<DrzavaInfo>(this.drzave);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['id','naziv',"action"];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private ds: DrzavaService) {}
  ngOnInit() {
    this.getAll();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAll(){
    let res = this.ds.getAll();
    res.subscribe(report => this.dataSource.data = report as DrzavaInfo[]);
  }

  deleteDrzava(id) {
    this.ds.deleteOne(id).subscribe(() => this.getAll());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

