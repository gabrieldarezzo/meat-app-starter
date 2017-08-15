import  { Routes } from '@angular/router';


import  { HomeComponent } from './home/home.component';
import  { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import  { RestaurantsComponent } from './restaurants/restaurants.component';
import  { AboutComponent } from './about/about.component';

import  { MenuComponent } from './restaurant-detail/menu/menu.component';
import  { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import  { OrderComponent } from './order/order.component';
import  { OrderSumarryComponent } from './order-sumarry/order-sumarry.component';



export const ROUTES : Routes = [
  { path : '', component : HomeComponent },
  { path : 'restaurants', component : RestaurantsComponent },
  { path : 'restaurants/:id', component : RestaurantDetailComponent,
    children : [
      { path : '', redirectTo: 'menu', pathMatch: 'full'},
      {  path: 'menu', component: MenuComponent  },
      {  path: 'reviews', component: ReviewsComponent  }

    ]
  },
  { path : 'order-summary', component : OrderSumarryComponent },
  { path : 'order', component : OrderComponent },
  { path : 'about', component : AboutComponent }

];
