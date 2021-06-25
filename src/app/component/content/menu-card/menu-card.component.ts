import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface order{id:Number,
  dishName :String,
  price : Number,
  quantity:Number}

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  billBtn:Boolean = true
  orders:order[]=[]

  menuCard= [
    {
      id:1,
      dishName :"Salad",
      price : 40,
      quantity:1
    },
    {
      id:2,
      dishName :"dal fry masala",
      price : 40,
      quantity:1
    },
  ]


  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  

 
  addOrder(obj:order){
  let orderObj:order = {...obj}
    if (this.orders.findIndex(x=>x.id===obj.id) !== -1) {
     return this.orders[this.orders.findIndex(x=>x.id===obj.id)].quantity= orderObj.quantity
      
    }else{     
      return this.orders.push(orderObj)
    }
  }

   increment(n:Number){ 
    
    if (this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity>9) {
      return this.snackBar.open("you have reach max order capacity","",{
        duration: 500
      });
    }else{ 
    return this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity++
    }
  }
  
  decrement(n:Number){    
    if (this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity<2) {
      return this.snackBar.open("Quantity can not 0","",{
        duration: 500
      })
    }else{ 
    return this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity--
    }
  }

  removeOrder(id:Number){
    console.log(this.orders.findIndex(x=>x.id===id));
   return   this.orders.splice(this.orders.findIndex(x=>x.id===id),1)
  }

}
