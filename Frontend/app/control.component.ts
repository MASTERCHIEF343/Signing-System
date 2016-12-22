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

	data: any;

	constructor(
		private _CookieServices: CookieService,
		private el: ElementRef,
		private renderer: Renderer,
		private http: Http,
		private _signatureService: SignatureService
	){
		this.data = {
			labels: ['Early', 'Middle', 'End'],
			datasets: [
			{
				label: 'First Dataset',
				data: [65, 59, 80],
				fill: false,
				borderColor: '#4bc0c0'
			},
			{
				label: 'Second Dataset',
				data: [28, 48, 40],
				fill: false,
				borderColor: '#565656'
			}    
		};
	}

	//ngOnInit
	id:number;

	ngOnInit(){
		let data = this.getCookie();
		let user = JSON.parse(data['u']);
		this.id = Number(user.id);
		this.renderer.setElementStyle(this.month.nativeElement, 'display', 'block');
		//check signstatus
		let userid = this.id;
		let today = new Date().toLocaleString();
		let timer = new Timer(this.id, today);
		this._signatureService.checkSign(timer).subscribe(res =>this.onInitSignButton(res) );
	}

	onInitSignButton(res){
		if(res.signstatus == 1){
			this.renderer.setElementAttribute(this.el.nativeElement.querySelector("#isDisabled"), 'disabled', 'disabled');
		}
	}

	msgs: Message[] = [];

	Success(){
		this.renderer.setElementAttribute(this.el.nativeElement.querySelector("#isDisabled"), 'disabled', 'disabled');
		this.msgs = [];
		let today = new Date().toLocaleString();
		let timer = new Timer(this.id, today);
		this._signatureService.timerSign(timer).subscribe();
		this.msgs.push({severity:'success', summary:'Info Message', detail:'PrimeNG rocks'});
	}

	clear() {
		this.msgs = [];
	}

	@ViewChild('monthtimes') month: ElementRef;
	@ViewChild('filesystems') file: ElementRef;
	@ViewChild('messages') message: ElementRef;

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