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
      nome: 'Av. 1',
      label: {
        label: 'Avenida 1'
      },
      endereco: {
        endereco: {
          endereco: 'Avenue 1'
        }
      },
    },
    {
      nome: 'Av. 2',
      label: {
        label: 'Avenida 2'
      },
      endereco: {
        endereco: {
          endereco: 'Avenue 2'
        }
      },
    },
    {
      nome: 'Av. 3',
      label: {
        label: 'Avenida 3'
      },
      endereco: {
        endereco: {
          endereco: 'Avenue 3'
        }
      },
    },
    {
      nome: 'Av. 4',
      label: {
        label: 'Avenida 4'
      },
      endereco: {
        endereco: {
          endereco: 'Avenue 4'
        }
      },
    }
  ];

  lista2 = [
    {
      nome: 'Av. 5',
      label: {
        label: 'Avenida 5'
      },
      endereco: {
        endereco: {
          endereco: 'Avenue 5'
        }
      },
    },
    {
      nome: 'Av. 6',
      label: {
        label: 'Avenida 6'
      },
      endereco: {
        endereco: {
          endereco: 'Avenue 6'
        }
      },
    },
    {
      nome: 'Av. 7',
      label: {
        label: 'Avenida 7'
      },
      endereco: {
        endereco: {
          endereco: 'Avenue 7'
        }
      },
    },
    {
      nome: 'Av. 8',
      label: {
        label: 'Avenida 8'
      },
      endereco: {
        endereco: {
          endereco: 'Avenue 8'
        }
      },
    }
  ];

  arr = [];

  segment: string = 'lista1';

  arr2: any;

  filterOptions: FilterModel[] = [
    {
      value: 'nome',
      label: 'Nome'
    },
    {
      value: 'label.label',
      label: 'Label'
    },
    {
      value: 'endereco.endereco.endereco',
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
