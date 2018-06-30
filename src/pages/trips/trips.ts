import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import { ProfissionalProvider } from '../../providers/profissional/profissional';

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;
  profProvider: ProfissionalProvider

  constructor(public nav: NavController, public tripService: TripService,  public profProvider: ProfissionalProvider) {
    // set sample data
    this.trips = tripService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
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
