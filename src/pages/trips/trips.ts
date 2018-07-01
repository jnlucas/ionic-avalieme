import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import { ProfissionalProvider } from '../../providers/profissional/profissional';
import { Profissional } from '../../models/profissional';
import { Score } from '../../models/score';


import { HttpClient ,HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;

  dadosProfissional: Profissional
  score: Score[];


  constructor(public nav: NavController,
    public tripService: TripService,
    public profProvider: ProfissionalProvider,
    public httpClient: HttpClient) {
    // set sample data
    this.trips = tripService.getAll();

    this.profProvider.getDados().then((dados) => {
      this.dadosProfissional = dados;

      this.carregaRanking(dados);

    });

  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }

  carregaDados(){

    this.profProvider.getDados().then((dados) => {



    });

  }

  public carregaRanking(dados){


    var url = "http://api.14mob.com/score/"+dados.profissionalId+"/"+dados.meta+"/api"
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');

    this.httpClient.get(url,{},{headers:headers}).subscribe(data => {
        this.score = data;

    },
    err => {

    });

  }

}
