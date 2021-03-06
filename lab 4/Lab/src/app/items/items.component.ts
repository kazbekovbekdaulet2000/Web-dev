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

  telegram(url, text){
    window.open("https://t.me/share/url?url="+url+"&text="+text,"_blank")
  }

  ngOnInit() {
  }
}
