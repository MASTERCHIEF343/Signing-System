//Core
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Http
import { HttpModule, JsonpModule } from '@angular/http';
//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Component
import { AppComponent }   from './app.component';
import { Registerloginfrom } from './register-login-form.component';
import { Registerlogupfrom } from './register-logup-form.component';
import { UserComponent } from './userindex.component';
import { PageNotFoundComponent } from './pagenotfound.component';
//Providers
import { routing, appRoutingProviders } from './app-routing.module';
import { CookieService } from 'angular2-cookie/services/cookies.service';
//Directive
import { userMenuDirective } from './user-menu.directive';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		JsonpModule,
		routing,
	],
	declarations: [
		AppComponent,
		Registerloginfrom,
		Registerlogupfrom,
		UserComponent,
		PageNotFoundComponent,
		userMenuDirective
	],
	providers: [
		appRoutingProviders,
		CookieService,
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
