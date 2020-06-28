import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:3000/products");
  }

  getProductdetails(id){
    return this.http.get("http://localhost:3000/products?id="+id);
  }

  addProduct(data){
    data.count = 0;
    return this.http.post("http://localhost:3000/products", data);
  }

  updateProduct(id, data){
    return this.http.patch("http://localhost:3000/products/"+id, data);
  }

  deleteProduct(id){
    return this.http.delete("http://localhost:3000/products/"+id);
  }



}
