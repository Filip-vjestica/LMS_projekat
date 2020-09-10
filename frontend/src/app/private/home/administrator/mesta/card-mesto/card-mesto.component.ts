import { Component, OnInit } from '@angular/core';
import { Mesto } from 'src/app/model/mesto/mesto';
import { MestoService } from 'src/app/service/mesto/mesto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-mesto',
  templateUrl: './card-mesto.component.html',
  styleUrls: ['./card-mesto.component.css']
})
export class CardMestoComponent implements OnInit {
  mesto: Mesto;
  constructor(private ms: MestoService,private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.ms.getOne(this.activatedRoute.snapshot.params["id"]).subscribe(mesto => this.mesto = mesto);
  }


}
