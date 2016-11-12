//Core
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
//Class
import { User } from './user';
//Providers
import { RegisterService } from './register.service';
import { CookieService } from 'angular2-cookie/core';

@Component({
	moduleId: module.id,
	selector: 'ng-login',
	templateUrl: 	'register-login-form.html',
	styleUrls:['../forms.css'],
	providers: [ RegisterService ]
})

export class Registerloginfrom {
	title = '登录';

	active = true;
	data = new User('', '');

	loginForm: FormGroup;

	constructor(
		private http: Http,
		private router: Router,
		private fb: FormBuilder,
		private rgservice: RegisterService, 
		private _cookieService:CookieService
	) { } 

	navTologup(): void{
		this.router.navigate(['logup']);
	}

	ngOnInit(): void{
		this.buildForm();
	}

	formErrors = {
		'name': '',
		'passwd': ''
	}

	validationMessages = {
		'name': {
			'required': 'Name is required.',
			'minlength': 'Name must be at least 4 characters long',
		},
		'passwd': {
			'required': 'Passwd is required.',
			'minlength': 'Passwd must be at least 6 characters long',
			'maxlength': 'Passwd can not be more than 24 characters long'
		}
	}

	buildForm(): void{
		this.loginForm = this.fb.group({
			'name':[this.data.name, [
					Validators.required,
					Validators.minLength(4)
				]
			],
			'passwd':[this.data.passwd,[
					Validators.required,
					Validators.minLength(6),
					Validators.maxLength(24)
				]
			]
		});
		this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));

		this.onValueChanged();
	}

	onValueChanged(data?: any){
		if(!this.loginForm){
			return ;
		}
		const form = this.loginForm;
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
		this.data = this.loginForm.value;
		this.rgservice.checkRegister(this.data).subscribe(
			res => this.checkResponse(res),
			err => this.errorMsgs.push(err)
		);
	}

	checkResponse(res){
		if(res.error){
			this.errors = true;	
			this.errs = res.error;
		}else if(res.id){			
			let params = {"id": res.id, "name":this.data.name, "passwd":this.data.passwd};
			this.setCookie("u", params);
			this.router.navigate(['/member']);
		}else{
			this.errorMsgs.push("Unknown error.");
		}
	}

	setCookie(key:string, value: Object){
		this._cookieService.putObject(key, value);
	}

}
