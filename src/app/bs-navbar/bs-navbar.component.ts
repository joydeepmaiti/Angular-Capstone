import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit, OnDestroy {
  appUser = null;
  isUser:Subscription;
  isloggedin= false;
  show = false
  // cart$: Observable<ShoppingCart>;

  constructor(private loginService: LoginService,private router: Router) { 
  }
  // constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) { 
  // }

  async ngOnInit() { 
    this.isUser = this.loginService.user.subscribe(user=>{
      this.isloggedin = !!user;
      this.appUser = user;
    });
    let auth = localStorage.getItem("auth")
    if(auth){
      this.isloggedin = true;
      this.appUser = JSON.parse(auth);
    }
    // this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    // this.cart$ = await this.shoppingCartService.getCart();
  }

  myProfile(){
    this.showDiv();
    this.router.navigate(['/profile']);
  }

  logout() {
    this.loginService.logout();
    this.showDiv();
  }

  ngOnDestroy() {
    this.appUser.unsubscribe();
  }

  showDiv() {
    this.show = !this.show
  }

}
