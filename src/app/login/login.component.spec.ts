import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';

class MockActivatedRote extends ActivatedRoute {
  constructor() {
      super();
      this.params = of({id: "5"});
  }
}
class Mockrouter {

}
class MockEmployeesService {
  employees: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([{
    email: "admin@admin.com",
    password: "admin",
    fName: "Jhon",
    lName: "Doe",
    location: "Bangalore",
    mobile: 9898565678,
    id: 1
  }]);

  getProductdetails(id) {
    return new Observable();
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:      [ FormsModule ],
      providers:    [ 
        {provide: LoginService, useClass: MockEmployeesService } ,
        {provide: ActivatedRoute, useClass: MockActivatedRote } ,
        {provide: Router, useClass: Mockrouter }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render E-Mail as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('E-Mail');
  });
  it(`should render Password as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[1].textContent).toEqual('Password');
  });
});
