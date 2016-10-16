import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Register } from './register'; 
import { Observable } from 'rxjs/Observable';

@Injectable()

export class RegisterService {
	private backendUrl = 'http://localhost/signing-system/Backend/register';

	constructor(private http:Http) {}

	addRegister(data): Observable<Register>{
		let body = JSON.parse(JSON.stringify(data));
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(
			this.backendUrl,
			body,
			options
		).map(this.extracData).catch(this.handleError);
	}

	private extracData(res: Response) {
		let body = res.json();
		return body || { };
	}

	private handleError(error: any){
		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
