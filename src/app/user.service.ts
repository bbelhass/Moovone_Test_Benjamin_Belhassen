import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://app.fakejson.com/q/hUU5atyP?token=5vFkfkKvT9DnRZNyp8vIEg";

  constructor(private http: HttpClient) {}
  getUserInfo(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
