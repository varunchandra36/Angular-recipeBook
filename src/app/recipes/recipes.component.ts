import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.recipeservice.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe; }  );
    console.log(this.selectedRecipe);
  }

}
