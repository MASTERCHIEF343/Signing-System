import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent }   from './app.component';
import { Registerloginfrom } from './register-login-form.component';
import { Registerlogupfrom } from './register-logup-form.component';

import{ routing, appRoutingProviders } from './app-routing.module';

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
		Registerlogupfrom
	],
	providers: [
		appRoutingProviders
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
