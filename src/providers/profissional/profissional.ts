import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';



/*
  Generated class for the ProfissionalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfissionalProvider {



  constructor(private storage: Storage) {


  }


  save(data,cpf){


    this.storage.set("cpf",cpf);

    this.storage.set("nome",data.nome);

    this.storage.set("foto",data.foto);
    this.storage.set("email",data.email);
    this.storage.set("profissionalId",data.id);
    this.storage.set("meta",data.meta);


  }

  public getDados(){


    return Promise.all( [
      this.storage.get("cpf"),
      this.storage.get("nome"),
      this.storage.get("foto"),
      this.storage.get("email"),
      this.storage.get("profissionalId"),
      this.storage.get("meta")],
    ).then((arrayOfResults) => {

        var retorno = {
          cpf: arrayOfResults[0],
          nome:  arrayOfResults[1],
          foto:  arrayOfResults[2],
          email:  arrayOfResults[3],
          profissionalId: arrayOfResults[4],
          meta: arrayOfResults[5]

        }
        return retorno

    });






  }

}
