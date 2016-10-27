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
	selector: 'register-form-logup',
	templateUrl: 'register-logup-form.html',
	providers: [ RegisterService ]
})

export class Registerlogupfrom  {
	register: Register;
	data = new Register('','','','');

	active = true;

	logupForm: FormGroup;
	constructor(
		private http: Http,
		private fb: FormBuilder,
		private rgservice: RegisterService, 
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

	onSubmit(){ 
		this.data = this.logupForm.value;
		this.rgservice.addRegister(this.data).subscribe(
			function(res){
				console.log(res)
			}
		);
	}

}