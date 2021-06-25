import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { order } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit ,OnChanges {
  @Input() billarray!:order[]

  tatolAmount:number=0

  constructor() {
   }
  
  

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log("Hello");
    
    this.billarray.map(x=>{
        x.price = x.price * x.quantity
      })
      this.billarray.map(x=>{
        return this.tatolAmount=this.tatolAmount+ x.price
       })
       console.log(this.billarray);
       console.log(this.tatolAmount);
    
  }
 
}
