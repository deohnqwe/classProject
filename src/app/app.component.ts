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

  constructor(private customerService: CustomerService) {
    this.customerService.customerChanged.subscribe(customers => {
      this.customers = customers;
    });
  }

  setActiveCustomer(event) {
    this.activeCustomer = this.getCustomerById(event);
  }

  getCustomerById(id: number): Customer {
    return this.customers.filter(customer => customer.id == id)[0]; 
  }
}
