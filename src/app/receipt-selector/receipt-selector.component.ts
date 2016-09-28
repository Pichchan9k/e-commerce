
import { Component, OnInit } from '@angular/core';
import { OrderService } from "../order.service"
import { Order } from "../order"

@Component({
  selector: 'app-receipt-selector',
  templateUrl: './receipt-selector.component.html',
  styleUrls: ['./receipt-selector.component.css']
})
export class ReceiptSelectorComponent implements OnInit {

  orders:Array<Order>

  //inject the service instance in constructor
  constructor(private os:OrderService  ) {
      this.orders = os.load()
  }

   //init when done created a component
  ngOnInit() {
  }


  loadFromUrl(){
    this.os.loadDataformUrl( orders =>{
      this.orders = orders
    })
  }

}
