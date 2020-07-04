import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  id: number;

  constructor(public route: ActivatedRoute, private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.service.getProductdetails(this.id)
          .subscribe((data)=> {
            console.log("[PRODUCT]", data[0])
            if(data[0]){
              this.product = data[0]
              let p = data[0];
              p.count =p.count + 1;
              this.service.updateProduct(this.id,p)
              .subscribe((data)=> {
                console.log("[PRODUCT COUNT]", data)
              })
            }
          })
        }
      );
  }

  edit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  delete() {
    if(confirm("DELETE ?")){
      console.log("DELETE");
      this.service.deleteProduct(this.id)
        .subscribe((data)=> {
          console.log("[PRODUCT DELETE]", data)
          this.router.navigate(['products']);
        })
    }
    
  }

}
