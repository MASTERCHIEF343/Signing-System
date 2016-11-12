//Core
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
//Class
import { Register } from './register'; 
import { User } from './user';
//RxJS
import './rxjs-operators';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class RegisterService {
	private logupUrl = 'http://localhost/signing-system/Backend/logup';
	private loginUrl = 'http://localhost/signing-system/Backend/login';

	constructor(private http:Http) {}

	addRegister(data): Observable<Register>{
		let body = JSON.stringify({data});
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.logupUrl, body, options).map(res => res.json()).catch(this.handleError);
	}

	checkRegister(data): Observable<User>{
		let body = JSON.stringify({data});
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.loginUrl, body, options).map(res => res.json()).catch(this.handleError);
	}

	private handleError (error: Response | any) {
	// In a real world app, we might use a remote logging infrastructure
	let errMsg: string;
	if (error instanceof Response) {
		const body = error.json() || '';
		const err = body.error || JSON.stringify(body);
		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	} else {
		errMsg = error.message ? error.message : error.toString();
	}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}

