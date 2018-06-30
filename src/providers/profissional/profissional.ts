import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {IonicStorageModule} from '@ionic/storage';

/*
  Generated class for the ProfissionalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfissionalProvider {


  constructor(private IonicStorageModule: IonicStorageModule
  ) {
    
  }

}
