import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Ingridient} from '../../shared/ingridients.model';
import {ShoppinglistService} from '../shoppinglist.service';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingeditComponent implements OnInit {
  @ViewChild('inputName') nameInputRef: ElementRef;
  @ViewChild('inputAmount') amountInputRef: ElementRef;
  constructor(private shoppinglistservice: ShoppinglistService){
  }


  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingridient(ingName, ingAmount);
    this.shoppinglistservice.addIngridients(newIngredient);


  }


}
