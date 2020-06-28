import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.get("http://localhost:3000/users?email="+user.email+"&password="+user.password)
    .subscribe((data:Array<Object>)=> {
      console.log("[LOGIN]", data)
      if(data.length > 0) {
        this.user.next(data[0]);
        localStorage.setItem("auth",JSON.stringify(data[0]))
        return true;
      }else {
        return false
      }
    });
  }

  register(user) {
    return this.http.post("http://localhost:3000/users",user);
  }

  logout() {
    this.user.next(null);
    localStorage.clear();
  }

}
