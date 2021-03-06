import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private series = [
    {
        id: 1,
        nome: "Futurama",
        dataLancamento: "10 de nov de 2000",
        temporadas: 5,
        nota: 4.5
    },
    {
        id: 2,
        nome: "The Simpsons",
        dataLancamento: "10 de Dez de 1989",
        temporadas: 30,
        nota: 3.3
    },
    {
        id: 3,
        nome: "Rick and Morty",
        dataLancamento: "10 de Fev de 2018",
        temporadas: 4,
        nota: 5
    },
    {
      id: 4,
      nome: "American Dad",
      dataLancamento: "02 de Abr de 2000",
      temporadas: 10,
      nota: 4.5
    },
    {
      id: 5,
      nome: "Breaking Bad",
      dataLancamento: "13 de Mai de 2009",
      temporadas: 5,
      nota: 5
  }
]

  constructor() { }

  pegarTodasSeries(){
    return this.series
  }

  pegarSeriePorId(idSerie){

    let serie = null

    for(let i=0; i < this.series.length; i++){
      if(this.series[i].id == idSerie){
        serie = this.series[i]
        break
      }
    }

    return serie

  }

  addSerie(serie){

    if(serie.id == null){
      this.series.push(serie)
    }else{
      this.atualizarSerie(serie)
    }

  }

  atualizarSerie(serie){
    for(let i=0; i < this.series.length; i++){
      if(this.series[i].id == serie.id){
        this.series[i] = serie
        break
      }
    }
  }

  removerSerieId(idSerie){
    for(let i=0; i < this.series.length; i++){
      if(this.series[i].id == idSerie){
        this.series.splice(i, 1)
        break
      }
    }
  }

}
