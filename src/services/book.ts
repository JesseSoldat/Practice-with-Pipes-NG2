import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Book } from '../models/book';

@Injectable()
export class BookService {
	constructor(private http: Http){}

	getBooks(): Observable<Book[]> {
		return this.http.get('assets/books.json')
			.map(res => res.json().data);
	}
	
}