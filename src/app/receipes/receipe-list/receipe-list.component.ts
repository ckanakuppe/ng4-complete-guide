import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model'
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  recipes: Receipe[];
  constructor(private recipeService:RecipeService,
              private aRoute:ActivatedRoute,
              private route:Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
      this.route.navigate(['new'], {relativeTo:this.aRoute});
  }
  
}
