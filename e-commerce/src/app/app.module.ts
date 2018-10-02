import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from "./products.service";
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { AboveNavbarComponent } from './above-navbar/above-navbar.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ProductlistAdComponent } from './productlist-ad/productlist-ad.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {SessionService} from "./session.service";
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CompaniesLogosComponent } from './companies-logos/companies-logos.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    ProductHeaderComponent,
    AboveNavbarComponent,
    BottomNavbarComponent,
    ProductlistAdComponent,
    PromotionComponent,
    SubscriptionComponent,
    HomeComponent,
    ProductDetailsComponent,
    FooterComponent,
    CartComponent,
    CompaniesLogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService,SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
