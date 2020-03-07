import { Component, 
         OnInit,
         OnDestroy,
         ViewChild,
        } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode = false;
  editedItem:Ingredient;
  editedItemIndex:number;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.subscription =  this.shoppingListService.startedEditing.subscribe(
        (index:number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount:this.editedItem.amount
          });
        }
    );
  }
  onAddItem(form:NgForm){
     const value = form.value;
     const newIngredient = new Ingredient(value.name, value.amount);
     if(this.editMode){
       this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
     }else{
       this.shoppingListService.addIngredient(newIngredient);
     }
     this.editMode = false;
     form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
 