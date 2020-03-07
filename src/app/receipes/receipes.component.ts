import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [RecipeService]
})
export class ReceipesComponent implements OnInit{
  constructor() { }
  ngOnInit() {
   
  }
}
