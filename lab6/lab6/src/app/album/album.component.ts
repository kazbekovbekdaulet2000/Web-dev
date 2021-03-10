import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DetailChangeService } from '../detail-change.service';
import { data} from '../data';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  list: data[];
  loading: boolean;
  del:boolean;
  constructor( private service: DetailChangeService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getItems();
  } 
  getItems(){
    this.service.getItems().subscribe((list) =>{
      this.list = list;
    });
    this.loading = false;
  }

  deleteItem(id: number ){
    this.list = this.list.filter((x) => x.id !== id); 
    this.service.deleteItem(id).subscribe();
  }

}
