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

  constructor(private bookService: BookService) { }

  ngOnInit() {
  	this.bookService.getBooks().subscribe((books: Book[]) => {
  		console.log(books);
  		this.books = books;
  	})
  }

}
