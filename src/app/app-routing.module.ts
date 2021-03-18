import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { SearchableListComponent } from './components/searchable-list/searchable-list.component';

const endpoints = ["films", "people", "locations", "species", "vehicles"];

export function listRoutes(url: UrlSegment[]) {
  return url.length === 1 && endpoints.includes(url[0].path)? ({consumed: url}) : null;
}

export function detailRoutes(url: UrlSegment[]) {
  return url.length === 2 && endpoints.includes(url[0].path)? ({consumed: url}) : null;
}

const routes: Routes = [
  {
    matcher: listRoutes,
    component: SearchableListComponent,
  },
  {
    matcher: detailRoutes,
    component: FilmDetailComponent,
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
