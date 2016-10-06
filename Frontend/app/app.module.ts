import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { Registerloginfrom } from './register-login-form.component';

@NgModule({
	imports: [
		BrowserModule
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