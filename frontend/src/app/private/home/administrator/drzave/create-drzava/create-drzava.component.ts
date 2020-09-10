import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DrzavaInfo } from 'src/app/model/drzava/drzava';
import { DrzavaService } from 'src/app/service/drzava/drzava.service';

@Component({
  selector: 'app-create-drzava',
  templateUrl: './create-drzava.component.html',
  styleUrls: ['./create-drzava.component.css']
})
export class CreateDrzavaComponent {
  drzava: DrzavaInfo = { id: 0, naziv: ""};
  drzavaForm = this.fb.group({
    id: 0,
    naziv: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private ds: DrzavaService) {}

  addDrzava(){
    this.ds.addOne(this.drzava).subscribe();
  }

  onSubmit() {
    if( this.drzavaForm.controls['naziv'].valid == true) {
      this.drzava.naziv = this.drzavaForm.controls['naziv'].value;
      this.addDrzava();
    }
  }
}