import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 
 
  
  
  constructor(public FirebaseService : FirebaseService, public router: Router) { }
   
  
   kategoriler:any
   ngOnInit(){
     this.FirebaseService.islogin()
   
   }

}
