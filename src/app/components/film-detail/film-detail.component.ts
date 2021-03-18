import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  @Input() data: any;

  fields = [];

  constructor() { }

  ngOnInit(): void {
    this.initDetail();
  }

  initDetail() {
    console.log("recibido", this.data);
    let { id, url, ...data } = this.data;
    let fields =
      Object.entries(data)
      .map(([label, value]) => ({label: this.formatLabel(label), value}));
    console.log(fields);
    this.fields = fields;
  }

  formatLabel(label): string {
    return label.replaceAll("_", " ");//.toUpperCase();
  };

}
