import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
  //,providers: [RestaurantService] //foi pro app. por alguma razão... ???
})
export class RestaurantsComponent implements OnInit {

  restaurants : Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService
      .restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
