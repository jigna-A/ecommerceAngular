import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  ProductDetails:any
  filterString:any="";
  search:any

  constructor(private api:ApiService,private wlist:WishlistService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe((result:any)=>{
      this.ProductDetails = result.products
  // console.log(result.ProductDetails);
  this.ProductDetails.forEach((item:any)=>{
    Object.assign(item,{quantity:1,total:item.price})
  })
})
    // to get search item from service
      this.api.searchTerm.subscribe((data)=>{
        this.search = data
        // console.log(this.filterString);
        
    })
  }
  addTowishList(products:any){
    this.wlist.addTowList(products)
    alert("product added to wish list")
  }
addToCart(products:any){
  this.cartService.addToCart(products)
  alert("product added to Your Cart")


}

}
