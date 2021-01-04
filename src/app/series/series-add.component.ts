import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { SeriesService } from './series.service'


@Component({
    selector: 'app-series-add',
    templateUrl: 'series-add.component.html'
})

export class SeriesAddComponent implements OnInit{

    public serie = {}

    constructor(private activatedRoute: ActivatedRoute, private seriesService: SeriesService, private router: Router){}

    ngOnInit(){
        const id = this.activatedRoute.snapshot.paramMap.get("id")
        if(id !== null){
            this.serie = this.seriesService.pegarSeriePorId(id)
            this.serie.id = id
        }
    }

    vaiFormulario(){
        this.seriesService.addSerie(this.serie)
        this.router.navigate(['/'])
    }

}