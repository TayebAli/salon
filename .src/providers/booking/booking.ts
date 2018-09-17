import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class BookingProvider {
  id :any= localStorage.getItem("userID");

  booking: any;
  getBooking: any;
  // url: string = "http://192.168.56.1:82";
  // url: string = "http://192.168.8.104:8000";
  //  url: string = "http://127.0.0.1:8000";
  url: string = "http://salonat.herokuapp.com";


  // url: string = "http://192.168.0.2:8000";

  constructor(public http: Http) {

    this.booking = this.url + "/api/v1/booking/add"
    this.getBooking = this.url + "/api/v1/booking/getByUser/"

  }

  //

  userBook(userID, staffID, serveID, salonID, time, day, feedback) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));

    let body = {
      "time": time,
      "date": day,
      "salons_id": salonID,
      'serveries_id': serveID,
      'staff_id': staffID,
      "user_id": userID,
      "feedback": feedback,
      "status": 1
    };

    return this.http.post(this.booking,
      JSON.stringify(body), {headers: headers})
      .map(res => res.json());
  }

  getBook() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.getBooking +localStorage.getItem("userID"), {headers:headers}).map(res => res.json());


  }
}
