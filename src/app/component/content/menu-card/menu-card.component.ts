import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface order{id:number,
  dishName :String,
  price : number,
  quantity:number}

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  billBtn:Boolean = true
  callBtn:Boolean=false
  paymentBtn:boolean=true
  orders:order[]=[]
  billArray:order[]=[]

  // for id use uuid
  menuCard= [
    {
      id:1,
      dishName :"Cheese Butter Masala",
      price : 150,
      quantity:1
    },
    {
      id:2,
      dishName :"Paneer Angara",
      price : 170,
      quantity:1
    },
    {
      id:3,
      dishName :"Paneer Butter Masala",
      price : 140,
      quantity:1
    },
    {
      id:4,
      dishName :"Masala Kaju Curry",
      price : 150,
      quantity:1
    },
    {
      id:5,
      dishName :"Butter Chapati",
      price : 20,
      quantity:1
    },
    {
      id:6,
      dishName :"Tawa Paratha",
      price : 20,
      quantity:1
    },
    {
      id:7,
      dishName :"Dal Fry",
      price : 110,
      quantity:1
    },
    {
      id:8,
      dishName :"Veg Fried Rice",
      price : 130,
      quantity:1
    },
    {
      id:9,
      dishName :"Triple Scheawn Fried Rice",
      price : 200,
      quantity:1
    },
    {
      id:10,
      dishName :"Veg Biryani",
      price : 170,
      quantity:1
    },
  ]

  constructor(private snackBar: MatSnackBar) {  }

  ngOnInit(): void { 
  }
  

 
  addOrder(obj:order){
    this.callBtn = true
    let orderObj:order = {...obj}
    if (this.orders.findIndex(x=>x.id===obj.id) !== -1) {
     return this.orders[this.orders.findIndex(x=>x.id===obj.id)].quantity= orderObj.quantity
    }else{     
      return this.orders.push(orderObj)
    }

  }

   increment(n:number){ 
    
    if (this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity>9) {
      return this.snackBar.open("you have reach max order capacity","",{
        duration: 500
      });
    }else{ 
    return this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity++
    }
  }
  
  decrement(n:number){    
    if (this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity<2) {
      return this.snackBar.open("Quantity can not 0","",{
        duration: 500
      })
    }else{ 
    return this.menuCard[this.menuCard.findIndex(x=>x.id === n)].quantity--
    }
  }

  removeOrder(id:number){
   return   this.orders.splice(this.orders.findIndex(x=>x.id===id),1)
  }
show(){
  this.paymentBtn=false
    this.orders.map((a,idx)=>{
      this.billArray.map((x)=>{
      if (a.id===x.id) {
        x.quantity=x.quantity+a.quantity
        this.orders.splice(idx,1)
      }else{
        return
      }
    })
  })
  this.orders.map(x=>{
    let ord:order = {...x}
      this.billArray.push(ord)
  })
  if (this.orders.length===0) {
    return this.snackBar.open("Please order something from menu","",{
      duration:1500
    })
  }else{
    this.snackBar.open("Thank you for your order Enjoy your Food","",{
      duration:1500
    })
  }
  return  this.orders=[]
}

}
