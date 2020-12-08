import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private filmes = [
    {
      id: 1,
      nome: "Clube da Luta",
      nota: 5
    },
    {
      id: 2,
      nome: "Senhor dos Aneis",
      nota: 5
    },
    {
      id: 3,
      nome: "John Wick",
      nota: 4
    }
  ]

  constructor() { }

  pegarTodosFilmes(){
    return this.filmes
  }
}
