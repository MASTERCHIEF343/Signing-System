import { Component, ViewChild  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import './rxjs-operators';

import { User } from './user';
import { RegisterService } from './register.service';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'register-login-form',
	templateUrl: 	'register-login-form.html',
	providers: [ RegisterService ]
})

export class Registerloginfrom {
	active = true;
	data = new User('', '');

	loginForm: FormGroup;

	constructor(
		private http: Http,
		private router: Router,
		private fb: FormBuilder,
		private rgservice: RegisterService, 
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

	onSubmit(){
		this.data = this.loginForm.value;
		this.rgservice.checkRegister(this.data).subscribe(
			function(res){
				console.log(res);
			}
		);
	}
}