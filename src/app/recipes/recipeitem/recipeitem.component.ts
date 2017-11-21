import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppinglistService} from "../../shoppinglist/shoppinglist.service";

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeitemComponent implements OnInit {
 @Input() recipe: Recipe;

  constructor(private shoppinglistservice: ShoppinglistService) { }

  ngOnInit() {
  }
  toShoppingList() {
    this.shoppinglistservice.addIngridientslist(this.recipe.ingridient);
  }
  /* onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingridient(ingName, ingAmount);
    this.shoppinglistservice.addIngridients(newIngredient);


  }*/
}
