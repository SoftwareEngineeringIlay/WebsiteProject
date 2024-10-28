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
  { path: 'product/wireless-earbuds', component: ProductDetail },
  { path: 'product/smartwatch', component: ProductDetail },
  { path: 'product/bluetooth-speaker', component: ProductDetail }, 
  { path: 'product/tv', component: ProductDetail },
  
  // Product detail routes for Sailing
  { path: 'product/sail-yacht', component: ProductDetail },
  { path: 'product/sailing-ropes', component: ProductDetail },
  { path: 'product/sails', component: ProductDetail },
  { path: 'product/sailing-smartwatch', component: ProductDetail }, 
  
  // Fallback route
  { path: 'product/:id', component: ProductDetail } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
