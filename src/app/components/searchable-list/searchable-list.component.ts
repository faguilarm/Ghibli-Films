import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-searchable-list',
  templateUrl: './searchable-list.component.html',
  styleUrls: ['./searchable-list.component.scss']
})
export class SearchableListComponent implements OnInit {

  @Output() onSelect = new EventEmitter<string>();

  searchTerm = "";
  data = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadFilms()
    .subscribe(response => {
      this.data = response[0];
    });
  }

  getOptions(): any[] {
    return this.data.filter(({title}) => title.toLowerCase().includes(this.searchTerm.trim().toLowerCase()));
  }

  select({id}) {
    this.onSelect.emit(id);
  }
}
