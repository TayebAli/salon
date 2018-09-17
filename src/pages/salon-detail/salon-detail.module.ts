import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonDetailPage } from './salon-detail';

@NgModule({
  declarations: [
    SalonDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonDetailPage),
  ],
})
export class SalonDetailPageModule {}
