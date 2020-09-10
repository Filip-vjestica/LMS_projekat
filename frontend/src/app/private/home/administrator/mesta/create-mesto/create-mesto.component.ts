import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MestoService } from 'src/app/service/mesto/mesto.service';
import { Mesto } from 'src/app/model/mesto/mesto';
import { DrzavaInfo } from 'src/app/model/drzava/drzava';
import { DrzavaService } from 'src/app/service/drzava/drzava.service';

@Component({
  selector: 'app-create-mesto',
  templateUrl: './create-mesto.component.html',
  styleUrls: ['./create-mesto.component.css']
})
export class CreateMestoComponent {
  mesto: Mesto = { id: 0, naziv: "", drzava: null, adrese: null};
  drzave: DrzavaInfo[];
  mestoForm = this.fb.group({
    id: 0,
    naziv: [null, Validators.required],
    drzava: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private ms: MestoService, private ds: DrzavaService) {
  }

  ngOnInit(): void {
    this.getDrzave();
  }

  addMesto(){
    this.ms.addOne(this.mesto).subscribe();
  }

  getDrzave(){
    this.ds.getAll().subscribe(drzave => this.drzave = drzave);
  }

  onSubmit() {
    if( this.mestoForm.controls['naziv'].valid == true && this.mestoForm.controls['drzava'].valid == true) {
      this.mesto.naziv = this.mestoForm.controls['naziv'].value;
      this.mesto.drzava = this.mestoForm.controls['drzava'].value;
      this.addMesto();
    }
  }
}
