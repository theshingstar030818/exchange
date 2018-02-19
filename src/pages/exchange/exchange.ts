import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ExchangePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange',
  templateUrl: 'exchange.html'
})
export class ExchangePage {

  homeRoot = HomePage
  ordersRoot = 'OrdersPage'
  walletsRoot = 'WalletsPage'


  constructor(public navCtrl: NavController) {}

}
