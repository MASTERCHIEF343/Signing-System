import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { Registerloginfrom } from './register-login-form.component';
import { Registerlogupfrom } from './register-logup-form.component';
import { UserComponent } from './userindex.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes:Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'logup',
		component: Registerlogupfrom
	},
	{
		path: 'login',
		component: Registerloginfrom
	},
	{
		path: 'member',
		component: UserComponent
	},
	{
		path: '**', 
		component: PageNotFoundComponent
	},
]


export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, 
{ useHash: true });
