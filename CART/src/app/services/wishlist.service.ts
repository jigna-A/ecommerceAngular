import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

wishList = new BehaviorSubject([])
  wishListArray=[]
  constructor() { }

  addTowList(products:any){
    this.wishListArray.push(products)
    this.wishList.next(this.wishListArray)
    let wlist = this.wishList['_value']
    
    
    localStorage.setItem("wishlist",JSON.stringify(wlist))

  }
}
