import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
   // used for an example of ngFor and navigation
   this.pages = [
    {title: 'الرئيسية', component: 'HomePage', icon: "home"},
    {title: 'الأعضاء', component: 'ProfilePage', icon: "person"},
    {title: 'المفضلة', component: 'BookmarksPage', icon: "heart"},
    {title: 'عن التطبيق', component: 'about', icon: "mail"},

  ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.rootPage = 'GetShoppItemPage';
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
