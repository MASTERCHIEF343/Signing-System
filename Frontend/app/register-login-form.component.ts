import { Component } from '@angular/core';

import { Register } from './register';

@Component({
	moduleId: module.id,
	selector: 'register-form',
	templateUrl: 'register-login-form.html'
})

export class Registerloginfrom {
	directs = ['PHP','Java','HTML','Hardware'];

	model = new  Register(1,'Masterchief','qwe',this.directs[0]);

	submitted = false;

	onSubmit(){ this.submitted = true; }

	//show results
	get diagnostic() { return JSON.stringify(this.model); }

	active = true;

	//add new
	newRegister () {
		this.model = new Register(2,'','','');
		this.active = false;
		setTimeout( () => this.active = true,0 );
	}
}