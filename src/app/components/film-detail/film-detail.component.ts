import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  @Input() data: any;

  fields = [];

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(this.loadDetail);
  }

  loadDetail = (newUrl) => {
    this.apiService.loadDetail(newUrl[0].path, newUrl[1].path)
    .subscribe(this.initDetail);
  }

  initDetail = data => {
    let { id, url, ...fields } = data;
    this.fields =
      Object.entries(fields)
      .map(([label, value]) => ({label: this.formatLabel(label), value}));
  }

  formatLabel(label): string {
    return label.replaceAll("_", " ");//.toUpperCase();
  };

}
