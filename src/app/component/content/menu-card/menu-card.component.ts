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
  orders:order[]=[]
  billArray:order[]=[]

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
    console.log(this.orders.findIndex(x=>x.id===id));
   return   this.orders.splice(this.orders.findIndex(x=>x.id===id),1)
  }
show(){
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
  this.orders=[]
  console.log(this.billArray);
  
  
  return this.snackBar.open("Thank you for your order Enjoy your Food","",{
    duration:1500
  })
  
  
}

}
