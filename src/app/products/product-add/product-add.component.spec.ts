import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { ProductAddComponent } from './product-add.component';
import { Product } from 'src/app/models/products.model';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

class MockActivatedRote {
  
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

    addProduct(employee: Product) {
    let tempEmployees = this.employees.getValue();
    tempEmployees.push(employee);
    this.employees.next(tempEmployees);
  }
};


describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddComponent ],
      imports:      [ FormsModule ],
      providers:    [ 
        {provide: ProductService, useClass: MockEmployeesService } ,
        {provide: ActivatedRoute, useClass: MockActivatedRote } ,
        {provide: Router, useClass: Mockrouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render heading in a h2 tag`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toEqual('Add Product Page');
  });

  it(`should render Product Name as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('Product Name');
  });

  it(`should render Description as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[1].textContent).toEqual('Description');
  });
  it(`should render Manufacturer as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[2].textContent).toEqual('Manufacturer');
  });
  it(`should render Price as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[3].textContent).toEqual('Price');
  });
  it(`should render Quantity as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[4].textContent).toEqual('Quantity');
  });


  
  it(`should render a text box to accept product name`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][name="name"]')).toBeTruthy();
  });

  it(`should render a text box to accept product description`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][name="desc"]')).toBeTruthy();
  });
  it(`should render a text box to accept product Manufacturer`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][name="manufacturer"]')).toBeTruthy();
  });
  it(`should render a text box to accept product price`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="number"][name="price"]')).toBeTruthy();
  });
  it(`should render a text box to accept product quantity`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="number"][name="quantity"]')).toBeTruthy();
  });

  it(`should render a Add button`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Add');
  });
});
