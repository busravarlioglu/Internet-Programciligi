import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {Router} from '@angular/router'
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(public firebaseService:FirebaseService,public router: Router){}
  isSignedIn = false;
  ngOnInit(){
    if(localStorage.getItem('user') !== null){
      this.isSignedIn = true;
    }
    else{
      this.isSignedIn = false;
    }
  }
 
  async onSingin(email:string,password:string){
    this.firebaseService.signin(email,password);
    if(this.firebaseService.isLoggenIn){
      this.isSignedIn = true;
    }
    this.router.navigate(["/"])

  }
}



