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

  link(site){
    window.open(site, "_blank");
  }

  telegram(){
    window.open("https://t.me/webdevaskar","_blank")
  }

  ngOnInit() {
  }
}
