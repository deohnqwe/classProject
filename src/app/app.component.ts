import { Payment } from './shared/payment.model';
import { PaymentService } from './shared/payment.service';
import { Customer } from './shared/customer.model';
import { Component } from '@angular/core';
import { CustomerService } from './shared/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private customers: Customer[] = [];
  private activeCustomer: Customer = null;
  private activeCustomerPayments: Payment[] = [];

  constructor(private customerService: CustomerService, private paymentService: PaymentService) {
    this.customerService.customerChanged.subscribe(customers => {
      this.customers = customers;
    });
  }

  setActiveCustomer(event: Customer) {
    this.activeCustomer = event;
    this.activeCustomerPayments = this.paymentService.getPaymentByCustomerId(this.activeCustomer.id);
  }
}
