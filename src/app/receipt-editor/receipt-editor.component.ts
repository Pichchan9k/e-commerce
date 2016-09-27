import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderItem } from '../order-item';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-receipt-editor',
  templateUrl: './receipt-editor.component.html',
  styleUrls: ['./receipt-editor.component.css']
})
export class ReceiptEditorComponent implements OnInit {
  
  formDate:string
  order:Order
  constructor(private orderService:OrderService, private router:Router) { }
  ngOnInit() {
    this.order = new Order([])
    this.formDate = this.order.create_time.toISOString().substring(0, 10)
  }

  onSave(){
    if (this.save())
      this.router.navigate(["home"])

    else
      alert('Someting Wrong')
  }
  
  //for save order 
  save(){
    if (!this.validate())
      return false

      this.orderService.createOrder(this.order)

    return true
  }

  validate(){
    //check form date
    if (this.formDate == "" )
      return false
    //check order.items

    let result = true;
    if (this.order.items.length == 0)
      result = false
    this.order.items.forEach((item,index,arr)=>{
      if (item.item == "")
        result = false
    })
    
    return result
 }

  // for add orderItem
  addItem(){
    this.order.items.push( new OrderItem('', 1, 0))
  }

  removeItem(index:number){
    this.order.items.splice(index, 1)
  }

}
