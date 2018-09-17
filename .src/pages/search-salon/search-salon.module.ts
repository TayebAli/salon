import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchSalonPage } from './search-salon';

@NgModule({
  declarations: [
    SearchSalonPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchSalonPage),
  ],
})
export class SearchSalonPageModule {}
