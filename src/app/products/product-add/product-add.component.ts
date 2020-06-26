import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ProductService, private router: Router) { }

  ngOnInit(): void {

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
    this.service.addProduct(form.value)
    .subscribe((data)=> {
      console.log("[PRODUCT ADD]", data)
      this.router.navigate(['products']);
    })

  }

}
