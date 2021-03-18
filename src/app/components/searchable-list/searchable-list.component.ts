import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-searchable-list',
  templateUrl: './searchable-list.component.html',
  styleUrls: ['./searchable-list.component.scss']
})
export class SearchableListComponent implements OnInit {

  searchTerm = "";
  fields = [];
  data = [];

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(newUrl => {
      console.log("url.subscribe", newUrl);
      this.loadList(newUrl[0].path)
    });
  }

  loadList(name) {
    console.log("loadList", name);
    this.data = [];
    this.fields = this.apiService.getListFields(name);
    console.log(this.fields);
    this.apiService.loadCollection(name)
    .subscribe(response => {
      this.data = response;
    });
  }

  getOptions(): any[] {
    return this.data
      .filter(item => item[this.fields[0]].toLowerCase().includes(this.searchTerm.trim().toLowerCase()))
      .map(item => ({...item, dropdownLabel: item[this.fields[0]] }));
  }
}
