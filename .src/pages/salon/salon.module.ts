import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonPage } from './salon';
import { Ionic2RatingModule } from "ionic2-rating";


@NgModule({
  declarations: [
    SalonPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonPage),
    Ionic2RatingModule
  ],
})
export class SalonPageModule {}
