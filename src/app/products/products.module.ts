import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
})
export class ProductsModule { }
