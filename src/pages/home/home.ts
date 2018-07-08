import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FilterModel } from '../../components/search-bar/search-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arr = [
    {
      label: 'Teste 1',
      nome: 'Felipe',
      endereco: 'Nova Granada',
    },
    {
      label: 'Teste 2',
      nome: 'TusaMAL',
      endereco: 'DOTO 2',
    },
    {
      label: 'Teste 3',
      nome: 'Felipe',
      endereco: 'Nova Granada',
    }
  ]

  arr2: any;

  filterOptions: FilterModel[] = [
    {
      value: 'label',
      label: 'Label'
    },
    {
      value: 'nome',
      label: 'Nome'
    },
    {
      value: 'endereco',
      label: 'Endereco'
    }
  ];

  constructor(
    public navCtrl: NavController,
  ) {
  }

  filtered(event: Array<any> | Observable<Array<any>>) {
    this.arr2 = event;
  }
  
  selected(event: FilterModel) {
    console.log(event);
  }
}
