import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cartItemList = new BehaviorSubject([])
cartItemListArray:any=[]
  constructor() { }

// to get cart item to cart component
getProducts(){
  return this.cartItemList.asObservable()
}

  addToCart(products:any){
    this.cartItemListArray.push(products)
    this.cartItemList.next(this.cartItemListArray)
    this.getTotalPrice()
    
  }

  getTotalPrice(){
    let grantTotal = 0
    this.cartItemListArray.map((item:any)=>{
      grantTotal += item.price
      console.log(grantTotal);
      
    })
    return grantTotal
  }

  // remove a single product details from cart table
  removeItemCart(products:any){
    this.cartItemListArray.map((item:any,index:any)=>{
      if(products.id==item.id){
        this.cartItemListArray.splice(index,1)
      }
    })
    this.cartItemList.next(this.cartItemListArray)

  }

  // remove all item from cart
  removeAllItemCart(){
    this.cartItemListArray = []
    this.cartItemList.next(this.cartItemListArray)
  }
}
