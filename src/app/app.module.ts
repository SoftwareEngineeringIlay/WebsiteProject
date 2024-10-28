import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from '../components/home/home.component';
import { ElectronicsComponent } from '../components/electronics/electronics.component';
import { SailingComponent } from '../components/sailing/sailing.component';
import { ProductComponent } from '../components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ElectronicsComponent,
    SailingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
