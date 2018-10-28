import { Payment } from './../shared/payment.model';
import { Customer } from './../shared/customer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input() activeCustomer: Customer;
  @Input() customerPayments: Payment[] = [];

  constructor() { }

  ngOnInit() {
  }

}
