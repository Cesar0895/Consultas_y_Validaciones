import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { AlumnosPage } from '../pages/alumnos/alumnos';
import { CalificacionesPage } from '../pages/calificaciones/calificaciones';

import {HttpModule} from '@angular/http';
import {QuoteService} from '../services/quotes';
import {QuoteServices} from '../services/quotesa';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    AlumnosPage,
    CalificacionesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    AlumnosPage,
    CalificacionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuoteService,
    QuoteServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
