import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Receipe } from "./receipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

/* To Inject a service to a service follow below method */
@Injectable()
export class RecipeService{
    public recipeSelected = new Subject<Receipe>();
    private recipes: Receipe[] = [
        new Receipe(
            'Tasty Schnitzel',
            'A super tasty schnitzel - Just awesome!', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('potato', 12)
        ]),
        new Receipe(
            'Big Fat burger', 
            'This is a test receipe', 
            'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg',
            [
                new Ingredient('Buns', 3),
                new Ingredient('Meat', 3)
            ]),
        new Receipe(
            "Yummy Puliogare", 
            "Authentic south indian puliogare!!", 
            "https://www.zaykakatadka.com/wp-content/uploads/2018/08/Puliogare-Tamarind-Rice-Recipe.jpg",
            [
                new Ingredient('ground nut', 8),
                new Ingredient('Puliogare Gojju', 8)
            ]
            )
      ];
      constructor(private slService:ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe:Receipe){
        this.recipes.push(recipe);
      }
      updateRecipe(index:number, newRecipe:Receipe){
        this.recipes[index] = newRecipe;
      }
}