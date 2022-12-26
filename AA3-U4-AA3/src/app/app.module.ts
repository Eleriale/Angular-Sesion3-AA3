import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Asincrona3Module } from './asincrona3/asincrona3.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Asincrona3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
