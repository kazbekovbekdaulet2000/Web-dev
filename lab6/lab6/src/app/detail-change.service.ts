import { HttpClient, HttpClientJsonpModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data, photos } from '../app/data';
@Injectable({
  providedIn: 'root'
})
export class DetailChangeService {
  URL = "https://jsonplaceholder.typicode.com/albums";
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  }  
  constructor(private httpClient: HttpClient) { }

  getPhotos(  ): Observable<photos[]>{
    return this.httpClient.get<photos[]>("https://jsonplaceholder.typicode.com/albums/1/photos"); 
  }

  getItems(): Observable<data[]>{
    return this.httpClient.get<data[]>(this.URL);
  }

  getItem(id: number): Observable<data>{
    return this.httpClient.get<data>(this.URL+"/"+id);
  }

  addItem(usr: number, i: number, ti: string): Observable<data> { 
    return this.httpClient.put<data>(this.URL, { userId: usr,   id: i,  title: ti}, this.options);
  }

  updateItem(id: number, item: data):Observable<data>{
    return this.httpClient.put<data>(this.URL+"/"+id, item,  this.options);
  }

  deleteItem(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL +"/"+ id);
  }

}
