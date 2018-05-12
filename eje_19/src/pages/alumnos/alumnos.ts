import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WelcomePage} from '../welcome/welcome';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {ActionSheetController} from 'ionic-angular';
/**
 * Generated class for the AlumnosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alumnos',
  templateUrl: 'alumnos.html',
})
export class AlumnosPage {

  formgroup:FormGroup;

  nombre:AbstractControl;
  apellidop:AbstractControl;
  apellidom:AbstractControl;
  email:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {
  
    this.formgroup = this.formbuilder.group({
      nombre:['',Validators.required],
      apellidop:['',Validators.required],
      apellidom:['',Validators.required],
      email:['',Validators.required]
    });
  
    this.nombre = this.formgroup.controls['nombre'];
    this.apellidop = this.formgroup.controls['apellidop'];
    this.apellidom = this.formgroup.controls['apellidom'];
    this.email = this.formgroup.controls['email'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumnosPage');
  }

  save():void{ 
 
      this.navCtrl.push(WelcomePage);
      
    }
    
}
