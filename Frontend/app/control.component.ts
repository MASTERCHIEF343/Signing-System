import { Component, OnInit, Renderer, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
//Providers
import { CookieService } from 'angular2-cookie/core';
import { ViewContainerRef } from '@angular/core';
import { Message } from 'primeng/primeng';
//Class
import { Timer } from './class/date-time';

@Component({
	moduleId: module.id,
	selector: 'ng-control',
	templateUrl: 'pages/control-page.html',
	styleUrls: ['../css/control-page.css'],
})

export class ControlComponent{
	msgs: Message[] = [];

	Success(){
		this.renderer.setElementAttribute(this.el.nativeElement.querySelector("#isDisabled"), 'disabled', 'disabled');
		this.msgs = [];
		let today = new Date().toLocaleString();
		let timer = new Timer(today);
		this.msgs.push({severity:'success', summary:'Info Message', detail:'PrimeNG rocks'});
	}

	clear() {
		this.msgs = [];
	}

	@ViewChild('monthtimes') month: ElementRef;
	@ViewChild('filesystems') file: ElementRef;
	@ViewChild('messages') message: ElementRef;

	constructor(
		private _CookieServices: CookieService,
		private el: ElementRef,
		private renderer: Renderer,
	){}

	id = [];

	ngOnInit(){
		let data = this.getCookie();
		let user = JSON.parse(data['u']);
		this.id = user.id;
		this.renderer.setElementStyle(this.month.nativeElement, 'display', 'block');
	}

	getCookie(){
		let data = this._CookieServices.getAll();
		return data;
	}

	MonthTimes(){
		this.renderer.setElementStyle(this.month.nativeElement, 'display', 'block');
		this.renderer.setElementStyle(this.file.nativeElement, 'display', 'none');
		this.renderer.setElementStyle(this.message.nativeElement, 'display', 'none');
	}

	FileSystems(){
		this.renderer.setElementStyle(this.file.nativeElement, 'display', 'block');
		this.renderer.setElementStyle(this.month.nativeElement, 'display', 'none');
		this.renderer.setElementStyle(this.message.nativeElement, 'display', 'none');
	}

	Messages(){
		this.renderer.setElementStyle(this.message.nativeElement, 'display', 'block');
		this.renderer.setElementStyle(this.file.nativeElement, 'display', 'none');
		this.renderer.setElementStyle(this.month.nativeElement, 'display', 'none');
	}
}