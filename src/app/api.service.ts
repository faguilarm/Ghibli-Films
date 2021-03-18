import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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
  };

  private store: any = {};

  private relatedLists = {
    films: { people: "people", species: "species", locations: "locations", vehicles: "vehicles" },
    people: { films: "films", species: "species", locations: "locations", vehicles: "vehicles" },
    locations: ["name", "terrain"],
    species: { people: "people", films: "films" },
    vehicles: { pilot: "people", films: "films" },
  };

  constructor(private httpClient: HttpClient) { }

  async loadList(name: string): Promise<any> {
    if(this.store[name]) {
      return Object.values(this.store[name]);
    } else {
      let list = <any[]> await this.httpClient.get(`${this.API}${name}`).toPromise();
      this.store[name] = {};
      list.forEach(item => {
        this.store[name][item.id] = item;
      });
      return list;
    }
  }

  async loadDetail(name: string, id: string): Promise<any> {
    if(!this.store[name]) {
      await this.loadList(name);
    }
    let detail = this.store[name][id];
    detail = await this.loadRelated(detail, name);
    return detail;
  }

  async loadRelated(detail, name) {
    for(let field in this.relatedLists[name]) {
      if(this.hasRawValue(detail[field])) {
        detail[field] = await this.loadRelatedDetail(detail, name, field, this.relatedLists[name][field]);
      } else {
        
      }
    }
    return detail;
  }

  async loadRelatedDetail(detail, name, field, target) {
    if(!this.store[target]) {
      await this.loadList(target);
    }
    if(typeof detail[field] === "string") {
      this.loadRelatedDetailSingle(detail.id, name, detail[field], target)
    } else if(Array.isArray(detail[field])) {
      return detail[field].map(item => this.loadRelatedDetailSingle(detail.id, name, item, target));
    } else {
      return detail[field];
    }
  }

  loadRelatedDetailSingle(id, name, rawValue, target) {
    let relatedId = this.getId(rawValue);
    let relatedObject;
    if(relatedId) {
      relatedObject = this.store[target][relatedId];
    } else {
      relatedObject = { id: 0, name: "n"};
    }
    return { target, id: relatedObject.id, label: relatedObject.name };
  }

  getListFields(name: string) {
    return this.listFields[name];
  }

  //Check for a string or array of strings to determine that we need to process the related values 
  hasRawValue(value) {
    return (value === null || typeof value === "string") || (Array.isArray(value) && typeof value[0] === "string");
  }

  //Get the ID included in the url if exists, this function must be improved by using regex or a similar approach
  getId(url) {
    let urlParts = url.split("/");
    return urlParts.length === 5 && urlParts[4] !== ""? urlParts[4] : null;
  }
}
