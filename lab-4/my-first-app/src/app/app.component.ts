import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  num: number[];
  msg: string;

  constructor(){
    console.log('im running');
    this.num = [1,3,4];
    this.msg = "message1"
  }
}
