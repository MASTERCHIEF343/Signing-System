import { Component } from '@angular/core';

import './rxjs-operators';

@Component({
	selector: 'my-app',
	template: `
		<h1>Router</h1>
		<nav>
			<a routerLink="/registe" routerLinkActive="active" >Register</a>
		</nav>
		<router-outlet></router-outlet>
	`
})

export class AppComponent {
	
}