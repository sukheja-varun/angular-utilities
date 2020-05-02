import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NoInternetComponent } from './components/no-internet/no-internet.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'no-internet', component: NoInternetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
