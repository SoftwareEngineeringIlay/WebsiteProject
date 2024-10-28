import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from '../components/home/home.component';

import { Electronics } from '../components/electronics/electronics.component';
import { Sailing } from '../components/sailing/sailing.component';

const routes: Routes = [
    { path: '', component: Home },
    { path: 'electronics', component: Electronics },
    { path: 'sailing', component: Sailing }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
