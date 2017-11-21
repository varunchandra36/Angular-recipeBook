import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingridient} from '../shared/ingridients.model';
import {ShoppinglistService} from './shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppinglistComponent implements OnInit {
Ingridients: Ingridient[] ;
  constructor(private shoppinglistservice: ShoppinglistService){
  }

  ngOnInit() {
    this.Ingridients = this.shoppinglistservice.getList();
    this.shoppinglistservice.ingredientsChanged
      .subscribe(
        (ingredients: Ingridient[]) => {
          this.Ingridients = ingredients;
        }
      );
  }

}
