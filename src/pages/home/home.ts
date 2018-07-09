import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FilterModel } from 'ionic-search-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista1 = [
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
  ];

  lista2 = [
    {
      label: 'OMG 1',
      nome: 'GMO 1',
      endereco: 'MGO 1',
    },
    {
      label: 'ASDF',
      nome: 'FDAS',
      endereco: 'ASDF',
    },
    {
      label: '123321',
      nome: 'VCXZ',
      endereco: 'ZXC',
    }
  ];

  arr = [];

  segment: string = 'lista1';

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
    this.arr = this.lista1;
  }

  filtered(event: Array<any> | Observable<Array<any>>) {
    this.arr2 = event;
  }
  
  selected(event: FilterModel) {
    console.log(event);
  }

  segmentChanged(event) {
    event.value == 'lista1' ? this.arr = this.lista1 : this.arr = this.lista2;
  }
}
