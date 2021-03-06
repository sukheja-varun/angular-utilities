import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoInternetComponent } from './components/no-internet/no-internet.component';
import { HomeComponent } from './components/home/home.component';
import { DateExtensionComponent } from './components/date-extension/date-extension.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastDemoComponent } from './components/toast-demo/toast-demo.component';
import { CamelCaseToWordsPipe } from './pipes/camel-case-to-words.pipe';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { ReplaceCharacterPipe } from './pipes/replace-character.pipe';
import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';
import { LodashGetPipe } from './pipes/lodash-get.pipe';

/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NoInternetComponent,
    HomeComponent,
    DateExtensionComponent,
    ToastComponent,
    ToastDemoComponent,
    CamelCaseToWordsPipe,
    PipesDemoComponent,
    ReplaceCharacterPipe,
    CurrencySymbolPipe,
    LodashGetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
