import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';


import { LoginPage } from "../pages/login/login";
import { TripsPage } from "../pages/trips/trips";
import { TripDetailPage } from "../pages/trip-detail/trip-detail";

import { ProfissionalProvider } from '../providers/profissional/profissional';
import { Profissional } from '../models/profissional';






export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {


dadosProfissional: Profissional
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public profProvider: ProfissionalProvider

  ) {
    this.initializeApp();

    this.profProvider.getDados().then((dados) => {
      this.dadosProfissional = dados;
      console.log(this.dadosProfissional)


    });
    this.appMenuItems = [
      {title: 'Ranking', component: TripsPage, icon: 'ios-paper'},
      {title: 'Avaliações', component: TripDetailPage, icon: 'ios-pricetags'},
      {title: 'Sair', component: LoginPage, icon: 'ios-exit'}


    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);


    });
  }



  openPage(page) {


    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  carregaDados(){


  }
  logout() {
    this.nav.setRoot(LoginPage);
  }

}
