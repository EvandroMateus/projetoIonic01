import { splitAtColon } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from './filmes.service';


@Component({
  selector: 'app-filmes-info',
  templateUrl: 'filmes-info.component.html'
})

export class FilmesInfoComponent implements OnInit {

  public filme;

  constructor(private activatedRoute: ActivatedRoute, private filmesService: FilmesService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    console.log(id)

    this.filme = this.filmesService.pegarFilmeId(id)
  }

}
