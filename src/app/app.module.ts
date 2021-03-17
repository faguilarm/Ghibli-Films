import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SearchableListComponent } from './components/searchable-list/searchable-list.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchableListComponent,
    MainContainerComponent,
    FilmDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
