import { Component, Input, OnInit } from '@angular/core';
import { photos } from '../data';
import { DetailChangeService } from '../detail-change.service';
import {ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent implements OnInit {
  photos: photos[];

  // @Input() id: number;
  constructor(private route:ActivatedRoute,
    private loc: Location,
    private service: DetailChangeService) { }

  ngOnInit(): void {
    // this.loading = true;
    this.getPhotos();
  }

  getPhotos(){
    this.service.getPhotos().subscribe((photos) =>{
      this.photos = photos;
    });
  }

}
