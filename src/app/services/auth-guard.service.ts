import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  
  canActivate(route, state: RouterStateSnapshot) {
    let auth = localStorage.getItem("auth")
    if(auth){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
    
  }

}
