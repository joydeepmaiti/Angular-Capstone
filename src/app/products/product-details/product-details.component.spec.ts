import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { Product } from 'src/app/models/products.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
// import 'rxjs/add/observable/of';

class MockActivatedRote extends ActivatedRoute {
  constructor() {
      super();
      this.params = of({id: "5"});
  }
}
class Mockrouter {

}
class MockEmployeesService {
  employees: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([
    {
      name: "Laptop",
      desc: "Dell laptop",
      manufacturer: "Dell",
      price: 35000,
      quantity: 4,
      id: 1,
      count: 54
    },
    {
      name: "Mobile",
      desc: "Nokia Mobile",
      manufacturer: "Nokia",
      price: 6000,
      quantity: 3,
      id: 2,
      count: 30
    },
    {
      name: "Shirt",
      desc: "Full sleeve shirt",
      manufacturer: "Highlander",
      price: 700,
      quantity: 10,
      id: 3,
      count: 20
    }]);

    getProductdetails(id) {
      return new Observable();
    }
};

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports:      [ FormsModule ],
      providers:    [ 
        {provide: ProductService, useClass: MockEmployeesService } ,
        {provide: ActivatedRoute, useClass: MockActivatedRote} ,
        // {provide: ActivatedRoute, useValue: {
        //   params: Observable.of({id: 123})
        // } } ,
        {provide: Router, useClass: Mockrouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    // component.route.params 
    component.product = {
      name: "Mobile",
      desc: "Nokia Mobile",
      manufacturer: "Nokia",
      price: 6000,
      quantity: 3,
      id: 2,
      count: 30
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render heading in a h2 tag`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toEqual('Product Details Page');
  });

  it(`should render product name`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h4')).toBeTruthy();
  });
  it(`should render product description`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p')).toBeTruthy();
  });
  it(`should render product manufacturer`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('p')[1]).toBeTruthy();
  });
  it(`should render product quantity`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('p')[2]).toBeTruthy();
  });
  it(`should render product price`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('p')[3]).toBeTruthy();
  });

});
