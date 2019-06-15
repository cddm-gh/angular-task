import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private url: string;
  constructor(private _http:HttpClient) {
    this.url = 'http://localhost:3000/api/';
  }

  getArticles(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'get-articles', {headers:headers});
  }
  deteleArticle(id:any){
    console.log('Voy a borrar el articulo con id ' + id);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'delete-article/' + id, {headers:headers});
  }
}
