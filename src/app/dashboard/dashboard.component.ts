import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book';
import { Book } from '../../models/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	books: Book[];
	filter: Book = new Book();
	limit: number;
	numberOfBooks: number;
	page: number = 1;
	// input: string = 'test';

  constructor(private bookService: BookService) { }

  ngOnInit() {
  	this.bookService.getBooks().subscribe((books: Book[]) => {
  		// console.log(books);
  		this.books = books;
  		this.numberOfBooks = this.books.length;
  		this.limit = this.books.length;
  	})
  }

}
