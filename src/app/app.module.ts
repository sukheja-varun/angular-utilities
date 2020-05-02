import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoInternetComponent } from './components/no-internet/no-internet.component';
import { HomeComponent } from './components/home/home.component';
import { DateExtensionComponent } from './components/date-extension/date-extension.component';

@NgModule({
  declarations: [
    AppComponent,
    NoInternetComponent,
    HomeComponent,
    DateExtensionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
