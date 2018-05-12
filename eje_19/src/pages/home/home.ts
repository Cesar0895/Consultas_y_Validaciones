import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuoteService} from '../../services/quotes';
import {WelcomePage} from '../welcome/welcome';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {ActionSheetController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public user:string;
 public contra:string;
 public error:boolean=false;

 formgroup:FormGroup;

  usuario:AbstractControl;
  con:AbstractControl;

  constructor(public navCtrl: NavController, public quotes:QuoteService,public formbuilder:FormBuilder) {
this.quotes.getFavoriteSports();


this.formgroup = this.formbuilder.group({
  usuario:['',Validators.required],
  con:['',Validators.required]
});

this.usuario = this.formgroup.controls['usuario'];
this.con = this.formgroup.controls['con'];


  }

  login():void{
    
if(this.user==this.quotes.data.user && this.contra==this.quotes.data.contra){
console.log("Todo Bien");
this.error=false;
this.navCtrl.push(WelcomePage);
}
else{console.log(this.quotes.data.user);
  console.log(this.user);
  console.log(this.quotes.data.contra);
  console.log(this.contra);
this.error=true;
}
  }



}

