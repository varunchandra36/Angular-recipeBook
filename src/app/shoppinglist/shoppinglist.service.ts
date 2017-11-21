import {EventEmitter, Injectable} from '@angular/core';
import {Ingridient} from '../shared/ingridients.model';


export class ShoppinglistService {
  ingredientsChanged = new EventEmitter<Ingridient[]>();
  Ingridients: Ingridient[] = [ new Ingridient('oranges', 6 )];
  getList() {
    return this.Ingridients;
  }
  addIngridients(ingridient: Ingridient) {
    this.Ingridients.push(ingridient);
    console.log(ingridient);
    this.ingredientsChanged.emit(this.Ingridients);
  }
  addIngridientslist(ingridients: Ingridient[]){

    this.Ingridients.push(...ingridients);
    this.ingredientsChanged.emit(this.Ingridients.slice());
  }
}
