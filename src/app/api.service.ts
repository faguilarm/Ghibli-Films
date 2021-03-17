import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadFilms(): Observable<any[]> {
    let films = this.httpClient.get("https://ghibliapi.herokuapp.com/films");
    return forkJoin([films]);
  }
}
