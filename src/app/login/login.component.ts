import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  constructor(private service: LoginService) { }

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
      this.service.login(form.value)
      .subscribe((data:Object)=> {
        console.log("[LOGIN]", data)
      });
    }else if(!this.isLoginMode){
      this.service.register(form.value)
      .subscribe((data:Object)=> {
        console.log("[REGISTER]", data)
      });
    }
  }

}
