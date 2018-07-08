import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [SearchBarComponent],
	imports: [IonicModule],
	exports: [SearchBarComponent]
})
export class SearchBarModule {}
