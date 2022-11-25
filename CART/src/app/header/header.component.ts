import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


totalItem=0
  constructor(private api:ApiService,private cartService:CartService) { }

  ngOnInit(): void {
   this.cartService.getProducts()
   .subscribe((data)=>{
     this.totalItem = data.length
   })
  }
  search(event:any){
    let searchValue=event.target.value
    // console.log(event.target.value);
    
      this.api.searchTerm.next(searchValue)
}
}