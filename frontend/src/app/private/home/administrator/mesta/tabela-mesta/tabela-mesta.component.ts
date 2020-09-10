import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MestoInfo } from 'src/app/model/mesto/mesto';
import { MestoService } from 'src/app/service/mesto/mesto.service';

@Component({
  selector: 'app-tabela-mesta',
  templateUrl: './tabela-mesta.component.html',
  styleUrls: ['./tabela-mesta.component.css']
})
export class TabelaMestaComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  mesta: MestoInfo[];
  dataSource = new MatTableDataSource<MestoInfo>(this.mesta);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['id', 'naziv',"action"];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private ms: MestoService) {}
  ngOnInit() {
    this.getAll();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAll(){
    let res = this.ms.getAll();
    res.subscribe(report => this.dataSource.data = report as MestoInfo[]);
  }

  deleteMesto(id) {
    this.ms.deleteOne(id).subscribe(() => this.getAll());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

