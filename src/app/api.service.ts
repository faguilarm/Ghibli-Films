import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API = "https://ghibliapi.herokuapp.com/";

  private listFields = {
    films: ["title", "release_date"],
    people: ["name", "age"],
    locations: ["name", "terrain"],
    species: ["name", "classification"],
    vehicles: ["name", "vehicle_class"]
  }

  constructor(private httpClient: HttpClient) { }

  loadFilms(): Observable<any[]> {
    let films = this.httpClient.get("https://ghibliapi.herokuapp.com/films");
    return forkJoin([films]);
  }

  loadCollection(name: string): Observable<any> {
    return this.httpClient.get(`${this.API}${name}`);
  }

  loadDetail(name: string, id: string): Observable<any> {
    return this.httpClient.get(`${this.API}${name}/${id}`);
  }

  getListFields(name: string) {
    return this.listFields[name];
  }
}
