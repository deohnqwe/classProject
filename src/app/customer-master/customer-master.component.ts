import { Customer } from './../shared/customer.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css']
})
export class CustomerMasterComponent implements OnInit {
  @Input() customers: Customer[] = [];
  @Output() customerSelected: EventEmitter<number> = new EventEmitter(null);

  constructor() { }

  ngOnInit() {
  }

  customerClicked(customer: Customer) {
    this.customerSelected.emit(customer.id);
  }

}
