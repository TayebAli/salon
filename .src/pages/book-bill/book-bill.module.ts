import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookBillPage } from './book-bill';

@NgModule({
  declarations: [
    BookBillPage,
  ],
  imports: [
    IonicPageModule.forChild(BookBillPage),
  ],
})
export class BookBillPageModule {}
