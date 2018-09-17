// import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {HttpClient} from "@angular/common/http";

/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendProvider {
   // local: string = "http://127.0.0.1:8000";
  local: string = "http://salonat.herokuapp.com";
  // local: string = "http://192.168.0.2:8000";
  // local: string = "http://192.168.56.1:82";
  // local: string = "http://192.168.8.104:82";


  salon: any;
  salonId: any;

  serve: any;
  serveId: any;

  staffs: any;

  token: any;
  // headers :any ;
  constructor(public http: Http,
              public https: HttpClient) {
    //
    // let headers = new Headers();
    // headers.append('Content-Type','application/json');
    // headers.append('Accept', 'application/json');
    //  this.headers = {headers: headers};
    this.salon = this.local + "/api/v1/salons";
    this.salonId = this.local + "/api/v1/salons/getById/";

    this.serve = this.local + "/api/v1/serveries";
    this.serveId = this.local + "/api/v1/serveries/getById/";

    this.staffs = this.local + "/api/v1/staff/getById/";

    this.token = this.local + "/api/v1/"
  }


  getSalon() {
    console.log("Time Pro");
    return new Promise(resolve => {
      this.https.get(this.salon).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

    // return this.http.get(this.salon, {headers:this.headers}).map(res => res.json());
  }

  getSalonById(id) {
    return this.http.get(this.salonId + id).map(res => res.json());

  }

  getServes() {
    return this.http.get(this.serve).map(res => res.json());

  }

  getServesById(id) {
    return this.http.get(this.serveId + id).map(res => res.json());

  }


  //The Staff Call
  getStaffById(id) {
    return this.http.get(this.staffs + id).map(res => res.json());

  }

}
