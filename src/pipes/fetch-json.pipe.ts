import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Pipe({
	name: 'fetch',
	pure: false
})
export class FetchJsonPipe implements PipeTransform {
	private cachedData: any = null;
	private cachedUrl = '';

	constructor(private http: Http) {}

	transform(url: string): any {
		if(url !== this.cachedUrl) {
			//if the url is the same just return the cachedData
			this.cachedData = null;
			this.cachedUrl = url;
			this.http.get(url)
				.map(res => res.json())
				.subscribe(res => this.cachedData = res);
		}
		return this.cachedData;
	}
}