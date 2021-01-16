import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {FirebaseService} from '../services/firebase.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public db:AngularFireDatabase,public fs : FirebaseService) { }

  siparisUrun:any;
  urunler:any
  ngOnInit(): void {
    this.siparisUrun = this.db.list('siparis').valueChanges()
    this.urunler = this.db.list('urunler').valueChanges()
    this.fs.islogin()
  }
  async onSingup(email:string,password:string){
    this.fs.signup(email,password);
  }
}
