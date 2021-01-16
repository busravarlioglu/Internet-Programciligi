import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageModule, AngularFireUploadTask } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  kategoriler:Observable<any[]>
  path:any
  constructor(public db:AngularFireDatabase,public FirebaseService : FirebaseService,private af:AngularFireStorage,public router:Router) { 
    this.kategoriler = db.list('kategoriler').valueChanges();
   }

  
  isSignedIn = false
  fileName:any
  url:any
  key:any
  urunler:any
  public onSubmitImg(){
   this.fileName = Math.random()+this.path.name;
   this.af.upload("files/"+this.fileName,this.path)
  }
  onSubmit(name:string,token:string){ 
    this.db.list('kategoriler').push({ 
     Id:"",
   name:name,
 imgUrl:token
 }).orderByKey().on('child_added',(writeHeapSnapshot)=>{
  this.key = writeHeapSnapshot.ref.parent?.key;
  this.db.object("kategoriler/"+this.key).update({
    Id:this.key
  })
 })
 
 }
  
  ngOnInit(): void {
    this.FirebaseService.islogin()
  this.urunler =  this.db.list('urunler').valueChanges()
  }
  upload($event:any){
    this.path = $event.target.files[0] 
  }


onDelete(deleteItem:string){
this.db.list('kategoriler/'+deleteItem).remove()


}
onSelect(kategoriName:string){
this.router.navigate(['/kategoriler',kategoriName])
}
onSelectUrun(urun:string){
  this.router.navigate(['/detay',urun])
}

}
