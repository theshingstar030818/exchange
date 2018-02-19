import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExchangePage } from '../pages/exchange/exchange';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdaProvider } from '../providers/ada/ada';
import { CoinMarketCapProvider } from '../providers/coin-market-cap/coin-market-cap';
import { CoinIconsProvider } from '../providers/coin-market-cap/icons';

@NgModule({
  declarations: [
    MyApp,
    ExchangePage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExchangePage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdaProvider,
    CoinMarketCapProvider,,
    CoinIconsProvider
  ]
})
export class AppModule {}
