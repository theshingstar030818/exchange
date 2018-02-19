import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  banner = [{},{},{}];
  markets = [{
    name: 'BTC',
    vol: 134.958,
    lastPrice: 100043.78
  },{
    name: 'ADA',
    vol: 2242.900,
    lastPrice: 43.78
  }];

  constructor(public navCtrl: NavController) {}

  viewMarket(market){
    console.log(market);
    this.navCtrl.push('MarketTradePage',market);
  }
}