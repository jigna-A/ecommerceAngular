import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

products:any=[]
totalPrice=0
  constructor( private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data)=>{
this.products = data
console.log(this.products);


    })
   this.totalPrice = this.cartService.getTotalPrice()
  }

  removeItemCart(item:any){
    this.cartService.removeItemCart(item)
    this.totalPrice = this.cartService.getTotalPrice()

  }
  removeAllItemCart(){
    this.cartService.removeAllItemCart()
  }

  // checkout - apply 10%discount when cart is more than 3 items
  checkout(){
    if(this.products.length>=3){
      // apply 10%dizcount on total price
      let discount = this.totalPrice *10/100
      let discountPrice = this.totalPrice-discount
      alert('Your order is confirmed!!! And total price after discount price :' +Math.floor(discountPrice))
      this.removeAllItemCart()
      this.router.navigateByUrl("")
    }
    else{
      alert('Your order is confirmed!!! And total price price is: ' +Math.floor(this.totalPrice))
      this.removeAllItemCart()
      this.router.navigateByUrl("")
    }
  }
}
