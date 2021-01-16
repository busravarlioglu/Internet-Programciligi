import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import {AngularFireDatabase} from '@angular/fire/database'
 
@Component({
  selector: 'app-satinal',
  templateUrl: './satinal.component.html',
  styleUrls: ['./satinal.component.css']
})
export class SatinalComponent implements OnInit {

  constructor(public route:ActivatedRoute,public db : AngularFireDatabase,public router:Router) { }
  urunId:any
  urunler:any
  ngOnInit(): void {
    this.urunId = this.route.snapshot.paramMap.get('urun')
    this.urunler = this.db.list('urunler').valueChanges()
    console.log(this.urunId)
  }
  key:any;
  onSubmit(email:string,cepTel:string,nameSurname:string,city:string,Ilce:string,adres:string,postaCode:string,teslimTel:string,urunId:string){
    this.db.list('siparis').push({
      Id:"",
      email:email,
      cepTel:cepTel,
      nameSurname:nameSurname,
      city:city,
      Ilce:Ilce,
      adres:adres,
      postaCode:postaCode,
      teslimTel:teslimTel,
      urunId:urunId
    }).orderByKey().on('child_added',(writeHeapSnapshot)=>{
      this.key = writeHeapSnapshot.ref.parent?.key;
      this.db.object("siparis/"+this.key).update({
        Id:this.key
      })
     })
this.router.navigate(['/'])
  }
}
