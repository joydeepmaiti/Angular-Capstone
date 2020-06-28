import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  isLoggedIn = false;
  loginError = false;

  constructor(private service: LoginService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    console.log("[FORM]", form)
    if (!form.valid) {
      return;
    }else if(this.isLoginMode){
      if(this.service.login(form.value)){
        this.isLoggedIn = true;
        this.loginError = false;
        this.router.navigate(['']);
      }else {
        this.isLoggedIn = false;
        this.loginError = true;
      }
      
    }else if(!this.isLoginMode){
      this.service.register(form.value)
      .subscribe((data:Object)=> {
        console.log("[REGISTER]", data)
      });
    }
  }

}
