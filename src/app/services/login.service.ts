import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.get("http://localhost:3000/users?email="+user.email+"&password="+user.password);
  }

  register(user) {
    return this.http.post("http://localhost:3000/users",user);
  }

}
