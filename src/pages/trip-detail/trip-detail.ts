import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import { ProfissionalProvider } from '../../providers/profissional/profissional';

import { HttpClient ,HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {
  // trip info
  public trip: any;
  // number of adult
  public profissional: Observable<any>;
  public profissionalNome: Observable<any>;

  public avaliacoes: Observable<any>;

  // number of children

  public trips: any;
  profProvider: ProfissionalProvider
  httpClient: HttpClient

  constructor(public nav: NavController,
    public tripService: TripService,
    public profProvider: ProfissionalProvider,
    public httpClient: HttpClient) {
    // set sample data
    this.trip = tripService.getItem(1);
    this.trips = tripService.getAll();
    this.httpClient = httpClient

    this.profProvider = profProvider;

    this.profProvider.getDados().then((dados) => {

      this.profissionalNome = dados.nome

      this.carregaAvaliacoes(dados);

    });

  }


  carregaDados(){
    this.profProvider.getDados().then((dados) => {
      $(function(){
        $("#foto-profissional").attr("src",dados.foto)
        $(".nomeProfissional").html(dados.nome)
        $(".emailProfissional").html(dados.email)


      })
    });
  }


  public carregaAvaliacoes(dados){


    var url = "http://api.14mob.com/score/"+dados.profissionalId+"/"+dados.meta+"/api-avaliacao"
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');

    var promisse = this.httpClient.get(url,{},{headers:headers});

    promisse.subscribe(data => {
        this.avaliacoes = data;

    });

  }
}
