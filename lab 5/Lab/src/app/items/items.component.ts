import { Component, Input, OnInit} from '@angular/core';
import { first } from '../data';

export interface Item{
  id: number
  name: string
  image: string
  des: string
  rating: number
  link:string
  category: string
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  items = first;

  @Input() type: string;
  constructor() {}

  filter(items: Item[]): Item[] {
    let result: Item[] = [];
    for(let i=0; i<items.length; ++i){
      if(items[i].category == this.type){
        result.push(items[i]);
      }
    }
    return result;
  }

  link(site){
    window.open(site, "_blank");
  }

  telegram(url, text){
    window.open("https://t.me/share/url?url="+url+"&text="+text,"_blank")
  }

  ngOnInit() {
  }
}
