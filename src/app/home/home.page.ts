import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public numero1: number
  public numero2: number

  public operacao: string
  

  constructor(public alertController: AlertController) {}

  async vaiFormulario(){

    let result = 0

    if(this.operacao == "som"){
      result =  this.numero1 + this.numero2
    }else if(this.operacao == "sub"){
      result = this.numero1 - this.numero2
    }else if(this.operacao == "mul"){
      result = this.numero1 * this.numero2
    }else{
      result = this.numero1 / this.numero2
    }

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Resultado:',
      message: `O resultado da operação é ${result}`,
      buttons: ['OK']
    });

    await alert.present()
  }

}