import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  options = [ "films", "people", "locations", "species", "vehicles"];

  cards = [""];
  item = {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "original_title": "天空の城ラピュタ",
    "original_title_romanised": "Tenkū no shiro Rapyuta",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "running_time": "124",
    "rt_score": "95",
    "people": [
      "https://ghibliapi.herokuapp.com/people/"
    ],
    "species": [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
    ],
    "locations": [
      "https://ghibliapi.herokuapp.com/locations/"
    ],
    "vehicles": [
      "https://ghibliapi.herokuapp.com/vehicles/"
    ],
    "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
  };

  constructor() { }

  ngOnInit(): void {
  }

  filmSelected(id) {
    console.log("filmSelected", id);
  }
  add() {
    this.cards.push("");
  }
}
