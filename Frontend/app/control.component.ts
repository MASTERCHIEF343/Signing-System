import { Component, OnInit } from '@angular/core';
//Providers
import { CookieService } from 'angular2-cookie/core';

@Component({
	moduleId: module.id,
	selector: 'ng-control',
	templateUrl: 'pages/control-page.html',
	styleUrls: ['../css/control-page.css'],
})

export class ControlComponent {
	constructor(
		private _CookieServices: CookieService
	){}

	id = [];

	ngOnInit(){
		let data = this.getCookie();
		let user = JSON.parse(data['u']);
		this.id = user.id;
	}

	getCookie(){
		let data = this._CookieServices.getAll();
		return data;
	}
}