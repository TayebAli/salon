import {Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';


@IonicPage()
@Component({
    selector: 'page-get-shopp-item',
    templateUrl: 'get-shopp-item.html',
})
//> gret Than
//< les than
export class GetShoppItemPage {
    itemId: number;
    item: any[];
    // tab: Array<number>;
    price: any;
    qun: any;
    newQun: number = 0;
    newPrice: number = 0;
    isenabled: boolean = true;
    isenabled2: boolean = false;
    opationItem = 'home';
    // @ViewChild(Slides) slides: Slides;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public imageViewerCtrl: ImageViewerController
    ) {
        this.itemId = this.navParams.get("id");
        this.item = this.navParams.get("Items");
        this.price = this.navParams.get("price");
        this.qun = this.navParams.get("quantity");
    }

    ionViewDidLoad() {
    }
    onClick(imageToView) {
        const viewer = this.imageViewerCtrl.create(imageToView)
        viewer.present();
    }
    onClick2(imageToView2) {
        const viewer = this.imageViewerCtrl.create(imageToView2)
        viewer.present();
    }
    homeImage(image) {
        const viewer = this.imageViewerCtrl.create(image) 
        viewer.present();
    }


    // ionViewWillEnter() {
    //     console.log('Enter Page 3');
    // }
    // ngAfterViewInit() { 
    //     this.slides.freeMode = true;
    // }



    requestItem(qun) {
      
    }

    add() {
        this.isenabled2 = true;
        this.newQun = this.newQun + 1
        this.newPrice = this.price * this.newQun;
        if (this.newQun == this.qun) {
            this.isenabled = false;

            console.log("Stop: ");
        }


    }

    min() {
        this.isenabled = true;

        this.newQun = this.newQun - 1;
        this.newPrice = this.price * this.newQun;

        if (this.newQun == 0) {
            this.isenabled2 = false
        }
        console.log("Stop: ");
    }

}
