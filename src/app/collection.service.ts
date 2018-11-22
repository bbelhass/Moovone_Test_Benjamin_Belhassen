import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private url = "https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1";

  constructor(private http: HttpClient) {}

  handleError(toto){
    console.log(toto);
  }
  
  getCollectionInfo(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  

}
