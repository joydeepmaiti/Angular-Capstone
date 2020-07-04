import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  search = null
  products = []
  filteredProducts = []

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.service.getProducts()
    .subscribe((data:[])=> {
      // console.log("[PRODUCTS]", data)
      this.products = data;
      this.filteredProducts = data;
    })
  }

  onSearch() {
    this.filteredProducts = []
    this.products.map((el)=>{
      if(el.name.toLowerCase().includes(this.search.toLowerCase())){
        this.filteredProducts.push(el);
      }
    })
  }

  // edit(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  // }

}
