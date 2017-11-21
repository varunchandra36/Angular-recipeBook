import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeservice.Recipes;
  }

}
