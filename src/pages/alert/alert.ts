import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  alertaSimples(){
    let alerta = this.alertCtrl.create(
      {
        title:'Atenção',
        subTitle:'Bacon Vegano',
        buttons:['Ok']
      }
    );
    alerta.present();
  }

  alertaConfirma(){
    let alerta = this.alertCtrl.create(
      {
        title:'Atenção',
        subTitle:'Bacon Vegano',
        message:'Brincadeira Banco vegano não é bacon!',
        buttons:[
          {
            text:'Cancelar',
            role:'cancel',
            handler:()=>{
              console.log('Viva ao Bacon!');
            }
          },
          {
            text:'Confirmar',
            handler:()=>{
              console.log('Nunca coma bacon de vegetais!');
            }
          }
        ]
      }
    );
    alerta.present();
  }

  alertaInput(){

  }

}
