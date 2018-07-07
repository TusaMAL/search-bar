import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [SearchBarComponent],
	imports: [IonicModule],
	exports: [SearchBarComponent]
})
export class ComponentsModule {}
