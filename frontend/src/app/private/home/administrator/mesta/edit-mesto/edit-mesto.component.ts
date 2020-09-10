import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Mesto } from 'src/app/model/mesto/mesto';
import { MestoService } from 'src/app/service/mesto/mesto.service';
import { DrzavaInfo } from 'src/app/model/drzava/drzava';
import { DrzavaService } from 'src/app/service/drzava/drzava.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-mesto',
  templateUrl: './edit-mesto.component.html',
  styleUrls: ['./edit-mesto.component.css']
})
export class EditMestoComponent {
  @Input()
  mesto: Mesto;
  drzave: DrzavaInfo[];
  mestoForm = this.fb.group({
    id: 0,
    naziv: null,
    drzava: null
  });

  constructor(private fb: FormBuilder, private ds: DrzavaService, private ms: MestoService, private activatedRoute: ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.getDrzave();
  }
  
  getDrzave(){
    this.ds.getAll().subscribe(drzave => this.drzave = drzave);
  }

  editMesto(){
    this.ds.updateOne(this.activatedRoute.snapshot.params["id"], this.mesto).subscribe();
  }

  onSubmit() {
    if(this.mestoForm.controls['naziv'].value != this.mesto.naziv && this.mestoForm.controls['naziv'].value != null &&
     this.mestoForm.controls['drzava'].value != this.mesto.naziv && this.mestoForm.controls['drzava'].value != null){
      this.mesto.naziv = this.mestoForm.controls['naziv'].value;
      this.mesto.drzava = this.mestoForm.controls['drzava'].value;
    }
    this.editMesto();
  }
}