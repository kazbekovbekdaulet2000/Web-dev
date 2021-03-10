import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab6';

  github(){
    window.open("https://github.com/kazbekovbekdaulet2000/Web-dev",'_blank')
  }
}
