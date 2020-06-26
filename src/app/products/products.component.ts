import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = []
  filteredProducts = []

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.service.getProducts()
    .subscribe((data:[])=> {
      console.log("[PRODUCTS]", data)
      this.products = data;
      this.filteredProducts = data;
    })
  }

  // edit(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  // }

}
