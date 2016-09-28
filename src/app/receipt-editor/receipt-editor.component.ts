import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { Order } from '../order';
import { OrderItem } from '../order-item';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-receipt-editor',
  templateUrl: './receipt-editor.component.html',
  styleUrls: ['./receipt-editor.component.css']
})
export class ReceiptEditorComponent implements OnInit {
  is_new:boolean
  formDate:string
  order:Order
  constructor(private orderService:OrderService, private router:Router, private route:ActivatedRoute) { }
  ngOnInit() {
    
    this.route.params.forEach((params:Params)=>{
      //params['id']
      if(params['id'] == 'new') {
        this.order = new Order([])
        this.is_new = true
      }
        
        
      else {
        this.order = this.orderService.getOrder(params['id'])
        this.is_new = false
      }
        

    })

    //this.order = new Order([])
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
      
    if (this.is_new)
      this.orderService.createOrder(this.order)
    else
      this.orderService.updateOrder(this.order)
  
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
    this.order.items.push( new OrderItem('', 1, 0)  )
  }

  removeItem(index:number){
    this.order.items.splice(index, 1)
  }

}
