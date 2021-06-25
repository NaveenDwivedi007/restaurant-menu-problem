import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { order } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit,OnChanges {
  @Input() order!: order[];

  bill: order[] = [];

  constructor() { }
  
  ckeck(){
    this.bill=[...this.order]
    this.bill.map(x=>{
      x.price=+x.price*+x.quantity
    })
    return console.log(this.bill)
  }

  removeOrder(id:Number){
    console.log(this.order);
    console.log(this.order.findIndex(x=>x.id===id));
    this.order=this.order.splice(this.order.findIndex(x=>x.id===id),1)
    
   return console.log( this.order )
  }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log("hello");
    
  }
 
}
