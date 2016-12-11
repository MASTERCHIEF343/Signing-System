import { Component, OnInit, Renderer, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
//Providers
import { CookieService } from 'angular2-cookie/core';
import { ViewContainerRef } from '@angular/core';
import { Message } from 'primeng/primeng';
import { SignatureService } from './services/signature.service';
//Class
import { Timer } from './class/date-time';

@Component({
	moduleId: module.id,
	selector: 'ng-control',
	templateUrl: 'pages/control-page.html',
	styleUrls: ['../css/control-page.css'],
	providers: [ SignatureService ]
})

export class ControlComponent{

	constructor(
		private _CookieServices: CookieService,
		private el: ElementRef,
		private renderer: Renderer,
		private http: Http,
		private _signatureService: SignatureService
	){}

	msgs: Message[] = [];

	Success(){
		// this.renderer.setElementAttribute(this.el.nativeElement.querySelector("#isDisabled"), 'disabled', 'disabled');
		this.msgs = [];
		let today = new Date().toLocaleString();
		let timer = new Timer(this.id, today);
		console.log(this.id);
		this._signatureService.timerSign(timer).subscribe();
		this.msgs.push({severity:'success', summary:'Info Message', detail:'PrimeNG rocks'});
	}

	clear() {
		this.msgs = [];
	}

	@ViewChild('monthtimes') month: ElementRef;
	@ViewChild('filesystems') file: ElementRef;
	@ViewChild('messages') message: ElementRef;

	id:number;

	ngOnInit(){
		let data = this.getCookie();
		let user = JSON.parse(data['u']);
		this.id = Number(user.id);
		this.renderer.setElementStyle(this.month.nativeElement, 'display', 'block');
		// this._signatureService.checkSign().subscribe()
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