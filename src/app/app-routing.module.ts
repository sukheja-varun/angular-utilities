import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NoInternetComponent } from './components/no-internet/no-internet.component';
import { DateExtensionComponent } from '@component/date-extension/date-extension.component';
import { ToastDemoComponent } from '@component/toast-demo/toast-demo.component';
import { PipesDemoComponent } from '@component/pipes-demo/pipes-demo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'no-internet', component: NoInternetComponent },
  { path: 'date-extension', component: DateExtensionComponent },
  { path: 'toast', component: ToastDemoComponent },
  { path: 'pipes', component: PipesDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
