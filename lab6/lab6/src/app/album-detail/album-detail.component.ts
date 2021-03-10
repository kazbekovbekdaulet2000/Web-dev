import { Component,Input, OnInit } from '@angular/core';
import {data} from '../data'
import {ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'
import { DetailChangeService } from '../detail-change.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  editable: boolean;
  item: data;
  photoBtn: boolean;
  constructor(private route:ActivatedRoute,
    private loc: Location,
    private service: DetailChangeService) {
  }

  ngOnInit(): void {
    this.editable = false;
    this.route.paramMap.subscribe((item)=>{
      const id = +item.get('id');
      this.getItem(id);
    })
  }

  getItem(id:number){
    this.service.getItem(id).subscribe((item)=>{
      this.item = item;
    });
  }

  back(){
    this.loc.back();
  }

  edit(){
    this.editable = true;
  }

  updateItem(id){
  
    this.item.userId = +document.querySelectorAll("input")[2].value;
    this.item.id = +document.querySelectorAll("input")[0].value;
    this.item.title = document.querySelectorAll("input")[1].value;
    
    console.log(this.item);
    
    this.service.updateItem(id,this.item).subscribe();
    // this.loc.back();
  }

  photoContent(){
    this.photoBtn = true;
  }
}
