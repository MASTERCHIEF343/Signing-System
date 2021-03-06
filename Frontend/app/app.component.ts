//Core
import { Component, Renderer, ElementRef, AfterContentChecked  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//Providers
import { CookieService } from 'angular2-cookie/core';
import { AuthService } from './services/auth.service';

@Component({
	selector: 'my-app',
	template: `
		<nav class="navbar" role="navigation">
			<div class="navbar-header">
				<a class="navbar-brand" (click)="backToHome()">IGN SYSTEM</a>
			</div>
			<div id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li><a href="#">特性</a></li>
					<li><a href="#">文档</a></li>
					<li><a href="#">通信</a></li>
					<li><a href="#">关于</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li *ngIf="active"><a (click)="goToLogIn()">控制台</a></li>
					<li *ngIf="!active" class="dropdown" user-menu>
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"> {{ username }} <span class="caret"></span></a>
						<ul id="menu"  class="dropdown-menu" role="menu">
							<li><a>设置</a></li>
							<li><a (click)="goToControl()">控制台</a></li>
							<li><a (click)="logout()">退出</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls:['../css/style.css'],
})

export class AppComponent {
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private el: ElementRef,
		private _CookieServers: CookieService,
		private authService: AuthService
	){}

	active = true;
	id = [];
	username = [];

	ngAfterContentChecked(){
		let dom = this.el.nativeElement;
		if(dom.querySelector('#id') != undefined || dom.querySelector('#id') != null){
			this.active = false;
			this.id = dom.querySelector('#id').innerHTML;
			let user = JSON.parse(this._CookieServers.get('u'));
			this.username = user.name;
		}else{
			this.active = true;
		};
	}

	getCookie(){
		let data = this._CookieServers.getAll();
		return data;
	}

	goToControl():void{
		this.router.navigate(['/control']);
	}

	backToHome():void{
		this.router.navigate(['']);
	}

	goToLogIn():void{
		this.router.navigate(['/login']);
	}

	logout():void{
		this.authService.logout();
		this._CookieServers.removeAll();
		this.router.navigate(['']);
	}
}
