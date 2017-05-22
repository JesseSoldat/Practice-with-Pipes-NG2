import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
	name: 'bookfilter',
	pure: false
})

export class BookFilterPipe implements PipeTransform {
	transform(items: Book[], filter: Book): Book[] {
		if(!items || !filter) {
			return items;
		}

		return items.filter((item: Book) => this.applyFilter(item, filter));
	}

	applyFilter(book: Book, filter: Book): boolean {
		for(let field in filter) {
			if(filter[field]) {
				if(typeof filter[field] === 'string') {
					//console.log(book[field]); //A Game of Thrones  
					//console.log(filter[field]);//A Game
					if(book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
						//look inside of book[field] each time a character is typed and if all characters 
						//match return 1 (true) (book is returned)
						//if a character is not found in book[field] return -1 (book is not returned)
						return false;
					}
				} else if(typeof filter[field] === 'number') {
					//numbers have to be exact
					if(book[field] != filter[field]) {
						return false;
					}
				}
			}
		}//for loop
		return true;
	}
}