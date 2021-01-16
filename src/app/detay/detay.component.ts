import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from "@angular/router";
import { AngularFireDatabase } from '@angular/fire/database';
import { from } from 'rxjs';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css']
})
export class DetayComponent implements OnInit {

  constructor(public route:ActivatedRoute,public db : AngularFireDatabase,public router:Router) { }
  urunId:any
  urunler:any
  ngOnInit(): void {
    this.urunId = this.route.snapshot.paramMap.get('detay')
    this.urunler =this.db.list('urunler').valueChanges()
  }
  onSelect(urunId:string){
    this.router.navigate(['/satinal',urunId])
  }

}
