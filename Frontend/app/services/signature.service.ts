//Core
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
//Class
import { Timer } from '../class/date-time';
//RxJS
import '../rxjs-operators';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class SignatureService{
	//Urls
	private dateTimer = 'http://localhost/signing-system/Backend/signature';
	private checkurl = 'http://localhost/signing-system/Backend/checksign';

	//constructor
	constructor(
		private http: Http,
	){}
	
	//check signature
	checkSign(data):Observable<Timer>{
		let body = JSON.stringify({data});
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.checkurl, body, options).map(this.extractData).catch(this.handleError);
	}

	//input signature
	timerSign(data): Observable<Timer>{
		let body = JSON.stringify({data});
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.dateTimer, body, options).map(res => ' ').catch(this.handleError);
	}

	//transform to json
	private extractData(res: Response){
		let data = res.json() || { };
		return data;
	}

	//Errors absolutes
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