import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../services/firebase.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-kategoriler',
  templateUrl: './kategoriler.component.html',
  styleUrls: ['./kategoriler.component.css']
})
export class KategorilerComponent implements OnInit {

  constructor(public db: AngularFireDatabase,public router: Router,public FirebaseService: FirebaseService) { }
  kategoriler:any
  ngOnInit(): void {
    this.kategoriler = this.db.list('kategoriler').valueChanges()
  }
  onSelect(kategoriId:string){
    this.router.navigate(['/kategoriler',kategoriId])
    }
    onDelete(deleteItem:string){
      this.db.list('kategoriler/'+deleteItem).remove()
      }
}
