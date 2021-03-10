import { Injectable } from '@angular/core';
import { JSON } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DetailChangeService {

  constructor() { }

  getItems(){
    return JSON;
  }
}
