import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { Registerloginfrom } from './register-login-form.component';

const routes:Routes = [
	{
		path: 'registe',
		component: Registerloginfrom
	},
	{
		path: '',
		component: AppComponent
	}
]


export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });