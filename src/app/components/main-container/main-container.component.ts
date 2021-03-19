import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  options = [];

  constructor(private apiService: ApiService) {
    this.options = this.apiService.getLists();
  }

  ngOnInit(): void { }
}
