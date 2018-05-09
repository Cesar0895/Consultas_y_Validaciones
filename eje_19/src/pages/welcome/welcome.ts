import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuoteService} from "../../services/quotes";
import { AlumnosPage } from '../alumnos/alumnos';
import { CalificacionesPage } from '../calificaciones/calificaciones';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public quote:QuoteService) {
    console.log("Informacion"+this.quote.data);
  }

  alumnos():void{ 
    this.navCtrl.push(AlumnosPage);
      }

      calificaciones():void{ 
        this.navCtrl.push(CalificacionesPage);
          }

}
