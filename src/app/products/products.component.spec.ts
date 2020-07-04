import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products.component';
import { ProductService } from '../services/product.service';

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User'};
  getProducts= ()=> {
    return([
      {
        "name": "Laptop",
        "desc": "Dell laptop",
        "manufacturer": "Dell",
        "price": 35000,
        "quantity": 4,
        "id": 1,
        "count": 54
      }])
  }
};

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let service;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      imports: [HttpClientModule ],
      providers: [
        ProductsComponent,

        { provide: ProductService, useClass: ProductService }
      ]
    });
    component = TestBed.inject(ProductsComponent);
    service = TestBed.inject(ProductService);
    fixture = TestBed.createComponent(ProductsComponent);
    // component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should search', () => {
    component.products= [
      {
        "name": "Laptop",
        "desc": "Dell laptop",
        "manufacturer": "Dell",
        "price": 35000,
        "quantity": 4,
        "id": 1,
        "count": 54
      }]
      component.search = "Laptop"
      component.onSearch()
      expect(component.filteredProducts).toContain({
        "name": "Laptop",
        "desc": "Dell laptop",
        "manufacturer": "Dell",
        "price": 35000,
        "quantity": 4,
        "id": 1,
        "count": 54
      })
  });
  
  it('should getAllProducts', () => {
    component.products= [
      {
        "name": "Laptop",
        "desc": "Dell laptop",
        "manufacturer": "Dell",
        "price": 35000,
        "quantity": 4,
        "id": 1,
        "count": 54
      }]
      expect(component.products).toContain({
        "name": "Laptop",
        "desc": "Dell laptop",
        "manufacturer": "Dell",
        "price": 35000,
        "quantity": 4,
        "id": 1,
        "count": 54
      })
  });

  
});
