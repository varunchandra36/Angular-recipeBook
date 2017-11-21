import { Component, OnInit, ViewEncapsulation, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected= new EventEmitter<string>();
  onNavigate(feature: string) {
  this.featureSelected.emit(feature);
  }
  constructor() { }

  ngOnInit() {
  }

}
