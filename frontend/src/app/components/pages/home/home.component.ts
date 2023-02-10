import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  foods : Food[] = [];

  constructor(private foodService : FoodService,activatedRoute:ActivatedRoute) {
    let foodsObservale:Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        foodsObservale = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
      }
      else if (params.tag) {
        foodsObservale = this.foodService.getAllFoodsByTag(params.tag);
      }
      else{
        foodsObservale = this.foodService.getAll();
      }
      foodsObservale.subscribe((serverFood)=>{
        this.foods = serverFood;
      })
    })
  }

  ngOnInit(): void {

  }
}
