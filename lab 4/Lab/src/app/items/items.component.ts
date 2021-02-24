import { Component, Input, OnInit} from '@angular/core';
import { Item } from '../app.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  @Input() products: Item[] 

  constructor() {}

  onNavigate(link){
    window.open(link, "_blank");
  }

  ngOnInit() {
  }
}
