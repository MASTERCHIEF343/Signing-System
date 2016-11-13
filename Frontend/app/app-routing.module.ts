import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { Registerloginfrom } from './register-login-form.component';
import { Registerlogupfrom } from './register-logup-form.component';
import { UserComponent } from './userindex.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
	imports: [
		RouterModule.forRoot([
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
				component: UserComponent,
				canActivate: [AuthGuard]
			},
			{
				path: '**', 
				component: PageNotFoundComponent
			},
		], { useHash: true })
	],
	exports: [
		RouterModule
	],
	providers: [
		AuthService,
		AuthGuard
	]
})

export class AppRoutingModule {}