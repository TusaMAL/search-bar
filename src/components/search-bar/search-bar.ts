import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

/**
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {

  @Input() placeholder: string;
  @Input() filterOptions: any[];
  @Input() filterArray: any[];
  @Output() filteredEmitter = new EventEmitter<any[] | Observable<any[]>>();
  @Input() returnAsObservable: boolean;
  @Input() showFunnel: boolean;

  constructor(
  ) {
  }

  ngAfterViewInit() {
    if(this.returnAsObservable) {
      this.filteredEmitter.emit(of(this.filterArray));
    } else {
      this.filteredEmitter.emit(this.filterArray);
    }
  }

  onInput(value: string) {
    let backupList = this.filterArray;

    if(value && value.trim() != "") {
      backupList = backupList.filter(prop => {
        return (prop.label.toLowerCase().indexOf(value.toLowerCase()) > -1);
      })
    }
    if(this.returnAsObservable) {
      this.filteredEmitter.emit(of(backupList));
    } else {
      this.filteredEmitter.emit(backupList);
    }
  }

}
