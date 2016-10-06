import { Component } from '@angular/core';

import { Register } from './register';

@Component({
	moduleId: module.id,
	selector: 'register-form',
	templateUrl: 'register-login-form.html'
})

export class Registerloginfrom {
	directs = ['PHP','Java','HTML','Hardware'];

	model = new Register(1,'Masterchief',this.directs[0],'Chuck Overstreet');

	submitted = false;

	onSubmit(){ this.submitted = true; }

	get diagnostic() { return JSON.stringify(this.model); }
}