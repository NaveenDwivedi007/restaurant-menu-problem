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
  

  increment(n:Number){ 
    
    if (this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity>9) {
      return this.snackBar.open("you have reach max order capacity");
    }else{ 
    return this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity++
    }
  }
  
  decrement(n:Number){    
    if (this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity<2) {
      return this.snackBar.open("Quantity can not 0")
    }else{ 
    return this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity--
    }
  }

  addOrder(obj:order){
    
    this.orders.push(obj)
    return console.log(this.orders.filter(x=>x.id===obj.id));
    
  }


}
