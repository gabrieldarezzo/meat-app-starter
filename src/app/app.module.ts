import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';



import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'

import { RestaurantService } from './restaurants/restaurant.service';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from './order/order.service';

import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';

import { OrderItemsComponent } from './order/order-items/order-items.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSumarryComponent } from './order-sumarry/order-sumarry.component';


import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSumarryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(ROUTES),


  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}, RestaurantService, ShoppingCartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
