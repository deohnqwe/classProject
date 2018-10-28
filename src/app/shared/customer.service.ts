import { Customer } from './customer.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [];
  customerChanged: BehaviorSubject<Customer[]> = new BehaviorSubject(null);

  constructor() {
    this.customers.push({
      id: 10000,
      firstName: 'Manuel',
      lastName: 'Gomez',
      phone: 7604279615,
      email: 'mannie1217@gmail.com'
    });
    this.customers.push({
      id: 10001,
      firstName: 'Chris',
      lastName: 'Mitchell',
      phone: 7501234437,
      email: 'mitch@gmail.com'
    });
    this.customers.push({
      id: 10002,
      firstName: 'Chris',
      lastName: 'Woodward',
      phone: 5302218933,
      email: 'cwoodward@gmail.com'
    });

    this.customers.push({
      id: 10003,
      firstName: 'Bobby',
      lastName: 'Lee',
      phone: 5302248933,
      email: 'cwoodsdfard@gmail.com'
    });

    this.customerChanged.next(this.customers);
  }
}
