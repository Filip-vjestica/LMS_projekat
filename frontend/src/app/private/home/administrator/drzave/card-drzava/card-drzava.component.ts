import { Component, OnInit } from '@angular/core';
import { Drzava } from 'src/app/model/drzava/drzava';
import { DrzavaService } from 'src/app/service/drzava/drzava.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-drzava',
  templateUrl: './card-drzava.component.html',
  styleUrls: ['./card-drzava.component.css']
})
export class CardDrzavaComponent implements OnInit {
  drzava: Drzava;
  constructor(private ds: DrzavaService,private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.ds.getOne(this.activatedRoute.snapshot.params["id"]).subscribe(drzava => this.drzava = drzava);
  }

}
