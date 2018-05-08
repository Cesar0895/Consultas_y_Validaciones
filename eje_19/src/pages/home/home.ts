import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuoteService} from '../../services/quotes';
import {WelcomePage} from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public user:string;
 public contra:string;
 public error:boolean=false;

  constructor(public navCtrl: NavController, public quotes:QuoteService) {
this.quotes.getFavoriteSports();
  }

  login():void{
if(this.user==this.quotes.data.user && this.contra==this.quotes.data.contra){
console.log("Todo Bien");
this.error=false;
this.navCtrl.push(WelcomePage);
}
else{console.log("Email Incorrecto");
this.error=true;
}
  }

}

