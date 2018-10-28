import { Payment } from './payment.model';
import { Customer } from './customer.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private payments: Payment[] = [];

  constructor() {
    this.payments.push({
      id: 1,
      ccLast4: 4567,
      ccType: 'Visa',
      ccFirstName: 'Manuel',
      ccLastName: 'Gomez',
      ccExpDate:  '02/2018',
      customerId: 10000
    });
    this.payments.push({
      id: 2,
      ccLast4: 3241,
      ccType: 'Mastercard',
      ccFirstName: 'Manuel',
      ccLastName: 'Gomez',
      ccExpDate:  '04/2018',
      customerId: 10000
    });
    this.payments.push({
      id: 3,
      ccLast4: 7899,
      ccType: 'American Express',
      ccFirstName: 'Chris',
      ccLastName: 'Mitchell',
      ccExpDate:  '03/2018',
      customerId: 10001
    });
    this.payments.push({
      id: 4,
      ccLast4: 1445,
      ccType: 'Visa',
      ccFirstName: 'Chris',
      ccLastName: 'Mitchell',
      ccExpDate:  '01/2018',
      customerId: 10001
    });
    this.payments.push({
      id: 5,
      ccLast4: 4567,
      ccType: 'Visa',
      ccFirstName: 'Chris',
      ccLastName: 'Mitchell',
      ccExpDate:  '02/2018',
      customerId: 10001
    });
     this.payments.push({
      id: 6,
      ccLast4: 4567,
      ccType: 'Visa',
      ccFirstName: 'Chris',
      ccLastName: 'Mitchell',
      ccExpDate:  '09/2017',
      customerId: 10001
    });
    this.payments.push({
      id: 7,
      ccLast4: 1112,
      ccType: 'Visa',
      ccFirstName: 'Bobby',
      ccLastName: 'Lee',
      ccExpDate: '10/2018',
      customerId: 10003
    });
  }

  getPaymentByCustomerId(customerId: number): Payment[] {
    return this.payments.filter(payment => payment.customerId === customerId);
  }
}


