import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { Registerloginfrom } from './register-login-form.component';

import{ AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		AppRoutingModule,
	],
	declarations: [
		AppComponent,
		Registerloginfrom
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }