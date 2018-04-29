import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRouter } from './app.routing';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HomeComponent
  ],
  imports: [
    AppRouter,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [RouterModule]
})
export class AppModule { }
