import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
    selector: "app-avaliacao",
    templateUrl: "avaliacao.component.html",
    styleUrls: ["avaliacao.component.scss"]
})


export class AvaliacaoComponent implements OnChanges {

    @Input()
    public nota = 0;
    public icones = []

    ngOnChanges() {
        /*
        for(let i = 1; i <= this.nota; i++){
            this.icones.push("heart")
        }*/

        for(let i=0; i<=4; i++){

            let min = i
            let max = i + 1
            let nomeIcone = null

            if(this.nota <= min){
                nomeIcone = "heart-outline"
            }

            if(this.nota > min && this.nota < max){
                nomeIcone = "heart-half"
            }

            if(this.nota >= max){
                nomeIcone = "heart"
            }

            this.icones[i] = nomeIcone

        }
        
    }

}