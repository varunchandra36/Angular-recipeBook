import {Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-reciepeitemdetails',
  templateUrl: './reciepeitemdetails.component.html',
  styleUrls: ['./reciepeitemdetails.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReciepeitemdetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
  }
  onItemSelected() {
  this.recipeservice.recipeSelected.emit(this.recipe);
  console.log(this.recipe);
  }

}
