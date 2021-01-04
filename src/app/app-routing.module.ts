import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FilmesInfoComponent } from './filmes/filmes-info.component';
import { FilmesListComponent } from './filmes/filmes-list.component';
import { SeriesAddComponent } from './series/series-add.component';
import { SeriesInfoComponent } from './series/series-info.component';
import { SeriesListComponent } from './series/series-list.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    component: SeriesListComponent
  },
  {
    path: 'series/info/:id',
    component: SeriesInfoComponent
  },
  {
    path: 'filmes',
    component: FilmesListComponent
  },
  {
    path: 'filmes/info/:id',
    component: FilmesInfoComponent
  },
  {
    path: 'series/add',
    component: SeriesAddComponent
  },
  {
    path: 'series/add/:id',
    component: SeriesAddComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
