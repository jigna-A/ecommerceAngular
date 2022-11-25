import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllProductsComponent,
    FooterComponent,
    CartComponent,
    WhishlistComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
