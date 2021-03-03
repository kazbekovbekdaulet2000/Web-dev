import { Component, Input, OnInit} from '@angular/core';
import { first, Item} from '../data';

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

  delete(id, items: Item[]){
    for(let i=0; i<items.length; ++i){
      if(items[i].id == id){
        items.splice(i,1);
      }
    }
  }

  onClick(id, items: Item[]){
    for(let i=0; i<items.length; ++i){
      if(items[i].id == id){
        items[i].liked = !items[i].liked;
        if(items[i].liked){
          items[i].likeCount ++;
        } else{
          items[i].likeCount--;
        }
      }
    }
  }

  telegram(url, text){
    window.open("https://t.me/share/url?url="+url+"&text="+text,"_blank")
  }

  ngOnInit() {
  }
}
