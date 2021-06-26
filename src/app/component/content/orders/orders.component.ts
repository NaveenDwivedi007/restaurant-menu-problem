import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { order } from '../menu-card/menu-card.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit ,OnChanges {
  @Input() billarray!:order[]

  tatolAmount:number=0
  tip:number=10
  amountAfterTip:number=0

  constructor(private snackBar: MatSnackBar,private router : Router) {
   }
  
  makeAPayment(){
    this.snackBar.open("Thank you please Visit us again","",{
      duration:2000
    })
    this.amountAfterTip=this.tatolAmount+this.tatolAmount*this.tip/100
    return setTimeout(()=>{
      return this.router.navigateByUrl("/")
    },3000)
  }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.billarray.map(x=>{
        x.price = x.price * x.quantity
      })
      this.billarray.map(x=>{
        return this.tatolAmount=this.tatolAmount+ x.price
       })
       this.amountAfterTip=this.tatolAmount+this.tatolAmount*this.tip/100
    
  }
 
}
