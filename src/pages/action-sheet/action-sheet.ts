import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the ActionSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

  abrirActionSheet(){
    let actionSheet = this.actionSheetCtrl.create(
      {
        title:'Opções',
        buttons:[
          {
            icon:'ios-beer',
            text:'Cerveja Quente',
            role:'destructive',
            handler:()=>{
              alert('Clicou na opção A')
            }
          },
          {
            icon:'ios-cafe',
            text:'Café Gelado',
            handler:()=>{
              alert('Clicou na opção B')
            }
          },
          {
            icon:'md-exite',
            text:'Cancelar',
            role:'cancel',
            handler:()=>{
              alert('Clicou na opção Cancelar')
            }
          }
        ]

      }
    );
    
    actionSheet.present();
  }

}
