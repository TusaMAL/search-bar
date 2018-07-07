import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arr = [
    {
      label: 'Teste 1',
      value: '1',
    },
    {
      label: 'Teste 2',
      value: '2',
    },
    {
      label: 'Teste 3',
      value: '3',
    }
  ]

  arr2: any;

  constructor(
    public navCtrl: NavController,
  ) {
  }

  filtered(event: any[] | Observable<any[]>) {
    this.arr2 = event;
  }
}
