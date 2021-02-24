import { Component } from '@angular/core';

export interface Item{
  id: number
  name: string
  image: string
  des: string
  rating: number
  link:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public products: Item[] = [
    {id: 1, name: "name", image: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg", des: "it is the description", rating: 5, link: "https://www.google.com"},
    {id: 1, name: "name", image: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg", des: "it is the description", rating: 5, link: "https://www.google.com"},
    {id: 1, name: "name", image: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg", des: "it is the description", rating: 5, link: "https://www.google.com"},
    {id: 1, name: "name", image: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg", des: "it is the description", rating: 5, link: "https://www.google.com"},
    {id: 1, name: "name", image: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg", des: "it is the description", rating: 5, link: "https://www.google.com"},
    {id: 1, name: "name", image: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg", des: "it is the description", rating: 5, link: "https://www.google.com"},
    {id: 1, name: "name", image: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg", des: "it is the description", rating: 5, link: "https://www.google.com"},
    {id: 1, name: "name", image: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg", des: "it is the description", rating: 5, link: "https://www.google.com"},
    {id: 1, name: "name", image: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg", des: "it is the description", rating: 5, link: "https://www.google.com"},
    {id: 1, name: "name", image: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg", des: "it is the description", rating: 5, link: "https://www.google.com"} 
  ]

  
}
