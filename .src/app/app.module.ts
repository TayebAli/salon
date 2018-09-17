import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Ionic2RatingModule} from 'ionic2-rating';
import {IonicStorageModule} from '@ionic/storage';
import {HttpModule} from '@angular/http';
import {BackendProvider} from '../providers/backend/backend';
import {UsersProvider} from '../providers/users/users';
import {BookingProvider} from '../providers/booking/booking';
import {BookmarksProvider} from '../providers/bookmarks/bookmarks';
import {HttpClientModule} from '@angular/common/http';
// import {GoogleMaps} from "@ionic-native/google-maps";
import {Geolocation} from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // SalonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserModule,
    Ionic2RatingModule,
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // SalonPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackendProvider,
    UsersProvider,
    BookingProvider,
    BookmarksProvider,
    Geolocation,


  ]
})
export class AppModule {
}
