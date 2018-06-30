import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";

import { ErrorHandler, NgModule } from '@angular/core';


import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import { ProfissionalProvider } from '../providers/profissional/profissional';

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TripDetailPage,
    TripsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: 'avalieme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TripDetailPage,
    TripsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfissionalProvider
  ]
})

export class AppModule {
}
