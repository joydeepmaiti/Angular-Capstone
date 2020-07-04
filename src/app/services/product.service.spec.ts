import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule ],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
  });

  it('getProducts() should return value from observable',
    (done: DoneFn) => {
      const names = [{
        "name": "Laptop",
        "desc": "Dell laptop",
        "manufacturer": "Dell",
        "price": 35000,
        "quantity": 4,
        "id": 1,
        "count": 54
      },
      {
        "name": "Mobile",
        "desc": "Nokia Mobile",
        "manufacturer": "Nokia",
        "price": 6000,
        "quantity": 3,
        "id": 2,
        "count": 30
      },
      {
        "name": "Shirt",
        "desc": "Full sleeve shirt",
        "manufacturer": "Highlander",
        "price": 700,
        "quantity": "10",
        "id": 3,
        "count": 20
      },
      {
        "name": "Jeans",
        "desc": "Black Jeans",
        "manufacturer": "Sparky",
        "price": 1500,
        "quantity": "15",
        "id": 4,
        "count": 10
      },
      {
        "name": "Charger",
        "desc": "Mobile Charger",
        "manufacturer": "Nokia",
        "price": 1500,
        "quantity": 3,
        "id": 5,
        "count": 14
      }];
    service.getProducts().subscribe((value:Array<Object>) => {
      expect(value.length).toBeGreaterThan(0);
      done();
    });

  });

  it('getProductdetails() should return a product',
    (done: DoneFn) => {
      const names = [{
        "name": "Laptop",
        "desc": "Dell laptop",
        "manufacturer": "Dell",
        "price": 35000,
        "quantity": 4,
        "id": 1,
        "count": 54
      }];
    service.getProductdetails(1).subscribe(value => {
      expect(value).toEqual(names);
      done();
    });

  });

  it('addProduct() should add a product',
    (done: DoneFn) => {
      const names = [{
        "name": "Laptop",
        "desc": "Dell laptop",
        "manufacturer": "Dell",
        "price": 35000,
        "quantity": 4,
        "id": 116,
        "count": 54
      }];
    service.addProduct(names[0]).subscribe(value => {
      expect(value).toEqual(names[0]);
      done();
    });

  });
  it('updateProduct() should update a product',
    (done: DoneFn) => {
      const names = [{
        "name": "Laptop",
        "desc": "Dell laptop",
        "manufacturer": "Dell",
        "price": 5000,
        "quantity": 4,
        "id": 116,
        "count": 54
      }];
    service.updateProduct(116,names[0]).subscribe(value => {
      expect(value).toEqual(names[0]);
      done();
    });
  });
    // it('deleteProduct() should delete a product',
    //   (done: DoneFn) => {
    //     const names = [{
    //       "name": "Laptop",
    //       "desc": "Dell laptop",
    //       "manufacturer": "Dell",
    //       "price": 5000,
    //       "quantity": 4,
    //       "id": 116,
    //       "count": 54
    //     }];
    //   service.deleteProduct(116).subscribe(value => {
    //     expect(value).toEqual(names[0]);
    //     done();
    //   });

    // });

  
});
