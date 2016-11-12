//Core
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
//Class
import { Register } from './register';
//Providers
import { RegisterService } from './register.service';
import { CookieService } from 'angular2-cookie/core';

@Component({
	moduleId: module.id,
	selector: 'ng-logup',
	templateUrl: 'register-logup-form.html',
	styleUrls:['../forms.css'],
	providers: [ RegisterService ]
})

export class Registerlogupfrom  {
	title = '注册';
	
	register: Register;
	data = new Register('','','','');

	active = true;

	logupForm: FormGroup;
	constructor(
		private http: Http,
		private router: Router,
		private fb: FormBuilder,
		private rgservice: RegisterService, 
		private _cookieService:CookieService
	) { }

	ngOnInit(): void{
		this.buildForm();
	}

	buildForm(): void{
		this.logupForm = this.fb.group({
			'name':[this.data.name,[
				Validators.required,
				Validators.minLength(4)
			]],
			'email':[this.data.email,[
				Validators.required
			]],
			'passwd':[this.data.passwd,[
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(24)
			]],
			'direct':[this.data.direct,[
				Validators.required
			]]
		});
		this.logupForm.valueChanges.subscribe(data => this.onValueChanged(data));

		this.onValueChanged();
	}

	formErrors = {
		'name': '',
		'email': '',
		'passwd': '',
		'direct': ''
	}

	validationMessages = {
		'name': {
			'required': 'Name is required.',
			'minlength': 'Name must be at least 4 characters long',
		},
		'email': {
			'required': 'Email is required.',
		},
		'passwd': {
			'required': 'Passwd is required.',
			'minlength': 'Passwd must be at least 6 characters long',
			'maxlength': 'Passwd can not be more than 24 characters long'
		},
		'direct': {
			'required': 'Direct is required.'
		}
	}


	onValueChanged(data?: any){
		if(!this.logupForm){
			return ;
		}
		const form = this.logupForm;
		for( const field in this.formErrors){
			this.formErrors[field] = '';
			const control = form.get(field);
			if(control && control.dirty && !control.valid){
				const messages = this.validationMessages[field];
				for(const key in control.errors){
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	}

	errors = false;
  	private result:Array<number> = [];
  	private errs: Array<string> =  [];
  	private errorMsgs:Array<string> =  [];

	onSubmit(){ 
		this.data = this.logupForm.value;
		this.rgservice.addRegister(this.data).subscribe(
			res => this.checkResponse(res),
			err => this.errorMsgs.push(err)
		);
	}

	checkResponse(res){
		if(res.error){
			this.errors = true;	
			this.errs = res.error;
		}else if(res.id){	
			// this.setCookie("user", {"id": res.id.id, "name":this.data.name, "passwd":this.data.passwd});
			this.router.navigate(['/member']);
		}else{
			this.errorMsgs.push("Unknown error.");
		}
	}

	setCookie(key: string, value: Object){
		this._cookieService.putObject(key, value);
	}

}