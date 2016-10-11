import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { Register } from './register';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


@Component({
	moduleId: module.id,
	selector: 'register-form',
	templateUrl: 'register-login-form.html',
})

export class Registerloginfrom  {
	
	data = new Register(1,'','','','');

	heroForm: FormGroup;
	constructor(private fb: FormBuilder) { }

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
			]]
		});
		this.heroForm.valueChanges.subscribe(data => this.onValueChanged(data));

		this.onValueChanged();
	}

	formErrors = {
		'name': '',
		'email': '',
		'passwd': ''
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

	registerUrl;
	directs = ['PHP','Java','HTML','Hardware'];
	submitted = false;
	active = true;


	onSubmit(){ 
		this.data = this.heroForm.value;
		this.submitted = true;
	}
	get diagnostic() { 
		return JSON.stringify(this.data); 
	}
}