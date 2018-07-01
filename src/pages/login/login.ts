import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";

import {TripsPage} from "../trips/trips";
import { ProfissionalProvider } from '../../providers/profissional/profissional';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  cpf: string
  profissional: Observable<any>;

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


  if(this.cpf != null){
    var url = "http://api.14mob.com/profissional/"+this.cpf+"/api"
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');

     this.httpClient.get(url,{headers:headers}).subscribe(data => {
      this.profProv.save(data,this.cpf);
      this.profProv.getDados().then((arrayOfResults) => {

        this.nav.setRoot(TripsPage);
      });
    }, err =>{

    })
  }




  }


}
