import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuoteServices } from '../../services/quotesa';

/**
 * Generated class for the CalificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calificaciones',
  templateUrl: 'calificaciones.html',
})
export class CalificacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public quotes:QuoteServices) {
    this.quotes.getAlumnos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalificacionesPage');
  }

  save():void{ 
   
    
  }
}
