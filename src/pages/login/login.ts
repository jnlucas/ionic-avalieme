import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {TripsPage} from "../trips/trips";
import { ProfissionalProvider } from '../../providers/profissional/profissional';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  profissional: Observable<any>;
  httpClient: HttpClient;
  urlLogin: String = "http://api.14mob.com/profissional/api";


  constructor(public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public profProv: ProfissionalProvider,
    public httpClient: HttpClient) {



    this.menu.swipeEnable(false);
  }



  // login and go to home page
  login() {

console.log(this.cpf)

 this.profissional = this.httpClient.get(this.urlLogin,{});
   this.profissional
   .subscribe(data => {
     console.log('my data: ', data);
   })

    //console.log(this.profissional)

    this.nav.setRoot(TripsPage);
  }


}
