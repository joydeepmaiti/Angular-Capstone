import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  appUser = null;
  constructor() { }

  ngOnInit(): void {
    let auth = localStorage.getItem("auth")
    if(auth){
      this.appUser = JSON.parse(auth);
    }
  }

}
