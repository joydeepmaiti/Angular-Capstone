import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuthGuard } from '../services/auth-guard.service';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    HttpClientTestingModule
  ],
  providers: [
    AuthGuard,
    HttpClientModule
  ],
})
export class ProductsModule { }
