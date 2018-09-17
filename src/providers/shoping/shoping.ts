import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ShopingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopingProvider {
    url = "http://localhost:8000/api/v1/";
    AllItems = "shopitem";
    ItemById = "shopitem/getById/";
    ItemAdd = "shopitem/add/";

    AllItemsUrl: string;
    ItemByIdUrl: string;
    ItemAddUrl: string;

    constructor(public http: HttpClient) {
        this.AllItemsUrl = this.url + this.AllItems;
        this.ItemByIdUrl = this.url + this.ItemById;
        this.ItemAddUrl = this.url + this.ItemAdd;
    }


    getAllItemsProvider() {
        return new Promise(resolve => {
            this.http.get(this.AllItemsUrl).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getItemByIdProvider(id) {
        return new Promise(resolve => {
            this.http.get(this.ItemByIdUrl + id).subscribe(data => {
                    resolve(data);
                },
                error1 => {
                    console.log(error1);
                })
        })
    }

    addNewItemProviser(data) {
        return new Promise(resolve => {
            this.http.post(this.ItemAddUrl, data).subscribe(data => {
                    resolve(data);
                },
                error1 => {
                    console.log(error1);
                })
        })
    }
}
