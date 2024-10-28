import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from '../components/home/home.component';
import { Electronics } from '../components/electronics/electronics.component';
import { Sailing } from '../components/sailing/sailing.component';
import { ProductDetail } from '../components/products/product-detail/product-detail.component';


const routes: Routes = [
    { path: '', component: Home },
  { path: 'electronics', component: Electronics },
  { path: 'sailing', component: Sailing },
  
  // Product detail routes for Electronics
  { path: 'product/wireless-earbuds', component: ProductDetail }, // Wireless Earbuds
  { path: 'product/smartwatch', component: ProductDetail }, // Smartwatch
  { path: 'product/bluetooth-speaker', component: ProductDetail }, // Bluetooth Speaker
  { path: 'product/tv', component: ProductDetail }, // TV
  
  // Product detail routes for Sailing
  { path: 'product/sail-yacht', component: ProductDetail }, // Sail Yacht
  { path: 'product/sailing-ropes', component: ProductDetail }, // Sailing Ropes
  { path: 'product/sails', component: ProductDetail }, // Sails
  { path: 'product/sailing-smartwatch', component: ProductDetail }, // Sailing Smartwatch
  
  // Fallback route
  { path: 'product/:id', component: ProductDetail } // Fallback route for other products
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
