import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuoteService} from '../../services/quotes';
import {WelcomePage} from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public email:string;
 public error:boolean=false;

  constructor(public navCtrl: NavController, public quotes:QuoteService) {
this.quotes.getFavoriteSports();
  }

  login():void{
if(this.email==this.quotes.data.email){
console.log("Todo Bien");
this.error=false;
this.navCtrl.push(WelcomePage);
}
else{console.log("Email Incorrecto");
this.error=true;
}
  }

}

