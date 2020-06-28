import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuthGuard } from '../services/auth-guard.service';


const routes: Routes = [
  {path:"", component: ProductsComponent },
  {path:"add", component: ProductAddComponent, canActivate:[AuthGuard] },
  {path:":id", component: ProductDetailsComponent, canActivate:[AuthGuard] },
  {path:":id/edit", component: ProductEditComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
