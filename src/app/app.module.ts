import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Home } from '../components/home/home.component';
import { Electronics } from '../components/electronics/electronics.component';
import { Sailing } from '../components/sailing/sailing.component';
import { Product } from '../components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    Product,
    Home,
    Electronics,
    Sailing
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
