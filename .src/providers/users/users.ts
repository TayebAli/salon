import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  local: string = "http://salonat.herokuapp.com";
  //  local: string = "http://127.0.0.1:8000";
  // local: string = "http://192.168.0.2:8000";
  // local: string = "http://192.168.56.1:82";
  // local: string = "http://192.168.8.104:82";

  register: any;
  login: any;

  constructor(public http: Http) {

    this.register = this.local + "/api/v1/users/add";
    this.login = this.local + "/api/v1/users/login"
  }


  userRegister(fullName, email, contact, password, password_confirmation) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let body = {
      "name": fullName,
      "email": email,
      "contact": contact,
      "password": password,
      "password_confirmation":
        password_confirmation,
    }
      ;
    return this.http.post(this.register, JSON.stringify(body), { headers: headers })
      .map(res => res.json());
  }

  userLogin(email, password) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let body = {
      "email": email,
      "password": password
    };

    return this.http.post(this.login, JSON.stringify(body), { headers: headers })
      .map(res => res.json());
  }


}
