import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-searchable-list',
  templateUrl: './searchable-list.component.html',
  styleUrls: ['./searchable-list.component.scss']
})
export class SearchableListComponent implements OnInit {

  data = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadFilms()
    .subscribe(response => {
      this.data = response[0];
    });
  }

}
