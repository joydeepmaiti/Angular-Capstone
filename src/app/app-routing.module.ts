import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthGuard } from './services/auth-guard.service';



const routes: Routes = [
  {path:"", component: AboutComponent },
  {path:"profile", component: MyProfileComponent, canActivate:[AuthGuard] },
  {path:"login", component: LoginComponent },
  {path:"products", loadChildren:() => import("./products/products.module").then(m => m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
