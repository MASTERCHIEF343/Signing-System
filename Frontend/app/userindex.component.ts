//Core
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//Providers
import { CookieService } from 'angular2-cookie/core';

@Component({
	moduleId: module.id,
	selector: 'ng-main-content',
	templateUrl: 'user-index.html',
	styleUrls:['index.css'],
})

export class UserComponent{
	constructor(
		private route: ActivatedRoute,
	  	private router: Router,
	  	private _CookieServers: CookieService
	){}

	id = [];

	ngOnInit(){
		let data = this.getCookie();
		let user = JSON.parse(data['u']);
		this.id = user.id;
	}

	getCookie(){
		let data = this._CookieServers.getAll();
		return data;
	}
}