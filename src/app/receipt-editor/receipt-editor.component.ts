import { Component, OnInit } from '@angular/core';

import { Order } from '../order';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-receipt-editor',
  templateUrl: './receipt-editor.component.html',
  styleUrls: ['./receipt-editor.component.css']
})
export class ReceiptEditorComponent implements OnInit {
  
  formDate:string
  order:Order
  constructor() { }
  
  ngOnInit() {
    this.order = new Order([])
    this.formDate = this.order.create_time.toISOString().substring(0, 10)
  }
  
  //for save order 
  save(){

  }

  validate(){
    //check form date
    if (this.formDate != "" ) {
      return true
    } else {
      return false
    }
    //check order.items
    if (this.order.items){
      return true
    } else {
      return false
    }
  }

  // for add orderItem
  addItem(){
    this.order.items.push( new OrderItem('', 1, 0))
  }

  removeItem(index:number){
    this.order.items.splice(index, 1)
  }

}
