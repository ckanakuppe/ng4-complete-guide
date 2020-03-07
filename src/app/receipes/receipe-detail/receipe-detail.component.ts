import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  recipe:Receipe;
  id: number;
  constructor(private recipeService: RecipeService,
              private aRoute: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
    const id = this.aRoute.snapshot.params['id'];
    this.aRoute.params.subscribe(
      (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipeClick(){
      this.route.navigate(['edit'], {relativeTo:this.aRoute});
   // this.route.navigate(['../', this.id, 'edit'], {relativeTo:this.aRoute});
  }
}
