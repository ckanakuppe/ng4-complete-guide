import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceipesComponent } from './receipes/receipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './receipes/recipe-start/recipe-start.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { RecipeEditComponent } from './receipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path:"", redirectTo:'/recipes', pathMatch:'full'},
  {path:"recipes", component:ReceipesComponent, children:[
    {path:"", component:RecipeStartComponent},
    {path:"new", component:RecipeEditComponent},
    {path:":id", component:ReceipeDetailComponent},
    {path:":id/edit", component:RecipeEditComponent},
  ]},
  {path:"shopping-list", component:ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
