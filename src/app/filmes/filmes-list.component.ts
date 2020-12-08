import { Component, OnInit } from '@angular/core';
import { FilmesService } from './filmes.service';

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.scss'],
})
export class FilmesListComponent implements OnInit {

  public filmes;

  constructor(private filmesService: FilmesService){}

  ngOnInit() {
    this.filmes = this.filmesService.pegarTodosFilmes();
  }

}
