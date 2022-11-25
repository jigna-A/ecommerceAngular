import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {
  wishList=[]
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    if(localStorage.getItem("wishlist")){
      this.wishList = JSON.parse(localStorage.getItem("wishlist"))
      console.log(this.wishList);
      
    }
  }
  removeItem(products:any){
    let removeItemList=this.wishList.filter((item:any)=>item.id!=products.id)
    console.log(removeItemList);
    localStorage.setItem("wishlist",JSON.stringify(removeItemList))
    this.wishList = JSON.parse(localStorage.getItem("wishlist"))

    
  }
  addToCart(products:any){
   this.cartService.addToCart(products)
   this.removeItem(products)
  }
}
