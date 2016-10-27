import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Register } from './register'; 
import { User } from './user';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class RegisterService {
	private logupUrl = 'http://localhost/signing-system/Backend/logup';
	private loginUrl = 'http://localhost/signing-system/Backend/login';
	private result = [];

	constructor(private http:Http) {}

	addRegister(data): Observable<Register>{
		let body = JSON.stringify({data});
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.logupUrl, body, options).map(this.extractData).catch(this.handleError);
	}

	checkRegister(data): Observable<User>{
		let body = JSON.stringify({data});
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.loginUrl, body, options).map(this.extractData).catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body || { };
	}

	private handleError(error: any){
		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}

