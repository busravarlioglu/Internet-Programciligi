import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from "@angular/router";
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {

  constructor(public route:ActivatedRoute,public db : AngularFireDatabase,public router:Router) { }
  public kategori:any;
  public urunler:any;

  ngOnInit(): void {
   this.kategori = this.route.snapshot.paramMap.get('kategori')
    this.db.list('urunler').valueChanges()
    

    this.urunler = this.db.list('urunler').valueChanges()
  }
  onSelect(urunId:string){
    this.router.navigate(['/detay',urunId])
    }

}
