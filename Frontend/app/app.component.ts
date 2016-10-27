import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
	selector: 'my-app',
	template: `
		<nav class="navbar" role="navigation">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					
					<a class="navbar-brand" (click)="backToHome()">IGN SYSTEM</a>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li><a href="#">特性</a></li>
						<li><a href="#">文档</a></li>
						<li><a href="#">通信</a></li>
						<li><a href="#">关于</a></li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#">登录</a></li>
						<li><a href="#">注册</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<header class="header background-sky"></header>
		<router-outlet></router-outlet>
	`
})

export class AppComponent {
	constructor(
		private router: Router,
	){}

	backToHome():void{
		this.router.navigate(['']);
	}
}
