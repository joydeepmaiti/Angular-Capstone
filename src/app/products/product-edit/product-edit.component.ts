import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product;
  id: number;

  constructor(private route: ActivatedRoute, private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.service.getProductdetails(this.id)
          .subscribe((data)=> {
            console.log("[PRODUCT]", data[0])
            this.product = data[0]
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    console.log("[FORM]", form)
    if (!form.valid) {
      return;
    }
    if (!form.dirty) {
      this.router.navigate(['products']);
      return;
    }
    this.service.updateProduct(this.id,form.value)
    .subscribe((data)=> {
      console.log("[PRODUCT UPDATE]", data)
      this.router.navigate(['products']);
    })

  }

}
