import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes : Routes = [
	{ path:'', component:HomeComponent },
	{ path:'character', component: CharactersComponent },
	{ path:'login', component: LoginComponent },
	{ path:'register', component: RegisterComponent },
	{ path:'userhome', component: UserhomeComponent }
]

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }