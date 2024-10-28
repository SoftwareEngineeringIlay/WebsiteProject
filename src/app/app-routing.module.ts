import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';

import { ElectronicsComponent } from '../components/electronics/electronics.component';
import { SailingComponent } from '../components/sailing/sailing.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'electronics', component: ElectronicsComponent },
    { path: 'sailing', component: SailingComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
