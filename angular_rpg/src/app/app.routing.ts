import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
	{ path:'', component:HomeComponent },
	{ path:'character', component: CharactersComponent }
]

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }