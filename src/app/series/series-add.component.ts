import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SeriesService } from './series.service'


@Component({
    selector: 'app-series-add',
    templateUrl: 'series-add.component.html'
})

export class SeriesAddComponent implements OnInit{

    public serie = {}

    constructor(private seriesService: SeriesService, private router: Router){}

    ngOnInit(){

    }

    vaiFormulario(){
        this.seriesService.addSerie(this.serie)
        this.router.navigate(['/'])
    }

}