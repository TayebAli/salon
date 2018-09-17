import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ShopingProvider} from "../../providers/shoping/shoping";


@IonicPage()
// @IonicPage({name:'shopping-cart'})
@Component({
    selector: 'page-shopping-cart',
    templateUrl: 'shopping-cart.html',
})
export class ShoppingCartPage {
    data: any;
    Type = "All";
    price:any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private shopPro: ShopingProvider
    ) {
    }

    ionViewDidLoad() {
        this.getAllItems()
    }

    getItemId(id, item, price, quantity) {
        // console.log('id: ',id, "\n item=: ",item)
        this.navCtrl.push('GetShoppItemPage', {"id": id, "Items": item, "price":price, "quantity":quantity})
    }

    getAllItems() {
        this.shopPro.getAllItemsProvider().then(data => {
            this.data = data;
            // console.log("data before: ", this.data);
            this.data = this.data.data;
            // console.log("data after: ", this.data);
        }).catch((err) => {

            console.error(err);

        });
    }


}
