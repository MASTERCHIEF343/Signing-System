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
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'angular2-cookie/services/cookies.service';

//Directive
import { userMenuDirective } from './services/user-menu.directive';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		JsonpModule,
		AppRoutingModule,
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
		CookieService,
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
