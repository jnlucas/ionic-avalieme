import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import { ProfissionalProvider } from '../../providers/profissional/profissional';

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {
  // trip info
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;
  public trips: any;
  profProvider: ProfissionalProvider

  constructor(public nav: NavController, public tripService: TripService,  public profProvider: ProfissionalProvider) {
    // set sample data
    this.trip = tripService.getItem(1);
    this.trips = tripService.getAll();
    this.profProvider = profProvider;


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
}
