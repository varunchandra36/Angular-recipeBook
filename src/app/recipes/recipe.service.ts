import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingridient} from '../shared/ingridients.model';

@Injectable()
export class RecipeService {
  Recipes: Recipe[] = [ new Recipe('New Recipe', 'New Recipe Description',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [ new Ingridient( 'item1', 2), new Ingridient( 'item2', 2)]) ];
  recipeSelected = new EventEmitter<Recipe>();
 }
