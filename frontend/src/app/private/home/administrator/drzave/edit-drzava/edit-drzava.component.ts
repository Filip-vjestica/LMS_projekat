import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DrzavaService } from 'src/app/service/drzava/drzava.service';
import { DrzavaInfo } from 'src/app/model/drzava/drzava';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-drzava',
  templateUrl: './edit-drzava.component.html',
  styleUrls: ['./edit-drzava.component.css']
})
export class EditDrzavaComponent {
  @Input()
  drzava: DrzavaInfo;
  drzavaForm = this.fb.group({
    id: 0,
    naziv: null,
  });

  constructor(private fb: FormBuilder, private ds: DrzavaService, private activatedRoute: ActivatedRoute, private router : Router) {}

  editDrzava(){
    this.ds.updateOne(this.activatedRoute.snapshot.params["id"], this.drzava).subscribe();
  }

  onSubmit() {
    if(this.drzavaForm.controls['naziv'].value != this.drzava.naziv && this.drzavaForm.controls['naziv'].value != null){
      this.drzava.naziv = this.drzavaForm.controls['naziv'].value;
    }
    this.editDrzava();
  }
}