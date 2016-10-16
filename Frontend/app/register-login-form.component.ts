import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { Register } from './register';
import { RegisterService } from './register.service';

import './rxjs-operators';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


@Component({
	moduleId: module.id,
	selector: 'register-form',
	templateUrl: 'register-login-form.html',
	providers: [ RegisterService ]
})

export class Registerloginfrom  {
	errorMessage: string;
	register: Register;
	data = new Register('','','','');

	heroForm: FormGroup;
	constructor(
		private http: Http,
		private fb: FormBuilder,
		private rgservice: RegisterService, 
	) { }

	ngOnInit(): void{
		this.buildForm();
	}

	buildForm(): void{
		this.heroForm = this.fb.group({
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
		this.heroForm.valueChanges.subscribe(data => this.onValueChanged(data));

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
		if(!this.heroForm){
			return ;
		}
		const form = this.heroForm;
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

	directs = ['PHP','Java','HTML','Hardware'];
	submitted = false;
	active = true;

	onSubmit(){ 
		this.data = this.heroForm.value;
		this.rgservice.addRegister(this.data).subscribe(
			function(response:any) { 
				if(response.error){
					alert(response.error);
				}else{
					this.submitted = true;
				}
			},
			function(error) { console.log("Error happened" + error)},
			function() { console.log("the subscription is completed")}
		);
	}
}