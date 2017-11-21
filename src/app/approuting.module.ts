import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppinglistComponent} from './shoppinglist/shoppinglist.component';

import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {ReciepeitemdetailsComponent} from './recipes/recipelist/reciepeitemdetails/reciepeitemdetails.component';

const appRoutes: Routes = [  {path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipesComponent, children: [

  { path: 'new', component: RecipeEditComponent },
  { path: ':id', component: ReciepeitemdetailsComponent },
  { path: ':id/edit', component: RecipeEditComponent },
]},
  {path: 'shoppinglist', component: ShoppinglistComponent}];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
