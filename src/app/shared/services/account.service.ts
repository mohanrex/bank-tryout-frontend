import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { ToasterService } from 'angular2-toaster';

@Injectable()
export class AccountService {
	private host = "http://localhost:5000/";
	private version = "v1/";
	private serviceRoot = "account/";
	private headers = new Headers();

	constructor (
		private http: Http,
		private toasterService: ToasterService
	) {
		this.headers.append('Content-Type','application/json');
	}

	private constructUrl(subroot: string) {
		return this.host + this.version + this.serviceRoot + subroot; 
	}

	getAccountsCount() {
		return this.http.get(this.constructUrl('total/'))
			.map((res:Response) => res.json())
			.catch((err) => {
                this.toasterService.pop('error', err._body);
                return Observable.throw(err);
			});
	}

	getTotalBalance() {
		return this.http.get(this.constructUrl('total-balance/'))
			.map((res:Response) => res.json())
			.catch((err) => {
                this.toasterService.pop('error', err._body);
                return Observable.throw(err);
			});
	}

	getLowestAccount() {
		return this.http.get(this.constructUrl('lowest/'))
			.map((res:Response) => res.json());
	}

	getHighestAccount() {
		return this.http.get(this.constructUrl('highest/'))
			.map((res:Response) => res.json());
	}

	getAccounts() {
		return this.http.get(this.constructUrl(''))
			.map((res:Response) => res.json())
			.catch((err) => {
                this.toasterService.pop('error', err._body);
                return Observable.throw(err);
			});
	}

	createAccount(data) {
		return this.http.post(this.constructUrl(''), data, {headers: this.headers})
			.map((res:Response) => res.json())
			.catch((err) => {
                this.toasterService.pop('error', err._body);
                return Observable.throw(err);
			});
	}

	taxation(data) {
		return this.http.post(this.constructUrl('taxation/'), data, {headers: this.headers})
			.map((res:Response) => res.json())
			.catch((err) => {
                this.toasterService.pop('error', err._body);
                return Observable.throw(err);
			});
	}

	withDraw(data) {
		return this.http.post(this.constructUrl('withdraw/'), data, {headers: this.headers})
			.map((res:Response) => res.json())
			.catch((err) => {
                this.toasterService.pop('error', err._body);
                return Observable.throw(err);
			});
	}

	searchAccount(data) {
		return this.http.post(this.constructUrl('filter/'), data, {headers: this.headers})
			.map((res:Response) => res.json())
			.catch((err) => {
				this.toasterService.pop('error', err._body);
				return Observable.throw(err);
			});
	}
}