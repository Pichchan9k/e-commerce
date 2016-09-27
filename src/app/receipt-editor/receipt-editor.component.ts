import { Component, OnInit } from '@angular/core';

import { Order } from '../order';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-receipt-editor',
  templateUrl: './receipt-editor.component.html',
  styleUrls: ['./receipt-editor.component.css']
})
export class ReceiptEditorComponent implements OnInit {

  
  order:Order
  constructor() { }
  ngOnInit() {
    this.order = new Order([])
    
  }
  
  //for save order 
  save(){

  }

  validate(){

  }

  // for add orderItem
  addItem(){
    this.order.items.push( new OrderItem('', 1, 0))
  }

  removeItem(index:number){
    this.order.items.splice(index, 1)
  }

}
