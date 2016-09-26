import { Component } from '@angular/core';

import { Order } from './order';
import { OrderItem } from './order-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  orderItems:Array<OrderItem>
  today = new Date()
  total = 0
  section1 = true
  section2 = false
  
  constructor(){
    this.orderItems = [
      { item: 'Soap', quantity:10, unitPrice: 30 },
      { item: 'Shampoo', quantity:20, unitPrice: 35 },
      { item: 'Shirt', quantity:5, unitPrice: 120 },
      { item: 'Samsung Note7', quantity:1, unitPrice: 24900 }      
    ]
  }

}
