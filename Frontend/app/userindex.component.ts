//Core
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//Providers
import { CookieService } from 'angular2-cookie/core';

@Component({
	moduleId: module.id,
	selector: 'ng-main-content',
	templateUrl: 'pages/user-index.html',
	styleUrls:['../css/user-index.css'],
})

export class UserComponent{
	constructor(
		private route: ActivatedRoute,
	  	private router: Router,
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